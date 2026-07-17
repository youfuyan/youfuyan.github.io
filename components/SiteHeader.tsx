import Link from "next/link";

import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const navItems = [
  { label: "Work", href: routes.work },
  { label: "Research", href: routes.researchKnownet },
  { label: "About", href: routes.about },
  { label: "Resume", href: routes.resume },
  { label: "Contact", href: routes.contact },
];

const externalItems = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

const linkStyles =
  "nav-link pressable block rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] text-dark-muted hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-dark-line bg-ink/95 text-white backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href={routes.home}
          className="pressable shrink-0 rounded-sm text-base font-semibold text-white outline-none hover:text-blue-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          {profile.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center justify-end gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkStyles}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {externalItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkStyles} font-semibold text-white`}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="group relative md:hidden">
          <summary className="pressable cursor-pointer list-none rounded-sm border border-dark-line bg-ink px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            Menu
          </summary>
          <div className="mobile-menu-panel absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-sm border border-dark-line bg-ink p-2 shadow-lift">
            <nav aria-label="Mobile navigation">
              <ul className="text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkStyles}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-2 border-t border-line pt-2 text-sm">
                {externalItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${linkStyles} font-semibold text-white`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`mailto:${profile.email}`}
                    className={`${linkStyles} font-semibold text-white`}
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
