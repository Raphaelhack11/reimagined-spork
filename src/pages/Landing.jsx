import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="card">
      <div className="landing">
        <div className="landing-text">
          <h2>Welcome to AxosBank</h2>
          <p>
            This is a demonstration banking dashboard — interactive signup,
            login, and balance pages. All data is stored locally.
          </p>
          <div className="btn-group">
            <Link to="/signup" className="btn-primary">Create Account</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>
        </div>

        <div className="balance-card">
          <h3>Account Balance</h3>
          <p className="balance">$806,839.06</p>
          <p className="note">Demo balance (read-only)</p>
        </div>
      </div>
    </section>
  );
}
