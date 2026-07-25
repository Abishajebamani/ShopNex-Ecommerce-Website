import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import AddressForm from "../../components/checkout/AddressForm";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderSummary from "../../components/checkout/OrderSummary";

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setCartItems(data.cart);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    if (!address.address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            shipping_address: `${address.fullName},
${address.phone},
${address.address},
${address.city},
${address.state},
${address.pincode}`,
            payment_method: paymentMethod,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Order placed successfully!");
        navigate("/orders");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <AddressForm
          address={address}
          setAddress={setAddress}
        />

        <div className="my-8">

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

        </div>

        <OrderSummary
          subtotal={subtotal}
          total={subtotal}
          placeOrder={placeOrder}
        />

      </div>
    </Layout>
  );
};

export default Checkout;