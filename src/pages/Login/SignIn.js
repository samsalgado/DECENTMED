import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // ✅ SweetAlert import
import '../Styles/AuthForm.css';

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('common');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
https://decentmed-server.vercel.app/
    try {
      const res = await axios.post('https://decentmed-server.vercel.app/signin', user);

      localStorage.setItem('token', res.data.token);

      // ✅ SweetAlert Success Popup
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
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{t("Login")}</h2>

        {error && <p className="error">{error}</p>}
        {loading && <div className="loader"></div>} {/* ✅ Spinner loader */}

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
         { t('Don’t have an account?')} <Link to="/signup">{t('Sign Up')}</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
