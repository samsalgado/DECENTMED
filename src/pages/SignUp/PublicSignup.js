//TASK:
//ADD VERCEL
//ADD A WAY TO SIGNUP WITH GOOGLE
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/AuthForm.css";
import Swal from "sweetalert2";
const PublicSignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          // ✅ USE URL PARAM INSTEAD OF localStorage FOR BETTER RELIABILITY
          const urlParams = new URLSearchParams(window.location.search);
          const redirect = urlParams.get("redirect");

          if (redirect === "paypal") {
            window.location.href = "https://www.paypal.com/paypalme/DECENTMED";
          } else {
            navigate("/");
          }
        });
      }


    } catch (err) {
      console.log("Error response:", err.response?.data);
      setError(err.response?.data?.message || 'Signup failed');
    }
  };


  // NEW: Google One Tap Sign-In
  useEffect(() => {
const currentUrl = new URL(window.location.href);
  if (!currentUrl.searchParams.get("redirect")) {
    currentUrl.searchParams.set("redirect", "paypal");
    window.history.replaceState({}, '', currentUrl);
    console.log("✅ Google One Tap: redirect param ensured:", currentUrl.href);
  }

    const handleGoogleSignUp = async (response) => {
      // decode credential JWT if needed, or send directly to backend
      console.log("Google credential:", response.credential);

      try {
        const res = await axios.post(
          'https://decentmed-server.vercel.app/google-signup',
          // 'http://localhost:5001/google-signup',
        
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
           // ✅ always read fresh URL param:
          const urlParams = new URLSearchParams(window.location.search);
          const redirect = urlParams.get("redirect");
          if (redirect === "paypal") {
            window.location.href = "https://www.paypal.com/paypalme/DECENTMED";
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
    <div className="auth-form-container">
      <form className="auth-form" style={{ position: "relative" }} onSubmit={handleSubmit}>
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
        <h2>Public Signup</h2>
        <h2>Create an Account</h2>
        {error && <p className="error">{error}</p>}
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>

        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <div id="googleSignUpDiv"
          ></div>
        </div>

      </form>
    </div>
  );
};

export default PublicSignUp;
