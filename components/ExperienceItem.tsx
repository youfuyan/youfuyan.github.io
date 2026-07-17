type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export function ExperienceItem({
  company,
  role,
  period,
  summary,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-2 border-t border-line py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted">{period}</p>
      <div>
        <h3 className="text-lg font-semibold tracking-normal text-ink">
          {company} - {role}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>
      </div>
    </article>
  );
}
