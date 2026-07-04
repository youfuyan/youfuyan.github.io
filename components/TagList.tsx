type TagListProps = {
  tags: readonly string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies and topics">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
