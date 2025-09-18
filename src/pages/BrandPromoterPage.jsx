import React, { useState, useEffect } from "react";
import { Target, TrendingUp, Award, Shield } from "lucide-react";

import BHeroSection from "../components/BrandPage/BHeroSection";
import BWhyChoose from "../components/BrandPage/BWhyChoose";
import BHowItWorks from "../components/BrandPage/BHowItWorks";
import BKeyBenefits from "../components/BrandPage/BKeyBenefits";
import BCTA from "../components/BrandPage/BCTA";

const BrandPromoterPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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
      icon: Target,
      title: "Smart Campaign Matching",
      description:
        "AI-powered algorithm matches you with campaigns that align with your audience demographics and engagement patterns.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description:
        "Track your performance with detailed insights on reach, engagement, and conversion rates in real-time.",
    },
    {
      icon: Award,
      title: "Tiered Rewards System",
      description:
        "Unlock higher earning potential as you build your reputation and deliver exceptional results.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Get paid instantly with our secure payment system. Track earnings and withdraw anytime.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Build your promoter profile with audience insights,and engagement metrics.",
    },
    {
      number: "02",
      title: "Browse Campaigns",
      description:
        "Discover brand campaigns that match your niche and audience demographics.",
    },
    {
      number: "03",
      title: "Apply & Create",
      description:
        "Apply for campaigns and create authentic content that resonates with your followers.",
    },
    {
      number: "04",
      title: "Earn & Grow",
      description:
        "Get paid for successful campaigns and build long-term partnerships with brands.",
    },
  ];

  const benefits = [
    "Flexible earning opportunities",
    "Choose campaigns you love",
    "Build brand partnerships",
    "Professional growth tools",
    "Community support",
    "Performance bonuses",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <BHeroSection isVisible={isVisible} />
      <BWhyChoose
        features={features}
        isVisible={isVisible}
        setActiveFeature={setActiveFeature}
      />
      <BHowItWorks steps={steps} isVisible={isVisible} />
      <BKeyBenefits benefits={benefits} isVisible={isVisible} />
      <BCTA isVisible={isVisible} />
    </div>
  );
};

export default BrandPromoterPage;
