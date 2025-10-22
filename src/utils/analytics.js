/**
 * Analytics utility for tracking user interactions
 * This is a simple implementation that can be extended with Google Analytics or Plausible
 */

let analyticsEnabled = false;

/**
 * Initialize analytics
 * @param {boolean} enabled - Whether analytics should be enabled
 */
export const initAnalytics = (enabled = false) => {
  analyticsEnabled = enabled;
  
  if (analyticsEnabled && typeof window !== 'undefined') {
    // Initialize Google Analytics 4 if you have a measurement ID
    // window.gtag('config', 'G-XXXXXXXXXX');
    
    console.log('Analytics initialized');
  }
};

/**
 * Track page view
 * @param {string} pageName - Name of the page
 * @param {string} path - Page path
 */
export const trackPageView = (pageName, path) => {
  if (!analyticsEnabled) return;
  
  console.log('📊 Page View:', pageName, path);
  
  // Google Analytics 4 implementation
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: path,
    });
  }
  
  // Or Plausible Analytics
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('pageview');
  }
};

/**
 * Track custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Event data
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (!analyticsEnabled) return;
  
  console.log('📊 Event:', eventName, eventData);
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  
  // Or Plausible Analytics
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props: eventData });
  }
};

/**
 * Track syllabus view
 * @param {string} program - Program name (BSc.CSIT, BIT, MSc.CSIT)
 * @param {string} semester - Semester name
 */
export const trackSyllabusView = (program, semester) => {
  trackEvent('syllabus_viewed', {
    program,
    semester,
    category: 'Syllabus',
  });
};

/**
 * Track syllabus download
 * @param {string} program - Program name
 * @param {string} semester - Semester name
 */
export const trackSyllabusDownload = (program, semester) => {
  trackEvent('syllabus_downloaded', {
    program,
    semester,
    category: 'Download',
  });
};

/**
 * Track update view
 * @param {string} updateTitle - Title of the update
 */
export const trackUpdateView = (updateTitle) => {
  trackEvent('update_viewed', {
    update_title: updateTitle,
    category: 'Updates',
  });
};

/**
 * Track theme change
 * @param {string} theme - New theme (light/dark)
 */
export const trackThemeChange = (theme) => {
  trackEvent('theme_changed', {
    theme,
    category: 'Preferences',
  });
};
