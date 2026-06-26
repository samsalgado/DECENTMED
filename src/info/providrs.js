import React, {useEffect} from 'react';
import ImageGrid from './ImageGrid';
import "./stem.css"; 
import { Button } from 'react-bootstrap';
import './Info.css';
import Reviews from '../info/reviews';
import OurPlan from "../cards/Our Plan.png";
import AOS from 'aos';
import oursystem from "../images copy/OURSYSTEM (3).png";
import system1 from "../images copy/Screenshot 2026-06-26 at 10.52.29 AM.png";
import sys3 from "../images copy/Screenshot 2026-06-26 at 10.49.26 AM.png";
import sys2 from "../images copy/Screenshot 2026-06-26 at 12.17.00 PM.png";
import sys5 from "../images copy/Screenshot 2026-06-26 at 12.18.01 PM.png";
import sys4 from "../images copy/Screenshot 2026-06-26 at 10.46.48 AM.png";
import price1 from "../images copy/Screenshot 2026-06-26 at 1.05.32 PM.png";
import price2 from "../images copy/Screenshot 2026-06-26 at 1.06.24 PM.png";
import 'aos/dist/aos.css';
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from 'react-i18next';
const Providers = () => {
  const { t } = useTranslation('common');
   const learnmore = () => {
    window.location.href = 'https://cal.com/merlin-ayx5zg/30min'
  } 
  useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
      }, []);
  return (
    <>
  <div data-aos="slide-right" className="container-blue">
<h1 className='logotitle' style={{ display: 'flex', marginTop: '120px', textAlign: 'center' }}>
        {t('Turn Your Expertise Into a Steady Flow of Paying Clients')}
      </h1>
        <div data-aos="slide-right" className="container-blue">
          <div data-aos="slide-right" className="carousel-wrapper">
    <Carousel  autoPlay 
    infiniteLoop 
    showThumbs={false}
    showStatus={false}
    swipeable={true}
    emulateTouch={true}
    interval={15000}>
            <img className='gridimag' src={oursystem} alt='DecentMed System' />
            <img className='gridimag' src={OurPlan} alt='DecentMed System' />
            <img className='gridimag' src={system1} alt='DecentMed System' />
            <img className='gridimag' src={sys3} alt='DecentMed System' />
            <img className='gridimag' src={sys4} alt='DecentMed System' />
            <img className='gridimag' src={sys2} alt='DecentMed System' />
            <img className='gridimag' src={sys5} alt='DecentMed System' />
            <img className='gridimag' src={price1} alt='DecentMed System' />
            <img className='gridimag' src={price2} alt='DecentMed System' />
            </Carousel>
            </div>
        <Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .container-bbblue {
            flex-direction: column !important;
          }
          .content-wrapper {
            text-align: center !important;
          }
          .centered-video {
            max-width: 280px !important;
            margin-top: 20px !important;
            height: 200px !important;
          }
        }
      `}</style>
            <div className='container-blue'>
              <ImageGrid />
</div>       
  <div className='container-blue' data-aos="slide-right">
<Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
        </div>
      <div className="container-blue">
 <div className="row justify-content-center">
        </div>        
<div className='container mobile-optimized'>
  <div className='container-blue'>
                <h1 style={{textAlign:"center"}}>{t("How We Transform Your Business")}</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uOb-h9NLqKc?si=SrrlhrlhY2udLoGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
             </div>
      {/* Flex container for equal width collapsibles */}
      <div className="collapsible-section">
        <div className="title-container">
        <Reviews />
        </div>
      </div>
      </div>
      </div>
      </>
  );
}

export default Providers;

