import React from 'react';
import "../App.css";
import './Info.css';
import ayurveda from "../images copy/ayurveda-science.png";
import Elements from './elements';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
const Ayurvedaa = () => {
  const { t } = useTranslation("common");
  
  return (
    <div className='container mobile-optimized'>
    <h1 className='title mobile-title'>{t('Ayurveda Experience')}</h1>
    <div className="container-bbblue" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div className='content-wrapper' style={{
        flex: '1'
      }}>
        <p className='pr'>{t("Ayurveda, an ancient healing system, offers a holistic approach to wellness by balancing the body, mind, and spirit through natural remedies and personalized treatments. Unlike conventional medicine, Ayurveda focuses on preventing illness rather than just treating symptoms, using herbs, diet, and lifestyle adjustments tailored to each individual's constitution. Patients seeking gentle, long-term healing often turn to Ayurveda for its ability to address root causes rather than temporary relief.")}</p>
        <br></br>
        <Button variant="primary" href="https://themerlingroupworld.com/ayurvedicmedicine" target="_blank">
          {t("Experience Ayurveda")}
        </Button>
      </div>
      <img className='gridimag' src={ayurveda} alt={t('Ayurveda Science')} style={{
        maxWidth: '400px',
        width: '100%',
        height: 'auto'
      }} />
    </div>
    
    <style jsx>{`
      @media (max-width: 768px) {
        .container-bbblue {
          flex-direction: column !important;
        }
        .content-wrapper {
          text-align: center !important;
        }
        .gridimag {
          max-width: 280px !important;
          margin-top: 20px !important;
        }
      }
    `}</style>
   <br></br>
   <br></br>
   <br></br>
      <div className="collapsible">
        <Elements />
      </div>

      <iframe width="100%" height={500} src="https://drive.google.com/file/d/1fFqRB-Z-QIq6t3DSjkBmvkXjBddLsnOG/preview" title={t('YouTube video player')} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <br />

      <div className='pr'>
        <h3>{t('What is Ayurveda?')}</h3>
        <p>
          {t(`Ayurveda is a holistic healing system developed in India based on the delicate balance between mind, body, and spirit. The goal of Ayurveda is promoting good health instead of fighting disease. The goal is to cleanse your body of undigested food, which stay in your body and lead to illness. The process is called 'panchakarma', designed to reduce your symptoms and restore harmony and balance. Other processes used are blood purification, massage, medical oils, herbs, enemas, and laxatives.`)}
        </p>
        <h3>{t('Why Choose Ayurveda?')}</h3>
        <p> {t('1. Truly embrace individual')}</p>
        <p> {t('2. Foster self-awareness')}</p>
        <p> {t('3. Focuses on prevention and the root cause of illness')}</p>
        <p> {t('4. Truly intuitive')}</p>
        <Button variant="primary" href="https://themerlingroupworld.com/ayurvedicmedicine" target="_blank">
                {t("Experience Ayurveda")}
        </Button>
      </div>
      <br></br>
      <iframe width="100%" height={500} src="https://drive.google.com/file/d/1D_amsczAnFyuk4pharUzZSZQcYaKefvw/preview" title={t('YouTube video player')} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
}

export default Ayurvedaa;
