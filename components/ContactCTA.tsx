import Link from "next/link";

import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-ink bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-blue-200">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            I’m interested in software engineering roles where AI systems, backend
            reliability, and product execution overlap.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`mailto:${profile.email}`}
            className="pressable rounded-sm bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            Email Youfu
          </Link>
          <Link
            href={profile.links.linkedin}
            className="pressable rounded-sm border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </Link>
          <Link
            href={profile.links.github}
            className="pressable rounded-sm border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
