import React, { useEffect, useState } from "react";

export default function SignupPrompt() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isSignedIn = localStorage.getItem("token"); // তোমার JWT বা auth token
    const lastShown = localStorage.getItem("signupPopupLastShown");
    const now = new Date().getTime();
    const TEN_MINUTES = 15 * 60 * 1000;

    // যদি user লগইন না করে থাকে
    if (!isSignedIn) {
      if (!lastShown || now - lastShown > TEN_MINUTES) {
        setShowPopup(true);
        localStorage.setItem("signupPopupLastShown", now.toString());
      }
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onClick={handleClose} // বাইরের যেকোন জায়গায় ক্লিক করলে popup বন্ধ
    >
      <div
        style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          animation: 'fadeIn 0.3s ease',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // popup এর ভিতরে ক্লিক করলে বন্ধ হবে না
      >
        <h2 style={{ color: '#084b28', marginBottom: '10px' }}>Please Sign Up</h2>
        <p style={{ color: '#444', fontSize: '16px', marginBottom: '20px' }}>
          Sign up or sign in to access all features!
        </p>

        <button
          onClick={() => (window.location.href = '/signup')}
          style={{
            margin: '10px',
            padding: '12px 30px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Go to Sign Up
        </button>
        <br />
        <button
          onClick={handleClose}
          style={{
            margin: '10px',
            padding: '12px 30px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
