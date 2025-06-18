import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/AuthForm.css'; // reuse your styles

const SignupOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h2>Joining as Provider or Patient?</h2>
        <button onClick={() => navigate('/signup/public')}>Public User</button>
        <button onClick={() => navigate('/signup/provider')}>Provider</button>
      </div>
    </div>
  );
};

export default SignupOptions;
