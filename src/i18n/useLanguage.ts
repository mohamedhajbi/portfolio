import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

/** Access the current language, interface strings and translation helpers. */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return context;
}
