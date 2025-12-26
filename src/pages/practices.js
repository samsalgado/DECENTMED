import React from 'react';
import '../info/Info.css'; // Import the CSS file
//import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
//import Offer2 from '../offers/offer2';
import Pricing from './pricingtiers';
//import price from '../images copy/PRICETIERRS.png';
import { Button } from 'react-bootstrap';
import Reviews from '../info/reviews';
import offer from "../images copy/offerr.png";

const Practice = () => {
  const { t } = useTranslation("common");
  return (
      <div className='container'>
        <div className='theecontaine'>
<br></br>
<br></br>

       <div className="signup-container">

            <iframe class="rumble" title="signup" height="360"
              src="https://www.youtube.com/embed/QgPSbbJTmbM?si=zwssl9LVDH_xWLXp" frameborder="0" allowfullscreen></iframe>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem",marginBottom:'1rem' }}>
            <Button className="custom-btn" href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true" target="_blank">
              {t("Provider Onboarding Call")}
            </Button>
          </div>
          <img src={offer} className='gridimag' alt='offer' />
          <Pricing />
          <Reviews />
        </div>
      </div>
  );
};

export default Practice;

