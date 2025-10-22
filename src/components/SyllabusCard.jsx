import { trackSyllabusView, trackSyllabusDownload } from '../utils/analytics';

const SyllabusCard = ({ semester, program }) => {
  const handleDownload = (e, downloadLink) => {
    e.preventDefault();
    trackSyllabusDownload(program, semester.name);
    
    // Open the official FWU syllabus page in a new tab
    window.open(downloadLink, '_blank', 'noopener,noreferrer');
  };

  const handleViewDetails = () => {
    trackSyllabusView(program, semester.name);
  };

  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {semester.name}
          </h3>
          <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {semester.totalCredits} Credit Hours
          </p>
        </div>
        <div className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
          Semester {semester.id}
        </div>
      </div>

      {/* Subjects List */}
      <div className="space-y-2 mb-6">
        {semester.subjects.map((subject, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={handleViewDetails}
          >
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                {subject.name}
              </p>
              {subject.code && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {subject.code}
                </p>
              )}
            </div>
            <span className="ml-4 text-sm font-medium text-primary-600 dark:text-primary-400 whitespace-nowrap">
              {subject.credit} CH
            </span>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <button
        onClick={(e) => handleDownload(e, semester.downloadLink)}
        className="w-full btn-primary flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        <span>View Official Syllabus</span>
      </button>
    </div>
  );
};

export default SyllabusCard;
