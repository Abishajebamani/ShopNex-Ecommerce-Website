const OrderSummary = ({
  subtotal,
  total,
  placeOrder,
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-semibold mb-5">
        Order Summary
      </h2>

      <div className="flex justify-between mb-3">
        <span>Subtotal</span>
        <span>₹{Number(subtotal).toLocaleString()}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Shipping</span>
        <span className="text-green-600">Free</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>₹{Number(total).toLocaleString()}</span>
      </div>

      <button
        onClick={placeOrder}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
      >
        Place Order
      </button>

    </div>
  );
};

export default OrderSummary;