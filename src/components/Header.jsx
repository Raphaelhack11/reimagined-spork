import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo-icon">A</div>
        <div>
          <h1>AxosBank (Demo)</h1>
          <p className="subtitle">Professional demo — no real payments</p>
        </div>
      </Link>

      <nav>
        <Link to="/signup" className="nav-btn">Sign Up</Link>
        <Link to="/login" className="nav-btn">Login</Link>
      </nav>
    </header>
  );
}
