import React, { useState } from 'react'
import BrandDashboard from '../components/Dashboard/BrandDashboard';
import InfluncerDashboard from '../components/Dashboard/InfluncerDashboard';

const MainDasboard = () => {
  const [dashboardType, setDashboardType] = useState("brand");
  return (
    <div>
      {dashboardType === "brand" ? (
        <BrandDashboard />
      ) : (
        <InfluncerDashboard />
      )}
    </div>
  );
}

export default MainDasboard
