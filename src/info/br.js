import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './acu.css';
import Benefits from "./brbenefits";
import './Info.css';
const BREATH = () => {
const {t} = useTranslation('common')

    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Somatic Breathwork')}</h1>
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
         
          <p className="pr"><h2>{t("What is Breathwork?")}</h2></p>
          <p className='pr'>{t("Breathwork is the practice of consciously using the breath to regulate your physical, emotional, and mental state. By shifting the rhythm, depth, and pattern of your breathing, you can calm the nervous system, release stored tension, increase clarity, and access deeper states of awareness. It’s a powerful tool for healing, transformation, and self-connection, helping you move out of survival mode and into presence, vitality, and emotional freedom. Breathwork can be gentle and grounding or deep and activating, depending on the intention and technique used. Seeking somatic breathwork near me? Click the button below to find great breathwork coaches.")}</p>
           <Button className="custom-btn" href="https://decentmed.org/breathwork" target="_blank">{t("Find Breathwork Coach")}</Button>  
          {/* <Button className="custom-btn" href="https://decentmed-server.vercel.app/breathwork" target="_blank">{t("Find Breathwork Coach")}</Button>  */}
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/w-V-r8gqD5Y?si=W6G1WvAEA-lNjp0Q"
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
        <br></br>
        <Benefits />
        </div>
    )
}
export default BREATH;
