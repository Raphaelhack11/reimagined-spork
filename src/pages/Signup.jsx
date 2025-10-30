import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../components/Toast"; // Import the new Toast component

// Helper function to calculate password strength
function getPasswordStrength(password) {
  let strength = 0;
  if (password.length > 5) strength++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
  if (password.match(/\d/)) strength++;
  if (password.match(/[^a-zA-Z\d\s]/)) strength++;

  if (strength === 4) return { text: "Strong", color: "#28a745" };
  if (strength >= 3) return { text: "Medium", color: "#ffc107" };
  return { text: "Weak", color: "#e74c3c" };
}

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
  const [showToast, setShowToast] = useState(null); // { message, type }

  const strength = getPasswordStrength(form.password);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error on change
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

    // Add user and set success toast
    users.push({ ...form, balance: 0 }); // Initialize balance for new users
    localStorage.setItem("axos_users", JSON.stringify(users));
    
    setShowToast({ message: "Signup Successful! Redirecting...", type: "success" });

    // Wait 2 seconds to show toast, then redirect
    setTimeout(() => {
        localStorage.setItem("axos_current", JSON.stringify({ email: form.email }));
        navigate("/dashboard");
    }, 2000);
  }

  return (
    <div className="card form-card" style={{ borderTop: '5px solid #007bff' }}>
      <h2 style={{ color: '#007bff' }}>Create Your AxosBank Account</h2>
      <p className="note" style={{ textAlign: 'center' }}>Start your secure digital banking journey.</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="number" placeholder="Phone Number (Optional)" onChange={handleChange} />
        
        {/* Password Input with Meter */}
        <input
          name="password"
          type="password"
          placeholder="Choose a Strong Password"
          onChange={handleChange}
          required
        />
        
        {/* Password Meter */}
        {form.password.length > 0 && (
          <div style={{ margin: '5px 0 15px 0', fontSize: '14px' }}>
            Strength: 
            <span style={{ color: strength.color, fontWeight: 'bold', marginLeft: '5px' }}>
              {strength.text}
            </span>
            <div style={{ height: '5px', width: '100%', background: '#eee', borderRadius: '3px', marginTop: '3px' }}>
              <div style={{ 
                height: '100%', 
                width: `${strength.text === 'Strong' ? 100 : strength.text === 'Medium' ? 66 : 33}%`, 
                background: strength.color, 
                transition: 'width 0.3s' 
              }}></div>
            </div>
          </div>
        )}

        <p className="error" style={{ marginBottom: '15px' }}>{error}</p>
        
        <div className="btn-group">
          <button type="submit" className="btn-primary">Sign Up</button>
          <button type="button" onClick={() => navigate("/")} className="btn-secondary">Cancel</button>
        </div>
        
        <p className="center note" style={{ marginTop: '20px' }}>
            Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
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
