import React, {useEffect} from 'react';
import './Info.css';
import features from "../images copy/features.png";
import AOS from 'aos';
import hol from "../images copy/hol.png";
import 'aos/dist/aos.css';
import HealthFacts from './Health';
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
    AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
  }, []);
  
   // Access translation function
  return (
    <div className='container'>
      <div className="container-blue">
      <h1 className='logotitle' data-aos="slide-left">{t('DecentMed')}</h1>
      </div>
      <div data-aos="slide-right">
      <BlueContainer />
      </div>
      <WellnessInro />
          <div className="container-blue" data-aos="slide-right">
          <img className='gridmag' src={features} alt='Features' />
        <h1 className="text-center mb-4">{t('Features & Additional Services')}</h1>
      <Values />
      <a href='decentmed.org/apoth'>
          <img className='gridmagg' src={hol} alt='Apothecary' />
      </a>
      <br />
      <br />
      <h2>{t('Holistic Medicine near Me')}</h2>
      <div className='pr'>
        <h3>{t('Monetization of Medicine')}</h3>
        <p>
          {t(`Why is there no cure for cancer? Why is obesity and prescription overdose only getting worse? Is profit worth life? Promoting wellness begins with education. The current system monetizes medicine, conversely, treatments deemed alternatives, are cheaper and heavily used in the healthiest nations in the world. The body has an immense regenerative potential to heal itself, but when fighting itself, it's hard for the body to heal itself. Prevention is the initial step in fighting disease.`)}
        </p>
        <p>
          {t("Holistic")}
        </p>
        <p>
          {t(`A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days and restores the cells into ketosis. Furthermore, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness.`)}
          <a href='https://gerson.org/'>{t('Cancer treatments globally like the Gerson Therapy and Dr. Sebi diet use forms of Detoxification to cleanse the body from toxins that cause cancer.')}</a>
        </p>
        <p>
          {t('Why are countries with smaller healthcare budgets than the U.S. have healthier people? Because they strive for alternatives to pills, using elements of Traditional Chinese Medicine (TCM) like Acupuncture or Ayurveda. The healthiest people in the world utilize functional medicine for peak performance. Aaron Rodgers (NFL Quarterback) has gone on record highlighting the benefits of')}
          <a href='https://www.packersnews.com/story/sports/nfl/packers/2022/02/22/aaron-rodgers-cleanse-12-day-panchakarma-pat-mcafee-show-tuesday-february-22-2022/6895971001/'>
            {t('Ayurveda(Panchakarma cleanse)')}
          </a>
          {t('Stars like Kobe Bryant, Peyton Manning, Ryan Tannehill, Desean Jackson, and Jamaal Charles (among others) have all used Stem Cell Therapy for ailments.')}
        </p>
        </div>
      </div>
      <br />
      <div data-aos="zoom-in" className="container-blue">
      <HealthFacts />
      </div>
    </div>
  );
}

export default Info;
