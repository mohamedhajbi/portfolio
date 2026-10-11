import { profile } from '@/data';
import { ButtonLink, Icon } from '@/components/ui';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.ctas}>
            <ButtonLink href={`mailto:${profile.email}`}>
              <Icon name="mail" /> Contact me
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="ghost">
              <Icon name="linkedin" /> LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.cvPath} variant="ghost" download>
              <Icon name="download" /> CV (PDF)
            </ButtonLink>
          </div>

          <ul className={styles.meta}>
            <li>
              <Icon name="pin" size={16} /> {profile.location}
            </li>
            <li>
              <Icon name="briefcase" size={16} /> 2.5+ years experience
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
              alt={`Portrait of ${profile.name}`}
              width={446}
              height={560}
              fetchPriority="high"
            />
          </div>
          <div className={`${styles.badgeCard} ${styles.badgeTop}`} aria-hidden="true">
            <strong>Full-Stack</strong>
            <span>Python · JS · Java</span>
          </div>
          <div className={`${styles.badgeCard} ${styles.badgeBottom}`} aria-hidden="true">
            <strong>2.5+ yrs</strong>
            <span>building production apps</span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className={styles.stats}>
          {profile.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
