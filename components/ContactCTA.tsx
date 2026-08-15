import Link from "next/link";

import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="home-contact">
      <div className="home-shell home-contact-grid">
        <div className="max-w-3xl" data-reveal>
          <p className="home-kicker">05 / Contact</p>
          <h2>
            Build systems people can <span>trust.</span>
          </h2>
          <p>I’m interested in software engineering roles where AI systems, backend reliability, and product execution overlap.</p>
        </div>
        <div className="home-contact-actions" data-reveal>
          <Link
            href={`mailto:${profile.email}`}
            className="portal-primary pressable"
          >
            Email Youfu
          </Link>
          <Link
            href={profile.links.linkedin}
            className="portal-secondary pressable"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </Link>
          <Link
            href={profile.links.github}
            className="portal-secondary pressable"
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
