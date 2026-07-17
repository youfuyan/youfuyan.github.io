type TagListProps = {
  tags: readonly string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Technologies and topics">
      {tags.map((tag) => (
        <li
          key={tag}
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
