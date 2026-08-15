import Link from "next/link";

import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const navItems = [
  { label: "Work", href: routes.work },
  { label: "Research", href: routes.research },
  { label: "About", href: routes.about },
];

const externalItems = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

const linkStyles =
  "nav-link pressable block px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-dark-muted hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[58px] border-b border-dark-line bg-ink/90 text-white backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-full w-full max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-7 lg:px-10">
        <Link
          href={routes.home}
          className="pressable shrink-0 text-[15px] font-bold uppercase text-bone outline-none hover:text-amber focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          Youfu Yan<span className="text-amber">.</span>
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
            <li>
              <Link
                href={routes.resume}
                className="pressable ml-2 block rounded-full border border-bone/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-bone hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <details className="group relative md:hidden">
          <summary className="pressable cursor-pointer list-none border border-dark-line bg-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-bone hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
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
                <li>
                  <Link href={routes.resume} className={linkStyles}>
                    Resume
                  </Link>
                </li>
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
