import { education } from '@/data';
import { Section } from '@/components/ui';
import styles from './Education.module.css';

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Degrees">
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.degree} className={styles.card}>
            <p className={styles.period}>{item.period}</p>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.school}>{item.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
