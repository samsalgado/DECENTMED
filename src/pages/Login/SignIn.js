import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // ✅ useNavigate add korlam
import Swal from 'sweetalert2';
import '../Styles/AuthForm.css';

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('common');
  const navigate = useNavigate(); // ✅ navigate for close

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://decentmed-server.vercel.app/signin', user);

      localStorage.setItem('token', res.data.token);

      // ✅ Login Success Redirect
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You are being redirected...',
        showConfirmButton: false,
        timer: 1800
      }).then(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectTo = urlParams.get("from");
        if (redirectTo) {
          window.location.href = redirectTo;
        } else {
          navigate("/");
        }
      });


    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      console.log(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // NEW: Google One Tap Sign-In
  useEffect(() => {
  const currentUrl = new URL(window.location.href);
  // ✅ fallback 'from' param না থাকলে set করবেন না!
  if (!currentUrl.searchParams.get("from")) {
    console.log("✅ No 'from' param found. Will fallback to home '/' after login.");
  } else {
    console.log("✅ Found 'from':", currentUrl.searchParams.get("from"));
  }

  const handleGoogleSignUp = async (response) => {
    console.log("Google credential:", response.credential);

    try {
      const res = await axios.post(
        'https://decentmed-server.vercel.app/google-signup',
          // 'http://localhost:5001/google-signup',
        { credential: response.credential },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Google Signin Successful!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          const urlParams = new URLSearchParams(window.location.search);
          const redirectTo = urlParams.get("from");
          if (redirectTo) {
            window.location.href = redirectTo;
          } else {
            navigate("/");
          }
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
    <div className="auth-form-container" >


      <form className="auth-form" style={{ position: "relative" }} onSubmit={handleSubmit}>
        {/* ✅ Responsive Close Icon */}
        <div
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#333",
            background: "transparent",
            border: "none",
            zIndex: 10
          }}
        >
          ❌
        </div>

        <h2>{t("Login")}</h2>

        {error && <p className="error">{error}</p>}
        {loading && <div className="loader"></div>}

        <input
          type="email"
          name="email"
          placeholder={t("Email")}
          value={user.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder={t("Password")}
            value={user.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <>{t('Signing In')}...</> : <>{t('Sign In')}</>}
        </button>

        <p>
          {t('Don’t have an account?')} <Link to="/signup">{t('Sign Up')}</Link>
        </p>

        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <div id="googleSignUpDiv"
          ></div>
        </div>

      </form>
    </div>
  );
};

export default SignIn;
