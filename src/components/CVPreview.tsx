import { useCVStore } from '../store/cvStore';
import { PDFViewer } from '@react-pdf/renderer';
import { ModernTemplate } from '../templates/ModernTemplate';
import { MinimalTemplate } from '../templates/MinimalTemplate';
import { ProfessionalTemplate } from '../templates/ProfessionalTemplate';
import { useEffect, useState } from 'react';

export const CVPreview = () => {
  const { cvData, selectedTemplate } = useCVStore();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset error when data changes
    setError(null);
  }, [cvData]);

  const getTemplate = () => {
    try {
      switch (selectedTemplate) {
        case 'minimal':
          return <MinimalTemplate data={cvData} />;
        case 'professional':
          return <ProfessionalTemplate data={cvData} />;
        case 'modern':
        default:
          return <ModernTemplate data={cvData} />;
      }
    } catch (err) {
      setError('Error rendering template');
      console.error('Template render error:', err);
      return null;
    }
  };

  if (error) {
    return (
      <div className="h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-red-600 font-medium mb-2">Preview Error</p>
          <p className="text-gray-600 text-sm">
            There was an issue rendering the preview. Please check your data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="h-full">
        <PDFViewer 
          width="100%" 
          height="100%" 
          className="border-0"
          showToolbar={false}
        >
          {getTemplate()}
        </PDFViewer>
      </div>
    </div>
  );
};