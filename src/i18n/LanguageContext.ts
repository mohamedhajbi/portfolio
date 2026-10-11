import { createContext } from 'react';
import type { Locale, Localized, Text } from '@/types';
import type { UiStrings } from './ui';

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Interface strings for the current locale. */
  t: UiStrings;
  /** Picks the current locale from a localized value. */
  tr: <T>(value: Localized<T>) => T;
  /** Resolves text that may be shared (string) or localized. */
  text: (value: Text) => string;
  /** Formats an ISO year-month ("2025-09") as a short localized date. */
  formatMonth: (yearMonth: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
