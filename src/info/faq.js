import React, {useEffect} from 'react'
//In the Collapsible for Departments. Initially, it will go to Education page. Later it will point to Telehealth pages for respective practice.
import "./Info.css";
import ANS from './ans';
import Merlin from './merlin';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spectraspray from "../images copy/spectraspray.png";
import { useTranslation } from 'react-i18next';
const FAQ = () => {
  const {t} = useTranslation('common');
     useEffect(() => {
                AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
              }, []);
  
  return (
    
    <div data-aos="slide-right" className='container'>
              <h1 className='logotitle'>{t("About Us")}</h1>
            <Merlin />
            <div data-aos="slide-right">
            <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
            <ANS />        
            </div>
            </div>
    
  )
}

export default FAQ;

