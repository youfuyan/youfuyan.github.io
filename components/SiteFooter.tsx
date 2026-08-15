import Link from "next/link";

import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const footerLinks = [
  { label: "Work", href: routes.work },
  { label: "Research", href: routes.research },
  { label: "Resume", href: routes.resume },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-dark-line bg-ink text-bone">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-5 px-5 py-7 text-sm text-dark-muted sm:px-7 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} {profile.name} · New York, NY</p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="pressable text-[11px] font-semibold uppercase tracking-[0.12em] text-bone hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
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
      <div className="footer-wordmark" aria-hidden="true">YOUFU YAN</div>
    </footer>
  );
}
