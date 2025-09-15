import React, { useState, useEffect } from 'react';
import Channel from './channel';
import './Info.css';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; 
import { useTranslation } from 'react-i18next';
import acutreatsIN from '../images copy/IMG_9305.jpeg';
import burnout from '../images copy/burnout.jpeg';
import Acuvids from '../info/acuvids';
import acuben from '../images copy/acuben.png';
import { Button } from 'react-bootstrap';

const Ptsdd = () => {
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
      <h1 className='title' style={titleStyle}>{t('CPTSD vs PTSD')}</h1>
      
      <div style={mainWrapperStyle}>
        <div className="container-bbblue" style={containerBbblueStyle}>
          <div className='content-wrapper' style={contentWrapperStyle}>
            <p className='pr' style={paragraphStyle}>
              {t("CPTSD vs PTSD stems from the cause and prolonged trauma vs a single event. Many people equate PTSD to military vets, yet some veterans do not have PTSD at all. CPTSD can stem from chronic abuse where escape seems impossible. PTSD stems from a single traumatic event like war, natural disasters or car accidents.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("The symptom profile for both result in diassociation, flashbacks and issues with emotions. CPTSD, negatively impacts the person's positive self image and leads to difficulty with relationships. PTSD can lead to similar effects, but the person is typically stuck in the traumatic event.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("An estimated 6-7% of people have some form of PTSD. We seek to provide alternative solutions to your PTSD that are not talk therapy and pharmaceutical medications. One form of therapy is combining somatic movement with psychedelics to inhibit the user to form new neural connections and get the trauma out of the body. Another less-invasive treatment is with Hypnotherapy. Many afflicted with PTSD find that talk therapy does not get to the subconscious, Hypnotherapy helps to release subscious blocks.")}
            </p>
            
            <Button 
              className="custom-btn"
              href="https://www.soulwarriorsretreat.com/" 
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
              title='CPTSD vs PTSD'
              allow="autoplay"
              style={iframeStyle}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className='acupen'>
        <img className='gridimag' src={acuchart} alt='Ac' />
        <img className='gridimag' src={acutreatsIN} alt='Ac' />
        <a href="https://oceantreis.com/" target="_blank" rel="noopener noreferrer">
          <img className='gridimag' src={burnout} alt='oceantreis' />
        </a>      
      </div>
      
      <h1>{t("Top 10 Benefits of Acupuncture")}</h1>
      <img className='gridimag' src={acuben} alt='Ac' />
      <Acuvids />
      <Channel />
    </div>
  );
}

export default Ptsdd;