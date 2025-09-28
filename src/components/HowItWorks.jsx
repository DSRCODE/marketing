import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Rocket,
  Users,
  Target,
  BarChart3,
  Upload,
  Bell,
  Play,
  TrendingUp,
  UserCheck,
  Briefcase,
  Eye,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("brands");
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    // Animate steps in sequence
    const timer = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev.length < 4) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [activeTab]);

  useEffect(() => {
    // Reset animation when tab changes
    setVisibleSteps([]);
  }, [activeTab]);

  const brandSteps = [
    {
      icon: Briefcase,
      title: "Create Campaign",
      description:
        "Design your campaign brief with goals, target audience, budget, and creative requirements. Our AI helps optimize your campaign for maximum impact.",
      color: "from-pink-500 to-purple-600",
      detail: "Set budget, timeline & KPIs",
    },
    {
      icon: UserCheck,
      title: "Smart Matching",
      description:
        "Our advanced algorithm analyzes thousands of influencer profiles to find perfect matches based on audience demographics, engagement rates, and brand alignment.",
      color: "from-purple-500 to-pink-600",
      detail: "AI-powered influencer discovery",
    },
    {
      icon: Play,
      title: "Campaign Launch",
      description:
        "Approved influencers create authentic content that resonates with their audience while staying true to your brand message and guidelines.",
      color: "from-pink-600 to-purple-500",
      detail: "Authentic content creation",
    },
    {
      icon: BarChart3,
      title: "Track Results",
      description:
        "Monitor campaign performance with real-time analytics, engagement metrics, reach statistics, and detailed ROI reports to measure success.",
      color: "from-purple-600 to-pink-500",
      detail: "Real-time performance insights",
    },
  ];

  const influencerSteps = [
    {
      icon: Eye,
      title: "Discover Campaigns",
      description:
        "Browse through curated campaigns that match your niche, audience, and content style. Get personalized recommendations based on your profile.",
      color: "from-pink-500 to-purple-600",
      detail: "Personalized campaign feeds",
    },
    {
      icon: Target,
      title: "Apply & Pitch",
      description:
        "Submit compelling proposals showcasing your creative ideas and how you'll bring the brand's vision to life for your unique audience.",
      color: "from-purple-500 to-pink-600",
      detail: "Creative proposal submissions",
    },
    {
      icon: Upload,
      title: "Create Content",
      description:
        "Produce authentic, engaging content that seamlessly integrates the brand message while maintaining your personal voice and creative freedom.",
      color: "from-pink-600 to-purple-500",
      detail: "Authentic brand storytelling",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description:
        "Receive secure payments upon campaign completion with transparent pricing, milestone-based payments, and bonus opportunities for top performance.",
      color: "from-purple-600 to-pink-500",
      detail: "Secure & timely payments",
    },
  ];

  const currentSteps = activeTab === "brands" ? brandSteps : influencerSteps;

  return (
    <section
      className="min-h-screen bg-black py-20 px-4 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/5 to-purple-500/5 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, powerful, and designed for success. See how Social Spark
            transforms
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-semibold">
              {" "}
              collaboration into results
            </span>
            .
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-20">
          <div className="bg-gray-900 p-2 rounded-2xl border border-gray-700 flex gap-4">
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "brands"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Rocket className="w-5 h-5" />
              For Brands
            </button>
            <button
              onClick={() => setActiveTab("influencers")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "influencers"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Users className="w-5 h-5" />
              For Influencers
            </button>
          </div>
        </div>

        {/* Zigzag Steps Layout */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-600 rounded-full opacity-30 transform -translate-x-1/2"></div>

          {/* Animated Progress Line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-600 rounded-full transition-all duration-3000 ease-out transform -translate-x-1/2"
            style={{
              height: `${(visibleSteps.length / currentSteps.length) * 100}%`,
            }}
          ></div>

          {/* Steps */}
          <div className="space-y-24">
            {currentSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${activeTab}-${index}`}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-16 gap-8`}
                >
                  {/* Step Card */}
                  <div
                    className={`w-full lg:w-1/2 transform transition-all duration-700 ease-out ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isLeft
                        ? "lg:-translate-x-20 translate-y-10 opacity-0"
                        : "lg:translate-x-20 translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      ></div>

                      {/* Step Number Badge */}
                      <div
                        className={`absolute -top-4 ${
                          isLeft ? "right-8" : "left-8"
                        } w-12 h-12 rounded-2xl bg-gradient-to-r ${
                          step.color
                        } flex items-center justify-center font-bold text-white text-lg shadow-lg transform ${
                          isVisible ? "scale-100" : "scale-0"
                        } transition-all duration-500`}
                        style={{ transitionDelay: `${index * 250}ms` }}
                      >
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${step.color} p-5 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
                      >
                        <IconComponent className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                            {step.title}
                          </h3>
                        </div>

                        <div
                          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-4 opacity-80`}
                        >
                          {step.detail}
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300 mb-6">
                          {step.description}
                        </p>

                        {/* Action Indicator */}
                        <div
                          className={`flex items-center gap-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                            isLeft ? "justify-start" : "justify-end"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Connection Point */}
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 items-center justify-center shadow-lg relative z-20">
                    <div
                      className={`w-3 h-3 rounded-full bg-white transform transition-all duration-500 ${
                        isVisible ? "scale-100" : "scale-0"
                      }`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                    ></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="w-full lg:w-1/2 hidden lg:block"></div>

                  {/* Connection Arrow for Mobile */}
                  {index < currentSteps.length - 1 && (
                    <div
                      className={`lg:hidden transform transition-all duration-500 ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 400}ms` }}
                    >
                      <ChevronDown className="w-8 h-8 text-pink-400 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to{" "}
              {activeTab === "brands"
                ? "Launch Your Campaign"
                : "Start Creating"}
              ?
            </h3>
            <p className="text-gray-300 mb-6">
              {activeTab === "brands"
                ? "Join thousands of brands that trust Social Spark for authentic influencer partnerships."
                : "Join thousands of creators earning with brands that value authentic content."}
            </p>
            <button onClick={()=> navigate("/login")} className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
              <span className="relative z-10">
                {activeTab === "brands" ? "Start Campaign" : "Join as Creator"}
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
