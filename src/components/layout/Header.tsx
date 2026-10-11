import { useEffect, useState } from 'react';
import { profile, sectionIds } from '@/data';
import { useActiveSection, useTheme } from '@/hooks';
import { locales, useLanguage } from '@/i18n';
import { Icon } from '@/components/ui';
import { cn } from '@/utils/cn';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t, tr } = useLanguage();
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

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={cn('container', styles.inner)}>
        <a
          href="#top"
          className={styles.brand}
          aria-label={`${profile.name}, ${t.header.backToTop}`}
        >
          <span className={styles.logo} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandText}>
            <strong>{profile.name}</strong>
            <small>{tr(profile.title)}</small>
          </span>
        </a>

        <nav
          id="primary-nav"
          aria-label={t.header.primaryNav}
          className={cn(styles.nav, menuOpen && styles.navOpen)}
        >
          <ul>
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(styles.link, active === id && styles.active)}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.langSwitch} role="group" aria-label={t.header.language}>
            {locales.map((l) => (
              <button
                key={l.code}
                type="button"
                lang={l.code}
                className={cn(styles.langOption, locale === l.code && styles.langActive)}
                aria-pressed={locale === l.code}
                aria-label={l.name}
                onClick={() => setLocale(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.header.themeToLight : t.header.themeToDark}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className={cn(styles.iconButton, styles.menuButton)}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
