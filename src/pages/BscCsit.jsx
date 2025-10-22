import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import SyllabusCard from '../components/SyllabusCard';
import { trackPageView } from '../utils/analytics';
import bscCsitData from '../data/bscCsit.json';

const BscCsit = () => {
  useEffect(() => {
    trackPageView('BSc.CSIT', '/bsc-csit');
  }, []);

  return (
    <>
      <SEOHead
        title="BSc.CSIT Syllabus"
        description="Complete BSc.CSIT (Bachelor of Science in Computer Science and Information Technology) syllabus for all 8 semesters at Far-Western University. Download semester-wise subjects, credit hours, and course details."
        keywords="BSc.CSIT FWU syllabus, BSc.CSIT Far-Western University, CSIT syllabus Nepal, Computer Science syllabus FWU, BSc CSIT subjects, CSIT semester syllabus"
        canonicalUrl="/bsc-csit"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <span className="text-4xl">🎓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {bscCsitData.program}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              {bscCsitData.fullName}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {bscCsitData.duration}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Total Credits: {bscCsitData.totalCredits}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {bscCsitData.description}
            </p>
          </div>

          {/* Syllabus Cards Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Semester-wise Syllabus
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bscCsitData.semesters.map((semester) => (
                <SyllabusCard 
                  key={semester.id} 
                  semester={semester} 
                  program={bscCsitData.program}
                />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Important Information
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>The program runs for 4 years with 8 semesters</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Each semester typically runs for 15-16 weeks</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>For admission requirements, please visit the official FWU website</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Syllabus may be updated periodically - check the Updates page for changes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BscCsit;
