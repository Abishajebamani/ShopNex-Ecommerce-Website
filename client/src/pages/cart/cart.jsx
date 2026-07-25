import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setCartItems(data.cart);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h1>

        {loading ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              Loading Cart...
            </h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">
              <CartItem
                cartItems={cartItems}
                fetchCart={fetchCart}
              />
            </div>

            <div>
              <CartSummary cartItems={cartItems} />
            </div>

          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;