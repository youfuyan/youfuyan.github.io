type TagListProps = {
  tags: readonly string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="site-tag-list" aria-label="Technologies and topics">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
