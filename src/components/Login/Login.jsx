import React, { useState, useEffect } from "react";
import "./Login.css"; // we'll move custom animations here

const LoginSignupPage = () => {
  const [currentUserType, setCurrentUserType] = useState("influencer");
  const [currentAuthMode, setCurrentAuthMode] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  // Floating particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "fixed w-1 h-1 bg-pink-500/30 rounded-full pointer-events-none z-0";
      particle.style.left = Math.random() * window.innerWidth + "px";
      particle.style.top = window.innerHeight + "px";

      document.body.appendChild(particle);

      const animation = particle.animate(
        [
          { transform: "translateY(0px)", opacity: 1 },
          {
            transform: `translateY(-${window.innerHeight + 100}px)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          easing: "linear",
        }
      );

      animation.onfinish = () => particle.remove();
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (currentAuthMode === "login") {
        alert(`Login successful for ${currentUserType}`);
      } else {
        alert(`Account created successfully for ${currentUserType}`);
      }
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* floating shapes */}
      <div className="floating-shapes">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />
      </div>

      <div className="w-full max-w-lg p-5 relative z-10">
        <div className="card relative bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 overflow-hidden">
          {/* header */}
          <div className="text-center mb-10">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent mb-2">
              Connect
            </div>
            <p className="text-gray-400 text-sm">
              Connect creators with brands
            </p>
          </div>

          {/* user type */}
          <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
            {[
              { type: "influencer", label: "✨ Influencer" },
              { type: "promoter", label: "🚀 Promoter" },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setCurrentUserType(item.type)}
                className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  currentUserType === item.type
                    ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white shadow"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* auth switch */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { mode: "login", label: "Login" },
              { mode: "signup", label: "Sign Up" },
            ].map((item) => (
              <button
                key={item.mode}
                onClick={() => setCurrentAuthMode(item.mode)}
                className={`relative font-semibold text-base pb-2 transition-colors ${
                  currentAuthMode === item.mode
                    ? "text-pink-500"
                    : "text-gray-400"
                }`}
              >
                {item.label}
                {currentAuthMode === item.mode && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
            {currentAuthMode === "login" ? (
              <>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="submit-btn w-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl py-3 font-semibold relative overflow-hidden"
                >
                  {isLoading ? "Processing..." : `Login as ${currentUserType}`}
                </button>
              </>
            ) : (
              <>
                {/* signup */}
                {currentUserType === "influencer" ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Social Media Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://instagram.com/yourusername"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Followers
                        </label>
                        <select required className="input-field">
                          <option value="">Select range</option>
                          <option>5K - 10K</option>
                          <option>10K - 50K</option>
                          <option>50K - 100K</option>
                          <option>100K - 500K</option>
                          <option>500K - 1M</option>
                          <option>1M - 5M</option>
                          <option>5M - 10M</option>
                          <option>10M+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Category
                        </label>
                        <select required className="input-field">
                          <option value="">Select niche</option>
                          <option>Lifestyle</option>
                          <option>Fashion</option>
                          <option>Fitness</option>
                          <option>Travel</option>
                          <option>Food</option>
                          <option>Tech</option>
                          <option>Entertainment</option>
                          <option>Education</option>
                          <option>Business</option>
                          <option>Photography</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="City, State"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        required
                        className="input-field"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit-btn w-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl py-3 font-semibold"
                    >
                      {isLoading
                        ? "Processing..."
                        : "Create Influencer Account"}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="business@email.com"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your brand"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Brand Category
                      </label>
                      <select required className="input-field">
                        <option value="">Select category</option>
                        <option>Fashion</option>
                        <option>Beauty</option>
                        <option>Technology</option>
                        <option>Food</option>
                        <option>Fitness</option>
                        <option>Travel</option>
                        <option>Automotive</option>
                        <option>Finance</option>
                        <option>Entertainment</option>
                        <option>Home</option>
                        <option>Education</option>
                        <option>Healthcare</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        required
                        className="input-field"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit-btn w-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl py-3 font-semibold"
                    >
                      {isLoading ? "Processing..." : "Create Promoter Account"}
                    </button>
                  </>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
