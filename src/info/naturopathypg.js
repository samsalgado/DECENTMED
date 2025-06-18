import React from 'react';
import "./homeo.css";
import './Info.css';
import naturopathy from '../images copy/naturopathybenefits.png';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import NatStudy from './naturopathystudy';
import { Button } from 'react-bootstrap';
const Naturo = () => {
  const { t } = useTranslation('common');
  return (
    <div className='thecontainer'>
      <div className='container'>
        <h1 className='title'>{t('Naturopathy')}</h1>
        <div className="container-bbblue">
      <div>
      <p>{t("Naturopathy is a holistic approach to healthcare that emphasizes the body's innate ability to heal itself using natural therapies and lifestyle changes. It aims to address the root cause of illness rather than just managing symptoms. Prescription overdose is expected to exceed 80,000 in 2025 according to the CDC, opting for naturopathic medicine is safer and more effective.")}</p>
      <br></br>
      <Button variant="primary" href="https://themerlingroupworld.com/homeopract" target="_blank">
                {t("Try Naturopathy")}
            </Button>
      </div>
    </div>
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
