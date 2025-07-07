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
      <div className='container  mobile-optimized'>
        <h1 className='title'>{t('Naturopathy')}</h1>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
        <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
      <div className='content-wrapper' style={{
          flex: '1'
        }}>
      <p>{t("Naturopathy is a holistic approach to healthcare that emphasizes the body's innate ability to heal itself using natural therapies and lifestyle changes. It aims to address the root cause of illness rather than just managing symptoms. Prescription overdose is expected to exceed 80,000 in 2025 according to the CDC, opting for naturopathic medicine is safer and more effective.")}</p>
      <Button variant="primary" href="https://themerlingroupworld.com/naturopathicproviders" target="_blank">
                {t("Try Naturopathy")}
            </Button>
      </div>
        <iframe
          width="100%"
          height="515"
          src="https://drive.google.com/file/d/17WvWujc0MhFQ0DM4xfjjqQEdOunjeNWO/preview"
          title="Patient Acquisition Engine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
          }}    
        />
      </div>
    </div>
    <style jsx>{`
        @media (max-width: 768px) {
          .container-bbblue {
            flex-direction: column !important;
          }
          .content-wrapper {
            text-align: center !important;
          }
          .centered-video {
            max-width: 280px !important;
            margin-top: 20px !important;
            height: 200px !important;
          }
        }
      `}</style>
        <Collapsible trigger={<th className="collapsible-trigger">{t("Naturopathy Case Study")}</th>}>
        <NatStudy />
        </Collapsible>
        <br></br>
        <a href="https://meridianpassagewellness.com" target="_blank" rel="noopener noreferrer">
        <br></br>
        <img src={naturopathy} className="TELEa" alt="quote" />
        </a>
      </div>
  );
};

export default Naturo;
