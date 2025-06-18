import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Practice from '../practices';
import Info7 from '../../info/info7';
import Swal from 'sweetalert2';
import '../Styles/AuthForm.css';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // 👁️ Show/hide toggle
  const [loading, setLoading] = useState(false); // 🔄 loader state
  const { t } = useTranslation('common');
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔄 start loader
    if (user.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await axios.post(
        'https://decentmed-server.vercel.app/users',
        // 'http://localhost:5001/users',
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
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          const redirect = localStorage.getItem("redirectAfterSignup");
          if (redirect === "paypal") {
            localStorage.removeItem("redirectAfterSignup");
            //Replace with Stripe like you did before
            //window.location.href = "https://www.paypal.com/paypalme/DECENTMED";
          } else {
            navigate("/");
          }
        });
      }


    } catch (err) {
      console.log("Error response:", err.response?.data);
      setError(err.response?.data?.message || 'Signup failed');
    }
    finally {
      setLoading(false); // 🔄 Stop loader
    }
  };

  // NEW: Google One Tap Sign-In
  useEffect(() => {
    const handleGoogleSignUp = async (response) => {
      // decode credential JWT if needed, or send directly to backend
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
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate("/");
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

    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        // client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
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
      <div className="auth-form-container">
        <form className="auth-form" style={{ position: "relative" }} onSubmit={handleSubmit}>
          {/* Close icon */}
          <div
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              top: "20px",
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
          <h2>{t("Create Account")}</h2>
          {error && <p className="error">{error}</p>}
          {loading && <div className="loader"></div>}

          <input
            type="text"
            name="name"
            placeholder={t("Full Name")}
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("Email Address")}
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

          {/* ✅ NEW CODE INPUT */}
          <input
            type="text"
            name="code"
            placeholder={t("Affiliate Code (optional)")}
            value={user.code}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? <>{t("Sign Up")}...</> : <>{t("Sign Up")}</>}
          </button>
          <p> {t("Already have an account?")} <Link to="/signin">{t("Sign In")}</Link></p>

          <div style={{ margin: "20px 0", textAlign: "center" }}>
            <div id="googleSignUpDiv"></div>
          </div>
        </form>
      </div>
      <Practice />
      <Info7 />

    </>
  );
};

export default SignUp;










// /components/SignUp.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [user, setUser] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('')
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (user.password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return;
//     }
//     try {
//       await axios.post('https://decentmed-server.vercel.app/users', user);
//       setSuccess('singup success')
//       navigate('/signin');
// console.log('hello111222');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>
//         {error && <p className="error">{error}</p>}
//         <p>{success}</p>
//         <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;






// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [user, setUser] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/signup', user);
//       alert('Signup successful!');
//       navigate('/signin');
//     } catch (error) {
//       alert('Signup failed: ' + error.response.data.message);
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

