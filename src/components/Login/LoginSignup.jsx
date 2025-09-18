import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginSignupPage = () => {
  const [currentAuthMode, setCurrentAuthMode] = useState("login");
  const [currentUserType, setCurrentUserType] = useState("influencer");
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const followerRanges = ["5K - 10K", "10K - 50K", "50K+"]; // example
  const influencerCategories = ["Lifestyle", "Fashion", "Tech"];
  const brandCategories = ["Fashion", "Food", "Fitness"];

  return (
    <div className="p-8 max-w-lg mx-auto">
      {currentAuthMode === "login" ? (
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      ) : (
        <SignupForm
          currentUserType={currentUserType}
          formData={formData}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          followerRanges={followerRanges}
          influencerCategories={influencerCategories}
          brandCategories={brandCategories}
        />
      )}
    </div>
  );
};

export default LoginSignupPage;
