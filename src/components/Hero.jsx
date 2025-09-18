import React, { useState, useEffect } from "react";
import { FaRocket, FaUserFriends } from "react-icons/fa";

const Hero = ({ setModalOpen }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate grid boxes
  const generateGridBoxes = () => {
    const boxes = [];
    const rows = 8;
    const cols = 12;

    for (let i = 0; i < rows * cols; i++) {
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;
      const size = Math.random() * 20 + 10;

      boxes.push(
        <div
          key={i}
          className="absolute bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg border border-pink-500/20"
          style={{
            left: `${(i % cols) * (100 / cols)}%`,
            top: `${Math.floor(i / cols) * (100 / rows)}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return boxes;
  };

  // Generate floating particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      particles.push(
        <div
          key={i}
          className="absolute bg-pink-400/30 rounded-full"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="relative h-[95vh] w-full flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid-background">{generateGridBoxes()}</div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">{generateParticles()}</div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-1000 ease-out will-change-transform"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-2xl transition-all duration-1500 ease-out will-change-transform"
          style={{
            right: `${(100 - mousePosition.x) * 0.03}%`,
            bottom: `${(100 - mousePosition.y) * 0.03}%`,
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="geometric-shape geometric-shape-1" />
        <div className="geometric-shape geometric-shape-2" />
        <div className="geometric-shape geometric-shape-3" />
      </div>

      {/* Main Content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center ">
        <h1
          className="text-4xl  md:text-6xl font-extrabold text-white hero-title"
          style={{ animationDelay: "0.2s" }}
        >
          Bridging Brands with Real Influence
        </h1>

        <p
          className="mt-4 text-gray-300 text-lg hero-subtitle"
          style={{ animationDelay: "0.5s" }}
        >
          A platform to connect your products with the perfect influencers and
          create impactful promotions.
        </p>

        <div
          className="mt-8 flex flex-col md:flex-row gap-4 hero-buttons"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            aria-label="Brand Login"
            onClick={() => setModalOpen && setModalOpen(true)}
            className="group bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transform relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">I'm a Brand</span>
          </button>

          <button
            aria-label="Influencer Login"
            className="group bg-white/10 backdrop-blur-sm border-2 border-pink-600/50 text-white hover:bg-pink-50/10 hover:border-pink-500 px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 hover:scale-105 transform relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <FaUserFriends className="group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">I'm an Influencer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
