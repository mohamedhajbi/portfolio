import { useEffect, useState } from 'react';
import { navigation, profile } from '@/data';
import { useActiveSection, useTheme } from '@/hooks';
import { Icon } from '@/components/ui';
import { cn } from '@/utils/cn';
import styles from './Header.module.css';

const sectionIds = navigation.map((item) => item.id);

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={cn('container', styles.inner)}>
        <a href="#top" className={styles.brand} aria-label={`${profile.name} — back to top`}>
          <span className={styles.logo} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandText}>
            <strong>{profile.name}</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={cn(styles.nav, menuOpen && styles.navOpen)}
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(styles.link, active === item.id && styles.active)}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className={cn(styles.iconButton, styles.menuButton)}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
