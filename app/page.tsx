import type { Metadata } from 'next';
import { Background } from '@/components/Background';
import { Reveal } from '@/components/Reveal';
import { Tilt } from '@/components/Tilt';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Cover } from '@/components/sections/Cover';
import { Marquee } from '@/components/sections/Marquee';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { Community } from '@/components/sections/Community';
import { About } from '@/components/sections/About';
import { Toolkit } from '@/components/sections/Toolkit';
import { Contact } from '@/components/sections/Contact';

// Title and description come from the layout — this is the page they describe.
// Resolved against metadataBase, so it tracks NEXT_PUBLIC_SITE_URL.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* Fixed, behind everything. The skip link lives in Navbar. */}
      <Background />
      <Navbar />
      {/* tabIndex: the skip link has to be able to land focus here, otherwise
          it only scrolls and the next Tab returns to the nav. */}
      <main id="main" tabIndex={-1} className="relative z-1 focus:outline-none">
        <Cover />
        <Marquee />
        <Experience />
        <Work />
        <Community />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
      <Reveal />
      <Tilt />
    </>
  );
}
