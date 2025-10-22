import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import SyllabusCard from '../components/SyllabusCard';
import { trackPageView } from '../utils/analytics';
import bitData from '../data/bit.json';

const Bit = () => {
  useEffect(() => {
    trackPageView('BIT', '/bit');
  }, []);

  return (
    <>
      <SEOHead
        title="BIT Syllabus - All 8 Semesters"
        description="Download complete BIT (Bachelor in Information Technology) syllabus of Far-Western University (FWU) Nepal. Get all 8 semester syllabus, subjects, credit hours, and course details for BIT program."
        keywords="BIT syllabus FWU, BIT Far Western University, BIT syllabus Nepal, FWU BIT syllabus download, BIT subjects FWU, BIT course outline, Bachelor in Information Technology FWU, BIT semester wise syllabus, information technology syllabus FWU, BIT 1st semester, BIT notes FWU, Far Western University BIT, BIT syllabus 2025, BIT curriculum Nepal, Bachelor in IT, BIT first semester subjects, BIT second semester, BIT third semester, BIT fourth semester, BIT fifth semester, BIT sixth semester, BIT seventh semester, BIT eighth semester, BIT final year, IT fundamentals, Information system, Management information system, IT infrastructure, System analysis design, Network administration, Server administration, Web application development, Mobile application development, IT project management, Database administration, Cloud computing BIT, DevOps course, IT security, Network security, Cyber security BIT, Programming fundamentals, Advanced programming, Scripting language, System programming, IT service management, Digital system, Computer hardware, IT support, Technical support course, Help desk management, IT operations, Business intelligence, Data analytics BIT, Enterprise system, ERP system course, CRM system, IT governance, IT audit, Quality assurance, Software testing BIT, Agile methodology, SDLC models, IT professional ethics, Communication skills IT, Business communication, Technical writing, IT entrepreneurship, E-business course, Digital marketing IT, Social media management, Content management system, WordPress development, IT portfolio, BIT internship Nepal, BIT practical training, IT lab work, networking lab BIT, programming practicals, BIT credit hours, BIT examination pattern, TU BIT syllabus, Tribhuvan University BIT, BIT colleges Nepal, BIT admission requirements, BIT entrance preparation, IT degree Nepal, information technology career, IT jobs Nepal, network administrator Nepal, system administrator job, web developer Nepal, IT professional Nepal, tech support career"
        canonicalUrl="/bit"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <span className="text-4xl">💻</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {bitData.program}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              {bitData.fullName}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {bitData.duration}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Total Credits: {bitData.totalCredits}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {bitData.description}
            </p>
          </div>

          {/* Syllabus Cards Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Semester-wise Syllabus
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bitData.semesters.map((semester) => (
                <SyllabusCard 
                  key={semester.id} 
                  semester={semester} 
                  program={bitData.program}
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
                <span>BIT program emphasizes practical IT skills and industry-relevant technologies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Elective courses allow specialization in areas of interest</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Final year includes comprehensive project work</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>For the latest updates and admission details, visit our Updates page</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bit;
