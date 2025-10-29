import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="card">
      <div className="landing">
        <div className="landing-text">
          <h2>Secure Digital Banking, Evolved.</h2> {/* Stronger headline */}
          <p>
            Experience **AxosBank's** seamless and secure platform. Manage your finances,
            view balances instantly, and take control of your future—all in one place.
          </p>
          <div className="btn-group">
            <Link to="/signup" className="btn-primary">Open a Free Account</Link> {/* Stronger Call-to-Action */}
            <Link to="/login" className="btn-secondary">Log In to My Account</Link> {/* Clearer Login CTA */}
          </div>
        </div>

        <div className="balance-card">
          <h3>Your Financial Future Starts Here</h3> {/* Professional subheading */}
          <p className="balance">
            {/* The balance remains blank as per your previous instruction */}
          </p>
          <p className="note">FDIC Insured. Bank with Confidence.</p> {/* Focus on security/trust */}
        </div>
      </div>
    </section>
  );
}
