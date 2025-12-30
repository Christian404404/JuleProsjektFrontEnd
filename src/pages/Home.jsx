import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Welcome to "NAME GOES HERE</h1>
      <p>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
