import React from 'react';
import Services from './service.js';
import './Info.css'; 
import './acu.css'; // Import only acu.css for styling
import { useTranslation } from 'react-i18next';

const SEO = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
      <h1 className='title'>{t('Digital Marketing Agency')}</h1>


      <iframe
            width="100%"
            height={315}
            src= "https://www.youtube.com/embed/_ROUBiWA0MY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

    <Services />
    </div>
    
  )
}

export default SEO
