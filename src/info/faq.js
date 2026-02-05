import React from 'react'
//In the Collapsible for Departments. Initially, it will go to Education page. Later it will point to Telehealth pages for respective practice.
import "./Info.css";
import ANS from './ans';
import Merlin from './merlin';
import spectraspray from "../images copy/spectraspray.png";
import { useTranslation } from 'react-i18next';
const FAQ = () => {
  const {t} = useTranslation('common');
  return (
    
    <div className='container'>
              <h1>{t("About Us")}</h1>
            <Merlin />
            <div>
            <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
            <ANS />        
            </div>


</div>
    
  )
}

export default FAQ;

