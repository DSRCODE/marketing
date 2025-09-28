import {
  Lock,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  Globe,
  Building2,
} from "lucide-react";

const SignupForm = ({
  formData,
  setFormData,
  currentUserType,
  showPassword,
  setShowPassword,
  influencerCategories,
  brandCategories,
  followerRanges,
}) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {currentUserType === "influencer" ? (
        <>
          {/* Influencer Signup */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@email.com"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
          </div>

          <div>
            <input
              type="url"
              name="socialLink"
              value={formData.socialLink}
              onChange={handleInputChange}
              placeholder="https://instagram.com/username"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />

            <select
              name="followers"
              value={formData.followers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
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
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
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
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
          </div>
        </>
      ) : (
        <>
          {/* Promoter/Brand Signup */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="business@email.com"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
              required
            />
          </div>

          <input
            type="text"
            name="brandName"
            value={formData.brandName}
            onChange={handleInputChange}
            placeholder="Brand Name"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
            required
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

      {/* Common Password Field */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a strong password"
          className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
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
