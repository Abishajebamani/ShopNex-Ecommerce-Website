const AddressForm = ({ address, setAddress }) => {
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-semibold mb-5">
        Shipping Address
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <textarea
        name="address"
        placeholder="Complete Address"
        rows="4"
        value={address.address}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mt-4"
      />

    </div>
  );
};

export default AddressForm;