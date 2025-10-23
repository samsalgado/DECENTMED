import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../info/Info.css";

const SignupOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <main 
      className="page-content" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f0f7f8ff, #e3eeedcb)',
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '40px 30px',
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px',
          animation: 'fadeIn 0.5s ease-in-out'
        }}
      >
        <h2 
          style={{
            color: '#004d40',
            fontSize: '1.8rem',
            marginBottom: '30px',
            fontWeight: '600'
          }}
        >
          {t('Joining as Provider or Patient?')}
        </h2>

        <button
          onClick={() => navigate('/signup/public')}
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#00796B',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 0',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            marginBottom: '15px'
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#004d40')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#00796B')}
        >
          {t('Public User')}
        </button>

        <button
          onClick={() => navigate('/signup/provider')}
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#00796B',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 0',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#004d40')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#00796B')}
        >
          {t('Provider')}
        </button>
      </div>
    </main>
  );
};

export default SignupOptions;
