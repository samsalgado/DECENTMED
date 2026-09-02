import React, { useEffect } from 'react';
import './Info.css';
import features from "../images copy/features.webp";
import hol from "../images copy/hol.webp";
import HealthFacts from './Health';
import ANS from './ans';
//import { Button } from 'react-bootstrap';
import BlueContainer from './deptcontainer';
import WellnessInro from './wellness';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Values from './ourvalues';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
gsap.registerPlugin(ScrollTrigger);
const Info = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    import('aos').then((module) => {
      const AOS = module.default || module;
      import('aos/dist/aos.css');
      AOS.init({ duration: 1000, once: false });
    });
  }, []);

  // Access translation function
  return (
    <div className='container'>
      <div className="container-blue" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <h1 className='logotitle'>{t('DecentMed: Connecting Patients with Providers')}</h1>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BlueContainer />
      </div>
      <WellnessInro />
    
      <div className="container-blue" data-aos="slide-right">
        <img className='gridmag' loading="lazy" src={features} alt='Features' width="954" height="896" />
        <br></br>
        <br></br>

        <h1 className="text-center mb-4">{t('Features & Additional Services')}</h1>
        <Values />
        <a href='decentmed.org/apoth'>
          <img className='gridmagg' loading="lazy" src={hol} alt='Apothecary' width="1002" height="670" />
        </a>
        <ANS />
      </div>
      <br />
      <div data-aos="zoom-in" className="container-blue">
        <HealthFacts />
      </div>
    </div>
  );
}

export default Info;
