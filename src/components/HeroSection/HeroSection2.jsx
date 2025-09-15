import React, { useEffect, useRef } from "react";
import "./HeroSection2.css";
const HeroSection2 = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create animated grid boxes
    const createGridBoxes = () => {
      const boxCount = 50;
      for (let i = 0; i < boxCount; i++) {
        const box = document.createElement("div");
        box.className = "grid-box";

        // Random positioning
        box.style.left = Math.random() * 100 + "%";
        box.style.top = Math.random() * 100 + "%";

        // Random animation delay
        box.style.animationDelay = Math.random() * 4 + "s";

        // Random size variation
        const size = Math.random() * 30 + 20;
        box.style.width = size + "px";
        box.style.height = size + "px";

        grid.appendChild(box);
      }
    };

    createGridBoxes();

    return () => {
      if (grid) {
        grid.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden ">
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Main Content */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-0">
        {/* Left Side - Text Content */}
        <div className="space-y-8 animate-slide-in-left">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
            Connect. Create.{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Collaborate.
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            The ultimate platform where influencers meet brands, sparking
            authentic partnerships that drive real results and meaningful
            connections.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlm9VXD0_ncYF3XlgqVpiFxZRtQ1K6MZJbR6yX35VX_TDUOg/viewform"
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                ▶
              </span>
              Get Started
            </a>

            <a
              href="/"
              className="group bg-transparent text-white px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 flex items-center gap-2"
            >
              Watch Demo
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right Side - Visual Content */}
        <div className="relative animate-slide-in-right">
          <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden group">
            {/* Video Container Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white group-hover:shadow-2xl">
                <span className="text-black text-2xl ml-1">▶</span>
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/20 animate-float">
                📊
              </div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/20 animate-float-delayed">
                👥
              </div>
              <div className="absolute top-1/2 right-2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/20 animate-float-slow">
                📈
              </div>
            </div>

            {/* Inner Grid Pattern */}
            <div
              className="absolute inset-4 border border-white/5 rounded-2xl"
              style={{
                background: `
                     linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                     linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                   `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
