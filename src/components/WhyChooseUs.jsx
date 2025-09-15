import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ---------------------------
   CountingNumber Component
---------------------------- */
const CountingNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericPart = parseInt(target.replace(/[^0-9]/g, ""));
    const increment = numericPart / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  const suffix = target.replace(/[0-9]/g, "");
  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ---------------------------
   WhyChooseUs Component
---------------------------- */
const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Perfect Matches",
      description:
        "AI-powered algorithm connects brands with the ideal influencers based on audience demographics, engagement rates, and brand alignment.",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Maximize ROI",
      description:
        "Track campaign performance in real-time with detailed analytics, ensuring every collaboration delivers measurable results.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description:
        "End-to-end security with verified profiles, secure payments, and contract management to protect all parties.",
      color: "from-pink-600 to-purple-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Launch campaigns in minutes with our streamlined workflow. From discovery to execution in record time.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "Join a thriving community of creators and brands building authentic relationships that last beyond single campaigns.",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "Creative Freedom",
      description:
        "Empower influencers with creative control while ensuring brand guidelines are met through collaborative tools.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const stats = [
    { number: "1000+", label: "Active Influencers", delay: "0ms" },
    { number: "50+", label: "Brand Partners", delay: "200ms" },
    { number: "95%", label: "Success Rate", delay: "400ms" },
    { number: "200+", label: "Campaign Value", delay: "600ms" },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/10 to-purple-500/10 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
            Why Choose
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Social Spark?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where influencers and brands create magic together. Experience the
            future of
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-semibold">
              {" "}
              authentic collaboration
            </span>
            .
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: stat.delay }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  <CountingNumber target={stat.number} duration={2000} />
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 relative overflow-hidden h-full">
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className={`absolute bottom-6 right-6 transform transition-all duration-300 ${
                      hoveredCard === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <ArrowRight className="w-6 h-6 text-pink-400" />
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), transparent)",
                        backgroundSize: "200% 100%",
                        animation:
                          hoveredCard === index
                            ? "shimmer 2s infinite"
                            : "none",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
            <span className="relative z-10">Start Your Journey</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-400 mt-4">
            Join thousands of successful collaborations
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
