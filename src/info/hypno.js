import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefits from "./benefits";
import Modalities from "./modalities";
import { useTranslation } from "react-i18next";
import Collapsible from 'react-collapsible';
import Hypnostudies from "./hypnostudy";
import ultt from "../images copy/ultt.png";
const HYPNO = () => {
const {t} = useTranslation('common')

    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Hypnotherapy')}</h1>
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
          <p className='pr'>{t("Hypnotherapy is a therapeutic technique that uses guided hypnosis to help individuals achieve a relaxed, focused state of mind, increasing their suggestibility and enabling them to address various issues. Hypnotherapy helps to break subconscious blocks that arise throughout people's lives. Utilize hypnotherapy to empower yourself and become your optimal YOU.")}</p>
          <Button className="custom-btn" href="https://decentmed.org/hypnopract" target="_blank">{t("Book Hypnotherapy Session")}</Button>  {/* Added Bootstrap Button */}
        </div>
        <iframe
          className="centered-video"
          src="https://rumble.com/embed/v6c1np4/?pub=4hu51y"
          frameBorder="0"
          allowFullScreen
          title="Rumble video player"
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
       <a href="https://theultimatehealthhack.com/doctors-roundtable-discussion/">
              <img src={ultt} className="gridimag" alt="quote" />
              </a>
        <br></br>
        <Benefits />
        <br></br> 
        <Modalities />
        <Collapsible trigger={<th className="collapsible-trigger">{t("Hypnotherapy Case Study")}</th>}>
        <Hypnostudies />
        <Button className="custom-btn" href="https://themerlingroupworld.com/hypnopract" target="_blank">{t("Book Hypnotherapy Session")}</Button>  {/* Added Bootstrap Button */}
        </Collapsible>
        </div>
    )
}
export default HYPNO;
