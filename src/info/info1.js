import React, { useState, useEffect } from 'react';
import Channel from './channel';
import './Info.css';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; 
import ultt from "../images copy/ultt.png";
import OCTT from "../images copy/OCTrv.png";
import oct from "../images copy/OCT.png";
import Collapsible from 'react-collapsible';
import { useTranslation } from 'react-i18next';
import acutreatsIN from '../images copy/IMG_9305.jpeg';
import burnout from '../images copy/burnout.jpeg';
import Acuvids from '../info/acuvids';
import acuben from '../images copy/acuben.png';
import { Button } from 'react-bootstrap';

const Info1 = () => {
  const {t} = useTranslation('common');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 992 && windowWidth > 768;

  const containerStyle = {
    padding: isMobile ? '0 10px' : '0 15px'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '20px' : '30px',
    fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '2.5rem'
  };

  const mainWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: isMobile ? '15px 0' : '20px 0',
    padding: '0 10px'
  };

  const containerBbblueStyle = {
    display: 'flex',
    flexDirection: isMobile || isTablet ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '20px' : '30px',
    maxWidth: '1200px',
    width: '100%',
    padding: isSmallMobile ? '15px 10px' : isMobile ? '20px 15px' : '25px 20px',
    background: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const contentWrapperStyle = {
    flex: '1',
    width: '100%',
    paddingRight: isMobile || isTablet ? '0' : '20px'
  };

  const paragraphStyle = {
    fontSize: isSmallMobile ? '13px' : isMobile ? '14px' : '16px',
    lineHeight: isSmallMobile ? '1.4' : isMobile ? '1.5' : '1.6',
    marginBottom: isSmallMobile ? '12px' : isMobile ? '15px' : '20px',
    textAlign: isMobile ? 'left' : 'justify',
    color: '#333'
  };

  const buttonStyle = {
    width: isMobile ? '100%' : 'auto',
    padding: isSmallMobile ? '10px 15px' : isMobile ? '12px 20px' : '12px 24px',
    fontSize: isSmallMobile ? '14px' : '16px',
    marginTop: isMobile ? '10px' : '0',
    transition: 'all 0.3s ease'
  };

  const iframeWrapperStyle = {
    flex: isMobile || isTablet ? 'none' : '0 0 400px',
    width: '100%',
    maxWidth: isMobile || isTablet ? '100%' : '400px'
  };

  const iframeStyle = {
    width: '100%',
    height: isSmallMobile ? '200px' : isMobile ? '250px' : isTablet ? '280px' : '315px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div className='container mobile-optimized' style={containerStyle}>
      <h1 className='title' style={titleStyle}>{t('Acupuncture')}</h1>
      
      <div style={mainWrapperStyle}>
        <div className="container-bbblue" style={containerBbblueStyle}>
          <div className='content-wrapper' style={contentWrapperStyle}>
            <p className='pr' style={paragraphStyle}>
              {t("Acupuncture is a traditional Chinese medicine (TCM) technique that involves inserting thin needles into specific points on the body. There are 12 primary meridians in the body, acupuncturists stimulate the meridians with the points to activate the body's natural healing processes.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("The process of acupuncture is a four-step process beginning with checking the pulse and other vitals. Then, insert the needles into acupuncture points or points where blood, lymph, and nerves can easily access connective tissue. Next, manipulate the needles, and sometimes moxibustion is applied. Moxibustion is a traditional Chinese medical technique that involves burning the herb mugwort to relieve cold or stagnant conditions by stimulating circulation. Finally, topical patches and herbal rub are applied to the post-need injection sites.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("An estimated 66% of people have some form of corporate burnout. According to the WHO, 'at least 70% of people have some form of trauma'. Acupuncture lowers cortisol levels, studies have shown that it stimulates the vagus nerve - helping with trauma, corporate burnout and more.")}
            </p>
            
            <Button 
              className="custom-btn"
              href="https://decentmed.org/acupuncturists" 
              target="_blank"
              style={buttonStyle}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {t("Explore Acupuncture")}
            </Button>
          </div>
          
          <div style={iframeWrapperStyle}>
            <iframe
              src="https://drive.google.com/file/d/1K8LQQCKq2hwwxP3dTbaj7OxmWxChpcwq/preview"
              title='Acupuncture'
              allow="autoplay"
              style={iframeStyle}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Keep original 3 images section unchanged */}
      <div className='acupen'>
        <img className='gridimag' src={acuchart} alt='Ac' />
        <img className='gridimag' src={acutreatsIN} alt='Ac' />
        <a href="https://oceantreis.com/" target="_blank" rel="noopener noreferrer">
          <img className='gridimag' src={burnout} alt='oceantreis' />
        </a>      
      </div>
      
      <h1>{t("Top 10 Benefits of Acupuncture")}</h1>
      <img className='gridimag' src={acuben} alt='Ac' />
      <Collapsible trigger={<th className="collapsible-trigger">{t('Acupuncture Tampa')}</th>}>
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <img src={oct} alt="Acupuncture Tampa" style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain'
      }} />
    </div>
    <div className="col-12 col-md-6 mb-3">
      <img src={OCTT} alt="Acupuncture Tampa" style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain'
      }} />
    </div>
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
</Collapsible>
   <a href="https://theultimatehealthhack.com/doctors-roundtable-discussion/">
        <img src={ultt} className='gridimag' alt="quote" />
        </a>
      <Acuvids />
      <Channel />
    </div>
  );
}

export default Info1;