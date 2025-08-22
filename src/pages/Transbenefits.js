import React from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import { Button } from'react-bootstrap';
import TsBenefits from "./tben";
import { useTranslation } from "react-i18next";
const Benefitts = () => {
const {t} = useTranslation('common')

    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t("Transformational Empowerment Coaching")}</h1>
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
         
          <p className="pr"><h2>{t("Why should I get a women's empowerment coach​?")}</h2></p>
          <p className='pr'>{t("- True self recovery")}</p>
          <p className='pr'>{t("- Release stress and burnout")}</p>
          <p className='pr'>{t("- Embrace self-care without guilt")}</p>
          <p className='pr'>{t("- Live authentically and intuitively")}</p>     
          <Button className="custom-btn" href="https://themerlingroupworld.com/coaching" target="_blank">{t("Try Coaching")}</Button>  {/* Added Bootstrap Button */}
        </div>
<iframe
          className="centered-video"
          src="https://www.youtube.com/embed/hgHkSicJ6xc?si=P4xxLg4CeQ_grt5g"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          style={{
            maxWidth: '500px',
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
        <TsBenefits />
        </div>
    )
}
export default Benefitts;
