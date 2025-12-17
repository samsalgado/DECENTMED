import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import './Info.css';
import totalcare from '../images copy/totalcare.png';
import naturopathy from '../images copy/naturopathybenefits.png';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import NatStudy from './naturopathystudy';
import NatExplained from './NatExplained';
import { Button, Modal } from 'react-bootstrap';
import BloodSugar from './Bloodsugar';
const Naturo = () => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className='container mobile-optimized'>
       <h1
  style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}
>
          {t('Naturopathy')}</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
          <div className="container-bbblue" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div className='content-wrapper' style={{
              flex: '1'
            }}>
              <h3>{t("Homeopathy vs Naturopathy")}</h3>
              <p>{t("Homeopathy is based on the principle of like cures like, meaning that a substance that causes symptoms in a healthy person can be used in highly diluted form to treat similar symptoms in someone who is ill. Conversely, Naturopathy is a holistic approach to healthcare that emphasizes the body's innate ability to heal itself using natural therapies and lifestyle changes. It aims to address the root cause of illness rather than just managing symptoms. Prescription overdose is expected to exceed 80,000 in 2025 according to the CDC, opting for naturopathic medicine is safer and more effective.")}</p>
              <Button className="custom-btn" href="https://decentmed.org/naturopathicproviders" target="_blank">
                {t("Try Naturopathy")}
              </Button>
            </div>
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/38tcMPtyeUA?si=dEYNrakXQonv7CgU"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '400px',
                width: '100%',
                height: 'auto'
              }}    
            />
          </div>
        </div>
        <div>
          <Button className="custom-btn" href="https://meridianpassagewellness.com/" target="_blank">
            {t('Find Out How Dr. Barnes Can Help You')}
          </Button>
        </div>
        <br />
        <div>
          <Button className="custom-btn" onClick={() => setShowModal(true)}>
            {t("Transcript")}
          </Button>
        </div>
        <Collapsible trigger={<th className="collapsible-trigger">{t("Naturopathy Explained")}</th>}>
          <NatExplained />
        </Collapsible>
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
        <a href="https://www.totalcarehealthsolutions.com/" target="_blank" rel="noopener noreferrer">
          <img className='gridimag' src={totalcare} alt='oceantreis' />
        </a> 
        <Collapsible trigger={<th className="collapsible-trigger">{t("Naturopathy Case Study")}</th>}>
          <NatStudy />
        </Collapsible>
        
        <Collapsible trigger={<th className="collapsible-trigger">{t("Lower your Blood Sugar")}</th>}>
          <BloodSugar />
        </Collapsible>
        <br />
        <a href="https://meridianpassagewellness.com" target="_blank" rel="noopener noreferrer">
          <br />
          <img src={naturopathy} className="TELEa" alt="quote" />
        </a>
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

export default Naturo;