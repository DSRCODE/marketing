import React from "react";
import {
  Lock,
  Phone,
  MapPin,
  Globe,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";

const SignupForm = ({
  currentUserType,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  followerRanges,
  influencerCategories,
  brandCategories,
}) => {
  return (
    <>
      {currentUserType === "influencer" ? (
        // Influencer Signup
        <>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
            />
          </div>

          <input
            type="url"
            name="socialLink"
            value={formData.socialLink}
            onChange={handleInputChange}
            placeholder="https://instagram.com/yourusername"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
            />
            <select
              name="followers"
              value={formData.followers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
            >
              <option value="">Select range</option>
              {followerRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
            >
              <option value="">Select niche</option>
              {influencerCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="City, State"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
            />
          </div>
        </>
      ) : (
        // Promoter Signup
        <>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Business Email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
            />
          </div>

          <input
            type="text"
            name="brandName"
            value={formData.brandName}
            onChange={handleInputChange}
            placeholder="Brand Name"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
          >
            <option value="">Select category</option>
            {brandCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Password (common for both) */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a strong password"
          className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
};

export default SignupForm;
