/* eslint-disable react-hooks/purity */
import { useCVStore, Skill } from '../../store/cvStore';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const SkillsStep = () => {
  const { cvData, addSkill, updateSkill, deleteSkill } = useCVStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset } = useForm<Skill>();

  const onSubmit = (data: Skill) => {
    if (editingId) {
      updateSkill(editingId, data);
      setEditingId(null);
    } else {
      addSkill({ ...data, id: Date.now().toString() });
    }
    reset({ id: '', name: '', level: '' });
    setShowForm(false);
  };

  const handleEdit = (skill: Skill) => {
    setEditingId(skill.id);
    reset(skill);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    reset({ id: '', name: '', level: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600">List your technical and professional skills</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {cvData.skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <div>
              <span className="font-medium text-gray-900">{skill.name}</span>
              {skill.level && (
                <span className="text-sm text-gray-600 ml-2">• {skill.level}</span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(skill)}
                className="text-blue-600 hover:text-blue-700 text-xs font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSkill(skill.id)}
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
                Skill Name *
              </label>
              <input
                {...register('name', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="JavaScript"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proficiency Level
              </label>
              <select
                {...register('level')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {editingId ? 'Update' : 'Add'} Skill
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
          Add Skill
        </button>
      )}
    </div>
  );
};
