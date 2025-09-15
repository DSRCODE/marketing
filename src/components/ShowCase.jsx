import React, { useState, useEffect } from "react";
import {
  Play,
  Heart,
  MessageCircle,
  Share,
  Eye,
  TrendingUp,
  Zap,
} from "lucide-react";

const ShowCase = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Animate cards in sequence
    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev.length < campaigns.length) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  // Mock campaign data with placeholder images
  const campaigns = [
    {
      id: 1,
      title: "Tech Innovation Launch",
      brand: "TechCorp",
      influencer: "@techguru",
      engagement: "2.4M",
      likes: "156K",
      comments: "12.8K",
      shares: "8.2K",
      type: "Product Launch",
      color: "from-pink-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Fashion Week Collab",
      brand: "StyleBrand",
      influencer: "@fashionista",
      engagement: "1.8M",
      likes: "124K",
      comments: "9.6K",
      shares: "6.1K",
      type: "Fashion",
      color: "from-purple-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Fitness Journey",
      brand: "FitLife",
      influencer: "@fitnesscoach",
      engagement: "3.2M",
      likes: "198K",
      comments: "15.4K",
      shares: "11.2K",
      type: "Health & Fitness",
      color: "from-pink-600 to-purple-500",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Travel Adventure",
      brand: "WanderLust",
      influencer: "@travelblogger",
      engagement: "2.7M",
      likes: "142K",
      comments: "11.3K",
      shares: "9.8K",
      type: "Travel",
      color: "from-purple-600 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Beauty Transformation",
      brand: "GlowCo",
      influencer: "@beautyexpert",
      engagement: "1.9M",
      likes: "134K",
      comments: "8.7K",
      shares: "5.9K",
      type: "Beauty",
      color: "from-pink-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Gaming Setup Review",
      brand: "GameTech",
      influencer: "@gamingpro",
      engagement: "2.1M",
      likes: "167K",
      comments: "13.2K",
      shares: "7.4K",
      type: "Gaming",
      color: "from-purple-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/8 to-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-600/5 to-purple-500/5 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full border border-pink-500/30 mb-6">
            <Zap className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-medium">Campaign Showcase</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
            Campaign Snapshots
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real promotions. Real reach.
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-semibold">
              {" "}
              Real impact
            </span>
            .
            <br />
            See how brands and influencers create magic together.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            { label: "Total Reach", value: "15M+", icon: Eye },
            { label: "Engagement", value: "12.8%", icon: Heart },
            { label: "Campaigns", value: "500+", icon: TrendingUp },
            { label: "Success Rate", value: "98%", icon: Zap },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/30 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => {
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={campaign.id}
                className={`group transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden relative">
                  {/* Campaign Type Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${campaign.color} text-white text-xs font-medium z-20`}
                  >
                    {campaign.type}
                  </div>

                  {/* Play Button Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center z-10 transition-all duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Campaign Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Campaign Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {campaign.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        {campaign.brand}
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        {campaign.influencer}
                      </span>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-pink-400 mb-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            {campaign.likes}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Likes</div>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            {campaign.comments}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Comments</div>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-pink-400 mb-1">
                          <Share className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            {campaign.shares}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Shares</div>
                      </div>
                    </div>

                    {/* Total Engagement */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          Total Reach
                        </span>
                        <span className="text-lg font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                          {campaign.engagement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ShowCase;
