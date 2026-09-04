/**
 * Structured Data (JSON-LD) — Person, WebSite and the six projects
 * (SoftwareSourceCode).
 *
 * No BreadcrumbList: Google requires breadcrumb markup to describe a visible
 * trail, and this is a single page with no breadcrumbs on it. Marking up the
 * section anchors as a hierarchy would be describing navigation that isn't there.
 */

import { SITE_URL } from "@/lib/site-config";
import { EMAIL, NAME, ROLE, SOCIALS, YEAR, cases } from "@/lib/portfolio-data";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    jobTitle: ROLE,
    description:
      "Applied AI + full-stack engineer with 3+ years in production — LLM systems measured against human judgement, EdTech across 117 schools, and a 10,000+ creator video platform.",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
    },
    sameAs: SOCIALS.map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "Shikha Learning Labs",
    },
    // Mentoring is the one role that isn't a job and isn't a repo, so nothing
    // else in this graph carries it. Agents read memberOf; humans read the page.
    memberOf: {
      "@type": "Organization",
      name: "Social Summer of Code 2026",
      description:
        "Open-source programme — mentor on two 2026 projects, EduFlow AI and VidyAI++.",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "IIIT Ranchi",
        description: "MCA (Master of Computer Applications), expected 2028",
      },
      {
        "@type": "EducationalOrganization",
        name: "Masai School",
        description: "Full Stack Web Development, 2022–2023",
      },
      {
        "@type": "EducationalOrganization",
        name: "Munger University",
        description: "B.Sc. Mathematics (Honours)",
      },
    ],
    knowsAbout: [
      "AI Engineering",
      "LLM Integration",
      "LLM Evaluation",
      "Prompt Engineering",
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "React Native",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Google Cloud Run",
      "Playwright",
      "Full-Stack Development",
      "Offline-First Applications",
      "Open Source Mentoring",
      "Code Review",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: ROLE,
      occupationLocation: {
        "@type": "City",
        name: "Mumbai, India",
      },
      skills:
        "Next.js, TypeScript, React Native, Python, FastAPI, PostgreSQL, Redis, Docker, GitHub Actions",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${NAME} — ${ROLE} portfolio`,
    alternateName: "Saurav Kumar Portfolio",
    url: SITE_URL,
    description:
      "Portfolio of Saurav Kumar — applied AI + full-stack engineer. Production LLM systems measured at 7-in-10 agreement with teachers, EdTech across 117 schools.",
    author: {
      "@type": "Person",
      name: NAME,
    },
    inLanguage: "en-IN",
    copyrightYear: Number(YEAR),
    copyrightHolder: {
      "@type": "Person",
      name: NAME,
    },
  };

  // Only the open-source builds get SoftwareSourceCode. The work products have no
  // public repository, and one of them is a team build — neither should carry a
  // node whose author is a single person.
  const projectSchemas = cases
    .filter((c) => c.repoUrl)
    .map((c) => ({
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: c.title,
      description: c.summary,
      codeRepository: c.repoUrl,
      programmingLanguage: c.languages,
      ...(c.liveUrl ? { url: c.liveUrl } : {}),
      author: {
        "@type": "Person",
        name: NAME,
        url: SITE_URL,
      },
    }));

  const schemas = [personSchema, websiteSchema, ...projectSchemas];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
