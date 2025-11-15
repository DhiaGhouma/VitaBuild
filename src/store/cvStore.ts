import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  photo: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  sectionOrder: string[];
}

interface CVStore {
  cvData: CVData;
  selectedTemplate: string;
  currentStep: number;
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  setSummary: (summary: string) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  reorderExperience: (startIndex: number, endIndex: number) => void;
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  addProject: (proj: Project) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  addLanguage: (lang: Language) => void;
  updateLanguage: (id: string, lang: Partial<Language>) => void;
  deleteLanguage: (id: string) => void;
  setTemplate: (template: string) => void;
  setCurrentStep: (step: number) => void;
  reorderSections: (sections: string[]) => void;
  exportData: () => string;
  importData: (data: string) => void;
  resetData: () => void;
}

const initialState: CVData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    photo: '',
  },
  summary: '',
  experience: [],
  education: [],
  projects: [],
  skills: [],
  languages: [],
  sectionOrder: ['summary', 'experience', 'education', 'projects', 'skills', 'languages'],
};

export const useCVStore = create<CVStore>()(
  persist(
    (set, get) => ({
      cvData: initialState,
      selectedTemplate: 'modern',
      currentStep: 0,

      setPersonalInfo: (info) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            personalInfo: { ...state.cvData.personalInfo, ...info },
          },
        })),

      setSummary: (summary) =>
        set((state) => ({
          cvData: { ...state.cvData, summary },
        })),

      addExperience: (exp) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            experience: [...state.cvData.experience, exp],
          },
        })),

      updateExperience: (id, exp) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            experience: state.cvData.experience.map((e) =>
              e.id === id ? { ...e, ...exp } : e
            ),
          },
        })),

      deleteExperience: (id) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            experience: state.cvData.experience.filter((e) => e.id !== id),
          },
        })),

      reorderExperience: (startIndex, endIndex) =>
        set((state) => {
          const result = Array.from(state.cvData.experience);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
          return {
            cvData: { ...state.cvData, experience: result },
          };
        }),

      addEducation: (edu) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            education: [...state.cvData.education, edu],
          },
        })),

      updateEducation: (id, edu) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            education: state.cvData.education.map((e) =>
              e.id === id ? { ...e, ...edu } : e
            ),
          },
        })),

      deleteEducation: (id) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            education: state.cvData.education.filter((e) => e.id !== id),
          },
        })),

      addProject: (proj) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            projects: [...state.cvData.projects, proj],
          },
        })),

      updateProject: (id, proj) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            projects: state.cvData.projects.map((p) =>
              p.id === id ? { ...p, ...proj } : p
            ),
          },
        })),

      deleteProject: (id) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            projects: state.cvData.projects.filter((p) => p.id !== id),
          },
        })),

      addSkill: (skill) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            skills: [...state.cvData.skills, skill],
          },
        })),

      updateSkill: (id, skill) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            skills: state.cvData.skills.map((s) =>
              s.id === id ? { ...s, ...skill } : s
            ),
          },
        })),

      deleteSkill: (id) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            skills: state.cvData.skills.filter((s) => s.id !== id),
          },
        })),

      addLanguage: (lang) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            languages: [...state.cvData.languages, lang],
          },
        })),

      updateLanguage: (id, lang) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            languages: state.cvData.languages.map((l) =>
              l.id === id ? { ...l, ...lang } : l
            ),
          },
        })),

      deleteLanguage: (id) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            languages: state.cvData.languages.filter((l) => l.id !== id),
          },
        })),

      setTemplate: (template) => set({ selectedTemplate: template }),

      setCurrentStep: (step) => set({ currentStep: step }),

      reorderSections: (sections) =>
        set((state) => ({
          cvData: { ...state.cvData, sectionOrder: sections },
        })),

      exportData: () => {
        const state = get();
        return JSON.stringify({
          cvData: state.cvData,
          selectedTemplate: state.selectedTemplate,
        });
      },

      importData: (data) => {
        try {
          const parsed = JSON.parse(data);
          set({
            cvData: parsed.cvData,
            selectedTemplate: parsed.selectedTemplate,
          });
        } catch (error) {
          console.error('Failed to import data:', error);
        }
      },

      resetData: () =>
        set({
          cvData: initialState,
          selectedTemplate: 'modern',
          currentStep: 0,
        }),
    }),
    {
      name: 'vitabuild-cv-storage',
    }
  )
);
