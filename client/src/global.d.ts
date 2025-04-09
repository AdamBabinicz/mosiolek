// globals.d.ts
declare global {
  interface Window {
    CookieScript?: {
      show: () => void;
      hide: () => void;
      isConsentGiven: () => boolean;
    };
  }
}

export {};
