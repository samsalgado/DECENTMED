import React, { useState } from 'react';
import '../info/Info.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
//import x from "../images copy/1000.png" // Import the translation hook
const WellnessInro = () => {
  const { t } = useTranslation("common"); 
  const [playVideo, setPlayVideo] = useState(false);
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  return (
    <div className='theecontainer'>
      <div className='video-container'>
        {playVideo ? (
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/-osX1InXYYU?autoplay=1&si=_pBgh8RtWy_GxXE9"
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            onClick={() => setPlayVideo(true)} 
            style={{ 
              cursor: 'pointer', 
              position: 'relative', 
              width: '100%', 
              height: '255px', 
              backgroundColor: '#000',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          >
            <img 
              src="https://img.youtube.com/vi/-osX1InXYYU/0.jpg" 
              alt="Video Thumbnail" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              backgroundColor: 'rgba(0,105,92,0.85)', 
              borderRadius: '50%', 
              width: '80px', 
              height: '80px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={learnmore} target='_blank' className="custom-btn">
          {t('Providers: Join Trusted Network')}
        </Button>
    </div>
  );
};

export default WellnessInro;
