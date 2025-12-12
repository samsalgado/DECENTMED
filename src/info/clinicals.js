import React, {useState} from 'react';
import { Button,  Modal } from 'react-bootstrap';
import "../App.css";
import './Info.css';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
const Clinicals = () => {
      const { t } = useTranslation("common");
      const [showModal, setShowModal] = useState(false);
      const texts = `
  ${t("the nutrition space")}
  `
  return (
    <>
                    <Button className="custom-btn" onClick={() => setShowModal(true)}>
                    {t("Transcript")}
                  </Button>
                  {showModal && ReactDOM.createPortal(
                  <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="transcriptt-modal">
                <Modal.Header closeButton>
                  <Modal.Title>{t("Transcript")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{t(texts)}</p>
                  <p>{t("en")}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    {t("Close")}
                  </Button>
                </Modal.Footer>
              </Modal>,
              document.body
              )}
        </>
    
  )
}
export default Clinicals;
