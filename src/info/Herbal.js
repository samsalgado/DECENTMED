import React from 'react'
import "./homeo.css";
import './Info.css';
import homeo from '../images copy/homeo.png';
import { useTranslation } from 'react-i18next';
const Herbal = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
        <h1 className='title'>{t('Herbal Medicine')}</h1>

    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
    </div>
  )
}

export default Herbal
