import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../footer';
import "../../info/Info.css";
import "../../info/authform.css";
import Info7 from '../../info/info7';
import Offer2 from '../../offers/offer2';
import Practice from '../practices';
import '../Styles/AuthForm.css';
import Topbar from '../topbar';
const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };
  const handleSubmit = async (e) => {
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
        role: "provider"   // REQUIRED BY BACKEND
      };

      const res = await axios.post(
        'https://decentmed-server.vercel.app/users',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Please complete your subscription to activate your provider account.',
          confirmButtonColor: '#027360',
          confirmButtonText: 'Continue'
        }).then(() => {
          navigate('/choose-provider-tier');
        });
      }

    } catch (err) {
      console.log("Error response:", err.response?.data);
      console.log("FULL ERROR:", err); console.log("ERROR RESPONSE DATA:", err.response?.data); console.log("ERROR STATUS:", err.response?.status); console.log("ERROR HEADERS:", err.response?.headers);
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleGoogleSignUp = async (response) => {
      try {
        const res = await axios.post(
          'https://decentmed-server.vercel.app/google-signup',
          { credential: response.credential, role: "provider" },
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (res.data.token) {
          localStorage.setItem('token', res.data.token);

          Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'Please complete your subscription to activate your provider account.',
            confirmButtonColor: '#027360',
            confirmButtonText: 'Continue'
          }).then(() => {
            navigate('/choose-provider-tier');
          });
        }

      } catch (err) {
        console.error("Google signin failed:", err);
        Swal.fire({
          icon: 'error',
          title: 'Google signin failed!',
          text: err.response?.data?.message || 'Please try again.'
        });
      }
    };

    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "1055481939354-kahqsmu8kojqr57fkeftafted8umun54.apps.googleusercontent.com",
        callback: handleGoogleSignUp
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignUpDiv"),
        { theme: "outline", size: "large", text: "signin_with" }
      );
    };
    document.body.appendChild(script);
  }, [navigate]);

  return (
    <>
      <Topbar />
      <div style={{ textAlign: 'center', marginTop: '80px', paddingTop: '2rem' }}>
        <h1>{t("Provider Registration")}</h1>
        <br></br>
        <br></br>
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <button
              type="button"
              className="close-btn"
              onClick={() => navigate("/")}
            >
              ❌
            </button>

            <form className="auth-form" onSubmit={handleSubmit}>
              <h2 className="compact-heading">
                {t("Join DecentMed as a Holistic Healthcare Provider")}
              </h2>
              <h5 className="compact-heading">
                {t("Create Provider account to offer holistic and integrative care through DecentMed")}
              </h5>
              <p>
                {t("An active subscription is required to publish and maintain your provider profile.")}
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
                <Link to="/signin">{t("Sign In")}</Link>
              </p>

              <div className="google-signup-wrapper">
                <div id="googleSignUpDiv"></div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Practice />
      <Offer2 />
      <Info7 />
      <Footer />
    </>
  );
};

export default SignUp;

