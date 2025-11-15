import { useCVStore } from '../store/cvStore';
import { PDFViewer } from '@react-pdf/renderer';
import { ModernTemplate } from '../templates/ModernTemplate';
import { MinimalTemplate } from '../templates/MinimalTemplate';
import { ProfessionalTemplate } from '../templates/ProfessionalTemplate';

export const CVPreview = () => {
  const { cvData, selectedTemplate } = useCVStore();

  const getTemplate = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate data={cvData} />;
      case 'professional':
        return <ProfessionalTemplate data={cvData} />;
      case 'modern':
      default:
        return <ModernTemplate data={cvData} />;
    }
  };

  return (
    <div className="h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="h-full">
        <PDFViewer width="100%" height="100%" className="border-0">
          {getTemplate()}
        </PDFViewer>
      </div>
    </div>
  );
};
