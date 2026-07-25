import { useEffect, useState } from "react";
import API from "../../services/api";

const DashboardStats = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    users: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-lg py-8">
        Loading Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Products",
      value: stats.products,
      color: "text-blue-600",
    },
    {
      title: "Orders",
      value: stats.orders,
      color: "text-green-600",
    },
    {
      title: "Customers",
      value: stats.users,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: `₹${Number(stats.revenue).toLocaleString()}`,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
        >
          <h3 className="text-gray-500 text-lg">
            {card.title}
          </h3>

          <p className={`text-3xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;