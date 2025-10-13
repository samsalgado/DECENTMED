import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Practice from '../practices';
import Info7 from '../../info/info7';
import "../../info/Info.css";
import Swal from 'sweetalert2';
import '../Styles/AuthForm.css';
import Offer2 from '../../offers/offer2';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null); // Default language

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation('common');

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
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Welcome to our platform!',
          confirmButtonColor: '#027360',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate("/stripepay")
        });
      }

    } catch (err) {
      console.log("Error response:", err.response?.data);
      setError(err.response?.data?.message || 'Signup failed');
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleGoogleSignUp = async (response) => {
      console.log("Google credential:", response.credential);

      try {
        const res = await axios.post(
          'https://decentmed-server.vercel.app/google-signup',
          { credential: response.credential },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          Swal.fire({
            icon: 'success',
            title: 'Google Signin Successful!',
            confirmButtonColor: '#027360',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate("/stripepay")
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

  const styles = `
    .auth-form-container {
      overflow: hidden;
    }

    .auth-form {
      overflow: hidden;
    }
  `;
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Function to change language
  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        localStorage.setItem("preferredLanguage", lang);
        setSelectedLang(lang);
        window.location.reload(); // Refresh page after language change

      })
      .catch(err => console.error("Language change error:", err));
  };

  // UseEffect hook to check localStorage on page load
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") || "en";
    i18n.changeLanguage(storedLang)
      .then(() => {
        setSelectedLang(storedLang);
      })
      .catch(err => console.error("Error loading language:", err));
  }, [i18n, selectedLang]); // ✅ Empty dependency array to prevent re-runs


  return (
    <>
      <div className={`change-locale mi-start ${showMenu ? "is-open" : ""}`}>
          <button
            className="change-locale-toggle"
            aria-label="Change locale"
            onClick={toggleMenu}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon mi-end"
              aria-hidden="true"
            >
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
            <span aria-label="Current locale">{t("language")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="arrow-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="change-locale-menu inset-i-end" dir="ltr">
              <span className="lang" onClick={() => changeLang("en")}>English</span>
              <span className="lang" onClick={() => changeLang("es")}>Español</span>
              <span className="lang" onClick={() => changeLang("nl")}>Dutch</span>
              <span className="lang" onClick={() => changeLang("fr")}>Français</span>
              <span className="lang" onClick={() => changeLang("ch")}>Chinese</span>
              <span className="lang" onClick={() => changeLang("hi")}>Hindi</span>
              <span className="lang" onClick={() => changeLang("ar")}>Arabic</span>
            </div>
          )}
        </div>
      <style>{styles}</style>
      <div className="auth-form-container">
        <form className="auth-form" style={{ position: "relative", overflow: "hidden" }} onSubmit={handleSubmit}>
          <div
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              top: "30px",
              right: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              color: "#333"
            }}
          >
            ❌
          </div>
          <h2>{t("Provider Signup")}</h2>
          <h2>{t("Create an Account")}</h2>
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
            {loading ? <>{t("Sign Up")}...</> : <>{t("Sign Up")}</>}
          </button>
          <p> {t("Already have an account?")} <Link to="/signin">{t("Sign In")}</Link></p>

          <div style={{ margin: "20px 0", textAlign: "center" }}>
            <div id="googleSignUpDiv"></div>
          </div>
        </form>
      </div>
      <Practice />
      <Offer2 />
      <Info7 />
    </>
  );
};

export default SignUp;