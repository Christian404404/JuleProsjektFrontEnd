import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function ProtectedRoute() {
  const { user, isLoading, isError } = useAuth();

  if (isLoading) {
    return <p>Checking authentication =^◕⩊◕^=</p>;
  }
  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
