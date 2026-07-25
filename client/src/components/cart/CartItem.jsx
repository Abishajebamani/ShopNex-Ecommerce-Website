const CartItem = ({ cartItems, fetchCart }) => {
  const token = localStorage.getItem("token");

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity }),
        }
      );

      const data = await response.json();

      if (data.success) {
        fetchCart();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        fetchCart();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mt-3">
          Add some products to your cart.
        </p>
      </div>
    );
  }

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow p-5 mb-4 flex items-center gap-5"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-28 h-28 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {item.name}
            </h2>

            <p className="text-gray-500">
              ₹{Number(item.price).toLocaleString()}
            </p>

            <div className="flex items-center gap-3 mt-3">

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>

            </div>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItem;