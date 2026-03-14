import React, {useEffect} from 'react';
import '../info/Info.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import the CSS file
//import Offer from '../offers/offer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
//import Offer2 from '../offers/offer2';
import Pricing from './pricingtiers';
//import price from '../images copy/PRICETIERRS.png';
import { Button } from 'react-bootstrap';
import Reviews from '../info/reviews';
const Practice = () => {
  const { t } = useTranslation("common");
    useEffect(() => {
                AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
              }, []);
  return (
      <div className='container'>
        <div className='theecontaine'>
<br></br>
<br></br>
       <div data-aos="slide-right" className="signup-container">
        <Pricing />
            <iframe class="rumble" title="signup" height="360"
              src="https://www.youtube.com/embed/uOb-h9NLqKc?si=jlehP8QTCzA-bs47" frameborder="0" allowfullscreen></iframe>
          </div>
          <div data-aos="slide-right" style={{ display: "flex", justifyContent: "center", marginTop: "1rem",marginBottom:'1rem' }}>
            <Button className="custom-btn" href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true" target="_blank">
              {t("Provider Onboarding Call")}
            </Button>
          </div>
          
          <Reviews />
        </div>
      </div>
  );
};

export default Practice;

