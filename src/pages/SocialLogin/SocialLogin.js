
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './SocialLogin.css';
import "../../info/Info.css";
import { useTranslation } from 'react-i18next';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const { t } = useTranslation('common')
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result?.user;
        const saveUser = { name: loggedUser?.displayName, email: loggedUser?.email, role: "user" };

        fetch(`https://decentmed-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User saved:", data);
            navigate(from, { replace: true }); // Proceed to navigate after the user is saved
          })
          .catch((error) => {
            console.error("Error saving user:", error.message);
          });
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.message); // Handle Google sign-in errors here
      });
  };

  return (
    <div className='social-login'>
      <button onClick={handleGoogleSignIn} className='google-signin-btn'>
        {t('Google SignIn')}
      </button>
    </div>
  );
};

export default SocialLogin;
