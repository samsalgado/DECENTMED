import React from 'react';
import './Info.css';
import HealthFacts from './Health';
import BlueContainer from './deptcontainer';
import WellnessInro from './wellness';
import Values from './ourvalues';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Info = () => {
  const { t } = useTranslation("common"); // Access translation function
  const learnmore = () => {
    window.location.href = 'https://themerlingroupworld.com/telehealth'
  }

  return (
    <div className='container'>
      <h1 className='title'>{t('Decent Med')}</h1>
      <WellnessInro />
      <BlueContainer />
      <button style={{display:'flex'}} onClick={learnmore} className="btn btn-primary">{'Providers: Join Trusted Network'}</button>

      <div className="title-container">
        <h1 className="text-center mb-4">{t('Features & Additional Services')}</h1>
      </div>
      <Values />

      <div className='digital'>
        <div className="image-container">
          <div className="text-content">
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Content Creation')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Video Editing')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('AI-Enhanced Strategy')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Custom Storytelling')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Consulting')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Data Reporting')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('SEO (Local & National)')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Webinar Creation')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Social Media Optimization')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Custom Page Creation')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Conversion Optimization')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Branding & Consultation')}</p>
            <p style={{ textAlign: 'left', color: '#FFFF00', }}>{t('Email Marketing')}</p>
            <button style={{display:'flex', textTransform: 'capitalize' }} onClick={learnmore} className="btn btn-primary">{t("Learn More")}</button>
          </div>
        </div>
      </div>


      <h3>{t('Why Us?')}</h3>
      <div className='pr'>
        <h4>{t('Monetization of Medicine')}</h4>
        <p>
          {t(`Why is there no cure for cancer? Why is obesity and prescription overdose only getting worse? Is profit worth life? Promoting wellness begins with education. The current system monetizes medicine, conversely, treatments deemed alternatives, are cheaper and heavily used in the healthiest nations in the world. The body has an immense regenerative potential to heal itself, but when fighting itself, it's hard for the body to heal itself. Prevention is the initial step, eating a diet high in fruits and vegetables provides the essential antioxidants and nutrients to prevent disease. Pairing a 'green' diet with exercise goes a long way in preventing a trip to the doctor.`)}
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
      <br />
      <HealthFacts />
    </div>
  );
}

export default Info;
