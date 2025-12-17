import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./homeo.css";
import './Info.css';
import { Button, Modal } from 'react-bootstrap';
import homeo from '../images copy/meme3.png';
import { useTranslation } from 'react-i18next';

const Herbal = () => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='container'>
        <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>
    {t('Herbal Medicine')}</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '21px 0'
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
              <p className='pr'>{t("The body has an immense regenerative potential to heal itself. Herbal medicine is the real traditional medicine, every single pharmaceutical drug has a plant root. This page is my encyclopedia of herbal medicine, highlighting herbal plants from around the world. For the last few months, I traveled throughout North America, South America, and Central America to document these plants. Explore our encyclopedia of herbal medicine, and learn how these plants can help your body heal itself. Explore our medicinal herbal recipes from around the world below.")}</p>
            
            </div>
              
            <iframe
              src="https://drive.google.com/file/d/1qbnYhsRJpEOCuK2L-MdyjV-wgMp8UAJe/preview"
              width="100%"
              title='Herbal Homepage'
              allow="autoplay"
              frameBorder="0"
              allowFullScreen
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: 'none',
                overflow: 'hidden',
                maxWidth: '400px',
                width: '100%',
                height: "355px"
              }}
            />
            
          </div>    
              
        </div>
 <Button className="custom-btn" onClick={() => setShowModal(true)}>
            {t("Transcript")}
          </Button>
        <div>
         
              <br></br>
              <br></br>
         
        </div>

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

        <style jsx global>{`
          .transcriptt-modal-herbal .modal-dialog {
            margin: 0.5rem;
            max-width: calc(100vw - 1rem);
            width: calc(100vw - 1rem);
          }

          .transcriptt-modal-herbal .modal-content {
            max-height: calc(100vh - 1rem);
            display: flex;
            flex-direction: column;
          }

          .transcriptt-modal-herbal .modal-header {
            padding: 1rem;
            flex-shrink: 0;
          }

          .transcriptt-modal-herbal .modal-body {
            padding: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
            flex: 1;
          }

          .transcriptt-modal-herbal .modal-body p {
            margin: 0 !important;
            margin-top: 4rem !important;
            padding: 0 !important;
            padding-top: 4rem !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            line-height: 1.6 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .transcriptt-modal-herbal .modal-footer {
            padding: 1rem;
            flex-shrink: 0;
          }

          @media (min-width: 768px) {
            .transcriptt-modal-herbal .modal-dialog {
              margin: 2rem auto;
              max-width: 800px;
              width: 90%;
            }
          }
        `}</style>

        <img className='gridimag' src={homeo} alt='21 Day Challenge' />

      </div>

      {/* Portal: Render modal at body level, outside wrapper */}
      {showModal && ReactDOM.createPortal(
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          className="transcriptt-modal-herbal"
        >  
          <Modal.Header closeButton>
            <Modal.Title>{t("Transcript")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{t("eng")}</p>
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
  );
};

export default Herbal;