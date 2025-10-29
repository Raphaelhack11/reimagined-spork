import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);

    if (!found) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("axos_current", JSON.stringify({ email }));
    navigate("/dashboard");
  }

  return (
    <div className="card form-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p className="error">{error}</p>
        <div className="btn-group">
          <button type="submit" className="btn-primary">Login</button>
          <button type="button" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
