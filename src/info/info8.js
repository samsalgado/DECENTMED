import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefits from "./akbenefits";
import { useTranslation } from "react-i18next";
const Info8 = () => {
const {t} = useTranslation('common')
    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Applied Kinesiology')}</h1>
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
         
          <p className="pr"><h2>{t("Seeking Applied Kinesiology near me?")}</h2></p>
          <p className='pr'>{t("Applied Kinesiology (AK) is a holistic approach of treating muscle weakness and imbalance by working with the nervous system, lymphatic system, vascular system and nutrition. The Center for Natural Health provides AK with acupuncture, NAET and homeopathy (not limited) to identify underlying causes of health problems that go undetected.")}</p>
          <Button className="custom-btn" href="https://tcnh.janeapp.com/#/naet-jmt" target="_blank">{t("Try Applied Kinesiology Today")}</Button>  {/* Added Bootstrap Button */}
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/MjiR5-prPn4"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
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
        <br></br>
        <Benefits />
        </div>
    )
}
export default Info8;
