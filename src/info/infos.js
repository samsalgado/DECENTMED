import React, { useEffect } from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next';
import summit from "../images copy/decentmedsummit.png";
import { Button } from 'react-bootstrap';

const InfoSummit = () => {
  const { t } = useTranslation("common");

  // Load GHL embed script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='container'>
      {/* Title */}
      <h1 className='title'>{t('DecentMed Summit')}</h1>

      {/* Image + Provider Button */}
      <div className='theecontainer'>
        <div>
          <img className='gridimag' src={summit} alt='DecentMed Summit' />

          <Button
            href="https://decentmed.org/signup/provider"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn"
            style={{ display: 'block', margin: '20px auto 0' }}
          >
            {t("Providers: Signup")}
          </Button>
        </div>
      </div>

      {/* Speaker Section */}
      <Speakers />

      {/* Header for Register */}
      <div style={{ width: "100%", maxWidth: "600px", margin: "40px auto 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          {t("Register")}
        </h2>
      </div>

      {/* GHL Form Embed */}
      <div
        data-form-id="hbb1megFlHaUKjxVNheq"
        data-form-name="Summit Registration"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "10px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0,0,0,0.08)"
        }}
      ></div>
    </div>
  );
};

export default InfoSummit;
