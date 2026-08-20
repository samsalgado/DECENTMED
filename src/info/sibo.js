import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Collapsible from 'react-collapsible';
import MX from './valentina3sum';
//decentmed.org/how-to-treat-sibo-naturally
import './Info.css';
import spectraspray from "../images copy/Screenshot 2026-08-14 at 4.27.02 PM.png";
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
const Sibo = () => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider';
  };
  const tsbigd = () => {
    window.location.href = 'https://robusthealthadvocacy.com/';
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
  }, []);
  return (
    <div>
      <div className='container mobile-optimized'>
        <div className="container-blue">
          <h1 className='logotitle' data-aos="slide-left">
            {t('SIBO Diet Plan')}
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
              <h2>{t("Are you seeking: How to Treat SIBO Naturally?")}</h2>
                <p>
                {t("As the gut is a central organ in maintaining proper metabolic functioning via hormone regulation, immune system resilience, energy production, nutritional absorption, and inflammation response, gut health is a foundation of the coaching support provided by Robust Health Advocacy in conjunction with practitioners.")}
                </p>
                <p>
                {t("As a gut health subspeciality, Robust Health Advocacy (RHA) focuses on coaching to support individuals in successfully completing an elemental diet for the eradication of Small Intestinal Bacterial Overgrowth (SIBO) and other intestinal microbiome overgrowth conditions.")}
                </p>
                <p>
                {t("Historically, healthcare practitioners have not recommended the use of an elemental diet to treat SIBO, a common dysbiotic digestive condition that is found in almost 34% of patients experiencing gastroenterological symptoms who took a breath test, according to a 2023 study in the World Journal of Gastroenterology.")}
              </p>
              <p>
              {t("The primary reason an element diet treatment is not often prescribed is because of low patient adherence in completing the liquid diet protocol for a minimum of two weeks, the amount of time needed to effectively reduce excessive bacterial overgrowth in the small intestine. Adherence issues are usually tied to the taste of the elemental diet and challenges in not eating solid food for extended periods.")}
              </p>
              <p>
              {t("However, a 2025 study from the journal of Clinical Gastroenterology and Hepatology indicates that the use of an elemental diet with patients who had intestinal microbial overgrowth led to 73% normalized breath test results, and 83% of patients experiencing symptom relief, with no patients ending the diet because of intolerance issues.")}
              </p>
              <p>{t("Angela Forest has worked in coordination with a naturopathic SIBO specialist who trained under Dr. Allison Siebecker, a nationally recognized SIBO expert, to successfully coach clients using a Palatable Elemental Diet (PED) and a timed drink protocol, among other strategies to ensure clients are not hungry and can successfully complete the treatment. In each case, the post-diet results have resulted in significant health improvements.")}</p>
              <Button className="custom-btn" href="https://calendly.com/forestangela9/new-meeting?month=2026-02" target="_blank">
                {t("Try Functional Medicine")}
              </Button>
            </div>
            <div style={{ 
      flex: '1 1 300px', // Matches the text container behavior
      maxWidth: '400px', 
      width: '100%' 
    }}>
            <iframe
              src="https://www.youtube.com/embed/gRYyvGmgxbk?si=SuqrHj_FtjlH-aeX"
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
               <h2>{t("Personal Health Advocacy")}</h2>
              <p className='pr'>{t("Angela’s desire to create a unique course that teaches people how to effectively advocate for themselves in engaging with healthcare practitioners and empower them to take charge of their health through proper diet, exercise, and other lifestyle improvements comes from her 20-years of experience of learning how to advocate for herself while dealing with multiple chronic health conditions.")}</p>
              <p className='pr'>{t("Personal health advocacy can mean different things to different people. From the RHA perspective it essentially involves:")}</p>
              <p className='pr'>-{t("Clearly understanding our own health conditions, all treatments being recommended and provided, and being aware of the most innovative and best treatments.")}</p>
              <p className='pr'>-{t("Holding our practitioners accountable for answering our questions and being respectful and responsive.")}</p>
              <p className='pr'>-{t("Taking daily actions to improve our health so we avoid developing chronic diseases, most of which are avoidable.")}</p>
              <p className='pr'>-{t("Why is advocacy needed? Because even the most dedicated practitioners are busy and may not have time to review the details of every patient before them, and the best healthcare involves productive engagement between a practitioner and patient, where the patient clearly understands the treatment protocol and how they can incorporate it into their lives. Also, because up to 80% of chronic diseases are tied to lifestyle, helping people understand the power they have to reverse or prevent disease is critical for keeping people healthy as they age.")}</p>
                          <img className='gridimag' src={spectraspray} alt='spectra spray' />
<Button onClick={tsbigd} target='_blank' className="custom-btn">
              {t('Try Robust Health Advocacy')}
              </Button>
               <Collapsible trigger={<div className="collapsible-trigger">{t('SIBO Case Study')}</div>}>
          <MX />
        </Collapsible>
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
export default Sibo;




