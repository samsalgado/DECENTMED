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
'http://localhost:5001/users',
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
  };

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.async = true;
      script.onload = () => {
        if (window.gapi) {
          window.gapi.load("auth2", () => {
            console.log("Google API initialized!");
          });
        }
      };
      document.body.appendChild(script);
    };
    loadGoogleAPI();
  }, []);
  
  console.log("Google Client ID:", process.env.REACT_APP_PUBLIC_ID);
  return (
    <div className="auth-form-container">
      <form className="auth-form"  style={{ position: "relative" }} onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default PublicSignUp;
