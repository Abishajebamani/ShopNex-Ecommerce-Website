import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/orders/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/orders/admin/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-3xl font-bold mb-8">
          Admin Orders
        </h1>

        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Payment</th>
                <th className="p-4 text-left">Status</th>
              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b"
                >

                  <td className="p-4">
                    #{order.id}
                  </td>

                  <td className="p-4">
                    {order.name}
                  </td>

                  <td className="p-4">
                    {order.email}
                  </td>

                  <td className="p-4">
                    ₹{Number(order.total_amount).toLocaleString()}
                  </td>

                  <td className="p-4">
                    {order.payment_method}
                  </td>

                  <td className="p-4">

                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order.id, e.target.value)
                      }
                      className="border rounded-lg px-3 py-2"
                    >
                      <option>Pending</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </Layout>
  );
};

export default Orders;