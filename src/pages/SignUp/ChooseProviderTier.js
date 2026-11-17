import React, { useState } from "react";
import BLACKFRIDAY_TIER1 from "../../images copy/BLACKFRIDAYTIER1.png";
import BLACKFRIDAY_TIER2 from "../../images copy/BLACKFRIDAYTIER2.png";
import tier0 from "../../images copy/Screenshot 2026-07-06 at 9.39.46 AM.png";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import "../../info/authform.css";
import '../Styles/AuthForm.css';

// Provider signup goes straight to Stripe-hosted checkout (Stripe Payment Links).
// No account, password, or DecentMed server/database is involved — Stripe
// collects the provider's name, email and card, and you see every signup in
// the Stripe Dashboard → Payments.
//
// To set up: Stripe Dashboard → Payment Links → "+ New" → create one link per
// tier with the price below, then paste each link (https://buy.stripe.com/...)
// between the quotes.
const TIERS = [
  { id: "tier0", label: "Tier 0 — $500", img: tier0, paymentLink: "https://buy.stripe.com/3cIfZi87K6Uu3be1e08Ra0j" },
  { id: "tier1", label: "Tier 1 — $500", img: BLACKFRIDAY_TIER1, paymentLink: "https://buy.stripe.com/eVq9AU3Ru92CbHK8Gs8Ra0h" },
  { id: "tier2", label: "Tier 2 — $2000", img: BLACKFRIDAY_TIER2, paymentLink: "https://buy.stripe.com/eVq6oI2Nq4MmfY0cWI8Ra0i" },
];

const ChooseProviderTier = () => {
  const { t } = useTranslation('common');
  const [selectedTier, setSelectedTier] = useState("tier1");
  const [error, setError] = useState("");

  const handleContinue = () => {
    const tier = TIERS.find((x) => x.id === selectedTier);
    if (!tier || !tier.paymentLink) {
      setError(t("This tier's checkout isn't available yet. Please contact us."));
      return;
    }
    window.location.href = tier.paymentLink;
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <Helmet>
        <title>{t('Choose Your Provider Tier')}</title>
        <meta property="og:title" content={t('Choose Your Provider Tier')} />
        <meta name="description" content={t("Compare DecentMed's provider subscription tiers and choose the plan that fits your holistic health practice before completing registration.")} />
      </Helmet>
      <div className="container-blue">
        <h1 className="logotitle">{t("Join DecentMed as a Provider")}</h1>
        <h1 className="logotitle">{t("Select Tier")}</h1>
        <p>{t("Please choose your subscription tier to continue.")}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              onClick={() => { setSelectedTier(tier.id); setError(""); }}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "12px",
                padding: "6px",
                outline: selectedTier === tier.id ? "3px solid #027360" : "none",
              }}
            >
              <img
                src={tier.img}
                alt={tier.label}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <p>{t(tier.label)}</p>
            </div>
          ))}
        </div>

        <select
          value={selectedTier}
          onChange={(e) => { setSelectedTier(e.target.value); setError(""); }}
          style={{
            marginTop: "30px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          {TIERS.map((tier) => (
            <option key={tier.id} value={tier.id}>{t(tier.label)}</option>
          ))}
        </select>

        <p style={{ marginTop: "20px" }}>
          {t("Pay securely through Stripe. You'll enter your name and email at checkout — no account or password needed.")}
        </p>

        {error && <p className="error">{error}</p>}

        <button
          onClick={handleContinue}
          style={{
            display: "block",
            margin: "20px auto 30px",
            padding: "12px 24px",
            backgroundColor: "#027360",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {t("Continue to Payment")}
        </button>
      </div>
    </div>
  );
};

export default ChooseProviderTier;
