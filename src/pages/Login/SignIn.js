import axios from 'axios';
import { useState } from 'react';
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

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You are being redirected...',
        showConfirmButton: false,
        timer: 1800
      }).then(() => {
        window.location.href = 'https://www.paypal.com/paypalme/DECENTMED';
      });

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      console.log(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

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
          placeholder={t("Email Address")}
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
      </form>
    </div>
  );
};

export default SignIn;
