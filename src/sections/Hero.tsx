import { profile } from '@/data';
import { useLanguage } from '@/i18n';
import { ButtonLink, Icon } from '@/components/ui';
import styles from './Hero.module.css';

export function Hero() {
  const { t, tr } = useLanguage();

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {t.hero.availability}
          </p>

          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.title}>{tr(profile.title)}</p>
          <p className={styles.tagline}>{tr(profile.tagline)}</p>

          <div className={styles.ctas}>
            <ButtonLink href={`mailto:${profile.email}`}>
              <Icon name="mail" /> {t.hero.contact}
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="ghost">
              <Icon name="linkedin" /> LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.cvPath} variant="ghost" download>
              <Icon name="download" /> {t.hero.cv}
            </ButtonLink>
          </div>

          <ul className={styles.meta}>
            <li>
              <Icon name="pin" size={16} /> {tr(profile.location)}
            </li>
            <li>
              <Icon name="briefcase" size={16} /> {t.hero.focus}
            </li>
            <li>
              <Icon name="globe" size={16} /> EN · FR
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.portrait}>
            <img
              src={profile.photo}
              alt={t.hero.portraitAlt}
              width={446}
              height={560}
              fetchPriority="high"
            />
          </div>
          <div className={`${styles.badgeCard} ${styles.badgeTop}`} aria-hidden="true">
            <strong>{t.hero.badgeTopTitle}</strong>
            <span>{t.hero.badgeTopText}</span>
          </div>
          <div className={`${styles.badgeCard} ${styles.badgeBottom}`} aria-hidden="true">
            <strong>~80%</strong>
            <span>{t.hero.badgeBottomText}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className={styles.stats}>
          {profile.stats.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <dt>{tr(stat.label)}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
