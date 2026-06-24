import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Info.css';
import spectraspray from "../images copy/spectraspray.png";
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import Reviewss from './drbrownreviews';
import HStudy from './hormonestudy';
import { Button, Modal } from 'react-bootstrap';
const Meno = () => {
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
          {t('Hormone Health for Women')}</h1>
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
              <h3>{t("Endometriosis Supportive Therapy")}</h3>
              <p>{t("I help women with endometriosis, adenomyosis, and undiagnosed chronic pelvic pain uncover the root causes driving their symptoms so they can reduce pain, restore energy, balance their hormones, improve fertility potential, and reclaim their quality of life.")}</p>
              <p>{t("Rather than focusing solely on symptom management, I take a comprehensive functional medicine approach that addresses inflammation, immune dysfunction, gut health, hormone imbalances, nutrient deficiencies, stress, and lifestyle factors that may contribute to ongoing pain and disease progression.")}</p>
              <p>{t("Through personalized testing, targeted nutrition, lifestyle modifications, supplementation, and ongoing support, I help women create an environment where healing can occur naturally. My goal is to empower women with the knowledge, tools, and guidance they need to break free from cycles of pain and regain control of their health.")}</p>
                <h3>{t("7 Natural Menopause Treatments that really work")}</h3>
              <p>1.{t("Advanced Testing")}</p>
              <p>2.{t("Nutrition")}</p>
              <p>3.{t("Lifestyle Optimization")}</p>
              <p>4.{t("Targeted Supplementation")}</p>
              <p>5.{t("Individualized care plans")}</p>
              <p>6.{t("Personalized Plans")}</p>
               <p>7.{t("Identifying and addressing the root causes behind their symptoms rather than simply masking them with medications.")}</p>                  
              <Button className="custom-btn" href="https://decentmed.org/funcmed" target="_blank">
                {t("Try Functional Medicine")}
              </Button>
            </div>
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/JG8vDZFswmA?si=31jeRikdQ5uPDLVB"
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
        
        </div>
        <div data-aos="slide-right" className="container-blue">      
        <Collapsible trigger={<th className="collapsible-trigger">{t("Functional Medicine Case Study")}</th>}>
          <HStudy />
             <Button className="custom-btn" href="https://hormonehealthwithdrbrown.com/" target="_blank">
            {t('Find Out How Dr. Brown Can Help You')}
          </Button>
        </Collapsible>
         <Collapsible trigger={<th className="collapsible-trigger">{t("Testimonials")}</th>}>
          <Reviewss />
            <Button className="custom-btn" href="https://hormonehealthwithdrbrown.com/contact-us" target="_blank">
            {t('Find Out How Dr. Brown Can Help You')}
          </Button>
        </Collapsible>
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
       <div className="container-blue" data-aos="slide-left">
           <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimage' src={spectraspray} alt='spectra spray' />
             </a>
        </div> 
                 <Button onClick={learnmore} target='_blank' className="custom-btn">
                          {t('Providers: Signup Here')}
                        </Button>  
    </div>
  );
};

export default Meno;