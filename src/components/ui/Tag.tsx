import styles from './Tag.module.css';

interface TagListProps {
  items: string[];
  label?: string;
}

/** A list of small technology tags. */
export function TagList({ items, label = 'Technologies' }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}
