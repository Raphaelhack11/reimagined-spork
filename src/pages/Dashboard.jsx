import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

export default function Dashboard() {
  const navigate = useNavigate();
  // Initialize user state for name display only
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  // STATIC PROFESSIONAL BALANCE
  const STATIC_BALANCE = "$806,839.06"; // Static balance is now defined here

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("axos_current"));
    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    const found = users.find((u) => u.email === current?.email);

    if (!found) {
      navigate("/login");
    } else {
      // We only need the user's name for the welcome message
      setUser(found);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("axos_current");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Welcome, {user?.name || "Valued Customer"}</h2>

      <div className="balance-card">
        <h3>Primary Account Balance</h3>
        <p className="balance">{STATIC_BALANCE}</p> {/* Using the static balance */}
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
