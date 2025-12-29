import { use, useEffect, useState } from "react";
import api from "../api/axios.js";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          setError("You are not authorized. Please log in.");
        } else {
          setError("Failed to load profile.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  return (
    <>
      <h2>Profile</h2>
      <p>
        <strong>User ID:</strong>
        {user.id}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
    </>
  );
}
