import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tier0 from '../../images copy/0.png';
import tier2 from '../../images copy/pp.png';
import tier3 from "../../images copy/TIER2.png";
import { useTranslation } from 'react-i18next';
const ChooseProviderTier = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState("tier1");
  const handleContinue = () => {
  let tier = "";
  let amount = 0;
  if (selectedTier === "tier0") {
    tier = "Tier 0";
    amount = 500;
  } else if (selectedTier === "tier1") {
    tier = "Tier 1";
    amount = 1500;
  } else if (selectedTier === "tier2") {
    tier = "Tier 2";
    amount = 2500;
  }
  navigate("/stripepay", {
    state: { tier, amount }
  });
};


  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>{t("Select Tier")}</h1>
      <p>{t("Please choose your subscription tier to continue.")}</p>

      {/* Images */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "30px" }}>
        <div>
          <img
            src={tier0}
            alt="Tier 0"
            style={{ width: "520px", borderRadius: "10px" }}
          />
          <p>{t("Tier 0 — $500")}</p>
        </div>
    <div>
          <img
            src={tier2}
            alt="Tier 1"
            style={{ width: "520px", borderRadius: "10px" }}
          />
          <p>{t("Tier 1 — $1500")}</p>
        </div>
        <div>
          <img
            src={tier3}
            alt="Tier 3"
            style={{ width: "520px", borderRadius: "10px" }}
          />
          <p>{t("Tier 2 — $2500")}</p>
        </div>
      </div>
      {/* Dropdown */}
      <select
        value={selectedTier}
        onChange={(e) => setSelectedTier(e.target.value)}
        style={{
          marginTop: "30px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option value="tier0">{t("Tier 0 — $500")}</option>
        <option value="tier1">{t("Tier 1 — $1500")}</option>
        <option value="tier2">{t("Tier 2 — $2500")}</option>
      </select>
      {/* Continue Button */}
      <button
        onClick={handleContinue}
        style={{
          display: "block",
          margin: "30px auto",
          padding: "12px 24px",
          backgroundColor: "#027360",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        {t("Continue to Payment")}
      </button>
    </div>
  );
};

export default ChooseProviderTier;
