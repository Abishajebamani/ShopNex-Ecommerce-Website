import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token, isAuthenticated } = useAuth();

  console.log("======= ProtectedRoute =======");
  console.log("User:", user);
  console.log("Token:", token);
  console.log("Authenticated:", isAuthenticated);

  if (!user) {
    console.log("Redirecting to login...");
    return <Navigate to="/login" replace />;
  }

  console.log("Access granted");
  return children;
};

export default ProtectedRoute;