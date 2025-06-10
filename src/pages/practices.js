import React from 'react';
import '../info/Info.css'; // Import the CSS file
import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Offer2 from '../offers/offer2';
import Pricing from './pricingtiers';
import price from '../images copy/TIERS.png';
const Practice = () => {
const { t } = useTranslation("common");

  return ( 
<div className='container'>
<div className='theecontaine'>
      <div className='video-container'>
        <iframe
height='315'
          src="https://www.youtube.com/embed/9jbz_nHvS9A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
        <div className="signup-container">
        <h1 className="signup">{t('Sign Up')}</h1>
        <img className='gridimag' src={price} alt='' />
        </div>
        <Pricing />
        <Offer />
        <Offer2 />
    </div>
</div>
  );
};

export default Practice;
