import React from 'react';
import "./homeo.css";
import './Info.css';
import TsBen from './tsben';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import Trev from './traumarev';
import { Button } from 'react-bootstrap';
const Traumapg = () => {
  const { t } = useTranslation('common');
  return (
      <div className='container  mobile-optimized'>
        <h1 className='title'>{t('Healing Trauma')}</h1>
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
          <h3>{t("Healing from Trauma Quotes")}</h3>
      <p>{t("Life doesn’t have to feel overwhelming. Together, we can shift your outlook and create a life you’re excited to live. My coaching philosophy is rooted in the belief that everyone possesses their own unique potential and inner power. As a Life Architect, I work with you to unlock your true potential and design a life that aligns with your values, passions, and goals.")}</p>
      <p>{t("'The tools I received through coaching gave me clarity and confidence. My relationships are thriving, and I feel like I’m finally living the life I’ve always wanted.'")}</p>
      <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">
                {t("Experience Healing")}
            </Button>
      </div>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/n3TTyHHPV8M?si=TLG_ttkKywc22Ncg"
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
        <Collapsible trigger={<th className="collapsible-trigger">{t("Testimonials")}</th>}>
        <Trev />
        </Collapsible>
        <br></br>
        <TsBen />
      </div>
  );
};

export default Traumapg;
