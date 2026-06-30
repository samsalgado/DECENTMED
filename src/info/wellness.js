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
            src="https://www.youtube.com/embed/-osX1InXYYU?si=_pBgh8RtWy_GxXE9&autoplay=1"
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="video-facade" 
            onClick={() => setPlayVideo(true)}
            style={{
              position: 'relative',
              width: '100%',
              height: '215px',
              backgroundImage: 'url(https://img.youtube.com/vi/-osX1InXYYU/hqdefault.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            {/* Play Button Icon */}
            <div style={{
              width: '68px',
              height: '48px',
              backgroundColor: 'rgba(33, 33, 33, 0.8)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
            }}
            className="play-button"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF0000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(33, 33, 33, 0.8)'}
            >
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0.13,34,0.13S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,47.87,34,47.87s21.79,0,27.1-1.42c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                <polygon points="26,17 41,24 26,31" fill="#fff"></polygon>
              </svg>
            </div>
          </div>
        )}
      </div>
      <Button onClick={learnmore} target='_blank' className="custom-btn">
          {t('Providers: Join Trusted Network')}
        </Button>
    </div>
  );
};

export default WellnessInro;
