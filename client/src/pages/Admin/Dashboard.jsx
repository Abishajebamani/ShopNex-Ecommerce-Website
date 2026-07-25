import { useEffect, useState } from "react";
import API from "../../services/api";

import Sidebar from "../../components/admin/Sidebar";
import DashboardStats from "../../components/admin/DashboardStats";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  const fetchDashboardStats = async () => {
    try {
      const response = await API.get("/admin/dashboard");

      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <DashboardStats
          totalProducts={stats.totalProducts}
          totalOrders={stats.totalOrders}
          totalUsers={stats.totalUsers}
          totalRevenue={stats.totalRevenue}
        />

      </div>

    </div>
  );
};

export default Dashboard;