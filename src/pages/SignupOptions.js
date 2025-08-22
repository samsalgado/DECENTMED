import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/AuthForm.css'; // reuse your styles
import { useTranslation } from 'react-i18next';
import "../info/Info.css";

const SignupOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common')
  return (
    <main className="page-content">
    <div className="auth-form-container">
      <div className="auth-form">
        <h2>{t('Joining as Provider or Patient?')}</h2>
        <button className="custom-btn" onClick={() => navigate('/signup/public')}>{t('Public User')}</button>
        <button className="custom-btn" onClick={() => navigate('/signup/provider')}>{t('Provider')}</button>
      </div>
    </div>
    </main>
  );
};

export default SignupOptions;
