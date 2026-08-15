import type { Metadata } from "next";
import Script from "next/script";

import { HeroParticleFlowLoader } from "@/components/HeroParticleFlowLoader";
import { ScrollRevealController } from "@/components/ScrollRevealController";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/content/profile";
import { site } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Youfu Yan",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: "Youfu Yan Portfolio",
    images: [
      {
        url: "/youfu-portrait-og.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Youfu Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/youfu-portrait-og.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Amazon",
  },
  url: site.url,
  email: `mailto:${profile.email}`,
  sameAs: [profile.links.github, profile.links.linkedin],
  alumniOf: profile.education.map((item) => ({
    "@type": "CollegeOrUniversity",
    name: item.school,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <HeroParticleFlowLoader />
        <ScrollRevealController />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
