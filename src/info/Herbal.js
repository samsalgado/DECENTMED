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
          src="https://www.youtube.com/embed/hDEbSxpnJhY?si=Is35CdcfP550htKY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
        <div className="button-container">
        <Button variant="primary" href="https://www.paulhaider.com/" target="_blank">
          {t("Visit Dr. Paul Haider's Site")}
        </Button>
      </div>
    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
    </div>
  )
}

export default Herbal
