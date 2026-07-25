const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-semibold mb-5">
        Payment Method
      </h2>

      <div className="space-y-4">

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="Credit / Debit Card"
            checked={paymentMethod === "Credit / Debit Card"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          Credit / Debit Card
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          UPI
        </label>

      </div>

    </div>
  );
};

export default PaymentMethod;