import { useMemo, useState } from 'react';
import { projectCategories, projects } from '@/data';
import { useLanguage } from '@/i18n';
import { Section, TagList } from '@/components/ui';
import type { ProjectCategory } from '@/types';
import { cn } from '@/utils/cn';
import styles from './Projects.module.css';

type Filter = 'all' | ProjectCategory;

const filters: Filter[] = ['all', ...projectCategories];

export function Projects() {
  const { t, tr, text } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  const filterLabel = (f: Filter) => (f === 'all' ? t.projects.all : t.projects.categories[f]);

  return (
    <Section
      id="projects"
      index="04"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      intro={t.projects.intro}
    >
      <div className={styles.filters} role="group" aria-label={t.projects.filterLabel}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={cn(styles.filter, filter === f && styles.filterActive)}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {filterLabel(f)}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {t.projects.shown(visible.length)}
      </p>

      <ul className={styles.grid}>
        {visible.map((project) => {
          const title = tr(project.title);
          return (
            <li key={project.title.en}>
              <article className={styles.card}>
                <p className={styles.meta}>
                  <span>{text(project.context)}</span>
                  {project.period && <span>{text(project.period)}</span>}
                </p>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{tr(project.description)}</p>
                <TagList items={project.stack} label={t.projects.stackLabel(title)} />
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
