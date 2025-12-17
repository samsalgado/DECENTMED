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
  const txt = `
  welcome to treis de febrero Park let's explore looking for medicinal plants and that's George Washington yes we're in Argentina but that is George Washington and we're in the Park:
 ditch Lily juice of the roots has been shown to be effective for arsonic poisoning a tea made from The Boiled Roots is used as a diuretic all right let's keep looking this plant right here zip medicinal Mexican cypress two out of five according to pfaf the bark is a stringent the leaves can help with

headaches and cuts but most importantly the essential oil from the leaves in hexane Leaf extracts has shown antifungal activity against skin pathogens which support the use against skin diseases finally a crude ethanol extract of the leaves has shown cytoxicity in the range of cancer cell lines with cancer death being due to eposis so behind me is Harin deas The Garden of The Poets and this right here is the iceberg plant so let's go inside among the beauty is the china Rose and the hybrid t- Rose the china

Rose is rich in vitamins a c and e its flavonoids and other bioactivity compounds s have shown an incidence of helping with reversing the growth of cancers it's currently under investigation for helping with cancer not only that but the fruit is applied to sprains ulcers and wounds finally the flowers are anod a Minogue and help with women's complaints let's see if this is medicinal it is not medicinal but guess what is the black willow rated three out of five according to pfaf the bark is

anod anti-inflammatory anti-erotic antiseptic astringent diaphoretic diuretic feuge hypnotic sedative and tonic the fresh bark contains salicin which probably decomposes and aisc acid in the human body this is closely related to aspirin it's also used as an anod and feuge and an ingredient in Spring tonics the bark is removed during the summer and dried for later use the leaves are used internally for minor feverish illnesses and colic finally the bark of the species is used interchangeably with

s Alba taken internally for the treatment of rheumatism arthritis gout inflammatory stages of autoimmune diseases diarrhea dentary feverish illnesses neuralgia and headache final medicinal plan of the day is oleander cre two out of according to pfaf the leaves and flowers are cardiotonic diaphoretic diuretic emetic expectorant and statory a decoction of the leaves has been applied externally in the treatment of Scabies and to reduce swelling this poisonous plant contains a powerful cardiac Toxin and should only be used

with Extreme Caution the root is powerfully resolvent because of its poisonous nature it is only used externally Shout Out Jose miti Jose Marti behind me this is uh ala Miguel Hernandez is Robin J tagor anel AIS AAS he's an escor and a poet then we got this beauty right here foran Felix dead right here Raphael Alberti fedo Garcia LCA guak gabron Khalil gabron there look at that beauty shout out Ruben doio that concludes exploring a beautiful Park in parque de palermo
  `
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
              src="https://www.youtube.com/embed/fZNT5bD3MQg?si=wAHkF-p0tCZsQYzx"
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
            <p>{t(txt)}</p>
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