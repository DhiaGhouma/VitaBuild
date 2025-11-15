/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCVStore } from '../store/cvStore';
import { Check, Sparkles, Star, Zap } from 'lucide-react';
import { memo } from 'react';

const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean single-column layout with blue accents. Perfect for tech and corporate roles.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-400',
    popular: true,
    preview: (
      <div className="w-full h-full bg-white p-4 text-[5px] leading-[1.3] font-sans">
        {/* Header */}
        <div className="border-b-[3px] border-blue-500 pb-2 mb-2">
          <div className="font-bold text-[9px] text-gray-900 tracking-tight">JOHN ALEXANDER DOE</div>
          <div className="text-blue-600 text-[6px] font-semibold mt-0.5">Senior Software Engineer</div>
          <div className="flex gap-2 mt-1 text-[4px] text-gray-600">
            <span>📧 john.doe@email.com</span>
            <span>•</span>
            <span>📱 +1 (555) 123-4567</span>
            <span>•</span>
            <span>📍 San Francisco, CA</span>
          </div>
        </div>
        
        {/* Experience */}
        <div className="mb-2">
          <div className="font-bold text-[6px] text-blue-600 mb-1 uppercase tracking-wide">Professional Experience</div>
          <div className="space-y-1.5">
            <div className="bg-gray-50 p-1.5 rounded-sm border-l-[2px] border-blue-400">
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-[5px] text-gray-900">Senior Software Engineer</div>
                <div className="text-[4px] text-gray-600">2021 - Present</div>
              </div>
              <div className="text-[4.5px] text-gray-700 mb-0.5">Tech Solutions Inc. • San Francisco, CA</div>
              <div className="text-[4px] text-gray-600 space-y-0.5">
                <div>• Led development of cloud-based platform serving 100K+ users</div>
                <div>• Improved system performance by 40% through optimization</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-1.5 rounded-sm border-l-[2px] border-blue-300">
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-[5px] text-gray-900">Software Engineer</div>
                <div className="text-[4px] text-gray-600">2019 - 2021</div>
              </div>
              <div className="text-[4.5px] text-gray-700 mb-0.5">StartUp Ventures • Remote</div>
              <div className="text-[4px] text-gray-600 space-y-0.5">
                <div>• Built responsive web applications using React and Node.js</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <div className="font-bold text-[6px] text-blue-600 mb-1 uppercase tracking-wide">Technical Skills</div>
          <div className="flex gap-1 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[4px] font-medium">React</span>
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[4px] font-medium">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[4px] font-medium">Node.js</span>
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[4px] font-medium">Python</span>
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[4px] font-medium">AWS</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal Elegant',
    description: 'Clean centered design with serif typography. Great for consulting and finance.',
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-400',
    popular: false,
    preview: (
      <div className="w-full h-full bg-white p-4 text-[5px] leading-[1.4] text-center">
        {/* Header */}
        <div className="mb-2 pb-2 border-b border-gray-300">
          <div className="font-bold text-[10px] text-gray-900 tracking-wide mb-0.5" style={{fontFamily: 'Georgia, serif'}}>JOHN DOE</div>
          <div className="text-[5.5px] text-gray-700 mb-1">Senior Financial Analyst</div>
          <div className="text-[4px] text-gray-600">
            john.doe@email.com • +1 (555) 123-4567 • New York, NY
          </div>
        </div>
        
        {/* Professional Summary */}
        <div className="mb-2 text-left">
          <div className="font-bold text-[6px] text-gray-900 mb-0.5 uppercase tracking-wider text-center">Professional Summary</div>
          <div className="text-[4.5px] text-gray-700 text-justify leading-[1.5]">
            Results-driven financial analyst with 8+ years of experience in investment banking and corporate finance. Proven track record of delivering strategic insights...
          </div>
        </div>
        
        {/* Experience */}
        <div className="mb-2 text-left">
          <div className="font-bold text-[6px] text-gray-900 mb-1 uppercase tracking-wider text-center">Experience</div>
          <div className="space-y-1.5">
            <div>
              <div className="font-bold text-[5px] text-gray-900">Senior Financial Analyst</div>
              <div className="text-[4.5px] text-gray-600 italic">Goldman Sachs • New York, NY • 2020 - Present</div>
              <div className="text-[4px] text-gray-700 mt-0.5">
                • Managed portfolio of $50M+ in assets
              </div>
            </div>
            <div>
              <div className="font-bold text-[5px] text-gray-900">Financial Analyst</div>
              <div className="text-[4.5px] text-gray-600 italic">JP Morgan Chase • New York, NY • 2017 - 2020</div>
              <div className="text-[4px] text-gray-700 mt-0.5">
                • Conducted financial modeling and valuation analysis
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="text-left">
          <div className="font-bold text-[6px] text-gray-900 mb-0.5 uppercase tracking-wider text-center">Education</div>
          <div className="text-center">
            <div className="font-bold text-[5px] text-gray-900">MBA, Finance</div>
            <div className="text-[4.5px] text-gray-600 italic">Harvard Business School • 2017</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'professional',
    name: 'Professional Sidebar',
    description: 'Two-column layout with colored sidebar. Ideal for experienced professionals.',
    color: 'from-teal-600 to-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-400',
    popular: true,
    preview: (
      <div className="w-full h-full bg-white flex text-[5px] leading-[1.3]">
        {/* Left Sidebar */}
        <div className="w-[35%] bg-slate-800 text-white p-2.5">
          <div className="mb-2">
            <div className="font-bold text-[8px] mb-0.5 leading-tight">JOHN DOE</div>
            <div className="text-[5px] text-teal-300">Marketing Director</div>
          </div>
          
          <div className="mb-2">
            <div className="font-bold text-[5.5px] mb-1 text-teal-300 uppercase tracking-wide">Contact</div>
            <div className="text-[4px] space-y-0.5 text-gray-300">
              <div>📧 john.doe@email.com</div>
              <div>📱 +1 (555) 123-4567</div>
              <div>📍 Chicago, IL</div>
              <div>🔗 linkedin.com/in/johndoe</div>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="font-bold text-[5.5px] mb-1 text-teal-300 uppercase tracking-wide">Skills</div>
            <div className="space-y-1">
              <div>
                <div className="text-[4.5px] mb-0.5">Digital Marketing</div>
                <div className="bg-gray-700 h-0.5 rounded-full">
                  <div className="bg-teal-400 h-full w-[90%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-[4.5px] mb-0.5">SEO/SEM</div>
                <div className="bg-gray-700 h-0.5 rounded-full">
                  <div className="bg-teal-400 h-full w-[85%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-[4.5px] mb-0.5">Content Strategy</div>
                <div className="bg-gray-700 h-0.5 rounded-full">
                  <div className="bg-teal-400 h-full w-[80%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-bold text-[5.5px] mb-0.5 text-teal-300 uppercase tracking-wide">Languages</div>
            <div className="text-[4.5px] space-y-0.5 text-gray-300">
              <div>English - Native</div>
              <div>Spanish - Fluent</div>
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 p-2.5">
          <div className="mb-2">
            <div className="font-bold text-[6px] border-b-[2px] border-teal-600 pb-0.5 mb-1 uppercase tracking-wide">Professional Summary</div>
            <div className="text-[4.5px] text-gray-700 leading-[1.4]">
              Strategic marketing leader with 10+ years driving growth for Fortune 500 companies. Expert in digital transformation and brand development.
            </div>
          </div>
          
          <div className="mb-2">
            <div className="font-bold text-[6px] border-b-[2px] border-teal-600 pb-0.5 mb-1 uppercase tracking-wide">Experience</div>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between items-start mb-0.5">
                  <div className="font-bold text-[5px]">Marketing Director</div>
                  <div className="text-[4px] text-gray-600">2020 - Present</div>
                </div>
                <div className="text-[4.5px] text-teal-700 mb-0.5">Acme Corporation</div>
                <div className="text-[4px] text-gray-600 space-y-0.5">
                  <div>• Increased brand awareness by 150% through integrated campaigns</div>
                  <div>• Managed $5M annual marketing budget</div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-0.5">
                  <div className="font-bold text-[5px]">Senior Marketing Manager</div>
                  <div className="text-[4px] text-gray-600">2016 - 2020</div>
                </div>
                <div className="text-[4.5px] text-teal-700 mb-0.5">Tech Innovations Inc.</div>
                <div className="text-[4px] text-gray-600 space-y-0.5">
                  <div>• Led digital transformation initiatives</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-bold text-[6px] border-b-[2px] border-teal-600 pb-0.5 mb-1 uppercase tracking-wide">Education</div>
            <div className="font-bold text-[5px]">MBA, Marketing</div>
            <div className="text-[4.5px] text-gray-600">Northwestern University • 2016</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'creative',
    name: 'Creative Bold',
    description: 'Vibrant design with unique sections. Perfect for designers and creative roles.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-400',
    popular: false,
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 p-3 text-[5px] leading-[1.3]">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-2 rounded-lg mb-2 shadow-md">
          <div className="font-bold text-[9px] mb-0.5">JANE SMITH</div>
          <div className="text-[5.5px] font-medium">UX/UI Designer & Brand Strategist</div>
          <div className="flex gap-2 mt-1 text-[4px]">
            <span>✉️ jane.smith@design.com</span>
            <span>🌐 janesmith.design</span>
            <span>📍 Austin, TX</span>
          </div>
        </div>
        
        {/* About */}
        <div className="bg-white rounded-lg p-1.5 mb-1.5 border-l-[3px] border-purple-500 shadow-sm">
          <div className="font-bold text-[5.5px] text-purple-600 mb-0.5 flex items-center gap-0.5">
            <span>✨</span> ABOUT ME
          </div>
          <div className="text-[4.5px] text-gray-700 leading-[1.4]">
            Passionate designer with 6+ years creating user-centered digital experiences. Specialized in brand identity and interface design.
          </div>
        </div>
        
        {/* Experience */}
        <div className="bg-white rounded-lg p-1.5 mb-1.5 border-l-[3px] border-pink-500 shadow-sm">
          <div className="font-bold text-[5.5px] text-pink-600 mb-1 flex items-center gap-0.5">
            <span>💼</span> EXPERIENCE
          </div>
          <div className="space-y-1">
            <div className="border-l-[2px] border-purple-300 pl-1">
              <div className="font-bold text-[5px] text-gray-900">Senior UX Designer</div>
              <div className="text-[4.5px] text-purple-600">Creative Agency • 2021 - Present</div>
              <div className="text-[4px] text-gray-600 mt-0.5">
                • Redesigned mobile app increasing user engagement by 200%
              </div>
            </div>
            
            <div className="border-l-[2px] border-pink-300 pl-1">
              <div className="font-bold text-[5px] text-gray-900">UX Designer</div>
              <div className="text-[4.5px] text-pink-600">Design Studio • 2018 - 2021</div>
              <div className="text-[4px] text-gray-600 mt-0.5">
                • Created design systems for 10+ client projects
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="bg-white rounded-lg p-1.5 border-l-[3px] border-purple-500 shadow-sm">
          <div className="font-bold text-[5.5px] text-purple-600 mb-1 flex items-center gap-0.5">
            <span>🎨</span> DESIGN SKILLS
          </div>
          <div className="flex gap-1 flex-wrap">
            <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full text-[4px] font-medium">Figma</span>
            <span className="bg-pink-200 text-pink-800 px-1.5 py-0.5 rounded-full text-[4px] font-medium">Adobe XD</span>
            <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full text-[4px] font-medium">Sketch</span>
            <span className="bg-pink-200 text-pink-800 px-1.5 py-0.5 rounded-full text-[4px] font-medium">Prototyping</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'executive',
    name: 'Executive Premium',
    description: 'Sophisticated serif design for C-suite and senior management positions.',
    color: 'from-slate-700 to-slate-900',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-400',
    popular: true,
    preview: (
      <div className="w-full h-full bg-white p-4 text-[5px] leading-[1.4]" style={{fontFamily: 'Georgia, serif'}}>
        {/* Header */}
        <div className="border-b-[3px] border-slate-800 pb-2 mb-2">
          <div className="font-bold text-[10px] text-slate-900 tracking-wide mb-0.5">MICHAEL ANDERSON</div>
          <div className="text-[6px] text-slate-600 uppercase tracking-widest font-normal">Chief Executive Officer</div>
          <div className="flex gap-2 mt-1.5 text-[4.5px] text-slate-600">
            <span>michael.anderson@company.com</span>
            <span>•</span>
            <span>+1 (555) 987-6543</span>
            <span>•</span>
            <span>Boston, MA</span>
          </div>
        </div>
        
        {/* Executive Summary */}
        <div className="mb-2">
          <div className="font-bold text-[6.5px] text-slate-800 mb-1 uppercase tracking-widest">Executive Profile</div>
          <div className="text-[4.5px] text-gray-700 leading-[1.5] text-justify">
            Visionary executive with 20+ years of leadership experience driving organizational growth and innovation. Proven track record of building high-performing teams and delivering sustainable results across Fortune 100 companies.
          </div>
        </div>
        
        {/* Professional Experience */}
        <div className="mb-2">
          <div className="font-bold text-[6.5px] text-slate-800 mb-1 uppercase tracking-widest">Leadership Experience</div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-[5.5px] text-slate-900">Chief Executive Officer</div>
                <div className="text-[4.5px] text-slate-600">2018 - Present</div>
              </div>
              <div className="text-[5px] text-slate-700 italic mb-0.5">Global Tech Solutions • Boston, MA</div>
              <div className="text-[4.5px] text-gray-700 space-y-0.5 leading-[1.4]">
                <div>• Scaled company from $50M to $500M in annual revenue</div>
                <div>• Led successful IPO raising $200M in capital</div>
                <div>• Expanded operations to 15 international markets</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-[5.5px] text-slate-900">Chief Operating Officer</div>
                <div className="text-[4.5px] text-slate-600">2014 - 2018</div>
              </div>
              <div className="text-[5px] text-slate-700 italic mb-0.5">Enterprise Corporation • New York, NY</div>
              <div className="text-[4.5px] text-gray-700 space-y-0.5 leading-[1.4]">
                <div>• Optimized operations reducing costs by $25M annually</div>
                <div>• Built executive team of 50+ senior leaders</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div>
          <div className="font-bold text-[6.5px] text-slate-800 mb-1 uppercase tracking-widest">Education & Credentials</div>
          <div>
            <div className="font-bold text-[5px] text-slate-900">MBA, Executive Leadership</div>
            <div className="text-[4.5px] text-slate-600 italic">Harvard Business School • 2010</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'technical',
    name: 'Technical Developer',
    description: 'Code-inspired design with monospace fonts. Ideal for software developers.',
    color: 'from-emerald-600 to-cyan-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
    popular: true,
    preview: (
      <div className="w-full h-full bg-slate-900 text-green-400 p-3 text-[5px] leading-[1.3]" style={{fontFamily: 'monospace'}}>
        {/* Terminal-style Header */}
        <div className="bg-slate-800 border border-green-500/30 rounded p-1.5 mb-2">
          <div className="text-[4px] text-green-500 mb-1">$ whoami</div>
          <div className="font-bold text-[8px] text-green-300">ALEX_RODRIGUEZ</div>
          <div className="text-[5px] text-cyan-400 mb-1">// Full Stack Developer</div>
          <div className="text-[4px] text-gray-400 space-y-0.5">
            <div>📧 alex.rodriguez@dev.com</div>
            <div>🐙 github.com/alexrodriguez</div>
            <div>📍 Seattle, WA</div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-2">
          <div className="text-[5.5px] text-cyan-400 mb-1 font-bold">const skills = {'{'}</div>
          <div className="pl-2 text-[4.5px] space-y-0.5 text-green-300">
            <div>  frontend: <span className="text-yellow-400">["React", "Vue", "TypeScript"]</span>,</div>
            <div>  backend: <span className="text-yellow-400">["Node.js", "Python", "Go"]</span>,</div>
            <div>  database: <span className="text-yellow-400">["PostgreSQL", "MongoDB"]</span>,</div>
            <div>  devops: <span className="text-yellow-400">["Docker", "K8s", "AWS"]</span></div>
          </div>
          <div className="text-[5.5px] text-cyan-400">{'}'}</div>
        </div>
        
        {/* Experience */}
        <div className="mb-2">
          <div className="text-[5.5px] text-cyan-400 mb-1 font-bold">// Work Experience</div>
          <div className="space-y-1.5">
            <div className="bg-slate-800 border-l-[2px] border-green-500 p-1 rounded">
              <div className="flex justify-between text-[4.5px] mb-0.5">
                <div className="text-green-300 font-bold">Senior Full Stack Developer</div>
                <div className="text-gray-400">2021-now</div>
              </div>
              <div className="text-[4px] text-cyan-400 mb-0.5">Tech Innovations Inc.</div>
              <div className="text-[4px] text-gray-400">
                → Built microservices architecture serving 1M+ users
              </div>
            </div>
            
            <div className="bg-slate-800 border-l-[2px] border-cyan-500 p-1 rounded">
              <div className="flex justify-between text-[4.5px] mb-0.5">
                <div className="text-green-300 font-bold">Software Engineer</div>
                <div className="text-gray-400">2019-2021</div>
              </div>
              <div className="text-[4px] text-cyan-400 mb-0.5">StartUp Solutions</div>
              <div className="text-[4px] text-gray-400">
                → Developed RESTful APIs and React SPAs
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div>
          <div className="text-[5.5px] text-cyan-400 mb-0.5 font-bold">// Education</div>
          <div className="text-[4.5px] text-green-300">B.S. Computer Science</div>
          <div className="text-[4px] text-gray-400">University of Washington • 2019</div>
        </div>
      </div>
    ),
  },
];

// Memoize template preview to prevent re-renders
const TemplateCard = memo(({ template, isSelected, onSelect }: any) => {
  return (
    <button
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-2xl border-3 transition-all duration-300 hover:scale-[1.02] ${
        isSelected
          ? `${template.borderColor} border-[3px] shadow-2xl ring-2 ring-offset-2 ${template.borderColor.replace('border-', 'ring-')}`
          : 'border-2 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {template.popular && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
          <Star className="w-3 h-3 fill-white" />
          Popular
        </div>
      )}

      {/* Template Preview */}
      <div className={`aspect-[3/4] ${template.bgColor} relative overflow-hidden border-b-2 ${template.borderColor}`}>
        {/* Actual Preview with better scaling */}
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <div className="w-full h-full scale-[0.85] transition-transform group-hover:scale-90 shadow-xl">
            {template.preview}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="text-white text-sm font-bold flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Zap className="w-4 h-4" />
            Click to Select
          </div>
        </div>
      </div>

      {/* Template Info */}
      <div className="p-5 bg-white">
        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
          {template.name}
          {isSelected && (
            <span className={`px-3 py-1 bg-gradient-to-r ${template.color} text-white text-xs rounded-full font-bold shadow-md`}>
              ✓ Selected
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{template.description}</p>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className={`absolute top-3 right-3 bg-gradient-to-br ${template.color} text-white rounded-xl p-2.5 shadow-xl z-20`}>
          <Check size={22} strokeWidth={3} />
        </div>
      )}

      {/* Glow effect on selection */}
      {isSelected && (
        <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-5 pointer-events-none rounded-2xl`}></div>
      )}
    </button>
  );
});

TemplateCard.displayName = 'TemplateCard';

export const TemplateSelector = () => {
  const { selectedTemplate, setTemplate } = useCVStore();

  const handleTemplateSelect = (templateId: string) => {
    setTemplate(templateId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-gradient">Step 1 of 9</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Template</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a professional design that matches your style and industry. All templates are ATS-friendly and optimized for readability.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate === template.id}
            onSelect={() => handleTemplateSelect(template.id)}
          />
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pro Tip */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-5 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Pro Tip!</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can change your template at any time. Your content automatically adapts to the new design without losing any information.
              </p>
            </div>
          </div>
        </div>

        {/* ATS Friendly */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-5 border-2 border-green-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">ATS-Friendly</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All templates are optimized for Applicant Tracking Systems (ATS) used by 90% of companies to scan resumes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Template Comparison */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
        <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">Which Template Is Right For You?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="font-bold text-blue-700 mb-2">Tech & Corporate</div>
            <p className="text-gray-600 text-xs">Modern Professional, Technical Developer</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="font-bold text-green-700 mb-2">Creative & Design</div>
            <p className="text-gray-600 text-xs">Creative Bold, Minimal Elegant</p>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-700 mb-2">Executive & Senior</div>
            <p className="text-gray-600 text-xs">Executive Premium, Professional Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
};