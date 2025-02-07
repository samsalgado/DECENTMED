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
        <p>
          {t('Preventive Wellness Description 1')}
        </p>
        <iframe
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/QYK5YYh8Doc?si=kDUpYjE9IpJzk8pm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>
          {t('Preventive Wellness Description 2')}
          <a href='https://gerson.org/'>{t('Cancer Treatments')}</a> {t('Description of Gerson')} <a href='https://drsebiscellfood.com/'>{t('Dr. Sebi Diet')}</a> {t('Description of Dr. Sebi Diet')}
        </p>
      </div>
   
      <Vitamins />
    </div>
  );
}

export default PreventWellness;
