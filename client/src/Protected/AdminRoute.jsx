import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not an admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin
  return children;
};

export default AdminRoute;