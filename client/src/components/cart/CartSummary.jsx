import { useNavigate } from "react-router-dom";

const CartSummary = ({ cartItems }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;

  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Order Summary
      </h2>

      <div className="flex justify-between mb-3">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? "Free" : `₹${shipping}`}
        </span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      <button
        disabled={cartItems.length === 0}
        onClick={() => navigate("/checkout")}
        className={`w-full mt-6 py-3 rounded-lg text-white ${
          cartItems.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;