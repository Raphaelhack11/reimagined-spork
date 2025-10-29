import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo-icon">A</div>
        <div>
          <h1>AxosBank</h1>
          <p className="subtitle">Secure and reliable banking</p>
        </div>
      </Link>

      <nav>
        {/* Login and Sign Up links removed from here */}
      </nav>
    </header>
  );
}
