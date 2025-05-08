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

      <br></br>
      <div className='video-container'>
     
        <iframe
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/QYK5YYh8Doc?si=kDUpYjE9IpJzk8pm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
       
      </div>
   
     <div className='vitamin'>
 <Vitamins />
  <br></br>
  <h1 className='center'>{t("Coaching Education: Health Coaches Near Me")}</h1>
  <Coachingvids />
</div>
    </div>
  );
}

export default PreventWellness;
