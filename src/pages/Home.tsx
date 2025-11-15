import { useNavigate } from 'react-router-dom';
import { FileText, Zap, Download, Smartphone, ArrowRight } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Build Your Perfect
            </span>
            <br />
            <span className="text-gray-900">Resume in Minutes</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Create stunning, professional resumes with our intuitive builder.
            <span className="text-gradient font-semibold"> Real-time preview</span>, 
            beautiful templates, and instant PDF downloads.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/builder')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              Start Building Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300">
              View Examples
            </button>
          </div>

          {/* Stats */}
          
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <FileText className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Premium Templates
            </h3>
            <p className="text-gray-600">
              Choose from stunning templates crafted by professional designers
            </p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Live Preview
            </h3>
            <p className="text-gray-600">
              Watch your resume come to life with instant real-time updates
            </p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <Download className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Export to PDF
            </h3>
            <p className="text-gray-600">
              Download high-quality PDFs ready to impress any employer
            </p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <Smartphone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Mobile Friendly
            </h3>
            <p className="text-gray-600">
              Build your perfect resume on any device, anywhere, anytime
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border border-blue-100">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Simple Process,</span>
            <br />
            <span className="text-gray-900">Stunning Results</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Get your professional resume ready in just 3 easy steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Choose Template
              </h3>
              <p className="text-gray-600 text-lg">
                Select from our collection of professionally designed templates
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fill Details
              </h3>
              <p className="text-gray-600 text-lg">
                Add your information through our intuitive step-by-step wizard
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Download & Apply
              </h3>
              <p className="text-gray-600 text-lg">
                Export your polished resume and start landing interviews
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => navigate('/builder')}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};