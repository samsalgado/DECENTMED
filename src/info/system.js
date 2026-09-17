import React, { useState, useEffect } from 'react';
import './Info.css';
import './acu.css'; 
import { useTranslation } from 'react-i18next';
import Systemvids from "./systemvids";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
const System = () => {
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
    useEffect(() => {
                AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
              }, []);
  return (
    <div className='container mobile-optimized' style={containerStyle}>
       <div data-aos="slide-right" className="container-blue">
       <h1 className='logotitle'>{t('Our System')}</h1>
      </div>
      <div style={mainWrapperStyle}>
        <div data-aos="slide-right" className="container-bbblue" style={containerBbblueStyle}>
          <div data-aos="slide-right" className='content-wrapper' style={contentWrapperStyle}>
            <p className='pr' style={paragraphStyle}>
              {t("MoreActive is an all-in-one digital wellness platform designed to streamline holistic health by integrating physical fitness, personalized nutrition, and mental health resources into a single accessible app. By offering customized daily meal planning, tailored workout routines, and fitness-wearable tracking, the platform empowers users to hit specific wellness targets—whether at home, in the gym, or on the go. Beyond individual health tracking, MoreActive functions as a scalable solution for corporate wellness programs, personal trainers, and fitness centers to easily deliver branded content, foster community accountability, and efficiently guide clients toward long-term lifestyle transformation.")}
            </p>
            <Button 
              className="custom-btn"
              href="https://telehealth.decentmed.org/signup" 
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
              {t("Sign Up")}
            </Button>
          </div>
          
          <div data-aos="slide-right" style={iframeWrapperStyle}>
            <iframe
              src="https://www.youtube.com/embed/pqHaui-WvZ0?si=CAVAck933vpQIttN"
              title='Episode 1. How to Setup Your Profile'
              allow="autoplay"
              style={iframeStyle}
              allowFullScreen
            />
          </div>
        </div>
      </div>
       <div data-aos="slide-right" className="container-blue">
      <h1>{t("DecentMed Telehealth System")}</h1>
      <div data-aos="slide-right">
      <Systemvids />
      </div>
    </div>
    </div>
  );
}

export default System;