import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './SocialLogin.css';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  // const {googleSignIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result?.user;
   console.log(result,222);
      const saveUser = { name: loggedUser?.displayName, email: loggedUser?.email, role: "user" }

      fetch(`http://localhost:5001/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(saveUser)
        //  axiosSecure.post('/users',saveUser) 
      })
        .then(res => res.json())
    })
    navigate(from, { replace: true })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className='social-login'>
      <button onClick={handleGoogleSignIn} className='google-signin-btn'>Google SignIn</button>
    </div>
  );
};

export default SocialLogin;