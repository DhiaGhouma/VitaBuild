import { useCVStore } from '../../store/cvStore';
import { CheckCircle2 } from 'lucide-react';

export const ReviewStep = () => {
  const { cvData } = useCVStore();

  const sections = [
    {
      title: 'Personal Information',
      hasData: !!cvData.personalInfo.fullName && !!cvData.personalInfo.email,
    },
    { title: 'Summary', hasData: !!cvData.summary },
    { title: 'Experience', hasData: cvData.experience.length > 0 },
    { title: 'Education', hasData: cvData.education.length > 0 },
    { title: 'Projects', hasData: cvData.projects.length > 0 },
    { title: 'Skills', hasData: cvData.skills.length > 0 },
    { title: 'Languages', hasData: cvData.languages.length > 0 },
  ];

  const completedSections = sections.filter((s) => s.hasData).length;
  const totalSections = sections.length;
  const percentage = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your CV</h2>
        <p className="text-gray-600">Check your information before generating the PDF</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Completion Status</h3>
          <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              section.hasData
                ? 'bg-green-50 border-green-200'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <span className="font-medium text-gray-900">{section.title}</span>
            {section.hasData ? (
              <CheckCircle2 className="text-green-600" size={24} />
            ) : (
              <span className="text-sm text-gray-500">Not added</span>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Preview Summary</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Name</h4>
            <p className="text-gray-900">{cvData.personalInfo.fullName || 'Not provided'}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Title</h4>
            <p className="text-gray-900">{cvData.personalInfo.title || 'Not provided'}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Contact</h4>
            <p className="text-gray-900">
              {cvData.personalInfo.email || 'No email'} • {cvData.personalInfo.phone || 'No phone'}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Experience</h4>
            <p className="text-gray-900">
              {cvData.experience.length} position{cvData.experience.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Education</h4>
            <p className="text-gray-900">
              {cvData.education.length} qualification{cvData.education.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Tip:</strong> Make sure all information is accurate before generating your CV.
          You can go back to any step to make changes.
        </p>
      </div>
    </div>
  );
};
