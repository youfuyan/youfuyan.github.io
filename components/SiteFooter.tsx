import Link from "next/link";

import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const footerLinks = [
  { label: "Work", href: routes.work },
  { label: "Research", href: routes.researchKnownet },
  { label: "Resume", href: routes.resume },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-line bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-dark-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built as a static site for
          GitHub Pages.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="pressable font-mono text-xs font-medium uppercase tracking-[0.08em] text-white hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
