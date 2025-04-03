import { useCookieConsent as useContextCookieConsent } from '@/contexts/CookieConsentContext';

export const useCookieConsent = () => {
  return useContextCookieConsent();
};