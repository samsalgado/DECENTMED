import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Info.css';
import spectraspray from "../images copy/qrcream.png";
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
const Feld = () => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider';
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
  }, []);
  return (
    <div>
      <div className='container mobile-optimized'>
        <div className="container-blue">
          <h1 className='logotitle' data-aos="slide-left">
            {t('Feldenkrais Method')}
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="container-bbblue" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
            width: '100%'
          }}>
            <div className='content-wrapper' data-aos="slide-right" style={{ flex: '1' }}>
              <h3>{t("What is Feldenkrais?")}</h3>
              <p>
                {t("Feldenkrais (specifically the Feldenkrais Method) is a form of alternative physical therapy and 'somatic education' focused on body awareness and mindful movement. Think of it as mindfulness or meditation, but entirely through physical motion. It was developed in the mid-20th century by Moshé Feldenkrais, a physicist, engineer, and martial artist who used his understanding of mechanics and neurology to heal his own severe knee injuries.")}
              </p>
              <Button className="custom-btn" href="https://calendly.com/wellness1ssc/30min?back=1&month=2026-06" target="_blank">
                {t("Try Feldenkrais")}
              </Button>
            </div>
            <div style={{ 
      flex: '1 1 300px', // Matches the text container behavior
      maxWidth: '400px', 
      width: '100%' 
    }}>
            <iframe
              src="https://www.youtube.com/embed/cQqHL65mKos?si=5gsJ5zvKQ_Dt5w8y"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '400px',
                width: '100%',
                aspectRatio: '16/9',
                border: 'none'
              }}    
            />
            </div>
          </div>
        </div>
            <div data-aos="slide-right" className="container-blue">
     <a href='https://qrcream.us/' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
             </div>
        <div data-aos="slide-right" style={{ marginTop: '20px' }}>
          <Button onClick={learnmore} className="custom-btn">
            {t('Providers: Signup Here')}
          </Button> 
        </div>
      </div>
      {/* Portal: Render modal at body level, outside wrapper */}
      {showModal && ReactDOM.createPortal(
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          className="transcriptt-modal"
        >  
          <Modal.Header closeButton>
            <Modal.Title>{t("Transcript")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{t("naturopathy")}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              {t("Close")}
            </Button>
          </Modal.Footer>
        </Modal>,
        document.body
      )}
    </div>
  );
};
export default Feld;