import { education } from '@/data';
import { useLanguage } from '@/i18n';
import { Section } from '@/components/ui';
import styles from './Education.module.css';

export function Education() {
  const { t, tr } = useLanguage();

  return (
    <Section id="education" index="05" eyebrow={t.education.eyebrow} title={t.education.title}>
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.degree.en} className={styles.card}>
            <p className={styles.period}>{item.period}</p>
            <h3 className={styles.degree}>{tr(item.degree)}</h3>
            <p className={styles.school}>{item.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
