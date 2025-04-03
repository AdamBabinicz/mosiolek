import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CookieConsentContextType {
  showCookieBanner: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
  hasConsent: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setShowCookieBanner(true);
      setHasConsent(false);
    } else {
      setHasConsent(cookiesAccepted === 'true');
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowCookieBanner(false);
    setHasConsent(true);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'minimal');
    setShowCookieBanner(false);
    setHasConsent(false);
  };
  
  return (
    <CookieConsentContext.Provider value={{ 
      showCookieBanner, 
      acceptCookies, 
      declineCookies, 
      hasConsent 
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};