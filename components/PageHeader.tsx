type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  index?: string;
  signal?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  index = "FIELD NOTES",
  signal = "AI / AGENTS / AWS / SYSTEMS",
}: PageHeaderProps) {
  return (
    <section className="page-hero">
      <div className="page-shell">
        <div className="page-hero-rail" aria-hidden="true">
          <span>{index}</span>
          <span>{signal}</span>
        </div>
        <div className="page-hero-grid">
          <div>
            {eyebrow ? <p className="page-kicker">{eyebrow}</p> : null}
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
