import { experiences } from '@/data';
import { useLanguage } from '@/i18n';
import { Section, TagList } from '@/components/ui';
import styles from './Experience.module.css';

export function Experience() {
  const { t, tr, formatMonth } = useLanguage();

  return (
    <Section id="experience" index="02" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <ol className={styles.timeline}>
        {experiences.map((job) => {
          const role = tr(job.role);
          return (
            <li key={`${job.role.en}-${job.start}`} className={styles.item}>
              <article className={styles.card}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{role}</h3>
                    <p className={styles.company}>
                      {job.company && <span>{job.company}</span>}
                      <span className={styles.type}>{tr(job.type)}</span>
                    </p>
                  </div>
                  <p className={styles.period}>
                    <time dateTime={job.start}>{formatMonth(job.start)}</time>
                    {' - '}
                    {job.end ? (
                      <time dateTime={job.end}>{formatMonth(job.end)}</time>
                    ) : (
                      t.experience.present
                    )}
                  </p>
                </header>

                <ul className={styles.bullets}>
                  {tr(job.bullets).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <TagList items={job.stack} label={t.experience.stackLabel(role)} />
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
