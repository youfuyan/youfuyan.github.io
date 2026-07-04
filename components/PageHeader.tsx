import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Container as="section" className="py-14 sm:py-20">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
      </div>
    </Container>
  );
}
