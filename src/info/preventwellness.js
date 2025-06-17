import React from 'react'
import preventchart from '../images copy/prevemt.png';
import Vitamins from './vitamins';
import Coachingvids from './coachingvids';
import './Info.css';
import "./prevent.css";
import { useTranslation } from 'react-i18next';

const PreventWellness = () => {
  const { t } = useTranslation("common");
  return (
    <div className='container'>
      <div className="title-container">
        <h1 className="title">{t('Preventive Wellness')}</h1>
      </div>
      <div className="collapsible">
      </div>
      <img src={preventchart} className="chart" alt="logo" />
      <h1 className='center'>{t("Coaching Education: Health Coaches Near Me")}</h1>
  <Coachingvids />
      <br></br>
     <div className='vitamin'>
 <Vitamins />
  <br></br>
</div>
    </div>
  );
}

export default PreventWellness;
