import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import OrderCard from "../../components/orders/OrderCard";
import API from "../../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

 const fetchOrders = async () => {
  try {
    console.log("Fetching Orders...");

    const response = await API.get("/orders");

    console.log("Orders API Response:", response.data);
    console.log("Orders Array:", response.data.orders);

    setOrders(response.data.orders || []);
  } catch (error) {
    console.error("Fetch Error:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log("Orders State:", orders);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-10 text-lg font-medium">
          Loading orders...
        </div>
      </Layout>
    );
  }
  console.log("Orders State:", orders);
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <p className="text-gray-500 text-lg">
              No orders found.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Orders;