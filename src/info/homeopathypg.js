import React from 'react';
import "../App.css";
import quote from '../images copy/quote.png';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
const Homeo = () => {
  const { t } = useTranslation('common');

  return (
    <div className='thecontainer mobile-optimized'>
        <h1 className='title'>{t('Homeopathy')}</h1>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
        <div className="container-bbblue"style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
      <div className='content-wrapper' style={{
          flex: '1'
        }}>
      <p className='pr'>{t("Homeopathy is a system of alternative medicine developed in the late 18th century by German physician Samuel Hahnemann. It is based on the principle of 'like cures like', meaning that a substance that causes symptoms in a healthy person can be used in highly diluted form to treat similar symptoms in someone who is ill. Homeopathy is safer and has shown benefits for a myriad of diseases and ailments. In this video, Dr. Tim Shannon talks about off-label drugs in cancer treatments, and the role of Homeopathy in treating ADD.")}</p>
     
      <Button variant="primary" href="https://themerlingroupworld.com/homeopract" target="_blank">
                {t("Try Homeopathy")}
            </Button>
      </div>
        <iframe
          width="100%"
          height="475"
          src="https://drive.google.com/file/d/1oizepFcjcTm_wlpSzCGOh1eKMYfklaAC/preview"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
          }}
        ></iframe>
         </div>
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
        <br />
        <br />
        <img src={quote} className="TELEa" alt="quote" />
        <div className="collapsible">
          {/* Add any collapsible content if needed */}
        </div>
      </div>

  );
};

export default Homeo;
