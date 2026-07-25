import { FiMapPin } from "react-icons/fi";

const AddressCard = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-semibold mb-5">
        Saved Address
      </h2>

      <div className="flex items-start gap-4">

        <FiMapPin className="text-2xl text-blue-600 mt-1" />

        <div>

          <h3 className="font-semibold">
            Home Address
          </h3>

          <p className="text-gray-600 mt-2">
            12, Anna Nagar,
            <br />
            Chennai,
            <br />
            Tamil Nadu - 600001
          </p>

        </div>

      </div>

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
        Add New Address
      </button>

    </div>
  );
};

export default AddressCard;