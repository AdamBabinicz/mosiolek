/**
 * Application constants for Pawel Mosiolek's music portfolio website
 */

// Site metadata
export const SITE_NAME = "Paweł Mosiołek";
export const SITE_DOMAIN = "pawelmosiolek.pl";
export const SITE_URL = `https://${SITE_DOMAIN}`;

// Social media links
export const SOCIAL_LINKS = {
  FACEBOOK: "https://www.facebook.com/PAWELMOSIOLEK1976",
  INSTAGRAM: "#", // Replace with actual URL when available
  YOUTUBE: "#", // Replace with actual URL when available
  SPOTIFY: "#", // Replace with actual URL when available
};

// Navigation scroll offset (to account for sticky header)
export const SCROLL_OFFSET = -80;

// Cookie consent configuration
export const COOKIE_CONSENT = {
  STORAGE_KEY: "cookies-accepted",
  OPTIONS: {
    ALL: "true",
    MINIMAL: "minimal",
  },
};

// Breakpoints for responsive design (in pixels)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};

// Photo gallery configuration
export const GALLERY = {
  ITEMS_PER_PAGE: 6,
  THUMBNAIL_QUALITY: 80,
  FULL_SIZE_QUALITY: 100,
};

// Contact form validation
export const FORM_VALIDATION = {
  NAME_MIN_LENGTH: 2,
  MESSAGE_MIN_LENGTH: 10,
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

// Animation durations (in milliseconds)
export const ANIMATIONS = {
  FADE: 300,
  SLIDE: 500,
  MODAL_TRANSITION: 200,
};

// Theme configuration
export const THEME = {
  STORAGE_KEY: "theme",
  OPTIONS: {
    LIGHT: "light",
    DARK: "dark",
  },
};

// Language configuration
export const LANGUAGE = {
  STORAGE_KEY: "language",
  OPTIONS: {
    POLISH: "pl",
    ENGLISH: "en",
  },
  DEFAULT: "pl",
};

// API endpoints
export const API = {
  CONTACT: "/api/contact",
};

// SEO default image dimensions
export const SEO_IMAGE = {
  WIDTH: 1200,
  HEIGHT: 630,
};

// Page section IDs (used for navigation)
export const SECTION_IDS = {
  START: "start",
  PHOTOS: "foto-teka",
  CREATOR: "tworca",
  DISCOGRAPHY: "dyskografia",
  CONTACT: "kontakt",
  CONCERTS: "koncerty",
};
