import React from 'react';
import "./homeo.css";
import './Info.css';
import naturopathy from '../images copy/naturopathybenefits.png';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import NatStudy from './naturopathystudy';
const Naturo = () => {
  const { t } = useTranslation('common');
  return (
    <div className='thecontainer'>
      <div className='container'>
        <h1 className='title'>{t('Naturopathy')}</h1>
        <iframe
          width="100%"
          height="515"
          src="https://drive.google.com/file/d/1By4SB2sG5sYqbOuo2n8JuPHDKnFZRt-5/preview"
          title="Patient Acquisition Engine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
  
        <br></br>
        <Collapsible trigger={<th className="collapsible-trigger">{t("Naturopathy Case Study")}</th>}>
        <NatStudy />
        </Collapsible>
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
