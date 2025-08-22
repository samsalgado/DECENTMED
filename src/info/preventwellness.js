import React from 'react'
import Vitamins from './vitamins';
import Coachingvids from './coachingvids';
import './Info.css';
import "./prevent.css";
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
const PreventWellness = () => {
  const { t } = useTranslation("common");
  return (
    <div className='container'>
      <div className="title-container">
        <h1 className="title">{t('Preventive Wellness')}</h1>
      </div>
      <div className="collapsible">
      </div>
      <Vitamins />
      <Button className="custom-btn" href="https://themerlingroupworld.com/coaching" target="_blank">
   {t("Find Wellness Coaches")}
     </Button>
      <h1 className='center'>{t("Coaching Education: Health Coaches Near Me")}</h1>
  <Coachingvids />
    </div>
  );
}

export default PreventWellness;
