import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

export default function Dashboard() {
  const navigate = useNavigate();
  // Initialize user state for name display only
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  // New state for controlling the loading screen
  const [isLoading, setIsLoading] = useState(true); 

  const STATIC_BALANCE = "$806,839.06"; // Static balance is kept

  useEffect(() => {
    // 1. Simulate a 5-second loading process
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // 2. Authentication check remains the same
    const current = JSON.parse(localStorage.getItem("axos_current"));
    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    const found = users.find((u) => u.email === current?.email);

    if (!found) {
      // If no user is found, redirect immediately (no need to wait for the timer)
      clearTimeout(timer); // Clear the timer if redirecting
      navigate("/login");
    } else {
      // We only need the user's name for the welcome message
      setUser(found);
    }
    
    // Cleanup function for the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("axos_current");
    navigate("/login");
  };

  // --- 3. Loading Screen Component ---
  if (isLoading) {
    return (
      <div className="card center" style={{ 
          minHeight: '200px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
      }}>
        <div style={{ fontSize: '3rem' }}>
          {/* Simple professional loading spinner placeholder */}
          <span className="logo-icon" style={{ animation: 'spin 1s linear infinite' }}>A</span>
        </div>
        <h2 style={{ marginTop: '15px', color: '#007bff' }}>
          Getting Your Account Overview...
        </h2>
        <p className="note" style={{ fontSize: '1rem' }}>
          Securing connection and loading latest offers.
        </p>
        
        {/* Simple CSS animation for the spin effect (injected via style tag or could be in style.css) */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // --- 4. Main Dashboard Content ---
  return (
    <div className="card">
      <h2>Welcome, {user?.name || "Valued Customer"}</h2>

      <div className="balance-card">
        {/* ADDED: Account Locked status */}
        <h3>Account Locked 🔒 Primary Account Balance</h3>
        <p className="balance">{STATIC_BALANCE}</p>
        <p className="note">Your funds are secure and accessible 24/7.</p>
      </div>

      {/* Transaction & Action Buttons */}
      <div className="btn-group" style={{ marginTop: '20px' }}>
        <button onClick={() => setShowModal(true)} className="btn-danger">
          Withdraw Funds
        </button>
        <button className="btn-primary">
          Deposit Funds
        </button>
        <button onClick={handleLogout} className="btn-secondary">
          Logout
        </button>
      </div>

      {/* Quick Links / Additional Info (Placeholder for future features) */}
      <div className="center" style={{ marginTop: '30px', fontSize: '14px', color: '#555' }}>
        <p>Need assistance? Contact support or view recent transactions.</p>
      </div>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
