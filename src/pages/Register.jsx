import { useState } from "react";
import { useAuthMutation } from "../hooks/useAuthMutation.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerMutation } = useAuthMutation();
  const { mutate, isLoading, error, data } = registerMutation;

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registering >⩊<" : "Register"}
      </button>

      {data?.message && (
        <p style={{ color: "green" }}>
          {data.message || "Registration successful ≽^• ˕ • ྀི≼"}
        </p>
      )}
      {error && (
        <p style={{ color: "red" }}>
          {error.error || "Registration failed ^. .^₎⟆"}
        </p>
      )}
    </form>
  );
}
