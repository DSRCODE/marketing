// routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import InfluencerPage from "../pages/InfluencerPage";
import ContactPage from "../pages/ContactPage";
import BrandPromoterPage from "../pages/BrandPromoterPage";
import LoginSignupPage from "../components/Login/LoginSignup";
import AboutUs from "../pages/AboutUs";
import MainDasboard from "../pages/MainDasboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginSignupPage />} />
      </Route>
      {/* ✅ Routes WITH Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<BrandPromoterPage />} />
        <Route path="/dashboard" element={<MainDasboard />} />
        <Route path="/influencers" element={<InfluencerPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
