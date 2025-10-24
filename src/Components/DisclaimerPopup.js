import React, { useEffect, useState } from "react";
import "./DisclaimerPopup.css"; // CSS file import

export default function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("disclaimerLastShown");
    const now = new Date().getTime();
    const TEN_MINUTES = 10 * 60 * 1000;

    if (!lastShown || now - lastShown > TEN_MINUTES) {
      setShowPopup(true);
      localStorage.setItem("disclaimerLastShown", now.toString());
    }
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="disclaimer-overlay" onClick={handleClose}>
      <div className="disclaimer-box" onClick={(e) => e.stopPropagation()}>
        <h2>Disclaimer</h2>
        <div className="disclaimer-text">
          <p>
            The information provided on this platform is for educational and informational purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or wellness program.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read or seen on this platform.
          </p>
          <p>
            DecentMed and its contributors do not claim to diagnose, treat, cure, or prevent any disease. Statements or discussions about health topics are for general educational awareness and should not be interpreted as individualized medical guidance.
          </p>
          <p>
            Reliance on any information provided by DecentMed, its guests, or linked resources is solely at your own discretion and risk.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "30px" }}>
          <button 
            className="disclaimer-close-btn" 
            onClick={handleClose}
          >
            Close
          </button>
          <button 
            className="disclaimer-learnmore-btn" 
            onClick={() => window.location.href="/chelation"} // Link to Chelation page
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
