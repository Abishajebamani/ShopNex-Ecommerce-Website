import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();
      console.log("LOGIN RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (!data.token || !data.user) {
      throw new Error("Invalid response from server");
    }
      
      login(data.user, data.token);
      navigate("/");


    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="bg-white shadow-lg rounded-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back
      </h2>


      {error && (
        <p className="text-red-500 text-center mb-4">
          {error}
        </p>
      )}


      <form 
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>
          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>


        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>


        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>


          <a 
            href="#"
            className="text-blue-600"
          >
            Forgot Password?
          </a>

        </div>


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>


      </form>


      <p className="text-center mt-6">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>

      </p>


    </div>
  );
};


export default LoginForm;