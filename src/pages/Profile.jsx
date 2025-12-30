import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/auth.js";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    onError: () => {
      localStorage.removeItem("token");
      navigate("/login");
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (isLoading) return <p>Loading profile ≽^•⩊•^≼</p>;
  if (isError) return <p>Session expired: Please log in again.</p>;

  return (
    <>
      <h2>Profile</h2>
      <p>Email: {data.user.email}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
