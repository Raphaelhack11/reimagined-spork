import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      {/* 1. Main Hero Card */}
      <section className="card">
        <div className="landing">
          <div className="landing-text">
            <h2>Secure Digital Banking, Evolved.</h2>
            <p>
              Experience **AxosBank's** seamless and secure platform. Manage your finances,
              view your grant offer instantly, and take control of your future—all in one place.
            </p>
            <div className="btn-group">
              <Link to="/signup" className="btn-primary">Open a Free Account</Link>
              <Link to="/login" className="btn-secondary">Log In to My Account</Link>
            </div>
          </div>

          <div className="balance-card">
            <h3>Your Financial Future Starts Here</h3>
            <p className="balance"></p>
            <p className="note">FDIC Insured. Bank with Confidence.</p>
          </div>
        </div>
      </section>

      {/* 2. Visual Elements Section (Now with Icon Features) */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3>Banking Designed for Your Life 📱</h3>
        <p className="note" style={{ marginBottom: '20px' }}>Manage your finances anytime, anywhere.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Feature 1: Mobile First */}
          <div style={{ width: '250px', height: '180px', padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="logo-icon" style={{ marginBottom: '10px', width: '50px', height: '50px', fontSize: '1.2rem' }}>
              <span role="img" aria-label="phone">📱</span> 
            </div>
            <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>Mobile First</h4>
            <p className="note">Access your accounts 24/7 from any device.</p>
          </div>
          
          {/* Feature 2: Advanced Security */}
          <div style={{ width: '250px', height: '180px', padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="logo-icon" style={{ marginBottom: '10px', width: '50px', height: '50px', fontSize: '1.2rem' }}>
              <span role="img" aria-label="lock">🔒</span> 
            </div>
            <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>Advanced Security</h4>
            <p className="note">Industry-leading encryption protects your funds.</p>
          </div>
          
          {/* Feature 3: Grow Your Wealth */}
          <div style={{ width: '250px', height: '180px', padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="logo-icon" style={{ marginBottom: '10px', width: '50px', height: '50px', fontSize: '1.2rem' }}>
              <span role="img" aria-label="chart">📈</span> 
            </div>
            <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>Grow Your Wealth</h4>
            <p className="note">Tools and offers for every financial goal.</p>
          </div>
        </div>
      </section>
      
      {/* 3. Testimonials Section */}
      <section className="card" style={{ marginTop: '40px', padding: '30px', background: '#f8faff' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.8rem', color: '#007bff' }}>
          What Our Customers Say 💬
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Testimonial 1: Loan/Financing */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555' }}>
              "AxosBank truly made getting a **loan simple and stress-free**. The process was fast, and their rates were unbeatable. Highly recommend for anyone looking to finance their dreams!"
            </p>
            <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>— Colin F., Co Founder</p>
          </div>

          {/* Testimonial 2: Digital Experience */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555' }}>
              "Managing my finances has never been easier. The dashboard is **intuitive**, and I love the robust security features. AxosBank is my go-to for all my banking needs."
            </p>
            <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>— Keith S., Private Client</p>
          </div>
        </div>
      </section>
    </div>
  );
}
