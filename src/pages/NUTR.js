import React from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import ClinVids from "./clinvid";
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
     <iframe title="vimeo-player" src="https://player.vimeo.com/video/715588945?h=76c2c1fff8" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
     <Button className="custom-btn" href="https://thriveresultscoaching.com/testimonials/" target="_blank">{t("More Reviews")}</Button>  {/* Added Bootstrap Button */}

        <br></br>
        <h1 className='center'>{t("Seeking Holistic Nutritionist Near me? We have you covered:")}</h1>
        <ClinVids />
        </div>
    )
}
export default Nutri;
