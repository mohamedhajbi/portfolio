import { languages, skillGroups } from '@/data';
import { Section, TagList } from '@/components/ui';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="Toolbox" title="Technical skills">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h3>{group.title}</h3>
            <TagList items={group.items} label={`${group.title} skills`} />
          </article>
        ))}

        <article className={styles.card}>
          <h3>Spoken languages</h3>
          <ul className={styles.languages}>
            {languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong>
                <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
