import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png'
import {useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import SYOOCE from '../images copy/SYOOCE.png';
import AJA from '../images copy/AJAA.png';
import lifewave from '../images copy/lifewave.png';


const Footers = () => {
  const {t} = useTranslation('common')
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section products">
          <h3 className='decent'>{t("Products We Trust")}</h3>
          <div className="row">
            <div className="col-6">
              <a href="https://www.ajasupplements.com/collections/all">
                <img src={AJA} className='product-img' alt="" />
              </a>
            </div>
            
            <div className="col-6">
              <a href="https://www.amazon.com/Solve-Your-Out-Control-Eating/dp/B0DDK2HDQN">
                <img src={SYOOCE} className='product-img' alt="" />
              </a>
            </div>
            <div className="col-6">
              <a href="https://www.lifewave.com/awicks">
                <img src={lifewave} className='product-img' alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section about">
          <h3 className='decent'>DECENT MED</h3>
          {/* <div className='imgdiv'><img src={LOGO} className="Logo" alt="logo" /></div> */}
          <p>
  {t('intro_paragraph')}
          </p>
        </div>

        <div className="footer-section office">
          <h3>{t('Office')}</h3>
          <p>5830 E 2ND ST Casper, WY 82609</p>
          <p>{t('Email: themerlingroupworld@gmail.com')}</p>
          <p className='geyser'>
            <a  href="https://geyser.fund/project/decentmedpubliccancercure/"> 
            <img src={Geyser} className='geyserImg' alt="" /></a></p>
        </div>
        <div className="social-icons">
          <h3>{t('Social Media')}</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/themerlingroupworld/"><FaLinkedin className='facebook' /></a>
            <a href='https://twitter.com/ttf123457'><FaTwitter className='tweet' /></a>
            <a href="https://wa.me/18137664900" className='whatsapp'><FaWhatsapp /></a>
            <a href='https://www.youtube.com/@DCNTMD'><FaYoutube className='youtube' /></a>
          </div>
        </div>
        {/* <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email id" />
            <button type="submit"> &rarr;</button>
          </form>
        </div> */}
      </div>
      <div className="footer-bottom">
        themerlingroupworld © 2025 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footers;