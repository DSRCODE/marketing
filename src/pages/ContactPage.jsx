import React, { useState, useEffect } from "react";
import {
  Send,
  User,
  Building2,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    type: "influencer",
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate EmailJS call - replace with your actual EmailJS implementation
      const emailjs = (await import("emailjs-com")).default;

      await emailjs.send(
        "service_hmakres",
        "template_x3ujdbx",
        {
          contact_type: formData.type,
          from_name: formData.name,
          message: formData.message,
        },
        "haNEllZFoDFSgLVVG"
      );

      // Success notification - you can replace this with antd message
      console.log("Message sent successfully!");
      setFormData({ type: "influencer", name: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      // Error notification - you can replace this with antd message
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@socialspark.com",
      description: "Get in touch with our team",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Available 24/7 for support",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Innovation St, Tech City",
      description: "Our headquarters location",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-pink-600/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-20 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to spark your journey? Get in touch with your favorite
              influencer or brand partner. We're here to help you connect and
              grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Send us a Message
                  </h2>
                  <p className="text-gray-400">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Contact Type Selection */}
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-3">
                      Contact Type
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() =>
                          setFormData({ ...formData, type: "influencer" })
                        }
                        className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                          formData.type === "influencer"
                            ? "border-purple-500 bg-purple-500/10 text-purple-400"
                            : "border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500"
                        }`}
                      >
                        <User className="w-5 h-5" />
                        <span>Influencer</span>
                      </button>
                      <button
                        onClick={() =>
                          setFormData({ ...formData, type: "brand" })
                        }
                        className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                          formData.type === "brand"
                            ? "border-pink-500 bg-pink-500/10 text-pink-400"
                            : "border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500"
                        }`}
                      >
                        <Building2 className="w-5 h-5" />
                        <span>Brand</span>
                      </button>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-3">
                      {formData.type === "influencer"
                        ? "Influencer Name (with ownership if needed)"
                        : "Brand Name (with ownership if needed)"}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                        placeholder={
                          formData.type === "influencer"
                            ? "e.g., Sophia (Manager: John)"
                            : "e.g., Nike (Owned by Mark)"
                        }
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        {formData.type === "influencer" ? (
                          <User className="w-5 h-5 text-purple-400" />
                        ) : (
                          <Building2 className="w-5 h-5 text-pink-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-3">
                      Your Message
                    </div>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none resize-none"
                        placeholder="Tell us about your collaboration ideas, questions, or anything else..."
                      />
                      <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-gray-500" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.name.trim() ||
                      !formData.message.trim()
                    }
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    We're here to help you succeed. Whether you're an influencer
                    looking to monetize your content or a brand seeking
                    authentic partnerships, our team is ready to support your
                    journey.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-white font-medium mb-1">
                            {info.info}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    Why Choose Us?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "24/7 Dedicated support",
                      "Fast response time",
                      "Expert guidance",
                      "Secure partnerships",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
