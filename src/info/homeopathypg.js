import React from 'react';
import "./homeo.css";
import './Info.css';
import quote from '../images copy/quote.png';
import { useTranslation } from 'react-i18next';

const Homeo = () => {
  const { t } = useTranslation('common');

  return (
    <div className='thecontainer'>
      <div className='container'>
        <h1 className='title'>{t('Homeopathy')}</h1>
        <iframe
          width="100%"
          height="475"
          src="https://drive.google.com/file/d/1oizepFcjcTm_wlpSzCGOh1eKMYfklaAC/preview"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <img src={quote} className="TELEa" alt="quote" />
        <div className="collapsible">
          {/* Add any collapsible content if needed */}
        </div>
      </div>
    </div>
  );
};

export default Homeo;
