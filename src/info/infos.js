import React, {useEffect} from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import summit from "../images copy/decentmedsummit.png";
const InfoSummit = () => {
  const { t } = useTranslation("common"); // Access translation function
useEffect(() => {
    // Load GHL script once
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
      <h1 className='title'>{t('DecentMed Summit')}</h1>
       <div className='theecontainer'>
      <div>
        <img className='gridimag' src={summit} alt='' />
      </div>
      </div>
      <Speakers />
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "-30px" }}>
        {t("Register")}
      </h2>
      </div>
       <iframe
      src="https://api.leadconnectorhq.com/widget/form/hbb1megFlHaUKjxVNheq"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "3px"
      }}
      id="inline-hbb1megFlHaUKjxVNheq"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Summit Reg"
      data-height="749"
      data-layout-iframe-id="inline-hbb1megFlHaUKjxVNheq"
      data-form-id="hbb1megFlHaUKjxVNheq"
      title="Summit Reg"
    />
    </div>
  );
}

export default InfoSummit;
