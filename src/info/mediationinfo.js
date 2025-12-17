import React, {useState} from 'react';
import "../App.css";
import './Info.css';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
//import ultt from "../images copy/ultt.png";
const MeditationInfo = () => {
  const { t } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='container'>
       <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Meditation')}</h1>
      <iframe width="100%" height={500}     src="https://www.dropbox.com/scl/fi/y5kpcrwpmrobc663kooos/Serenity-Meditation.mp4?rlkey=t87qsx58r2mc9h5xim06lbf34&st=tdfjf5q9&raw=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <Button className="custom-btn" onClick={() => setShowModal(true)}>
                          {t("Transcript")}
                        </Button>
                        {showModal && ReactDOM.createPortal(
                        
                        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="transcriptt-modal">
                      <Modal.Header closeButton>
                        <Modal.Title>{t("Transcript")}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>{t("yogi")}</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                          {t("Close")}
                        </Button>
                      </Modal.Footer>
                    </Modal>,
                    document.body)}

      <div style={{ marginTop: '20px', width: '100%' }}>
        <Button style={{ marginRight: '20px' }} className="custom-btn" href="https://sanjivana.com/" target="_blank">{t('Visit Serenity Meditations')}</Button>
        <Button className="custom-btn" href="mailto:serenitymeditation2021@gmail.com" target="_blank">{t('Contact')}</Button>
      </div>
      <br />
      <div className='pr'>
        <h2>{t('Morning Meditation')}</h2>
        <p>{t('In recent years, meditation has gained recognition not just as a relaxation technique, but as a powerful tool for healing the mind, body, and spirit. With roots in various spiritual traditions, modern research is uncovering the profound benefits of meditation on mental and physical health.')}</p>
        
        <h2>{t('Understanding Meditation')}</h2>
        <p>{t('Meditation encompasses a variety of practices designed to promote focused attention and heightened awareness. Techniques may include mindfulness, breath awareness, and visualization, among others. Regardless of the approach, the core aim remains the same: to cultivate a state of inner calm and clarity.')}</p>
      </div>

    </div>
  );
}

export default MeditationInfo;
