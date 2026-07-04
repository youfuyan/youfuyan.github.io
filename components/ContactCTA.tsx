import Link from "next/link";

import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
            I’m interested in software engineering roles where AI systems, backend
            reliability, and product execution overlap.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            Email Youfu
          </Link>
          <Link
            href={profile.links.linkedin}
            className="rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </Link>
          <Link
            href={profile.links.github}
            className="rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
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
