import { useState } from "react";
import { useAuthMutation } from "../hooks/useAuthMutation.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginMutation } = useAuthMutation();
  const { mutate, isLoading, error } = loginMutation;

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in >⩊<" : "Login"}
      </button>
      {error && (
        <p style={{ color: "red" }}>{error.error || "Login failed ^. .^₎⟆"}</p>
      )}
    </form>
  );
}
