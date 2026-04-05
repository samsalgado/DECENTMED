import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Info.css';
import spectraspray from "../images copy/spectraspray.png";
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
    const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  useEffect(() => {
      AOS.init({ duration: 1000, once: false}); // once:true means animation runs only once
    }, []);
  return (
    <div>
      <div className='container mobile-optimized'>
      <div className="container-blue">

       <h1 className='logotitle' data-aos="slide-left">
          {t('Naturopathy')}</h1>
          </div>
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
            <div className='content-wrapper' data-aos="slide-right" style={{
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
        
                          <div className="container-blue" data-aos="slide-left">

           <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
             <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/GjPp6HbNvI8?si=_vYO1vXwk_V2CRSv"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
<div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/TvwiLlOiGOg?si=9TzkewcMx1TETCvi"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
            
            <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/OfAtApyAIx8?si=kK19TOFl0pf3KPKH"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
             <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/bI_c90p2zMQ?si=UsEfhVCzyJ18TTvU"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
            <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/m1vr-y8T2FY?si=jqrT3QsTqky6P5xU"              
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
             <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/PL-3LiSADbA?si=iDLbfRsDkSL_byVZ"              
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
            <div data-aos="slide-right">
              <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/6yO5kNpzvY0?si=OHMvz04v5zmOEcZo"              
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '300px'
              }}    
            />
            </div>
          <Button className="custom-btn" href="https://meridianpassagewellness.com/" target="_blank">
            {t('Find Out How Dr. Barnes Can Help You')}
          </Button>
          
        </div>
        
        </div>
       
        
        <Collapsible data-aos="slide-right"  trigger={<th className="collapsible-trigger">{t("Naturopathy Explained")}</th>}>
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
                        <div data-aos="slide-right" className="container-blue">

        <a href="https://www.totalcarehealthsolutions.com/" target="_blank" rel="noopener noreferrer">
          <img className='gridimag' src={totalcare} alt='oceantreis' />
        </a> 
        <div className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/NdDj3Nadzas?si=Dna9qwheTXmFnhod"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
             <div className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/BNlE5YCF_wA?si=A75KY-XtmhcONAB4"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
              <div className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/--x4UjwtoCM?si=SOJCPAEUWgPjobgL"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
            <div className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/Oks2b45acDQ?si=PKcUCrMtQ7JkCKF5"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
             <Button className="custom-btn" href="https://totalcarehealthsolutions.com/" target="_blank">
            {t('Find Out How Dr. Volner Can Help You')}
          </Button>
        <Collapsible trigger={<th className="collapsible-trigger">{t("Naturopathy Case Study")}</th>}>
          <NatStudy />
        </Collapsible>
        <Collapsible trigger={<th className="collapsible-trigger">{t("Lower your Blood Sugar")}</th>}>
          <BloodSugar />
        </Collapsible>
       <div data-aos="slide-right">
        <a href="https://meridianpassagewellness.com" target="_blank" rel="noopener noreferrer">
          <br />
          <img src={naturopathy} className="TELEa" alt="quote" />
        </a>
         <Button onClick={learnmore} target="_blank" className="custom-btn">
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
        
    </div>
  );
};

export default Naturo;