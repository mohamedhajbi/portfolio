import { useMemo, useState } from 'react';
import { projectCategories, projects } from '@/data';
import { Section, TagList } from '@/components/ui';
import type { ProjectCategory } from '@/types';
import { cn } from '@/utils/cn';
import styles from './Projects.module.css';

type Filter = 'All' | ProjectCategory;

const filters: Filter[] = ['All', ...projectCategories];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Work"
      title="Selected projects"
      intro="A selection of professional and personal projects across backend, full-stack and DevOps work."
    >
      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={cn(styles.filter, filter === f && styles.filterActive)}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {visible.length} projects shown
      </p>

      <ul className={styles.grid}>
        {visible.map((project) => (
          <li key={project.title}>
            <article className={styles.card}>
              <p className={styles.meta}>
                <span>{project.context}</span>
                <span>{project.period}</span>
              </p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <TagList items={project.stack} label={`${project.title} stack`} />
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
