import React from 'react'
//In the Collapsible for Departments. Initially, it will go to Education page. Later it will point to Telehealth pages for respective practice.
import "./Info.css";
import ANS from './ans';
import Merlin from './merlin';
import { useTranslation } from 'react-i18next';
const FAQ = () => {
  const {t} = useTranslation('common');
  return (
    
    <div className='container'>
              <h1>{t("About Us")}</h1>
            <Merlin />
            <div>
            <ANS />        
            </div>


</div>
    
  )
}

export default FAQ;

