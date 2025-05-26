import React from 'react';
import "./homeo.css";
import './Info.css';
import naturopathy from '../images copy/naturopathybenefits.png';
import { useTranslation } from 'react-i18next';

const Naturo = () => {
  const { t } = useTranslation('common');
  return (
    <div className='thecontainer'>
      <div className='container'>
        <h1 className='title'>{t('Naturopathy')}</h1>
        <iframe
          width="100%"
          height="475"
          src="https://www.youtube.com/embed/ztQkWx8YtRg?si=Yl4RRHUOkSiZ0Hst"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br></br>
        <a href="https://meridianpassagewellness.com" target="_blank" rel="noopener noreferrer">
        <br></br>
        <img src={naturopathy} className="TELEa" alt="quote" />
        </a>
      </div>
    </div>
  );
};

export default Naturo;
