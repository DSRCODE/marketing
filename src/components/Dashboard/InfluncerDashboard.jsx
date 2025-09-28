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
} from "lucide-react";

const InfluncerDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const userProfile = {
    name: "Sarah Johnson",
    username: "@sarahinfluencer",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    joinDate: "January 2023",
    profileType: "Lifestyle Influencer",
    bio: "Passionate about sustainable living, fashion, and wellness. Helping brands connect with conscious consumers through authentic storytelling.",
    avatar:
      "https://images.unsplash.com/photo-1702369412530-0a4ab9980f9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=300&fit=crop",
    verified: true,
    socialMedia: {
      instagram: "125K",
      twitter: "45K",
      youtube: "85K",
    },
  };

  const performanceStats = {
    totalEarnings: 24750,
    campaignsCompleted: 42,
    successRate: 96,
    avgEngagement: 8.7,
    totalReach: "2.5M",
    brandPartnerships: 28,
    contentCreated: 156,
    averageRating: 4.9,
  };

  const recentCampaigns = [
    {
      id: 1,
      brand: "EcoBeauty Co.",
      campaign: "Sustainable Skincare Launch",
      status: "completed",
      earnings: 1200,
      reach: "45K",
      engagement: "9.2%",
      rating: 5.0,
      completedDate: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      brand: "FitLife Apparel",
      campaign: "Summer Collection Promotion",
      status: "in-progress",
      earnings: 850,
      reach: "32K",
      engagement: "7.8%",
      rating: null,
      deadline: "5 days left",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      brand: "TechGadgets Pro",
      campaign: "Smart Home Device Review",
      status: "completed",
      earnings: 950,
      reach: "38K",
      engagement: "8.5%",
      rating: 4.8,
      completedDate: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Top Performer",
      description: "Achieved 95%+ success rate",
      color: "from-yellow-500 to-amber-400",
    },
    {
      icon: Users,
      title: "Audience Builder",
      description: "Grew following by 50K+",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Heart,
      title: "Engagement Master",
      description: "Maintained 8%+ engagement",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: Star,
      title: "Brand Favorite",
      description: "5-star average rating",
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
              src={userProfile.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <button className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-64 h-64 rounded-full object-cover border-4 border-pink-500/50 shadow-2xl"
                />
                {userProfile.verified && (
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
                <div className="flex items-center space-x-4 justify-end">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Edit Profile
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {userProfile.name}
                    </h1>
                    <p className="text-pink-400 text-lg font-medium">
                      {userProfile.username}
                    </p>
                    <span className="inline-block bg-gradient-to-r from-pink-500 to-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {userProfile.profileType}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {userProfile.bio}
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{userProfile.email}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{userProfile.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Joined {userProfile.joinDate}
                    </span>
                  </div>
                </div>

                {/* Social Media Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-gradient-to-r from-pink-500/20 to-rose-400/20 px-4 py-2 rounded-full border border-pink-500/30">
                    <Instagram className="w-5 h-5 text-pink-400 mr-2" />
                    <span className="text-white font-medium">
                      {userProfile.socialMedia.instagram}
                    </span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-400/20 px-4 py-2 rounded-full border border-blue-500/30">
                    <Twitter className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">
                      {userProfile.socialMedia.twitter}
                    </span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-red-500/20 to-red-400/20 px-4 py-2 rounded-full border border-red-500/30">
                    <Youtube className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-white font-medium">
                      {userProfile.socialMedia.youtube}
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
                change: "+15%",
              },
              {
                icon: CheckCircle,
                title: "Campaigns Completed",
                value: performanceStats.campaignsCompleted,
                color: "from-blue-500 to-cyan-400",
                change: "+12",
              },
              {
                icon: TrendingUp,
                title: "Success Rate",
                value: `${performanceStats.successRate}%`,
                color: "from-pink-500 to-rose-400",
                change: "+3%",
              },
              {
                icon: Users,
                title: "Total Reach",
                value: performanceStats.totalReach,
                color: "from-purple-500 to-violet-400",
                change: "+250K",
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
              Achievements
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

          {/* Recent Campaigns */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <BarChart3 className="w-6 h-6 text-pink-400 mr-3" />
                Recent Campaigns
              </h2>
              <button className="text-pink-400 hover:text-pink-300 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-6">
              {recentCampaigns.map((campaign, index) => (
                <div
                  key={campaign.id}
                  className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300"
                  style={{ animationDelay: `${(index + 8) * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
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
                                : "bg-yellow-900/50 text-yellow-400 border border-yellow-400/30"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">
                          {campaign.campaign}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Earnings</p>
                            <p className="text-white font-bold">
                              ${campaign.earnings}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Reach</p>
                            <p className="text-white font-bold">
                              {campaign.reach}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Engagement</p>
                            <p className="text-white font-bold">
                              {campaign.engagement}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Rating</p>
                            <div className="flex items-center">
                              {campaign.rating ? (
                                <>
                                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                  <span className="text-white font-bold">
                                    {campaign.rating}
                                  </span>
                                </>
                              ) : (
                                <span className="text-gray-400">Pending</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      {campaign.completedDate || campaign.deadline}
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

export default InfluncerDashboard;
