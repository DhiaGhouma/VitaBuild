import { useCVStore, Education } from '../../store/cvStore';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const EducationStep = () => {
  const { cvData, addEducation, updateEducation, deleteEducation } = useCVStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset } = useForm<Education>();

  const onSubmit = (data: Education) => {
    if (editingId) {
      updateEducation(editingId, data);
      setEditingId(null);
    } else {
      addEducation({ ...data, id: Date.now().toString() });
    }
    reset({
      id: '',
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    setShowForm(false);
  };

  const handleEdit = (edu: Education) => {
    setEditingId(edu.id);
    reset(edu);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    reset({
      id: '',
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Education</h2>
        <p className="text-gray-600">Add your educational background</p>
      </div>

      <div className="space-y-4">
        {cvData.education.map((edu) => (
          <div
            key={edu.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <GripVertical size={16} className="text-gray-400" />
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                </div>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
                {edu.location && <p className="text-sm text-gray-600">{edu.location}</p>}
                <p className="text-sm text-gray-500 mt-1">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(edu)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEducation(edu.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree *
              </label>
              <input
                {...register('degree', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Bachelor of Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution *
              </label>
              <input
                {...register('institution', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="University Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study
              </label>
              <input
                {...register('field')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Computer Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                {...register('location')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Boston, MA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date *
              </label>
              <input
                {...register('startDate', { required: true })}
                type="month"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date *
              </label>
              <input
                {...register('endDate', { required: true })}
                type="month"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Relevant coursework, achievements, or activities..."
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {editingId ? 'Update' : 'Add'} Education
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add Education
        </button>
      )}
    </div>
  );
};
