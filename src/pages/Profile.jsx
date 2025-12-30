import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user, isLoading, isError } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  };

  if (isLoading) return <p>Loading profile ≽^•⩊•^≼</p>;
  if (isError) return <p>Session expired: Please log in again.</p>;

  return (
    <>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
