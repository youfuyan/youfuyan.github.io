import Link from "next/link";

import { Container } from "@/components/Container";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <Container as="section" className="py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-normal text-ink">
          This page is not available.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted">
          The portfolio has been rebuilt around selected work, research, about, and
          resume pages.
        </p>
        <Link
          href={routes.home}
          className="pressable mt-8 inline-flex rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          Go home
        </Link>
      </div>
    </Container>
  );
}
