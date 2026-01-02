import { useAuth } from "../hooks/useAuth.js";

export default function Profile() {
  const { user, isLoading, isError, logout } = useAuth();

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
