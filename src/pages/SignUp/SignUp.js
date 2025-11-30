import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../footer';
import "../../info/Info.css";
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
  const location = useLocation();

  const tierFromPricing = location.state?.tier || '';
  const amountFromPricing = location.state?.amount || '';
  const fromPricing = location.state?.fromPricing || false;

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
      const res = await axios.post(
        'https://decentmed-server.vercel.app/users',
        user,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Welcome to our platform!',
          confirmButtonColor: '#027360',
        }).then(() => {
          if (fromPricing && tierFromPricing && amountFromPricing) {
            navigate('/stripepay', { state: { tier: tierFromPricing, amount: amountFromPricing } });
          } else {
            navigate("/");
          }
        });
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "1055481939354-kahqsmu8kojqr57fkeftafted8umun54.apps.googleusercontent.com",
        callback: async (response) => {
          try {
            const res = await axios.post('https://decentmed-server.vercel.app/google-signup', {
              credential: response.credential
            });
            localStorage.setItem('token', res.data.token);
            navigate(fromPricing ? '/stripepay' : '/');
          } catch (err) {
            console.log(err);
          }
        }
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignUpDiv"),
        { theme: "outline", size: "large" }
      );
    };
    document.body.appendChild(script);
  }, [navigate, fromPricing]);

  return (
    <>
      <Topbar />
      <div className="auth-form-container">
        {/* ONLY CHANGE IS HERE */}
        <form className="auth-form" style={{ paddingTop: "140px" }} onSubmit={handleSubmit}>
        {/* was marginTop: '110px' → now paddingTop: "140px" (safe on every phone) */}

          <div onClick={() => navigate("/")} style={{
            position: "absolute", top: "30px", right: "20px", fontSize: "20px",
            fontWeight: "bold", cursor: "pointer", background: "transparent", border: "none", color: "#333"
          }}>X</div>

          <h2>{t("Provider Signup")}</h2>
          {error && <p className="error">{error}</p>}
          {loading && <div className="loader"></div>}

          <input type="text" name="name" placeholder={t("Name")} value={user.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder={t("Email")} value={user.email} onChange={handleChange} required />

          <div className="password-field">
            <input type={showPassword ? "text" : "password"} name="password" placeholder={t("Password")} value={user.password} onChange={handleChange} required />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </div>

          <input type="text" name="code" placeholder={t("Affiliate Code (optional)")} value={user.code} onChange={handleChange} />

          <button className="custom-btn" type="submit" disabled={loading}>
            {loading ? <>{t("Sign Up")}...</> : <>{t("Sign Up")}</>}
          </button>

          <p> {t("Already have an account?")} <Link to="/signin">{t("Sign In")}</Link></p>

          <div style={{ margin: "15px 0", textAlign: "center" }}>
            <div id="googleSignUpDiv"></div>
          </div>
        </form>
      </div>
      <Practice />
      <Offer2 />
      <Info7 />
      <Footer />
    </>
  );
};

export default SignUp;