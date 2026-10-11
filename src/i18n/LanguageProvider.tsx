import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, Localized, Text } from '@/types';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';
import { ui } from './ui';

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    // Storage unavailable: fall back to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

const dateLocales: Record<Locale, string> = { en: 'en-US', fr: 'fr-FR' };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = ui[locale].documentTitle;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Not persisted in private mode; the choice still applies for this visit.
    }
  }, [locale]);

  const formatMonth = useCallback(
    (yearMonth: string) => {
      const [year, month] = yearMonth.split('-').map(Number);
      const date = new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1));
      return new Intl.DateTimeFormat(dateLocales[locale], {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(date);
    },
    [locale],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: ui[locale],
      tr: <T,>(v: Localized<T>) => v[locale],
      text: (v: Text) => (typeof v === 'string' ? v : v[locale]),
      formatMonth,
    }),
    [locale, formatMonth],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
