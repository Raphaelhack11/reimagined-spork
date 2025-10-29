import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("axos_current"));
    const users = JSON.parse(localStorage.getItem("axos_users") || "[]");
    const found = users.find((u) => u.email === current?.email);
    if (!found) navigate("/login");
    setUser(found);
  }, [navigate]);

  return (
    <div className="card">
      <h2>Welcome, {user?.name || "User"}</h2>

      <div className="balance-card">
        <h3>Total Balance</h3>
        <p className="balance">$806,839.06</p>
      </div>

      <div className="btn-group">
        <button onClick={() => setShowModal(true)} className="btn-danger">
          Withdraw to Bank
        </button>
        <button className="btn-secondary">Deposit</button>
        <button onClick={() => {localStorage.removeItem("axos_current"); navigate("/login")}}>
          Logout
        </button>
      </div>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
