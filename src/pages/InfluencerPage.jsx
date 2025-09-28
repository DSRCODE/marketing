import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Crown,
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  Camera,
  Heart,
  MessageSquare,
  Share2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const InfluncerPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Crown,
      title: "Premium Brand Partnerships",
      description:
        "Connect with top-tier brands looking for authentic influencers to showcase their products to engaged audiences.",
    },
    {
      icon: BarChart3,
      title: "Advanced Growth Analytics",
      description:
        "Comprehensive insights into your audience demographics, engagement rates, and content performance across all platforms.",
    },
    {
      icon: Sparkles,
      title: "Content Creation Tools",
      description:
        "Access professional tools and templates to create stunning content that captivates your audience and drives engagement.",
    },
    {
      icon: Shield,
      title: "Reputation Management",
      description:
        "Build and protect your personal brand with our reputation tracking and management tools designed for influencers.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Build Your Influence Profile",
      description:
        "Showcase your unique voice, content style, and audience demographics to attract premium brand partnerships.",
    },
    {
      number: "02",
      title: "Discover Brand Opportunities",
      description:
        "Browse curated brand collaboration opportunities that align with your niche and personal brand values.",
    },
    {
      number: "03",
      title: "Create Authentic Content",
      description:
        "Craft compelling, authentic content that resonates with your audience while meeting brand objectives.",
    },
    {
      number: "04",
      title: "Scale Your Influence",
      description:
        "Grow your following, increase engagement, and build lasting relationships with brands and your community.",
    },
  ];

  const benefits = [
    "Exclusive brand collaborations",
    "Advanced audience insights",
    "Content creation resources",
    "Personal brand growth tools",
    "Influencer community network",
    "Performance-based rewards",
  ];

  const platforms = [
    { name: "Instagram", color: "from-pink-400 to-purple-600" },
    { name: "TikTok", color: "from-purple-400 to-pink-600" },
    { name: "YouTube", color: "from-red-400 to-pink-500" },
    { name: "Twitter", color: "from-blue-400 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-pink-600/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Crown className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-gray-300">
                Join 25,000+ Top Influencers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent leading-tight">
              Elevate Your Influence,
              <br />
              <span className="text-purple-400">Amplify Your Impact</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your social presence into a powerful influence empire.
              Connect with premium brands, grow your audience, and build
              meaningful relationships that drive real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button onClick={()=>navigate('/login')} className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                See Success Stories
              </button>
            </div>

            <div className="mt-16 flex justify-center items-center gap-8 text-gray-400 flex-wrap">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 Influencer Rating</span>
              </div>
              <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span>25K+ Influencers</span>
              </div>
              <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-pink-400 mr-2" />
                <span>500M+ Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Social Spark Section */}
      <section id="why" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.why
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Top Influencers Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide the tools, insights, and opportunities you need to
              transform your influence into meaningful impact and sustainable
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  isVisible.why
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section id="platforms" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.platforms
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multi-Platform <span className="text-pink-400">Influence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage and grow your influence across all major social platforms
              from one unified dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${
                  isVisible.platforms
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold">
                    {platform.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold group-hover:text-purple-400 transition-colors">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>

          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              isVisible.platforms
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
              <Camera className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-400 text-sm">
                Professional tools for every platform
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
              <BarChart3 className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cross-Platform Analytics</h3>
              <p className="text-gray-400 text-sm">
                Unified insights across all channels
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
              <Share2 className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-400 text-sm">
                Optimize posting times for maximum reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.how
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Influence <span className="text-purple-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From building your profile to scaling your influence, we guide you
              every step of the way to maximize your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 transform ${
                  isVisible.how
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-14 left-full w-8 h-px bg-gradient-to-r from-purple-500 to-transparent transform translate-x-4"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible.benefits
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Maximize Your{" "}
                <span className="text-purple-400">Influence Impact</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful influencers who've transformed
                their social presence into a powerful force for change and
                growth.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Start Growing
                <ChevronRight className="w-5 h-5 ml-2 inline-block" />
              </button>
            </div>

            <div
              className={`relative transition-all duration-1000 transform ${
                isVisible.benefits
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    2.5M+
                  </div>
                  <p className="text-gray-300">Average Monthly Reach</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <Heart className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-pink-400">95%</div>
                    <div className="text-xs text-gray-400">Engagement Rate</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-purple-400">
                      340%
                    </div>
                    <div className="text-xs text-gray-400">Growth Rate</div>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-xl text-center">
                  <MessageSquare className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">15,000+</div>
                  <div className="text-xs text-gray-400">
                    Daily Interactions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
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
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Amplify
              </span>{" "}
              Your Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the community of influential creators who are making a
              difference. Start building meaningful connections and growing your
              influence today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Join the Elite
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </button>

              <button className="border-2 border-gray-600 hover:border-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluncerPage;
