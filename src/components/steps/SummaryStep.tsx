import { useForm } from 'react-hook-form';
import { useCVStore } from '../../store/cvStore';
import { useEffect } from 'react';

export const SummaryStep = () => {
  const { cvData, setSummary } = useCVStore();
  const { register, watch } = useForm({
    defaultValues: { summary: cvData.summary },
  });

  const formData = watch();

  useEffect(() => {
    setSummary(formData.summary);
  }, [formData.summary, setSummary]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Summary</h2>
        <p className="text-gray-600">
          Write a brief overview of your professional background and career objectives
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Summary
        </label>
        <textarea
          {...register('summary')}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable applications and leading cross-functional teams..."
        />
        <p className="text-sm text-gray-500 mt-2">
          Tip: Keep it concise (3-5 sentences) and highlight your key strengths
        </p>
      </div>
    </div>
  );
};
