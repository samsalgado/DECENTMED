import React from 'react';
import '../info/Info.css'; // Import the CSS file
//import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
//import Offer2 from '../offers/offer2';
import Pricing from './pricingtiers';
//import price from '../images copy/PRICETIERRS.png';
import { Button } from 'react-bootstrap';
import Reviews from '../info/reviews';

const Practice = () => {
  const { t } = useTranslation("common");
  return (
    
    <main className="page-content">
      
    <div className='container'>
      <div className='theecontaine'>

        <div className="signup-container">
          <h1 className="signup">{t('Sign Up')}</h1>
<iframe class="rumble" title="signup" width="640" height="360" src="https://www.youtube.com/embed/QgPSbbJTmbM?si=zwssl9LVDH_xWLXp" frameborder="0" allowfullscreen></iframe>  </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <Button className="custom-btn" href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true" target="_blank">
            {t("Book a Call")}
          </Button>
        </div>
        <Pricing />
        <Reviews />
      </div>
    </div>
    </main>
  );
};

export default Practice;

