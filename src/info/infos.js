import React, { useEffect } from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import summit from "../images copy/decentmedsummit.png";
import { Button } from 'react-bootstrap';

const InfoSummit = () => {
  const { t } = useTranslation("common"); // Access translation function
  
  useEffect(() => {
    // Create the script tag
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function that removes the script tag
    return () => {
      // Only remove the script if it is still in the body
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>{t('DecentMed Summit')}</h1>
      <div className='theecontainer'>
        <div>
          <img className='gridimag' src={summit} alt='' />
          <Button
            href="https://decentmed.org/signup/provider"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn"
            style={{ display: 'block', margin: '10px auto 0' }}
          >
            {t("Providers: Signup")}
          </Button>
        </div>
      </div>
      <Speakers />
      
      <div style={{ width: "100%", maxWidth: "600px", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("Register")}
        </h2>
      </div>

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/hbb1megFlHaUKjxVNheq"
        style={{
          width: "100%",
          height: "773px", // Explicit height for the iframe
          border: "none",
          borderRadius: "3px",
          marginTop: "20px" // Space between the heading and iframe
        }}
        id="inline-hbb1megFlHaUKjxVNheq"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Summit Reg"
        data-layout-iframe-id="inline-hbb1megFlHaUKjxVNheq"
        data-form-id="hbb1megFlHaUKjxVNheq"
        title="Summit Reg"
      />
    </div>
  );
}

export default InfoSummit;
