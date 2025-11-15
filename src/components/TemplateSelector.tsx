import { useCVStore } from '../store/cvStore';
import { Check } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design with blue accents',
    preview: '/previews/modern.svg',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant centered layout',
    preview: '/previews/minimal.svg',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Two-column layout with dark sidebar',
    preview: '/previews/professional.svg',
  },
];

export const TemplateSelector = () => {
  const { selectedTemplate, setTemplate } = useCVStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Template</h2>
        <p className="text-gray-600">Select a professional template for your CV</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setTemplate(template.id)}
            className={`relative group overflow-hidden rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-600 shadow-lg'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📄</div>
                <div className="text-sm font-medium text-gray-700">{template.name}</div>
              </div>
            </div>

            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>

            {selectedTemplate === template.id && (
              <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2">
                <Check size={16} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
