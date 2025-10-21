import React from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import Collapsible from 'react-collapsible';
import { Button } from'react-bootstrap';
import ramyoga from "../images copy/ramyoga.png";
import slow from "../images copy/slowdown.png";
import TsBenefits from "./tben";
import flow from "../images copy/flow.png";
import r from "../images copy/r.png";
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
          <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">{t("Try Coaching")}</Button>  {/* Added Bootstrap Button */}
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
            <Collapsible trigger={<th className="collapsible-trigger">{t('Self Care Journal')}</th>}>
              <tr>
                <a href="https://www.linkedin.com/pulse/flow-feeling-honoring-your-emotions-work-life-ramona-crabtree-falkner-4rrve/?trackingId=XKJ1BW5BQ3quljT4fWOovg%3D%3D">
                <img className='gridimage' src={flow} alt='The Flow of Feeling: Honoring Your Emotions at Work & in Life' />
                </a>
                <a href="https://www.linkedin.com/pulse/season-changed-everything-why-reclaiming-empowerment-ramona-zyc3e/?trackingId=e35q3gM%2BSYu%2BcRFjLRwiuQ%3D%3D">
                <img className='gridimage' src={r} alt='The Season That Changed Everything: Why Reclaiming Empowerment Is Just the Beginning' /> </a>
                <a href="https://www.linkedin.com/pulse/yoga-awareness-month-why-isnt-luxury-women-healthcare-ramona-kaize/?trackingId=Cpc5BfMRRVmY8bQM0uebyA%3D%3D"><img className='gridimage' src={ramyoga} alt='yoga awareness month' /></a>
                <a href="https://www.linkedin.com/pulse/why-slowing-down-most-powerful-move-you-can-make-crabtree-falkner-3gwae/?trackingId=Cpc5BfMRRVmY8bQM0uebyA%3D%3D"><img className='gridimage'src={slow} alt='Why Slowing Down is the Most Powerful Move You Can Make' /></a>
              </tr>
            </Collapsible>
        <TsBenefits />
        </div>
    )
}
export default Benefitts;
