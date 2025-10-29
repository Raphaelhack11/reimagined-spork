import React, { useState } from "react";

export default function PaymentModal({ onClose }) {
  const [sent, setSent] = useState(false);

  function handleSent() {
    setSent(true);
    setTimeout(() => {
      alert("Thank you. (DEMO) You can now close this message.");
      onClose();
    }, 500);
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Payment Required (DEMO)</h3>
        <p>
          To proceed with withdrawal, please deposit <b>$100</b> to the BTC wallet below.
        </p>
        <div className="btc-box">
          bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7
        </div>
        <p className="warning">DEMO ONLY — Do not send real funds</p>
        <div className="btn-group">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSent} className="btn-primary">
            Sent (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}
