import React from 'react';
import '../info/Info.css'; // Import the CSS file
import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Offer2 from '../offers/offer2';

const Practice = () => {
const { t } = useTranslation("common");

  return (
    <div className='theecontainer'>
      <div className='video-container'>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/85HJDyVHU1o?si=HP3go149es0YvcsO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
        <div className="signup-container">
        <h1 className="signup">{t('Sign Up')}</h1>
        </div>
        <Offer />
        <Offer2 />
    </div>
  );
};

export default Practice;
