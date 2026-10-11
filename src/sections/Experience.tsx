import { experiences } from '@/data';
import { Section, TagList } from '@/components/ui';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Career" title="Professional experience">
      <ol className={styles.timeline}>
        {experiences.map((job) => (
          <li key={`${job.company}-${job.start}`} className={styles.item}>
            <article className={styles.card}>
              <header className={styles.header}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>
                    {job.company}
                    {job.type && <span className={styles.type}>{job.type}</span>}
                  </p>
                </div>
                <p className={styles.period}>
                  {job.start} — {job.end}
                </p>
              </header>

              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <TagList items={job.stack} label={`Stack used at ${job.company}`} />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
