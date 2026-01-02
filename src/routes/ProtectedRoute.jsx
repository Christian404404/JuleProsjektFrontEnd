import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>Checking authentication =^◕⩊◕^=</p>;
  }

  if (!user) {
    return null;
  }

  return <Outlet />;
}
