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
import { Button } from 'react-bootstrap';
const Info1 = () => {
const {t} = useTranslation('common')
  return (
    <div className='container mobile-optimized'>
      <h1 className='title'>{t('Acupuncture')}</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
      <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
      <div className='content-wrapper' style={{
          flex: '1'
        }}>
      <p className='pr'>{t("Acupuncture is a traditional Chinese medicine (TCM) technique that involves inserting thin needles into specific points on the body. There are 12 primary meridians in the body, acupuncturists stimulate the meridians with the points to activate the body’s natural healing processes.")}</p>
      <p className='pr'>
        {t("The process of acupuncture is a four-step process beginning with checking the pulse and other vitals. Then, insert the needles into acupuncture points or points where blood, lymph, and nerves can easily access connective tissue. Next, manipulate the needles, and sometimes moxibustion is applied. Moxibustion is a traditional Chinese medical technique that involves burning the herb mugwort to relieve cold or stagnant conditions by stimulating circulation. Finally, topical patches and herbal rub are applied to the post-need injection sites.")}
      </p>
      <p className='pr'>
        {t("An estimated 66% of people have some form of corporate burnout. According to the WHO, 'at least 70% of people have some form of trauma'. Acupuncture lowers cortisol levels, studies have shown that it stimulates the vagus nerve - helping with trauma, corporate burnout and more.")}
      </p>
      <Button variant="primary" href="https://themerlingroupworld.com/acupuncturists" target="_blank">
            {t("Explore Acupuncture")}
        </Button>
      </div>
      <iframe
  src="https://drive.google.com/file/d/1K8LQQCKq2hwwxP3dTbaj7OxmWxChpcwq/preview"
  width="100%"
  height="315px"
  title='Acupuncture'
  allow="autoplay"
  style={{
    maxWidth: '400px',
    width: '100%',
    height: 'auto'
  }}
  allowFullScreen
></iframe>
</div>
</div>
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