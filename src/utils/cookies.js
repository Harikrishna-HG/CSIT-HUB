import Cookies from 'js-cookie';

// Cookie names
export const COOKIE_CONSENT = 'csit_hub_cookie_consent';
export const THEME_PREFERENCE = 'csit_hub_theme';
export const LAST_VISITED_PAGE = 'csit_hub_last_page';

/**
 * Set cookie consent
 * @param {boolean} consent - User's consent status
 */
export const setCookieConsent = (consent) => {
  Cookies.set(COOKIE_CONSENT, consent ? 'accepted' : 'declined', { expires: 365 });
};

/**
 * Check if user has given cookie consent
 * @returns {boolean | null} - true/false or null if not set
 */
export const getCookieConsent = () => {
  const consent = Cookies.get(COOKIE_CONSENT);
  if (!consent) return null;
  return consent === 'accepted';
};

/**
 * Set theme preference
 * @param {'light' | 'dark'} theme - Theme preference
 */
export const setThemePreference = (theme) => {
  Cookies.set(THEME_PREFERENCE, theme, { expires: 365 });
  
  // Apply theme to document
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

/**
 * Get theme preference
 * @returns {'light' | 'dark'} - Theme preference
 */
export const getThemePreference = () => {
  const theme = Cookies.get(THEME_PREFERENCE);
  if (!theme) {
    // Default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
};

/**
 * Toggle theme
 * @returns {'light' | 'dark'} - New theme
 */
export const toggleTheme = () => {
  const currentTheme = getThemePreference();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setThemePreference(newTheme);
  return newTheme;
};

/**
 * Set last visited page
 * @param {string} path - Page path
 */
export const setLastVisitedPage = (path) => {
  const consent = getCookieConsent();
  if (consent) {
    Cookies.set(LAST_VISITED_PAGE, path, { expires: 30 });
  }
};

/**
 * Get last visited page
 * @returns {string | null} - Last visited page path
 */
export const getLastVisitedPage = () => {
  return Cookies.get(LAST_VISITED_PAGE) || null;
};

/**
 * Clear all cookies
 */
export const clearAllCookies = () => {
  Cookies.remove(COOKIE_CONSENT);
  Cookies.remove(THEME_PREFERENCE);
  Cookies.remove(LAST_VISITED_PAGE);
};
