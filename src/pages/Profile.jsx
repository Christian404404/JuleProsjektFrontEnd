import { useAuth } from "../hooks/useAuth.js";

export default function Profile() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return <p>Loading profile ≽^•⩊•^≼</p>;
  }
  if (!user) {
    return null;
  }

  return (
    <>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
