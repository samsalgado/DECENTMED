import React, {useState, useEffect} from 'react'
import Vitamins from './vitamins';
import Coachingvids from './coachingvids';
import ReactDOM from 'react-dom';
import HealthCoaching from './healthcoaching';
import amber from "../images copy/amber.png";
import spectraspray from "../images copy/spectraspray.png";
import './Info.css';
import book1 from "../images copy/graphic1.png";
import book3 from "../images copy/Screenshot 2026-04-03 at 9.40.18 PM.png";
import book2 from "../images copy/Screenshot 2026-04-03 at 9.38.30 PM.png";
import book4 from "../images copy/Screenshot 2026-04-03 at 9.41.38 PM.png";
import book5 from "../images copy/Screenshot 2026-04-03 at 9.43.19 PM.png";
import book6 from "../images copy/Screenshot 2026-04-03 at 9.44.13 PM.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Collapsible from 'react-collapsible';
import cdm from "../images copy/cdm.png";
import "./prevent.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
const PreventWellness = () => {
  const { t } = useTranslation("common");
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }   
  const learntmore = () => {
  window.location.href = 'https://www.nourishedheartswellness.com/book-online'
} 
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Title: fade + slide
  gsap.from(".logotitle", {
    scrollTrigger: {
      trigger: ".logotitle",
      start: "top 80%",
    },
    y: 100,
    opacity: 0,   // keep fade for text
    duration: 1,
    ease: "power2.out"
  });

  // Images: scale only (no transparency)
  gsap.from(".gridimag", {
    scrollTrigger: {
      trigger: ".gridimag",
      start: "top 85%",
    },
    scale: 0.8,   // zoom effect
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.7)"
  });

  // Buttons: fade + slide
  
}, []);
 useEffect(() => {
          AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
        }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='container'>
      <div data-aos="slide-right" className="container-blue">

      <div className="title-container">
         <h1 className='logotitle'>{t('Preventive Wellness')}</h1>
         </div>
      </div>
      <div data-aos="slide-right" className="container-blue">
      <Vitamins />
       <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">
   {t("Find Wellness Coaches")}
     </Button>
      </div>
       <div data-aos="slide-right" className="container-blue">
      <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
      <h1 className='center'>{t("Coaching Education: Health Coaches Near Me")}</h1>
        <div data-aos="slide-right" className="pr"> <a href="https://www.cdmhealthandwellness.com/" alt="CDM Health and Wellness"> <img className="gridimag" src={cdm} alt="CDM Health and Wellness" /> </a> </div>
        <div data-aos="slide-right" className="pr"> <a href="https://calendly.com/ambernacolle/15-30min?month=2026-03" alt="Amber Nacolle Caroll"> <img className="gridimag" src={amber} alt="CDM Health and Wellness" /> </a> </div>
  <div data-aos="slide-right">
  <Coachingvids />
  </div>
   <iframe
              height="515"
              src="https://www.youtube.com/embed/7bu3HRvtWwE?si=P6WSLCYc-Fjd0OS4"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
             <iframe
              height="515"
              src="https://www.youtube.com/embed/zC62vgTyHLg?si=SmcbtsE31DV67rSo"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />

            <div data-aos="slide-right">
              <Collapsible trigger={<div className="collapsible-trigger">{t("Slides")}</div>}>
         <img src={book1} className='gridimage' alt="img" />
        <img className='gridimage' src={book2} alt="img" />
        <img className='gridimage' src={book3} alt="img" />
        <img className='gridimage' src={book4} alt="img" />
        <img className='gridimage' src={book5} alt="img" />
        <img className='gridimage' src={book6} alt="img" />
          <Button onClick={learntmore} target='_blank' className="custom-btn">
                {t('Learn More')}
            </Button>
        </Collapsible>
        </div>
  <br></br>
   
                {showModal && ReactDOM.createPortal(
                  
                  <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="transcriptt-modal">
                <Modal.Header closeButton>
                  <Modal.Title>{t("Transcript")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{t("johncraig")}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    {t("Close")}
                  </Button>
                </Modal.Footer>
              </Modal>,
              document.body
              )}

            <HealthCoaching />
            
            </div>
            <Button onClick={learnmore} target='_blank' className="custom-btn">
                {t('Providers: Signup Here')}
            </Button> 
    </div>
  );
}

export default PreventWellness;
