import React, { useState }  from 'react';
import '../info/Info.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
//import x from "../images copy/1000.png" // Import the translation hook
const WellnessInro = () => {
  const { t } = useTranslation("common"); 
    const [showModal, setShowModal] = useState(false);
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
    /*const transcriptText = `
Experience DecentMed - a video education portal connecting patients with providers. 
All of the information comes from providers. Homeopathy, Naturopathy, Herbal medicine, Nutrigenomics, Mindset Coaching, empowerment. 
We showcase all different types of coaching - somatic breathwork, hypnotherapy. We post provider studies to validate the effectiveness of their work and create a history of their work. 
Nutrition, the Ayurvedic experience. Nutrigenomics, acupuncture, chiropractic, applied kinesiology, preventative wellness, chelation therapy - removing toxic metals from the bloodstream. 
Meditation and more. We tailor your modality to patient’s conditions. Not only that, but we have two types of telehealth directories: both in-person location-based and remote telehealth. 
We offer various summits and webinars to highlight your expertise and create collaborative networks with other providers. 
At DecentMed, we are revolutionizing the health insurance game by offering stake in our apothecary. Welcome to DecentMed.
  `;
  */
  return (
    <div className='theecontainer'>
        <div className='paragraph-container'>
          <p className='paragraph'>
            {t("Medicine was never meant to be about survival alone. It was meant to support wellness, balance, and human potential. Our goal is vitality.")}
          </p>
          <p className='paragraph'>
            {t("DecentMed connects people with holistic health practitioners (all information stems from providers), education, and regenerative therapies worldwide.")}
          </p>
        </div>
         <Button onClick={learnmore} className="custom-btn">
          {t('Providers: Join Trusted Network')}
        </Button>
      <br></br>
      <div className='video-container'>
      <iframe
      width="100%"
      height="215"
      src="https://www.youtube.com/embed/Cv709OOmp-0?si=oghsNOAjLEExQEpx"
      title="Video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowfullscreen
    ></iframe>
      </div>
       <Button className="custom-btn" onClick={() => setShowModal(true)}>
            {t("Transcript")}
          </Button>
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("Transcript")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("transcriptText")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t("Close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WellnessInro;
