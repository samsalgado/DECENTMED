import React, { useState, useEffect } from "react";

export default function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 30 minutes = 1800000 ms
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1800000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <h2>Disclaimer</h2>
        <p>
          This website provides general wellness information and is not a
          substitute for professional medical advice.
        </p>

        <button style={buttonStyle} onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const popupStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "400px",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "#00796B",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
