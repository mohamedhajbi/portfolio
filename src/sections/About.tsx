import { profile } from '@/data';
import { useLanguage } from '@/i18n';
import { RichText, Section } from '@/components/ui';
import styles from './About.module.css';

export function About() {
  const { t, tr } = useLanguage();

  return (
    <Section id="about" index="01" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className={styles.grid}>
        <div className={styles.text}>
          {tr(profile.summary).map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <ul className={styles.highlights}>
          {profile.highlights.map((item) => (
            <li key={item.title.en} className={styles.card}>
              <h3>{tr(item.title)}</h3>
              <p>{tr(item.text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
