import React from 'react'
import "./homeo.css";
import './Info.css';
import { Button } from 'react-bootstrap';
import homeo from '../images copy/homeo.png';
import { useTranslation } from 'react-i18next';
const Herbal = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
        <h1 className='title'>{t('Herbal Medicine')}</h1>
        <div className="video-container">
        <iframe
  src="https://drive.google.com/file/d/1qbnYhsRJpEOCuK2L-MdyjV-wgMp8UAJe/preview"
  width="100%"
  title='Herbal Homepage'
  height="355px"
  allow="autoplay"
  frameBorder="0"
  allowFullScreen
  style={{
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: 'none',
    overflow: 'hidden'
  }}
></iframe>
        </div>
        <div className="button-container">
        <Button variant="primary" href="https://themerlingroupworld.com/apoth" target="_blank">
          {t("Explore Apothecary")}
        </Button>
      </div>
    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
  </div>
  )
}

export default Herbal
