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
              view balances instantly, and take control of your future—all in one place.
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

      {/* 2. Visual Elements Section (Option B) */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3>Banking Designed for Your Life 📱</h3>
        <p className="note" style={{ marginBottom: '20px' }}>Manage your finances anytime, anywhere.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Image 1: Mobile Banking */}
          <div style={{ width: '250px', height: '180px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            [attachment_0](attachment)
          </div>
          
          {/* Image 2: Secure Transactions */}
          <div style={{ width: '250px', height: '180px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            [attachment_1](attachment)
          </div>
          
          {/* Image 3: Financial Planning */}
          <div style={{ width: '250px', height: '180px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            
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
            <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>— Jane D., Small Business Owner</p>
          </div>

          {/* Testimonial 2: Digital Experience */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555' }}>
              "Managing my finances has never been easier. The dashboard is **intuitive**, and I love the robust security features. AxosBank is my go-to for all my banking needs."
            </p>
            <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>— Mark S., Private Client</p>
          </div>
        </div>
      </section>
    </div>
  );
}
