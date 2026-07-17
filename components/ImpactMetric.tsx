type ImpactMetricProps = {
  value: string;
  label: string;
  qualifier?: string;
};

export function ImpactMetric({ value, label, qualifier }: ImpactMetricProps) {
  return (
    <article className="min-h-[8.5rem] border-b border-r border-dark-line px-4 py-4 sm:min-h-40 sm:px-6 sm:py-5">
      <p className="hidden font-mono text-xs uppercase tracking-[0.1em] text-blue-200 sm:block">
        Production evidence
      </p>
      <p className="text-xl font-semibold text-white sm:mt-5 sm:text-2xl">{value}</p>
      <p className="mt-2 text-sm leading-6 text-dark-muted">{label}</p>
      {qualifier ? (
        <p className="mt-2 w-fit rounded-sm bg-success-soft px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-success sm:mt-3 sm:px-2.5 sm:text-[11px]">
          {qualifier}
        </p>
      ) : null}
    </article>
  );
}
