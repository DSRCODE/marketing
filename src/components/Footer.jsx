import React, { useState, useEffect } from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = (path) => {
    // Replace with your navigation logic
    console.log(`Navigate to: ${path}`);
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: Linkedin,
      href: "#",
      color: "from-blue-500 to-purple-600",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "#",
      color: "from-purple-500 to-pink-600",
      hoverColor: "hover:text-purple-400",
    },
  ];

  const brandLinks = [
    { label: "How it Works", path: "/how-it-works" },
    { label: "Start a Campaign", path: "/start-campaign" },
    // { label: "Pricing", path: "/pricing" },
    { label: "Success Stories", path: "/success-stories" },
  ];

  const influencerLinks = [
    { label: "Join as Influencer", path: "/join-as-influencer" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Community", path: "/community" },
    { label: "Resources", path: "/resources" },
  ];

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Press", path: "/press" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/3 to-purple-500/3 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div
            className={`lg:col-span-2 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onMouseEnter={() => setHoveredSection("brand")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
                  SocialSpark
                </h2>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting brands with the right influencers to create impactful
                digital campaigns.
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium">
                  {" "}
                  Where authenticity meets influence
                </span>
                .
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3 hover:text-pink-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-purple-500" />
                  <span>+91-9782488408</span>
                </div>
                <div className="flex items-center gap-3 hover:text-pink-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-pink-500" />
                  <span>hello@SocialSpark.com</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/30 transition-all duration-300">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest insights and campaign tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* For Brands */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onMouseEnter={() => setHoveredSection("brands")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              For Brands
            </h3>
            <ul className="space-y-4">
              {brandLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-pink-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Influencers */}
          <div
            className={`transform transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onMouseEnter={() => setHoveredSection("influencers")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              For Influencers
            </h3>
            <ul className="space-y-4">
              {influencerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-purple-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Social */}
          <div
            className={`transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onMouseEnter={() => setHoveredSection("social")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              Company
            </h3>

            <ul className="space-y-4 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-pink-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`group w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-pink-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/register")}
              className="mt-6 w-full group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Our Network
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SocialSpark</span>
            <div className="flex items-center gap-1 text-pink-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 fill-current animate-pulse" />
              <span>in India</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Terms of Service
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Star className="w-8 h-8 text-pink-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Sparkles className="w-6 h-6 text-purple-400 animate-bounce" />
        </div>
      </div>
    </footer>
  );
}
