import { profile } from '@/data';
import { useLanguage } from '@/i18n';
import { Icon } from '@/components/ui';
import styles from './Footer.module.css';

export function Footer() {
  const { t, tr } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name} · {tr(profile.title)}
        </p>
        <a href="#top" className={styles.top}>
          <Icon name="arrowUp" size={16} />
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
