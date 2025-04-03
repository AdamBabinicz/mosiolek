import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setShowCookieBanner(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowCookieBanner(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'minimal');
    setShowCookieBanner(false);
  };
  
  return {
    showCookieBanner,
    acceptCookies,
    declineCookies,
    hasConsent: localStorage.getItem('cookies-accepted') === 'true'
  };
};
