import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RegisterForm = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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


    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }


    setLoading(true);


    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),

        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      alert("Registration Successful! Please login.");
      navigate("/login");


    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="bg-white shadow-lg rounded-xl p-8">


      <h2 className="text-3xl font-bold text-center mb-6">
        Create Account
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
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>



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
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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



        <div>
          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>



        <div className="flex items-center gap-2 text-sm">

          <input 
            type="checkbox" 
            required
          />

          <label>
            I agree to the Terms & Conditions
          </label>

        </div>



        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>


      </form>



      <p className="text-center mt-6">

        Already have an account?{" "}

        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </Link>

      </p>


    </div>
  );
};


export default RegisterForm;