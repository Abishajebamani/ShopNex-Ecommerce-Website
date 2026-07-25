const EditProfileForm = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Edit Profile
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Full Name"
          defaultValue="Abisha Jebamani K"
          className="border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email"
          defaultValue="abisha@email.com"
          className="border rounded-lg p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          defaultValue="+91 9876543210"
          className="border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="New Password"
          className="border rounded-lg p-3"
        />

      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
        Save Changes
      </button>

    </div>
  );
};

export default EditProfileForm;