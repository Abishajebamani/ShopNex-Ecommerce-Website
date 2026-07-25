import OrderStatus from "./OrderStatus";

const OrderCard = ({ order }) => {
  console.log("OrderCard received:", order);

  if (!order) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded">
        Order data is missing
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <div className="flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-xl font-bold">
            Order #{order.id}
          </h2>

          <p className="text-gray-500 mt-2">
            Date:{" "}
            {order.created_at
              ? new Date(order.created_at).toLocaleDateString()
              : "N/A"}
          </p>

          <p className="text-gray-500">
            Payment: {order.payment_method}
          </p>

          <p className="text-gray-500">
            Total: ₹{order.total_amount}
          </p>

          <p className="text-gray-500 mt-2">
            Address: {order.shipping_address || "N/A"}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <OrderStatus status={order.status || "Pending"} />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderCard;