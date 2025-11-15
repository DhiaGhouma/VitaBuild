import { useCVStore } from '../store/cvStore';
import { Check } from 'lucide-react';

const steps = [
  { id: 0, name: 'Template', key: 'template' },
  { id: 1, name: 'Personal Info', key: 'personal' },
  { id: 2, name: 'Summary', key: 'summary' },
  { id: 3, name: 'Experience', key: 'experience' },
  { id: 4, name: 'Education', key: 'education' },
  { id: 5, name: 'Projects', key: 'projects' },
  { id: 6, name: 'Skills', key: 'skills' },
  { id: 7, name: 'Languages', key: 'languages' },
  { id: 8, name: 'Review', key: 'review' },
];

export const StepWizard = () => {
  const { currentStep, setCurrentStep } = useCVStore();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                  currentStep === step.id
                    ? 'bg-blue-600 text-white'
                    : currentStep > step.id
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                    currentStep === step.id
                      ? 'bg-white text-blue-600'
                      : currentStep > step.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {currentStep > step.id ? <Check size={14} /> : step.id + 1}
                </div>
                <span className="text-sm font-medium hidden sm:inline">{step.name}</span>
              </button>
              {index < steps.length - 1 && (
                <div className="w-8 h-0.5 bg-gray-200 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
