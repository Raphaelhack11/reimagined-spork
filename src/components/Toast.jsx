import React, { useEffect } from 'react';

// Basic styles for a professional toast notification
const toastStyles = {
    position: 'fixed',
    top: '30px',
    right: '30px',
    padding: '12px 20px',
    borderRadius: '8px',
    color: 'white',
    zIndex: 1000,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    fontSize: '1rem',
};

export default function Toast({ message, type, onClose }) {
  
  // Set the background color based on the type (success or error)
  const background = type === 'success' ? '#28a745' : '#e74c3c';

  useEffect(() => {
    // Automatically close the toast after 4 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div style={{ ...toastStyles, background }}>
      {type === 'success' ? '✅' : '❌'} {message}
    </div>
  );
}
