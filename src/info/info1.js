import React from 'react';
import Channel from './channel';
import './Info.css';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; 
import { useTranslation } from 'react-i18next';
import acutreatsIN from '../images copy/IMG_9305.jpeg';
import burnout from '../images copy/burnout.jpeg';
import Acuvids from '../info/acuvids';
import acuben from '../images copy/acuben.png';
const Info1 = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
      <h1 className='title'>{t('Acupuncture')}</h1>
      <iframe
  src="https://drive.google.com/file/d/1K8LQQCKq2hwwxP3dTbaj7OxmWxChpcwq/preview"
  width="100%"
  height="315px"
  title='Acupuncture'
  allow="autoplay"
  allowFullScreen
></iframe>
<div className='acupen'>
      <img className='gridmag' src={acuchart} alt='Ac' />
       <img className='gridmag' src={acutreatsIN} alt='Ac' />
    <a href="https://oceantreis.com/" target="_blank" rel="noopener noreferrer">
    <img className='gridimag' src={burnout} alt='oceantreis' />
  </a>      
  </div>
  <h1>{t("Top 10 Benefits of Acupuncture")}</h1>
  <img className='gridimag' src={acuben} alt='Ac' />
  <Acuvids />
    <Channel />
    </div>
    
  )
}

export default Info1;