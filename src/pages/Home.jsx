import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { trackPageView } from '../utils/analytics';

const Home = () => {
  useEffect(() => {
    trackPageView('Home', '/');
  }, []);

  const programs = [
    {
      name: 'BSc.CSIT',
      fullName: 'Bachelor of Science in Computer Science and Information Technology',
      duration: '4 Years (8 Semesters)',
      description: 'Comprehensive undergraduate program covering core computer science concepts, programming, and IT fundamentals.',
      path: '/bsc-csit',
      icon: '🎓',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'BIT',
      fullName: 'Bachelor in Information Technology',
      duration: '4 Years (8 Semesters)',
      description: 'Focused IT program emphasizing practical skills in software development, networking, and system administration.',
      path: '/bit',
      icon: '💻',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'MSc.CSIT',
      fullName: 'Master of Science in Computer Science and Information Technology',
      duration: '2 Years (4 Semesters)',
      description: 'Advanced postgraduate program focusing on cutting-edge topics like AI, ML, and distributed computing.',
      path: '/msc-csit',
      icon: '🎯',
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <>
      <SEOHead
        title="Home"
        description="CSIT Hub - Complete BSc.CSIT, BIT, and MSc.CSIT syllabus from Far-Western University (FWU). Download official syllabus, check updates, and get all academic information from Central Department of CSIT, Far-Western University Nepal."
        keywords="CSIT syllabus, FWU syllabus, Far Western University CSIT, BSc CSIT syllabus FWU, BIT syllabus FWU, MSc CSIT syllabus, CSIT Hub, Far Western University syllabus, CSIT course FWU, computer science syllabus Nepal, FWU CSIT department, BSc CSIT Nepal, BIT Nepal, MSc CSIT Nepal, CSIT notes FWU, Far Western University courses, CSIT curriculum Nepal, computer science degree Nepal, IT courses Nepal, programming courses Nepal, software engineering Nepal, BSc computer science, Bachelor CSIT, Master CSIT, CSIT admission FWU, CSIT entrance preparation, computer application Nepal, information technology degree, BSc IT Nepal, computer science and information technology, CSIT subjects, programming syllabus, database management syllabus, web technology course, artificial intelligence course, machine learning syllabus, data structure algorithm, computer network syllabus, operating system course, software engineering syllabus, Java programming course, C programming syllabus, Python course Nepal, data science Nepal, cybersecurity course, cloud computing syllabus, mobile app development, CSIT career Nepal, IT jobs Nepal, software developer Nepal, tech education Nepal, Tribhuvan University CSIT, TU CSIT syllabus, Nepal CSIT colleges, best CSIT college Nepal, CSIT notes download, CSIT books Nepal, CSIT study material, semester wise syllabus, CSIT question bank, past questions CSIT, CSIT model questions, CSIT exam preparation"
        canonicalUrl="/"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Welcome to CSIT Hub
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-100">
                Central Department of Computer Science and Information Technology
              </p>
              <p className="text-lg md:text-xl mb-8 text-primary-200">
                Far-Western University, Kanchanpur, Nepal
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/updates" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                  Latest Updates
                </Link>
                <a 
                  href="https://cdcsit.fwu.edu.np/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary bg-primary-500 hover:bg-primary-400 text-white border-2 border-white"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About the Department
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The Central Department of CSIT at Far-Western University is committed to producing 
                highly skilled IT professionals through quality education, research, and innovation. 
                We offer comprehensive programs designed to meet the evolving demands of the technology industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400">Programs Offered</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Students Enrolled</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Expert Faculty</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore our comprehensive academic programs and their detailed syllabi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Link
                  key={program.path}
                  to={program.path}
                  className="group"
                >
                  <div className="card h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {program.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {program.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {program.description}
                    </p>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all">
                      <span>View Syllabus</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Get the latest updates on syllabus changes, admissions, and department news
            </p>
            <Link to="/updates" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              View All Updates
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
