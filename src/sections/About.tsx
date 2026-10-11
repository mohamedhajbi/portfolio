import { profile } from '@/data';
import { RichText, Section } from '@/components/ui';
import styles from './About.module.css';

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Building software that is fast, reliable and easy to maintain"
    >
      <div className={styles.grid}>
        <div className={styles.text}>
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <ul className={styles.highlights}>
          {profile.highlights.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
