// routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import BrandPage from "../pages/BrandPage";
import InfluencerPage from "../pages/InfluencerPage";
import ContactPage from "../pages/ContactPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Routes WITH Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<BrandPage />} />
        <Route path="/influencers" element={<InfluencerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
