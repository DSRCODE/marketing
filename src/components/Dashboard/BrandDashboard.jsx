import React, { useState, useEffect } from "react";
import {
  User,
  Camera,
  MapPin,
  Calendar,
  Mail,
  Phone,
  TrendingUp,
  Award,
  Target,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Heart,
  Star,
  Zap,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink,
  BarChart3,
  PieChart,
  Activity,
  ShoppingBag,
  Megaphone,
  Building2,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const BrandDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const promoterProfile = {
    name: "Marcus Thompson",
    username: "@marcuspromo",
    email: "marcus.thompson@email.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    joinDate: "March 2022",
    profileType: "Brand Promoter",
    bio: "Professional brand advocate with 8+ years experience in digital marketing and brand promotion. Specialized in tech, lifestyle, and consumer goods with proven track record of driving sales and brand awareness.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=300&fit=crop",
    verified: true,
    specializations: ["Tech Products", "Consumer Goods", "B2B Services"],
    networkReach: {
      instagram: "85K",
      twitter: "62K",
      linkedin: "45K",
    },
  };

  const performanceStats = {
    totalEarnings: 38950,
    brandsPromoted: 67,
    conversionRate: 12.4,
    avgROI: 340,
    totalCampaigns: 89,
    activeBrands: 12,
    successfulLaunches: 34,
    clientRetention: 87,
  };

  const activeBrandCampaigns = [
    {
      id: 1,
      brand: "TechNova Solutions",
      product: "Smart Home Security System",
      status: "active",
      earnings: 2400,
      conversions: 127,
      conversionRate: "14.2%",
      roi: "380%",
      startDate: "2 weeks ago",
      endDate: "3 weeks left",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
      progress: 65,
    },
    {
      id: 2,
      brand: "EcoLife Products",
      product: "Sustainable Kitchen Essentials",
      status: "completed",
      earnings: 1850,
      conversions: 98,
      conversionRate: "16.8%",
      roi: "425%",
      completedDate: "5 days ago",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop",
      progress: 100,
    },
    {
      id: 3,
      brand: "FitnessPro Equipment",
      product: "Home Gym Setup Bundle",
      status: "launching",
      earnings: 3200,
      conversions: 0,
      conversionRate: "0%",
      roi: "0%",
      launchDate: "Starting tomorrow",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      progress: 10,
    },
  ];

  const brandPortfolio = [
    {
      name: "TechNova",
      category: "Technology",
      campaigns: 8,
      revenue: "$12,400",
      logo: "🚀",
    },
    {
      name: "EcoLife",
      category: "Lifestyle",
      campaigns: 12,
      revenue: "$8,750",
      logo: "🌱",
    },
    {
      name: "FitnessPro",
      category: "Health & Fitness",
      campaigns: 6,
      revenue: "$9,200",
      logo: "💪",
    },
    {
      name: "StyleHub",
      category: "Fashion",
      campaigns: 4,
      revenue: "$5,600",
      logo: "👔",
    },
  ];

  const achievements = [
    {
      icon: Target,
      title: "Conversion Master",
      description: "12%+ average conversion rate",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: TrendingUp,
      title: "ROI Champion",
      description: "340%+ average ROI",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Building2,
      title: "Brand Builder",
      description: "Promoted 67+ brands",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: Award,
      title: "Top Promoter",
      description: "87% client retention rate",
      color: "from-purple-500 to-violet-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Section */}
        <div
          className={`relative mb-8 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Cover Image */}
          <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
            <img
              src={promoterProfile.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">
                Professional Brand Promoter
              </h2>
              <p className="text-gray-200">
                Driving results through strategic brand advocacy
              </p>
            </div>
            <button className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8">
            <div className="flex items-center space-x-4 justify-end">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Edit Profile
              </button>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={promoterProfile.avatar}
                  alt={promoterProfile.name}
                  className="w-64 h-64 rounded-full object-cover border-4 border-pink-500/50 shadow-2xl"
                />
                {promoterProfile.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-rose-400 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
                <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {promoterProfile.name}
                    </h1>
                    <p className="text-pink-400 text-lg font-medium">
                      {promoterProfile.username}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="inline-block bg-gradient-to-r from-pink-500 to-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {promoterProfile.profileType}
                      </span>
                      <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                        <Megaphone className="w-4 h-4 text-pink-400 mr-2" />
                        <span className="text-white text-sm font-medium">
                          Professional
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {promoterProfile.bio}
                </p>

                {/* Specializations */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {promoterProfile.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{promoterProfile.email}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{promoterProfile.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{promoterProfile.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Since {promoterProfile.joinDate}
                    </span>
                  </div>
                </div>

                {/* Network Reach */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-gradient-to-r from-pink-500/20 to-rose-400/20 px-4 py-2 rounded-full border border-pink-500/30">
                    <Instagram className="w-5 h-5 text-pink-400 mr-2" />
                    <span className="text-white font-medium">
                      {promoterProfile.networkReach.instagram}
                    </span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-400/20 px-4 py-2 rounded-full border border-blue-500/30">
                    <Twitter className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">
                      {promoterProfile.networkReach.twitter}
                    </span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-indigo-500/20 to-indigo-400/20 px-4 py-2 rounded-full border border-indigo-500/30">
                    <Globe className="w-5 h-5 text-indigo-400 mr-2" />
                    <span className="text-white font-medium">
                      {promoterProfile.networkReach.linkedin}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: DollarSign,
                title: "Total Earnings",
                value: `$${performanceStats.totalEarnings.toLocaleString()}`,
                color: "from-green-500 to-emerald-400",
                change: "+18%",
              },
              {
                icon: Building2,
                title: "Brands Promoted",
                value: performanceStats.brandsPromoted,
                color: "from-blue-500 to-cyan-400",
                change: "+8",
              },
              {
                icon: Target,
                title: "Conversion Rate",
                value: `${performanceStats.conversionRate}%`,
                color: "from-pink-500 to-rose-400",
                change: "+2.1%",
              },
              {
                icon: TrendingUp,
                title: "Average ROI",
                value: `${performanceStats.avgROI}%`,
                color: "from-purple-500 to-violet-400",
                change: "+45%",
              },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className={`bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-pink-400 mr-3" />
              Professional Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div
                    className={`bg-gradient-to-r ${achievement.color} p-3 rounded-full w-fit mx-auto mb-4`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Portfolio */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <ShoppingBag className="w-6 h-6 text-pink-400 mr-3" />
              Brand Portfolio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {brandPortfolio.map((brand, index) => (
                <div
                  key={brand.name}
                  className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${(index + 8) * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{brand.logo}</div>
                    <h3 className="text-white font-bold mb-2">{brand.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {brand.category}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Campaigns:</span>
                        <span className="text-white font-medium">
                          {brand.campaigns}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Revenue:</span>
                        <span className="text-green-400 font-medium">
                          {brand.revenue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Brand Campaigns */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <BarChart3 className="w-6 h-6 text-pink-400 mr-3" />
                Active Brand Campaigns
              </h2>
              <button className="text-pink-400 hover:text-pink-300 text-sm font-medium">
                View All Campaigns
              </button>
            </div>

            <div className="space-y-6">
              {activeBrandCampaigns.map((campaign, index) => (
                <div
                  key={campaign.id}
                  className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300"
                  style={{ animationDelay: `${(index + 12) * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={campaign.image}
                        alt={campaign.brand}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-bold text-lg">
                            {campaign.brand}
                          </h3>
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              campaign.status === "completed"
                                ? "bg-green-900/50 text-green-400 border border-green-400/30"
                                : campaign.status === "active"
                                ? "bg-blue-900/50 text-blue-400 border border-blue-400/30"
                                : "bg-yellow-900/50 text-yellow-400 border border-yellow-400/30"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{campaign.product}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      {campaign.completedDate ||
                        campaign.endDate ||
                        campaign.launchDate}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Campaign Progress
                      </span>
                      <span className="text-white text-sm font-medium">
                        {campaign.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          campaign.status === "completed"
                            ? "bg-green-400"
                            : campaign.status === "active"
                            ? "bg-blue-400"
                            : "bg-yellow-400"
                        }`}
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Earnings</p>
                      <p className="text-white font-bold">
                        ${campaign.earnings}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Conversions</p>
                      <p className="text-white font-bold">
                        {campaign.conversions}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Conv. Rate</p>
                      <p className="text-white font-bold">
                        {campaign.conversionRate}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">ROI</p>
                      <div className="flex items-center">
                        {campaign.rating ? (
                          <>
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-white font-bold">
                              {campaign.rating}
                            </span>
                          </>
                        ) : (
                          <span className="text-white font-bold">
                            {campaign.roi}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
