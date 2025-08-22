import React from 'react';
import Services from './service.js';
import './Info.css'; 
import './acu.css'; // Import only acu.css for styling
import { useTranslation } from 'react-i18next';

const SEO = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
      <h1 className='title'>{t('Patient Acquisition Engine')}</h1>
      <blockquote className="quote">
        {t("'I really was drawn to your vision of how you can help people with this type of platform'")}
        <br></br>
        {t("- Stacy Theodossin")}
      </blockquote>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="515"
          src="https://drive.google.com/file/d/1SFUVWy939D51V1H6dKUtVPhT1ReKWi6n/preview"
          title="Patient Acquisition Engine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            border: 'none',
            overflow: 'hidden'
          }}
        />
      </div>

    <Services />
    <div className="video-wrapper">
    <h2 className='title'>{t('Holistic Medicine Marketing Audiobook')}</h2>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/oeLGYCDN_Uo?si=0EWb6lt6MDXPZ6CE"
          title="Patient Acquisition Engine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            border: 'none',
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
    
  )
}

export default SEO