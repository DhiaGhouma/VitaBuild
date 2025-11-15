import { useState } from 'react';
import { useCVStore } from '../store/cvStore';
import { StepWizard } from '../components/StepWizard';
import { CVPreview } from '../components/CVPreview';
import { TemplateSelector } from '../components/TemplateSelector';
import { PersonalInfoStep } from '../components/steps/PersonalInfoStep';
import { SummaryStep } from '../components/steps/SummaryStep';
import { ExperienceStep } from '../components/steps/ExperienceStep';
import { EducationStep } from '../components/steps/EducationStep';
import { ProjectsStep } from '../components/steps/ProjectsStep';
import { SkillsStep } from '../components/steps/SkillsStep';
import { LanguagesStep } from '../components/steps/LanguagesStep';
import { ReviewStep } from '../components/steps/ReviewStep';
import { ChevronLeft, ChevronRight, Download, Upload, Eye, EyeOff, Save } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { ModernTemplate } from '../templates/ModernTemplate';
import { MinimalTemplate } from '../templates/MinimalTemplate';
import { ProfessionalTemplate } from '../templates/ProfessionalTemplate';

export const Builder = () => {
  const { currentStep, setCurrentStep, cvData, selectedTemplate, exportData, importData } =
    useCVStore();
  const [showPreview, setShowPreview] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const totalSteps = 9;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <TemplateSelector />;
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <SummaryStep />;
      case 3:
        return <ExperienceStep />;
      case 4:
        return <EducationStep />;
      case 5:
        return <ProjectsStep />;
      case 6:
        return <SkillsStep />;
      case 7:
        return <LanguagesStep />;
      case 8:
        return <ReviewStep />;
      default:
        return <TemplateSelector />;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      let template;
      switch (selectedTemplate) {
        case 'minimal':
          template = <MinimalTemplate data={cvData} />;
          break;
        case 'professional':
          template = <ProfessionalTemplate data={cvData} />;
          break;
        case 'modern':
        default:
          template = <ModernTemplate data={cvData} />;
      }

      const blob = await pdf(template).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cvData.personalInfo.fullName || 'CV'}_Resume.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportJSON = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${cvData.personalInfo.fullName || 'CV'}_data.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = event.target?.result as string;
            importData(data);
            alert('CV data imported successfully!');
          } catch (error) {
            alert('Failed to import data. Please check the file format.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">VitaBuild</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={handleImportJSON}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Upload size={18} />
                <span className="hidden sm:inline">Import</span>
              </button>
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Save size={18} />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors lg:hidden"
              >
                {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
              >
                <Download size={18} />
                <span className="hidden sm:inline">
                  {isGenerating ? 'Generating...' : 'Download PDF'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <StepWizard />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <div className={`${showPreview ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 h-full overflow-y-auto">
              {renderStep()}

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>

                <span className="text-sm text-gray-600">
                  Step {currentStep + 1} of {totalSteps}
                </span>

                {currentStep < totalSteps - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    className="flex items-center gap-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  >
                    <Download size={18} />
                    {isGenerating ? 'Generating...' : 'Download'}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={`${!showPreview ? 'hidden lg:block' : 'block'} h-[calc(100vh-16rem)]`}>
            <CVPreview />
          </div>
        </div>
      </div>
    </div>
  );
};
