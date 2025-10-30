import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      {/* 1. PROFESSIONAL HERO SECTION (Full Width, Subtle Background) */}
      <section style={{ 
        background: '#f4faff', // Soft, light blue background for the hero
        padding: '50px 20px', 
        borderRadius: '12px',
        marginTop: '-10px' // Pull up slightly to meet the header area
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          {/* Main Text & CTAs (55% Width) */}
          <div style={{ flex: '1 1 55%', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0056b3' }}>
              Secure Digital Banking, Evolved.
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>
              Experience **AxosBank's** seamless and secure platform. Manage your finances,
              view your grant offer instantly, and take control of your future—all in one place.
            </p>
            <div className="btn-group" style={{ marginTop: '0' }}>
              <Link to="/signup" className="btn-primary" style={{ padding: '12px 25px' }}>
                Open a Free Account
              </Link>
              <Link to="/login" className="btn-secondary" style={{ padding: '12px 25px' }}>
                Log In to My Account
              </Link>
            </div>
          </div>

          {/* Visual Status/Benefit Box (40% Width) */}
          <div className="card" style={{ 
              flex: '1 1 40%', 
              minWidth: '250px',
              padding: '30px', 
              borderTop: '5px solid #007bff' // Blue accent line for professionalism
          }}>
            <h3 style={{ color: '#007bff', fontSize: '1.5rem', margin: '0 0 10px 0' }}>
              Your Financial Future Starts Here
            </h3>
            <p className="balance" style={{ fontSize: '1.8rem', color: '#222' }}>
              Secure and Accessible.
            </p>
            <p className="note" style={{ fontSize: '1rem', marginTop: '15px' }}>
              FDIC Insured. Bank with Confidence and Peace of Mind.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ICON FEATURES SECTION (Remains the same, but now stands out more) */}
      <section style={{ textAlign: 'center', marginTop: '60px' }}>
        <h3>Banking Designed for Your Life 📱</h3>
        <p className="note" style={{ marginBottom: '30px' }}>Manage your finances anytime, anywhere.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
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
      
      {/* 3. TESTIMONIALS SECTION (With better contrast) */}
      <section className="card" style={{ 
          marginTop: '60px', 
          padding: '40px', 
          background: 'white', // Use white card background for better contrast against the page background
          border: '1px solid #eee' // Add a subtle border
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.8rem', color: '#007bff' }}>
          What Our Customers Say 💬
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Testimonial 1: Loan/Financing */}
          <div style={{ background: '#f8faff', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555' }}>
              "AxosBank truly made getting a **loan simple and stress-free**. The process was fast, and their rates were unbeatable. Highly recommend for anyone looking to finance their dreams!"
            </p>
            <p style={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>— Colin F., Co Founder</p>
          </div>

          {/* Testimonial 2: Digital Experience */}
          <div style={{ background: '#f8faff', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
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
