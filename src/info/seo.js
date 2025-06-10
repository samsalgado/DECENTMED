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

      <iframe
            width="100%"
            height={315}
            src= "https://www.youtube.com/embed/MJD7QSJ_pZM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

    <Services />
    </div>
    
  )
}

export default SEO