import React from 'react';
import "../App.css";
import './Info.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MeditationInfo = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container'>
      <h1 className="title">{t('Meditation')}</h1>
      <iframe width="100%" height={500} src="https://drive.google.com/file/d/1gR__NvCEmnlJpOsJDUadgCDBSM-LZzCS/preview" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <div style={{ marginTop: '20px', width: '100%' }}>
        <Button style={{ marginRight: '20px' }} variant="primary" href="https://sanjivana.com/" target="_blank">{t('Visit Serenity Meditations')}</Button>
        <Button variant="primary" href="mailto:serenitymeditation2021@gmail.com" target="_blank">{t('Contact')}</Button>
      </div>
      
      <br />
      <div className='pr'>
        <h3>{t('Morning Meditation')}</h3>
        <p>{t('In recent years, meditation has gained recognition not just as a relaxation technique, but as a powerful tool for healing the mind, body, and spirit. With roots in various spiritual traditions, modern research is uncovering the profound benefits of meditation on mental and physical health.')}</p>
        
        <h2>{t('Understanding Meditation')}</h2>
        <p>{t('Meditation encompasses a variety of practices designed to promote focused attention and heightened awareness. Techniques may include mindfulness, breath awareness, and visualization, among others. Regardless of the approach, the core aim remains the same: to cultivate a state of inner calm and clarity.')}</p>
      </div>
    </div>
  );
}

export default MeditationInfo;
