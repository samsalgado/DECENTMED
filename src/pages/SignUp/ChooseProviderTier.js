import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tier2 from '../../images copy/TIER1.png';
import tier3 from "../../images copy/TIER2 (3).png";
import { useTranslation } from 'react-i18next';

const ChooseProviderTier = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState("tier1");

  const handleContinue = () => {
    const tier = selectedTier === "tier1" ? "Tier 1" : "Tier 2";
    const amount = selectedTier === "tier1" ? 500 : 2000;

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
            src={tier2}
            alt="Tier 1"
            style={{ width: "520px", borderRadius: "10px" }}
          />
          <p>{t("Tier 1 — $500")}</p>
        </div>

        <div>
          <img
            src={tier3}
            alt="Tier 2"
            style={{ width: "520px", borderRadius: "10px" }}
          />
          <p>{t("Tier 2 — $2000")}</p>
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
        <option value="tier1">{t("Tier 1 — $500")}</option>
        <option value="tier2">{t("Tier 2 — $2000")}</option>
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
