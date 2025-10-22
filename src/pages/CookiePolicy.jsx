import SEOHead from '../components/SEOHead';

const CookiePolicy = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="Learn about how CSIT Hub uses cookies to enhance your browsing experience and save your preferences."
        canonicalUrl="/cookie-policy"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CSIT Hub uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>
                  <strong>Preferences:</strong> To remember your theme preference (light or dark mode)
                </li>
                <li>
                  <strong>Navigation:</strong> To remember your last visited page for a better browsing experience
                </li>
                <li>
                  <strong>Analytics:</strong> To understand how visitors use our website (only with your consent)
                </li>
                <li>
                  <strong>Functionality:</strong> To provide core website features and improve user experience
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    These cookies are necessary for the website to function properly. They enable basic 
                    features like page navigation and remembering your cookie consent choice.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Preference Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    These cookies remember your choices such as theme preference (dark/light mode) 
                    and last visited page to provide a personalized experience.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Analytics Cookies (Optional)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With your consent, we use analytics cookies to understand how visitors interact 
                    with our website. This helps us improve the site and provide better content.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have control over the cookies we use:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>You can accept or decline cookies through the cookie banner that appears on your first visit</li>
                <li>You can change your browser settings to refuse cookies or alert you when cookies are being sent</li>
                <li>Disabling cookies may affect some functionality of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We do not use third-party advertising cookies. If we integrate analytics services like 
                Google Analytics in the future, we will update this policy and request your consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about our use of cookies, please contact the Central Department 
                of CSIT, Far-Western University through our official website.
              </p>
            </section>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Last Updated:</strong> October 22, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
