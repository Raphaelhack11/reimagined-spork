import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import Toast from "../components/Toast"; // Import the new Toast component

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(null); // { message, type }

  function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear local error
    
    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);

    if (!found) {
      setShowToast({ message: "Invalid email or password.", type: "error" });
      return;
    }

    // Login success
    setShowToast({ message: "Login Successful! Redirecting...", type: "success" });
    
    // Wait 2 seconds to show toast, then redirect
    setTimeout(() => {
        localStorage.setItem("axos_current", JSON.stringify({ email }));
        navigate("/dashboard");
    }, 2000);
  }

  return (
    <div className="card form-card" style={{ borderTop: '5px solid #007bff' }}>
      <h2 style={{ color: '#007bff' }}>Log In to AxosBank</h2>
      <p className="note" style={{ textAlign: 'center' }}>Access your secure dashboard.</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email Address" 
            type="email" 
            required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        
        {/* We use the error state to show local errors if needed, but the main feedback is the toast */}
        <p className="error">{error}</p>
        
        <div className="btn-group" style={{ justifyContent: 'space-between', marginTop: '20px' }}>
          <button type="submit" className="btn-primary">Login</button>
          <button type="button" onClick={() => navigate("/signup")} className="btn-secondary">Sign Up</button>
        </div>
        
        <p className="center note" style={{ marginTop: '20px' }}>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Back to Home</Link>
        </p>
      </form>
      
      {showToast && (
        <Toast 
            message={showToast.message} 
            type={showToast.type} 
            onClose={() => setShowToast(null)} 
        />
      )}
    </div>
  );
}
