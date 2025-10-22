import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookieConsent, setCookieConsent } from '../utils/cookies';
import { initAnalytics } from '../utils/analytics';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === null) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Initialize analytics based on previous consent
      initAnalytics(consent);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    initAnalytics(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 shadow-2xl border-t-4 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    🍪 We use cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We use cookies to enhance your browsing experience, save your preferences (like theme settings), 
                    and analyze site traffic. By clicking "Accept", you consent to our use of cookies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <Link
                to="/cookie-policy"
                onClick={() => setShowBanner(false)}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
              >
                Learn More
              </Link>
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
