import { useState } from 'react';
import { Check, Star, Sparkles } from 'lucide-react';

// Mock store hook for demo
const useCVStore = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  return { selectedTemplate, setTemplate: setSelectedTemplate };
};

const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple elegant layout with whitespace',
    popular: false,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-100 hover:border-green-300',
    previewBg: 'bg-gradient-to-br from-green-50 to-green-100',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean contemporary design with blue accents',
    popular: true,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-100 hover:border-blue-300',
    previewBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Two-column layout with sidebar and sections',
    popular: true,
    color: 'from-teal-500 to-teal-600',
    borderColor: 'border-teal-100 hover:border-teal-300',
    previewBg: 'bg-gradient-to-br from-teal-50 to-teal-100',
  },
];

export default function TemplateSelector() {
  const { selectedTemplate, setTemplate } = useCVStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 relative overflow-hidden py-16 px-4">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Choose Your Style</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Pick Your Perfect
            </span>
            <br />
            <span className="text-gray-900">Template</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a professional design that matches your personality and impresses recruiters
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setTemplate(template.id)}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                selectedTemplate === template.id
                  ? 'ring-4 ring-blue-500 shadow-2xl scale-105'
                  : `border ${template.borderColor} shadow-lg`
              }`}
            >
              {/* Popular Badge */}
              {template.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}

              {/* Selected Indicator */}
              {selectedTemplate === template.id && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-2 shadow-xl animate-pulse">
                  <Check size={20} strokeWidth={3} />
                </div>
              )}

              {/* Icon Badge */}
              <div className={`w-14 h-14 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
              </div>

              {/* Template Preview */}
              <div className={`mb-4 h-48 rounded-xl ${template.previewBg} flex items-center justify-center overflow-hidden shadow-inner relative`}>
                {/* Simple preview representation */}
                <div className="w-full h-full p-4 space-y-2">
                  <div className="h-3 bg-white/60 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-white/40 rounded w-1/2 mx-auto"></div>
                  <div className="mt-4 space-y-1.5">
                    <div className="h-2 bg-white/50 rounded w-full"></div>
                    <div className="h-2 bg-white/50 rounded w-5/6"></div>
                    <div className="h-2 bg-white/50 rounded w-4/5"></div>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <div className="h-2 bg-white/50 rounded w-full"></div>
                    <div className="h-2 bg-white/50 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Template Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {template.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {template.description}
              </p>

              {/* Selection indicator text */}
              {selectedTemplate === template.id && (
                <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-1">
                  <Check size={16} />
                  Selected
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Not sure which one? You can change it anytime!
          </p>
          <div className="inline-flex gap-1 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}