import { skillGroups, spokenLanguages } from '@/data';
import { useLanguage } from '@/i18n';
import { Section, TagList } from '@/components/ui';
import styles from './Skills.module.css';

export function Skills() {
  const { t, tr, text } = useLanguage();

  return (
    <Section id="skills" index="03" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className={styles.grid}>
        {skillGroups.map((group) => {
          const title = tr(group.title);
          return (
            <article key={group.title.en} className={styles.card}>
              <h3>{title}</h3>
              <TagList items={group.items.map(text)} label={t.skills.groupLabel(title)} />
            </article>
          );
        })}

        <article className={styles.card}>
          <h3>{t.skills.spoken}</h3>
          <TagList items={spokenLanguages.map(tr)} label={t.skills.spoken} />
        </article>
      </div>
    </Section>
  );
}
