'use client';

import { useEffect, useRef } from 'react';
import { LAYER_FOCUS_EVENT } from '@/components/LayerTracer';

/**
 * The fixed scene behind the page: four stacked grid planes — frontend,
 * backend, database, deploy — joined by pillars, with the camera moving to a
 * different pose in each section as you scroll.
 *
 * three is imported dynamically after mount so it never lands in the initial
 * bundle, and the whole scene is skipped under prefers-reduced-motion, where
 * the gradient wash underneath is the entire background.
 */

/** One camera framing per section, interpolated between on scroll. */
const POSES = [
  { id: 'top', camZ: 8.6, camY: 2.9, rotX: 0.0, rotY: 0.0, sep: 1.0, speed: 1.0 },
  { id: 'experience', camZ: 10.4, camY: 3.5, rotX: 0.2, rotY: 0.55, sep: 1.55, speed: 1.35 },
  { id: 'work', camZ: 7.8, camY: 1.3, rotX: 0.04, rotY: 1.25, sep: 1.28, speed: 0.85 },
  { id: 'open-source', camZ: 12.2, camY: 2.4, rotX: 0.3, rotY: 2.05, sep: 2.05, speed: 1.1 },
  { id: 'about', camZ: 11.2, camY: 4.0, rotX: 0.4, rotY: 2.65, sep: 1.65, speed: 0.45 },
  { id: 'contact', camZ: 8.2, camY: 2.5, rotX: 0.08, rotY: 3.25, sep: 0.7, speed: 1.25 },
] as const;

type Pose = (typeof POSES)[number];
type PoseChannel = 'camZ' | 'camY' | 'rotX' | 'rotY' | 'sep' | 'speed';
const CHANNELS: PoseChannel[] = ['camZ', 'camY', 'rotX', 'rotY', 'sep', 'speed'];

/** Resting height of each plane, before the pose's `sep` spreads them apart. */
const LAYER_Y = [2.15, 0.72, -0.72, -2.15];
const ACCENT = '#4fd1a5';
/** Grid extent. */
const S = 5.6;

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    import('three')
      .then((THREE) => {
        // The effect can be torn down while the chunk is still in flight.
        if (disposed) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight, false);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          42,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );

        const col = new THREE.Color(ACCENT);
        const group = new THREE.Group();
        scene.add(group);

        // Every material the scene owns, so opacity can be restored after a
        // layer highlight and everything can be disposed on unmount.
        const disposables: { dispose(): void }[] = [];
        const layers: { group: InstanceType<typeof THREE.Group>; mats: THREE.Material[] }[] = [];

        LAYER_Y.forEach((y) => {
          const layer = new THREE.Group();
          layer.position.y = y;
          const mats: THREE.Material[] = [];

          const grid = new THREE.GridHelper(S, 7, col, col);
          const gridMat = grid.material as THREE.Material;
          gridMat.transparent = true;
          gridMat.opacity = 0.28;
          mats.push(gridMat);
          layer.add(grid);
          disposables.push(grid.geometry, gridMat);

          const surfGeo = new THREE.PlaneGeometry(S, S);
          const surfMat = new THREE.MeshBasicMaterial({
            color: col,
            transparent: true,
            opacity: 0.05,
            side: THREE.DoubleSide,
          });
          const surf = new THREE.Mesh(surfGeo, surfMat);
          surf.rotation.x = -Math.PI / 2;
          mats.push(surfMat);
          layer.add(surf);
          disposables.push(surfGeo, surfMat);

          const rimGeo = new THREE.EdgesGeometry(new THREE.PlaneGeometry(S, S));
          const rimMat = new THREE.LineBasicMaterial({
            color: col,
            transparent: true,
            opacity: 0.4,
          });
          const rim = new THREE.LineSegments(rimGeo, rimMat);
          rim.rotation.x = -Math.PI / 2;
          mats.push(rimMat);
          layer.add(rim);
          disposables.push(rimGeo, rimMat);

          group.add(layer);
          layers.push({ group: layer, mats });
        });

        // Verticals tying the stack together at its corners and centre.
        const pillarMat = new THREE.LineBasicMaterial({
          color: col,
          transparent: true,
          opacity: 0.16,
        });
        disposables.push(pillarMat);
        const pillars: InstanceType<typeof THREE.Line>[] = [];
        ([[-2.1, -2.1], [2.1, -2.1], [-2.1, 2.1], [2.1, 2.1], [0, 0]] as const).forEach(
          ([x, z]) => {
            const geo = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(x, LAYER_Y[0], z),
              new THREE.Vector3(x, LAYER_Y[LAYER_Y.length - 1], z),
            ]);
            const line = new THREE.Line(geo, pillarMat);
            group.add(line);
            pillars.push(line);
            disposables.push(geo);
          }
        );

        // A sparse lattice of nodes floating through the stack.
        const N = 4;
        const gap = 1.6;
        const off = ((N - 1) * gap) / 2;
        const pts: InstanceType<typeof THREE.Vector3>[] = [];
        for (let a = 0; a < N; a++) {
          for (let b = 0; b < N; b++) {
            pts.push(new THREE.Vector3(a * gap - off, 0, b * gap - off));
          }
        }
        const latGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const latMat = new THREE.PointsMaterial({
          color: col,
          size: 0.055,
          transparent: true,
          opacity: 0.5,
        });
        const lattice = new THREE.Points(latGeo, latMat);
        group.add(lattice);
        disposables.push(latGeo, latMat);

        /* ----- pose choreography ------------------------------------------ */

        let target: Pose = POSES[0];
        // Only the numeric channels ease — `id` is along for identification.
        const current: Record<PoseChannel, number> = {
          camZ: POSES[0].camZ,
          camY: POSES[0].camY,
          rotX: POSES[0].rotX,
          rotY: POSES[0].rotY,
          sep: POSES[0].sep,
          speed: POSES[0].speed,
        };

        const updatePose = () => {
          const mid = window.innerHeight * 0.5;
          let idx = 0;
          let local = 0;
          POSES.forEach((p, i) => {
            const el = document.getElementById(p.id);
            if (!el) return;
            const r = el.getBoundingClientRect();
            if (r.top <= mid) {
              idx = i;
              // How far this section has travelled past the midline.
              local = Math.min(1, Math.max(0, (mid - r.top) / Math.max(1, r.height)));
            }
          });
          const a = POSES[idx];
          const b = POSES[Math.min(idx + 1, POSES.length - 1)];
          const t = Math.max(0, Math.min(1, local));
          const e = t * t * (3 - 2 * t); // smoothstep
          target = {
            id: a.id,
            camZ: a.camZ + (b.camZ - a.camZ) * e,
            camY: a.camY + (b.camY - a.camY) * e,
            rotX: a.rotX + (b.rotX - a.rotX) * e,
            rotY: a.rotY + (b.rotY - a.rotY) * e,
            sep: a.sep + (b.sep - a.sep) * e,
            speed: a.speed + (b.speed - a.speed) * e,
          } as Pose;
        };

        /* ----- layer highlight from the cover's tracer --------------------- */

        let focused: number | null = null;
        const onFocus = (e: Event) => {
          focused = (e as CustomEvent<number | null>).detail;
        };
        window.addEventListener(LAYER_FOCUS_EVENT, onFocus);

        /* ----- loop -------------------------------------------------------- */

        const onResize = () => {
          renderer.setSize(window.innerWidth, window.innerHeight, false);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          updatePose();
        };
        window.addEventListener('resize', onResize, { passive: true });
        window.addEventListener('scroll', updatePose, { passive: true });
        updatePose();

        let raf = 0;
        let spin = 0;
        let last = performance.now();

        const tick = (now: number) => {
          const dt = Math.min(0.05, (now - last) / 1000);
          last = now;

          // Ease every pose channel toward its target so scrolling glides
          // rather than snapping between sections.
          CHANNELS.forEach((k) => {
            current[k] += (target[k] - current[k]) * Math.min(1, dt * 2.4);
          });

          spin += dt * 0.12 * current.speed;
          group.rotation.y = current.rotY + spin;
          group.rotation.x = current.rotX;

          layers.forEach((layer, i) => {
            layer.group.position.y = LAYER_Y[i] * current.sep;
            const lit = focused === null || focused === i;
            layer.mats.forEach((m) => {
              const base =
                m instanceof THREE.LineBasicMaterial
                  ? 0.4
                  : m instanceof THREE.MeshBasicMaterial
                    ? 0.05
                    : 0.28;
              const want = lit ? base : base * 0.15;
              m.opacity += (want - m.opacity) * Math.min(1, dt * 6);
            });
          });

          camera.position.set(0, current.camY, current.camZ);
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        cleanup = () => {
          cancelAnimationFrame(raf);
          window.removeEventListener('resize', onResize);
          window.removeEventListener('scroll', updatePose);
          window.removeEventListener(LAYER_FOCUS_EVENT, onFocus);
          disposables.forEach((d) => d.dispose());
          pillars.forEach((p) => p.geometry.dispose());
          renderer.dispose();
        };
      })
      .catch(() => {
        // No WebGL, or the chunk failed: the gradient wash stands in for it.
      });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_72%_28%,rgba(79,209,165,.09),transparent_60%)]" />
    </div>
  );
}
