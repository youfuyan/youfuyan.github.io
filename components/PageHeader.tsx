import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-dark-line bg-ink text-white">
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-dark-muted">{description}</p>
        </div>
      </Container>
    </section>
  );
}
