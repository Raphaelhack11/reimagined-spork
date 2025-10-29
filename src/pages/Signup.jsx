import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    number: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill out all required fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    if (users.find((u) => u.email === form.email)) {
      setError("This email already exists.");
      return;
    }

    users.push(form);
    localStorage.setItem("axos_users", JSON.stringify(users));
    localStorage.setItem("axos_current", JSON.stringify({ email: form.email }));
    navigate("/dashboard");
  }

  return (
    <div className="card form-card">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="number" placeholder="Phone Number" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <p className="error">{error}</p>
        <div className="btn-group">
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
          <button type="submit" className="btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
