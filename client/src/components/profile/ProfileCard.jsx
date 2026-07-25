import { FiUser, FiMail, FiPhone, FiLogOut } from "react-icons/fi";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      {/* Initials Avatar */}
      <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
        AJ
      </div>

      <h2 className="text-2xl font-bold text-center mt-4">
        Abisha Jebamani K
      </h2>

      <p className="text-center text-gray-500 mb-6">
        Customer
      </p>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <FiMail className="text-blue-600" />
          <span>abisha@email.com</span>
        </div>

        <div className="flex items-center gap-3">
          <FiPhone className="text-blue-600" />
          <span>+91 9876543210</span>
        </div>

        <div className="flex items-center gap-3">
          <FiUser className="text-blue-600" />
          <span>Regular Customer</span>
        </div>

      </div>

      <button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
        <FiLogOut />
        Logout
      </button>

    </div>
  );
};

export default ProfileCard;