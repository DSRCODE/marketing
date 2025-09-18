import { ArrowRight } from "lucide-react";

const BCTA = ({ isVisible }) => {
  return (
    <section id="cta" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible.cta
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
              Spark
            </span>{" "}
            Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the revolution of authentic brand promotion. Start building
            meaningful partnerships and earning from your influence today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>

            <button className="border-2 border-gray-600 hover:border-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BCTA;
