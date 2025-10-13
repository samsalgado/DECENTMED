import React from 'react';
import './Info.css'; // Import the CSS file
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Merlin = () => {
    const {t} = useTranslation('common');
  
  return (
    <div className='theecontainer'>
         <div className='video-container'>
          <iframe
            width="100%"
            height='350vh'
            src="https://www.youtube.com/embed/y__7kmPIq-o?si=99tQ9thnDDzh80Cx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
        </div>
        <Button className="custom-btn" href="https://decentmed.org/signup" target="_blank">{t('Sign Up')}</Button>
    </div>
  );
};

export default Merlin;

