import { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { trackPageView, trackUpdateView } from '../utils/analytics';
import updatesData from '../data/updates.json';

const Updates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    trackPageView('Updates', '/updates');
  }, []);

  const categories = ['All', ...new Set(updatesData.updates.map(u => u.category))];

  const filteredUpdates = selectedCategory === 'All' 
    ? updatesData.updates 
    : updatesData.updates.filter(u => u.category === selectedCategory);

  const pinnedUpdates = filteredUpdates.filter(u => u.isPinned);
  const regularUpdates = filteredUpdates.filter(u => !u.isPinned);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Syllabus Update': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Admission': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Event': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Examination': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Infrastructure': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Research': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const UpdateCard = ({ update }) => (
    <div 
      className="card group cursor-pointer"
      onClick={() => trackUpdateView(update.title)}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(update.category)}`}>
          {update.category}
        </span>
        {update.isPinned && (
          <span className="text-yellow-500" title="Pinned">
            📌
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {update.title}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {formatDate(update.date)}
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {update.description}
      </p>
      
      {update.link && update.link !== '#' && (
        <a 
          href={update.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Read more</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <>
      <SEOHead
        title="Updates & Announcements"
        description="Latest updates, announcements, and news from the Central Department of CSIT, Far-Western University. Stay informed about syllabus changes, admissions, events, and examinations."
        keywords="CSIT FWU updates, FWU announcements, CSIT news Nepal, Far-Western University CSIT news, admission updates FWU, CSIT events"
        canonicalUrl="/updates"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Updates & Announcements
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Stay informed with the latest news and updates from the department
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pinned Updates */}
          {pinnedUpdates.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-2">📌</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pinned Updates
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pinnedUpdates.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Updates */}
          {regularUpdates.length > 0 && (
            <div>
              {pinnedUpdates.length > 0 && (
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Recent Updates
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularUpdates.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          )}

          {/* No Updates */}
          {filteredUpdates.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No updates available for this category
              </p>
            </div>
          )}

          {/* Subscribe CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Never Miss an Update
            </h3>
            <p className="mb-6 text-primary-100">
              Visit our official website regularly for the latest announcements and news
            </p>
            <a
              href="https://cdcsit.fwu.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
