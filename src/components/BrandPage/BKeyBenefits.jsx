import { CheckCircle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BKeyBenefits = ({ benefits, isVisible }) => {
  const navigate = useNavigate();
  return (
    <section id="benefits" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible.benefits
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Unlock Your{" "}
              <span className="text-pink-400">Earning Potential</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful promoters who've transformed their
              social presence into a sustainable income stream.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center group">
                  <CheckCircle className="w-6 h-6 text-pink-400 mr-4 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
            >
              Join Now
              <ChevronRight className="w-5 h-5 ml-2 inline-block" />
            </button>
          </div>

          {/* Right side */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible.benefits
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
                  $5,247
                </div>
                <p className="text-gray-300 mb-6">Average Monthly Earnings</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-pink-400">850+</div>
                    <div className="text-sm text-gray-400">
                      Active Campaigns
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">
                      98%
                    </div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BKeyBenefits;
