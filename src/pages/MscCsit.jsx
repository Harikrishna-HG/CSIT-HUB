import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import SyllabusCard from '../components/SyllabusCard';
import { trackPageView } from '../utils/analytics';
import mscCsitData from '../data/mscCsit.json';

const MscCsit = () => {
  useEffect(() => {
    trackPageView('MSc.CSIT', '/msc-csit');
  }, []);

  return (
    <>
      <SEOHead
        title="MSc.CSIT Syllabus - All 4 Semesters"
        description="Download complete MSc.CSIT syllabus of Far-Western University (FWU) Nepal. Get all 4 semester syllabus for Master of Science in Computer Science and Information Technology with AI, ML, distributed systems, and advanced topics."
        keywords="MSc CSIT syllabus FWU, MSc CSIT Far Western University, MSc CSIT syllabus Nepal, FWU MSc CSIT syllabus download, MSc CSIT subjects FWU, Master CSIT syllabus, postgraduate CSIT FWU, MSc computer science syllabus, MSc CSIT AI ML, MSc CSIT semester wise syllabus, Far Western University MSc CSIT, MSc CSIT syllabus 2025, MSc CSIT curriculum Nepal, Master of Science CSIT, MSc CSIT first semester, MSc CSIT second semester, MSc CSIT third semester, MSc CSIT fourth semester, postgraduate computer science, masters in IT Nepal, advanced computer science course, Artificial intelligence course advanced, Machine learning algorithms, Deep learning course, Neural networks, Natural language processing, Computer vision course, Pattern recognition, Robotics and automation, Expert system, Knowledge representation, Advanced database system, Data warehousing, Big data analytics, Data mining advanced, NoSQL database, Distributed database system, Cloud database, Advanced networking, Network security advanced, Wireless sensor network, Mobile ad hoc network, Internet of things IoT, Distributed computing, Parallel processing, Grid computing, Cluster computing, High performance computing, Advanced software engineering, Software architecture, Design patterns advanced, Agile software development, DevOps advanced, Microservices architecture, Advanced algorithms, Computational complexity, Graph theory advanced, Optimization techniques, Bioinformatics course, Computational biology, Digital image processing advanced, Computer graphics advanced, Virtual reality course, Augmented reality, Multimedia system, Information retrieval, Web mining, Semantic web, Cloud computing advanced, Fog computing, Edge computing, Blockchain technology, Cryptocurrency course, Cybersecurity advanced, Ethical hacking, Penetration testing, Digital forensics, Information security management, Research methodology CSIT, Thesis writing MSc CSIT, MSc CSIT dissertation, MSc CSIT project, Advanced programming concepts, Functional programming, Concurrent programming, MSc CSIT electives, MSc CSIT specialization, MSc CSIT research areas, TU MSc CSIT, Tribhuvan University masters, MSc CSIT admission Nepal, MSc CSIT entrance exam, postgraduate entrance CSIT, MSc CSIT eligibility, masters after BSc CSIT, MSc CSIT career prospects, PhD after MSc CSIT, research scholar CSIT, AI engineer course, ML engineer degree, data scientist degree Nepal, research jobs CSIT, teaching career CSIT, university lecturer CSIT"
        canonicalUrl="/msc-csit"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {mscCsitData.program}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              {mscCsitData.fullName}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {mscCsitData.duration}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Total Credits: {mscCsitData.totalCredits}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {mscCsitData.description}
            </p>
          </div>

          {/* Syllabus Cards Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Semester-wise Syllabus
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mscCsitData.semesters.map((semester) => (
                <SyllabusCard 
                  key={semester.id} 
                  semester={semester} 
                  program={mscCsitData.program}
                />
              ))}
            </div>
          </div>

          {/* Electives Section */}
          {mscCsitData.electives && mscCsitData.electives.length > 0 && (
            <div className="mt-12 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Available Elective Courses
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {mscCsitData.electives.map((elective, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{elective}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Program Highlights
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Advanced research-oriented curriculum focusing on cutting-edge technologies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Thesis work in the final semester under expert supervision</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Opportunities to specialize in AI, ML, Cloud Computing, Big Data, and more</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Strong foundation for pursuing PhD or industry research positions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscCsit;
