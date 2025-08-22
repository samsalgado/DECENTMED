import React from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import ClinVids from "./clinvid";
import shop from "../images copy/shop.png";
import { Button } from'react-bootstrap';
import { useTranslation } from "react-i18next";
const Nutri = () => {
const {t} = useTranslation('common')

    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Nutrigenomics')}</h1>
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
         
          <p className="pr"><h2>{t("Best Nutrigenomics Services for Weight Management:")}</h2></p>
          <p className='pr'>{t("- Specialized lab packages that take the guesswork out of deciding what to eat")}</p>
          <p className='pr'>{t("- Stool Testing")}</p>
          <p className='pr'>{t("- Food Sensitivity Testing")}</p>
          <Button className="custom-btn" href="https://themerlingroupworld.com/nutritionpract" target="_blank">{t("Find Providers")}</Button>  {/* Added Bootstrap Button */}
        </div>
        <iframe
          className="centered-video"
          src="https://player.vimeo.com/video/799868102?title=0&byline=0&portrait=0"
          frameBorder="0"
          allowFullScreen
          title="Rumble video player"
          style={{
            maxWidth: '500px',
            width: '100%',
            height: '400px'
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
      <a href="https://thriveresultscoaching.com/store/?orderby=popularity" target="_blank" rel="noopener noreferrer">
      <figure>
          <img className='gridimag' src={shop} alt='Shop' />
        <figcaption>{t("Shop")}</figcaption>
        </figure>
        </a> 
        <br></br>
        <h1 className='center'>{t("Seeking Holistic Nutritionist Near me? We have you covered:")}</h1>
        <ClinVids />
        </div>
    )
}
export default Nutri;
