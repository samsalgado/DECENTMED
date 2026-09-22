import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import tier0 from "../../images copy/Screenshot 2026-07-06 at 9.39.46 AM.png";
import tier3 from '../../images copy/Screenshot 2026-07-06 at 9.42.42 AM.png';
import tier2 from "../../images copy/Screenshot 2026-07-06 at 9.41.32 AM.png";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import "../../info/authform.css";
import '../Styles/AuthForm.css';

const TIER_INFO = {
  tier0: { tier: "Tier 0", amount: 500 },
  tier1: { tier: "Tier 1", amount: 1500 },
  tier2: { tier: "Tier 2", amount: 4000 },
};

const ChooseProviderTier = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState("tier1");

  // Inline signup modal state — shown instead of navigating away
  // when a provider clicks "Continue to Payment" without being signed in.
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToPayment = () => {
    const { tier, amount } = TIER_INFO[selectedTier];
    navigate("/stripepay", { state: { tier, amount } });
  };

  const handleContinue = () => {
    const token = localStorage.getItem('token');
    if (token) {
      goToPayment();
    } else {
      // Instead of bouncing the provider back to a separate signup page
      // (and losing their tier selection), show the signup form right here.
      setError('');
      setShowSignup(true);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...user,
        role: "provider" // REQUIRED BY BACKEND
      };

      const res = await axios.post(
        'https://decentmed-server.vercel.app/users',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setShowSignup(false);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Continuing to payment...',
          confirmButtonColor: '#027360',
          confirmButtonText: 'Continue'
        }).then(() => {
          goToPayment();
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <Helmet>
        <title>{t('Choose Your Provider Tier')}</title>
        <meta property="og:title" content={t('Choose Your Provider Tier')} />
        <meta name="description" content={t("Compare DecentMed's provider subscription tiers and choose the plan that fits your holistic health practice before completing registration.")} />
      </Helmet>
      <div className="container-blue">
        <h1 className="logotitle">
          {t("Providers Must Sign Up Before Registration")}
        </h1>
        <h1 className="logotitle">{t("Select Tier")}</h1>
        <p>{t("Please choose your subscription tier to continue.")}</p>

        {/* Images */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 300px", maxWidth: "350px", textAlign: "center" }}>
            <img
              src={tier0}
              alt="Tier 0"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{t("Tier 0 — $500")}</p>
          </div>

          <div style={{ flex: "1 1 300px", maxWidth: "350px", textAlign: "center" }}>
            <img
              src={tier2}
              alt="Tier 1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{t("Tier 1 — $1500")}</p>
          </div>

          <div style={{ flex: "1 1 300px", maxWidth: "350px", textAlign: "center" }}>
            <img
              src={tier3}
              alt="Tier 2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{t("Tier 2 — $4000")}</p>
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
            border: "1px solid #ccc",
          }}
        >
          <option value="tier0">{t("Tier 0 — $500")}</option>
          <option value="tier1">{t("Tier 1 — $1500")}</option>
          <option value="tier2">{t("Tier 2 — $4000")}</option>
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
            cursor: "pointer",
          }}
        >
          {t("Continue to Payment")}
        </button>
      </div>

      {/* Inline signup modal — appears in place instead of navigating to a
          separate signup page, so the selected tier isn't lost. */}
      {showSignup && (
        <div
          onClick={() => setShowSignup(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="auth-form-wrapper"
            style={{ position: "relative" }}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowSignup(false)}
            >
              ❌
            </button>

            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <h2 className="compact-heading">
                {t("Sign Up To Continue To Payment")}
              </h2>
              <p>
                {t("An account is required before you can subscribe to a provider tier.")}
              </p>

              {error && <p className="error">{error}</p>}
              {loading && <div className="loader"></div>}

              <input
                type="text"
                name="name"
                placeholder={t("Name")}
                value={user.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("Email")}
                value={user.email}
                onChange={handleChange}
                required
              />

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={t("Password")}
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <input
                type="text"
                name="code"
                placeholder={t("Affiliate Code (optional)")}
                value={user.code}
                onChange={handleChange}
              />

              <button className="custom-btn" type="submit" disabled={loading}>
                {loading
                  ? <>{t("Create Provider Account")}...</>
                  : <>{t("Create Provider Account")}</>
                }
              </button>

              <p>
                {t("Already have an account?")}{" "}
                <a href="/signin">{t("Sign In")}</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseProviderTier;
