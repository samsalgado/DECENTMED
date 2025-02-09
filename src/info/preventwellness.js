import React from 'react'
import preventchart from '../images copy/prevemt.png';
import Vitamins from './vitamins';
import "./prevent.css";
import { useTranslation } from 'react-i18next';

const PreventWellness = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container'>
      <div className="title-container">
        <h1>{t('Preventive Wellness')}</h1>
      </div>
      <div className="collapsible">
      </div>
      <img src={preventchart} className="chart" alt="logo" />

      <br></br>
      <div className='pr'>
     
        <iframe
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/QYK5YYh8Doc?si=kDUpYjE9IpJzk8pm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
       
      </div>
   
      <Vitamins />
    </div>
  );
}

export default PreventWellness;
