type ImpactMetricProps = {
  value: string;
  label: string;
  qualifier?: string;
};

export function ImpactMetric({ value, label, qualifier }: ImpactMetricProps) {
  return (
    <article className="border-l-2 border-accent bg-white px-5 py-5 shadow-subtle">
      <p className="text-2xl font-semibold tracking-normal text-ink">{value}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
      {qualifier ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {qualifier}
        </p>
      ) : null}
    </article>
  );
}
