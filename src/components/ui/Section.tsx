import type { ReactNode } from 'react';
import { useReveal } from '@/hooks';
import { cn } from '@/utils/cn';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

/** Page section with a numbered eyebrow, heading and fade-in on scroll. */
export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={headingId}
      className={cn(styles.section, isVisible && styles.visible)}
    >
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span>{index}</span> / {eyebrow}
          </p>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
