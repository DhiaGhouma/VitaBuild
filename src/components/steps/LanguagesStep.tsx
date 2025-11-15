import { useCVStore, Language } from '../../store/cvStore';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const LanguagesStep = () => {
  const { cvData, addLanguage, updateLanguage, deleteLanguage } = useCVStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset } = useForm<Language>();

  const onSubmit = (data: Language) => {
    if (editingId) {
      updateLanguage(editingId, data);
      setEditingId(null);
    } else {
      addLanguage({ ...data, id: Date.now().toString() });
    }
    reset({ id: '', name: '', proficiency: '' });
    setShowForm(false);
  };

  const handleEdit = (lang: Language) => {
    setEditingId(lang.id);
    reset(lang);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    reset({ id: '', name: '', proficiency: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Languages</h2>
        <p className="text-gray-600">Add languages you speak</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {cvData.languages.map((lang) => (
          <div
            key={lang.id}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <div>
              <span className="font-medium text-gray-900">{lang.name}</span>
              <span className="text-sm text-gray-600 ml-2">• {lang.proficiency}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(lang)}
                className="text-blue-600 hover:text-blue-700 text-xs font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => deleteLanguage(lang.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language *
              </label>
              <input
                {...register('name', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="English"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proficiency *
              </label>
              <select
                {...register('proficiency', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select proficiency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Professional">Professional</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {editingId ? 'Update' : 'Add'} Language
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
          Add Language
        </button>
      )}
    </div>
  );
};
