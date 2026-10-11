import { profile } from '@/data';
import { Icon } from '@/components/ui';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name} — {profile.title}
        </p>
        <a href="#top" className={styles.top}>
          <Icon name="arrowUp" size={16} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
