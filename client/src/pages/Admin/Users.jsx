import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";
import { FiSearch, FiTrash2 } from "react-icons/fi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Unable to delete user");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Users Management
          </h1>

          <div className="text-lg font-semibold text-blue-600">
            Total Users: {filteredUsers.length}
          </div>

        </div>

        {/* Search */}

        <div className="relative mb-6">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Name</th>

                <th className="p-4 text-left">Email</th>

                <th className="p-4 text-left">Phone</th>

                <th className="p-4 text-left">Role</th>

                <th className="p-4 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-medium">
                    {user.name}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">
                    {user.phone}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="p-4">

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 size={20} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </Layout>
  );
};

export default Users;