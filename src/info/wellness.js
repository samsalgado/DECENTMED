import React from 'react';
import '../info/Info.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
//import x from "../images copy/1000.png" // Import the translation hook
const WellnessInro = () => {
  const { t } = useTranslation("common"); 
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  return (
    <div className='theecontainer'>
      <div className='video-container'>
      <iframe
      width="100%"
      height="215"
      src="https://www.youtube.com/embed/-osX1InXYYU?si=_pBgh8RtWy_GxXE9"
      title="Video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
    ></iframe>
      </div>
      <Button onClick={learnmore} target='_blank' className="custom-btn">
          {t('Providers: Join Trusted Network')}
        </Button>
    </div>
  );
};

export default WellnessInro;
