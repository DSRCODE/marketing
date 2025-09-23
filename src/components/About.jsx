import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Zap,
  Heart,
  Star,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Sparkles,
  Shield,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeValue, setActiveValue] = useState(0);

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

  const stats = [
    { number: "10K+", label: "Active Influencers", icon: Users },
    { number: "500+", label: "Brand Partners", icon: Target },
    { number: "25K+", label: "Successful Campaigns", icon: Award },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description:
        "We believe in fostering genuine relationships between brands and creators, ensuring authentic storytelling that resonates with audiences.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Our platform operates on complete transparency, providing secure transactions and honest communication between all parties.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We continuously evolve our technology to provide cutting-edge tools that empower creators and brands to achieve their goals.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Connecting creators and brands worldwide, we're building a global community that drives positive change through influence.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Co-Founder & CEO",
      bio: "Passionate about connecting creators with brands. 5+ years experience in digital marketing and influencer partnerships. Believes in the power of authentic storytelling.",
      skills: ["Strategy", "Marketing", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@socialspark.com",
      },
      image: "/api/placeholder/300/300", // Placeholder for team member photo
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder & CTO",
      bio: "Tech enthusiast with a vision for seamless creator-brand collaboration. Expert in building scalable platforms that empower communities and drive innovation.",
      skills: ["Full Stack Development", "AI/ML", "Platform Architecture"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@socialspark.com",
      },
      image: "/api/placeholder/300/300", // Placeholder for team member photo
    },
  ];

  const milestones = [
    {
      year: "2022",
      event: "Social Spark Founded",
      description:
        "Started with a vision to revolutionize creator-brand partnerships",
    },
    {
      year: "2023",
      event: "10K Creators Joined",
      description:
        "Reached our first major milestone of active creators on the platform",
    },
    {
      year: "2024",
      event: "Global Expansion",
      description:
        "Expanded to serve creators and brands across multiple countries",
    },
    {
      year: "2025",
      event: "AI-Powered Matching",
      description:
        "Launched advanced AI algorithms for perfect creator-brand matches",
    },
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-purple-600/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-sm text-gray-300">About Social Spark</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Bridging Dreams with
              <br />
              <span className="text-pink-400">Authentic Influence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing how brands connect with creators, building
              meaningful partnerships that drive authentic storytelling and
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible.mission
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To empower creators and brands by providing an innovative
                platform that facilitates authentic partnerships, drives
                meaningful engagement, and creates lasting impact in the digital
                landscape.
              </p>
              <div className="space-y-4">
                {[
                  "Connect authentic creators with relevant brands",
                  "Facilitate transparent and fair partnerships",
                  "Provide tools for measuring real impact",
                  "Build a thriving creator economy",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-pink-400 mr-4" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 transform ${
                isVisible.mission
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the world's most trusted platform for creator-brand
                  collaborations, where authenticity meets opportunity, and
                  where every partnership creates value for creators, brands,
                  and their audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.stats
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-purple-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to building meaningful
              connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 text-center ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.values
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Social Spark
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer ${
                  isVisible.values
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.team
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-purple-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate minds behind Social Spark, dedicated to
              revolutionizing creator-brand partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 overflow-hidden ${
                  isVisible.team
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Photo Section */}
                <div className="relative h-80 bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border-4 border-gray-600 group-hover:border-pink-500/50 transition-colors">
                    <Users className="w-24 h-24 text-gray-400" />
                  </div>
                  {/* Replace above div with actual image when photos are available:
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-gray-600 group-hover:border-pink-500/50 transition-colors"
                  />
                  */}
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full text-sm text-pink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.timeline
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-pink-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              Key milestones in our mission to transform creator-brand
              partnerships
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 to-purple-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative pl-20 transition-all duration-700 transform ${
                    isVisible.timeline
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-4 border-black"></div>

                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-pink-400 mr-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold">
                        {milestone.event}
                      </h3>
                    </div>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 to-purple-900/30"></div>
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
              Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of creators and brands who are already building
              meaningful partnerships on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center">
                Join Our Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="border-2 border-gray-600 hover:border-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
