import React from 'react';
import '../info/Info.css'; // Import the CSS file
import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Offer2 from '../offers/offer2';
import Pricing from './pricingtiers';
import price from '../images copy/PRICETIERRS.png';
import { Button } from 'react-bootstrap';
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
        <img   style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                    }} src={price} alt='' />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <Button variant="primary" href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true" target="_blank">
          {t("Book Meeting")}
        </Button>
      </div>
        <Pricing />
        <Offer />
        <Offer2 />
    </div>
</div>
  );
};

export default Practice;
