import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Space_Mono, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { SITE_URL } from "@/lib/site-config";

// These load the @font-face rules; globals.css declares the stacks itself
// (see the --ff-* comment there — the --font-* vars pull in a fallback face
// that mis-renders the design's arrow and asterisk glyphs).
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const TITLE = "Saurav Kumar — Applied AI + Full-Stack Engineer";
// ≤160 chars so it doesn't truncate in SERPs. Carries the stacks recruiters
// actually X-ray for (React/Next, Python/FastAPI, GCP) alongside the proof numbers.
const DESCRIPTION =
  "Applied AI + full-stack engineer — Python/FastAPI, React/Next.js, GCP. Production LLM systems across 117 schools, measured at 7-in-10 agreement with teachers.";
const OG_DESCRIPTION =
  "Applied AI + full-stack engineer, 3+ years in production. An LLM analyser gated at 7-in-10 agreement with teachers, EdTech across 117 schools.";

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Saurav Kumar",
  },
  description: DESCRIPTION,
  // Icons and OG/Twitter images come from the app/ file conventions
  // (icon.tsx, apple-icon.tsx, opengraph-image.tsx) — generated from design
  // tokens at build, so the mark can't drift from the site.
  manifest: "/site.webmanifest",
  // No `keywords`: no major engine has read meta keywords in over a decade,
  // and a list of them is the keyword stuffing signal, not a ranking one.
  authors: [{ name: "Saurav Kumar", url: "https://github.com/saurav02022" }],
  creator: "Saurav Kumar",
  publisher: "Saurav Kumar",
  applicationName: "Saurav Kumar Portfolio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "Saurav Kumar — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    creator: "@sk729584",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Portfolio Website",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  // No `alternates.canonical` here — every route inherits from this layout, so
  // a canonical set here points /404 and anything added later at the homepage.
  // Each page declares its own.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${syne.variable} ${instrument.variable} ${spaceMono.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
