import React from 'react'
import "./chiro.css";
import "../App.css";
import ultt from "../images copy/ultt.png";
import chiroFR from '../images copy/IMG_9300.jpeg';
import chiroES from '../images copy/IMG_9301.jpeg';
import chiroHI from '../images copy/IMG_9303.jpeg';
import chiroNL from '../images copy/IMG_9311.jpeg';
import reviewtcc from "../images copy/reviewtcc.png";
import tcc from "../images copy/tcc.png";
import Collapsible from 'react-collapsible';
import stats from '../images copy/stats.jpg';
import { Button } from 'react-bootstrap';
// import treats from '../images copy/IMG_8939.jpeg';
import chirotreat from '../images copy/chirotreats.png';
import chiropractorstats from '../images copy/chiropractor-stats.png';
import { useTranslation } from 'react-i18next';

const Chiro = () => {
  const { t } = useTranslation('common')
  return (
    <div className='container mobile-optimized'>
      <h1 className='title mobile-title'>{t("Chiropractic")}</h1>
      <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className='content-wrapper' style={{
          flex: '1'
        }}>
          <p className="pr">{t("Chiropractors use hands-on spinal manipulation and other manual techniques to help restore mobility, relieve pain, and support the body’s natural ability to heal itself without drugs or surgery. People often seek chiropractic care for back pain, neck pain, headaches, and posture-related issues, especially those caused by sedentary lifestyles or physical stress. It’s also valued for promoting overall wellness and nervous system function. According to the American Chiropractic Association, over 35 million Americans visit a chiropractor each year, highlighting its popularity.")}</p>
          <p className="pr">
            {t('An estimated 65% of American adults seek care for neck or back pain in their lifetime. Extrapolating that figure, 36% of Americans do not know if surgery is effective for their pain. Chiropractic care is 40% (estimate) more effective for treating back pain. Chiropractors remove neurological interference and restore proper biomechanics to the spine. Moreover, chiropractic care supports the immune system, improves sleep, improves behavior, improves brain development, and benefits development in both adults and children.')}
          </p>
          <br></br>
          <Button className="custom-btn" href="https://decentmed.org/chiropract" target="_blank">
            {t("Get Chiropractic Care")}
          </Button>
        </div>
        <div><img src={stats} className="gridimage" alt="logo" style={{
          maxWidth: '400px',
          width: '100%',
          height: 'auto'
        }} /></div>
      </div>
      <style jsx>{`
      @media (max-width: 768px) {
        .container-bbblue {
          flex-direction: column !important;
        }
        .content-wrapper {
          text-align: center !important;
        }
        .gridimag {
          max-width: 280px !important;
          margin-top: 20px !important;
        }
      }
    `}</style>
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <div id="clinics">
           <Collapsible trigger={<h3 className="collapsible-trigger">{t('Kansas City Chiropractic')}</h3>}>
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:9133838505">
        <img src={tcc} alt="Total Care Chiropractic" style={{
          width: '100%',
          maxWidth: '550px',
          height: 'auto',
          objectFit: 'contain'
        }} />
      </a>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:9133838505">
        <img src={reviewtcc} alt="Total Care Chiropractic Review" style={{
          width: '100%',
          maxWidth: '550px',
          height: 'auto',
          objectFit: 'contain'
        }} />
      </a>
    </div>
  </div>
</Collapsible>

            </div>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .row > div {
            text-align: center;
          }
          .row img {
            max-width: 350px !important;
          }
        }
      `}</style>

      <div id="benefits">
        <Collapsible trigger={<h3 className="collapsible-trigger">{t('Chiropractic Benefits')}</h3>}>
          <tr className="image-contain">
            <img alt='' />
            <img src={chiropractorstats} alt='' />
            <img src={chirotreat} alt='' />
            <img src={chiroNL} alt='' />
            <img src={chiroHI} alt='' />
            <img src={chiroES} alt='' />
            <img src={chiroFR} alt='' />
            <img alt='' />
          </tr>
        </Collapsible>
      </div>

      <a href="https://theultimatehealthhack.com/doctors-roundtable-discussion/">
        <img src={ultt} className='gridimag' alt="quote" />
      </a>
    </div>
  )
}

export default Chiro;
