import React from 'react';

export default function SignupPopup({ onClose }) {
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
      onClick={onClose} // পপআপের বাইরেও ক্লিক করলে popup বন্ধ হবে
    >
      <div
        style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        onClick={e => e.stopPropagation()} // পপআপের ভিতরে ক্লিক করলে বাইরের onClick ব্লক করবে
      >
        <h2>Please Sign Up</h2>
        <p>Sign up to access all features!</p>
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
          onClick={onClose}
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
