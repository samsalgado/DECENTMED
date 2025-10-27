import React from 'react';
import './chiro.css';
import '../App.css';
import ultt from '../images copy/ultt.png';
import chiroFR from '../images copy/IMG_9300.jpeg';
import chiroES from '../images copy/IMG_9301.jpeg';
import chiroHI from '../images copy/IMG_9303.jpeg';
import chiroNL from '../images copy/IMG_9311.jpeg';
import reviewtcc from '../images copy/reviewtcc.png';
import tcc from '../images copy/tcc.png';
import Collapsible from 'react-collapsible';
import stats from '../images copy/stats.jpg';
import { Button } from 'react-bootstrap';
import chirotreat from '../images copy/chirotreats.png';
import chiropractorstats from '../images copy/chiropractor-stats.png';
import { useTranslation } from 'react-i18next';

const Chiro = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mobile-optimized">
      <h1 className="title mobile-title">{t('Chiropractic')}</h1>

      <div className="container-bbblue d-flex flex-wrap align-items-center gap-3">
        <div className="content-wrapper flex-grow-1">
          <p className="pr">
            {t("Chiropractors use hands-on spinal manipulation and other manual techniques to help restore mobility, relieve pain, and support the body’s natural ability to heal itself without drugs or surgery. People often seek chiropractic care for back pain, neck pain, headaches, and posture-related issues, especially those caused by sedentary lifestyles or physical stress. It’s also valued for promoting overall wellness and nervous system function. According to the American Chiropractic Association, over 35 million Americans visit a chiropractor each year, highlighting its popularity.")}
          </p>
          <p className="pr">
            {t('An estimated 65% of American adults seek care for neck or back pain in their lifetime. Extrapolating that figure, 36% of Americans do not know if surgery is effective for their pain. Chiropractic care is 40% (estimate) more effective for treating back pain. Chiropractors remove neurological interference and restore proper biomechanics to the spine. Moreover, chiropractic care supports the immune system, improves sleep, improves behavior, improves brain development, and benefits development in both adults and children.')}
          </p>
          <Button className="custom-btn" href="https://decentmed.org/chiropract" target="_blank">
            {t('Get Chiropractic Care')}
          </Button>
        </div>
        <div>
          <img src={stats} className="gridimage" alt="Chiropractic stats" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
        </div>
      </div>

      <div className="title-container">
        <Collapsible trigger={<h3 className="collapsible-trigger">{t('Kansas City Chiropractic')}</h3>}>
          <div className="row">
            <div className="col-12 col-md-6 mb-3 text-center">
              <a href="https://totalcarechiro.com" target="_blank" rel="noopener noreferrer">
                <img src={tcc} alt="Total Care Chiropractic" style={{ width: '100%', maxWidth: '550px', height: 'auto', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-12 col-md-6 mb-3 text-center">
              <a href="https://totalcarechiro.com" target="_blank" rel="noopener noreferrer">
                <img src={reviewtcc} alt="Total Care Chiropractic Review" style={{ width: '100%', maxWidth: '550px', height: 'auto', objectFit: 'contain' }} />
              </a>
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<h3 className="collapsible-trigger">{t('Chiropractic Benefits')}</h3>}>
          <div className="row justify-content-center flex-wrap">
            {[chiropractorstats, chirotreat, chiroNL, chiroHI, chiroES, chiroFR].map((img, index) => (
              <div key={index} className="col-6 col-md-4 mb-3 text-center">
                <img src={img} alt={`Chiropractic benefit ${index + 1}`} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
              </div>
            ))}
          </div>
        </Collapsible>
      </div>

      <div className="text-center mt-4">
        <a href="https://theultimatehealthhack.com/doctors-roundtable-discussion/" target="_blank" rel="noopener noreferrer">
          <img src={ultt} className="gridimag" alt="Doctors Roundtable" style={{ maxWidth: '280px', width: '100%', height: 'auto' }} />
        </a>
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
          .row img {
            max-width: 350px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Chiro;
