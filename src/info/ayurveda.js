import React from 'react';
import "../App.css";
import './Info.css';
import ayurveda from "../images copy/ayurveda-science.png";
import Elements from './elements';
import Principles from './ayurev';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import ultt from "../images copy/ultt.png";
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
        <Button className="custom-btn" href="https://decentmed.org/ayurvedicmedicine" target="_blank">
          {t("Experience Ayurveda")}
        </Button>
      </div>
      <img className='gridimag' src={ayurveda} alt={t('Ayurveda Science')} style={{
        maxWidth: '400px',
        width: '100%',
        height: 'auto'
      }} />
    </div>
     <a href="https://theultimatehealthhack.com/doctors-roundtable-discussion/">
        <img src={ultt} className='gridimag' alt="quote" />
        </a>
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
        <Principles />
        <Elements />
        <br></br>
        <iframe width="100%" height={550} src="https://drive.google.com/file/d/1fFqRB-Z-QIq6t3DSjkBmvkXjBddLsnOG/preview" title={t('YouTube video player')} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>   
      <br />
      <div className='pr'>
        <h2>{t('What is Ayurveda?')}</h2>
        <p>
          {t(`Ayurveda is a holistic healing system developed in India based on the delicate balance between mind, body, and spirit. The goal of Ayurveda is promoting good health instead of fighting disease. The goal is to cleanse your body of undigested food, which stay in your body and lead to illness. The process is called 'panchakarma', designed to reduce your symptoms and restore harmony and balance. Other processes used are blood purification, massage, medical oils, herbs, enemas, and laxatives.`)}
        </p>
        <br></br>
        <h2>{t('Types of Ayurvedic Oil')}</h2>
        <div>
  <p style={{textAlign: "left"}}>{t('1. Dhanwantharam, Bala oil - Massage (Abhyanga)')}</p>
  <p style={{textAlign: "left"}}>{t('2. Bhringraj, Neelibhringadi - Hair and scalp care')}</p>
  <p style={{textAlign: "left"}}>{t('3. Mahanarayan oil - Joint pain relief')}</p>
  <p style={{textAlign: "left"}}>{t('4. Kumkumadi oil (for glow), Neem oil - Skin conditions')}</p>
  <p style={{textAlign: "left"}}>{t('5. Brahmi or Ashwagandha oil - Stress and sleep')}</p>

</div>

        <h2>{t('Why Choose Ayurveda?')}</h2>
        <div>
  <p style={{textAlign: "left"}}>{t('1. Truly embrace individual')}</p>
  <p style={{textAlign: "left"}}>{t('2. Foster self-awareness')}</p>
  <p style={{textAlign: "left"}}>{t('3. Focuses on prevention and the root cause of illness')}</p>
  <p style={{textAlign: "left"}}>{t('4. Truly intuitive')}</p>
</div>
        <Button className="custom-btn" href="https://decentmed.org/ayurvedicmedicine" target="_blank">
                {t("Experience Ayurveda")}
        </Button>
      </div>
      <br></br>
      <div className="video-container" style={{
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  height: '56.25vw', // 16:9 aspect ratio
  maxHeight: '80vh', // Don't exceed 80% of viewport height
  minHeight: '400px'
}}>
  <iframe 
    width="100%" 
    height="100%" 
    src="https://drive.google.com/file/d/1D_amsczAnFyuk4pharUzZSZQcYaKefvw/preview" 
    title={t('YouTube video player')} 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
    style={{
      border: 'none',
      objectFit: 'contain'
    }}
  />
</div>
    </div>
  );
}

export default Ayurvedaa;
