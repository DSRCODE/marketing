import React, { useState } from "react";
import BrandDashboard from "../components/Dashboard/BrandDashboard";
import InfluncerDashboard from "../components/Dashboard/InfluncerDashboard";

const dashboard = () => {
  const [dashboardType, setDashboardType] = useState("brand");
  return (
    <div>
      {dashboardType === "influncer" ? <BrandDashboard /> : <InfluncerDashboard />}
    </div>
  );
};

export default dashboard;
