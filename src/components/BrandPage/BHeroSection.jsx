import { ArrowRight, Star, Users, TrendingUp, Zap, Play } from "lucide-react";

const BHeroSection = ({ isVisible }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-purple-600/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible.hero
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-pink-400 mr-2" />
            <span className="text-sm text-gray-300">
              Join 10,000+ Brand Promoters
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Amplify Your Influence,
            <br />
            <span className="text-pink-400">Monetize Your Passion</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with premium brands, create authentic content, and turn your
            social presence into a thriving business with Social Spark's
            revolutionary promoter platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
              Start Earning Today
              <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </button>

            <button className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-pink-400 mr-2" />
              <span>10K+ Promoters</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              <span>$2M+ Earned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BHeroSection;
