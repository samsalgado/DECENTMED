import React, {useState} from 'react'
import Vitamins from './vitamins';
import Coachingvids from './coachingvids';
import ReactDOM from 'react-dom';
import './Info.css';
import "./prevent.css";
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
const PreventWellness = () => {
  const { t } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='container'>
      <div className="title-container">
         <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Preventive Wellness')}</h1>
      </div>
      <div className="collapsible">
      </div>
      <Vitamins />
      <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">
   {t("Find Wellness Coaches")}
     </Button>
      <h1 className='center'>{t("Coaching Education: Health Coaches Near Me")}</h1>
  <Coachingvids />
                 <Button className="custom-btn" href="http://gorillaandshecoaching.com/" target="_blank">{t("Transform your Health")}</Button>  {/* Added Bootstrap Button */}
  <br></br>
     <Button className="custom-btn" onClick={() => setShowModal(true)}>
                    {t("Transcript")}
                  </Button>
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
    </div>
  );
}

export default PreventWellness;
