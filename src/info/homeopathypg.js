import React from 'react'
import "./homeo.css";
import quote from '../images copy/quote.png';
import { useTranslation } from 'react-i18next';
const Homeo = () => {
const {t} = useTranslation('common')

  return (
    <div className='thecontainer'>
    <div className='container'>
        <h1> {t('Homeopathy')}</h1>
        <iframe
            width="100%"
            height="475"
            src="https://www.youtube.com/embed/j7bV-Ig45kg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
    <br></br>
    <br></br>
      <img src={quote} className="TELEa" alt="logo" />
      <div className="collapsible">
      </div>
    </div>
    </div>
  )
}

export default Homeo