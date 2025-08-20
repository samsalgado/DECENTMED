import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefitts from "./benefitts";
import dyn from "../images copy/dyn.jpg";
import { useTranslation } from "react-i18next";
const Info9 = () => {
const {t} = useTranslation('common')
    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Mindset Coaching')}</h1>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
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
         
          <p className="pr"><h2>{t("Mindset Coaching")}</h2></p>
          <p className='pr'>{t("A mindset coach helps you with getting a deeper understanding of who you really are. Try a mindset coach that can help you learn the science of achievement and the science of the mind so that you can create change at the root cause which lasts.")}</p>
        <Button variant="primary" href="https://themerlingroupworld.com/coaching" target="_blank">
         {t("Try Coaching")}
        </Button>        
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/Nn_mUgp2v20"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          style={{
            maxWidth: '450px',
            width: '100%',
            height: '350px'
          }}
        />
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
     <a href="https://source.dynamitelifestyle.com/the-source-code-challenge/priscilla-wmk" target="_blank" rel="noopener noreferrer">
      <figure>
          <img className='gridimag' src={dyn} alt='21 Day Challenge' />
        <figcaption>{t("Join 21 Day Challenge")}</figcaption>
        </figure>
        </a> 
        <br></br>
        <Benefitts />
        </div>
    )
}
export default Info9;
