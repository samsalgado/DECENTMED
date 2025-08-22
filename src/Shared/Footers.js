import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import LOGO from "../images copy/LOGO.png";

const Footers = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Products Section */}
        <div className="footer-section office">
          <h3 style={{textAlign: 'center', marginTop: '-10px'}}className="footer-section about">{t("Products We Trust")}</h3>
          <div style={{display: 'flex', flexDirection: 'column'}}>

          <Button variant="primary" href="https://decentmed.themerlingroupworld.com/shop" target="_blank">
           {t("Shop")}
            </Button>
          </div>
        </div>

        {/* About Section */}
        
        <div style={{textAlign: 'center', marginTop: '-10px'}}className="footer-section about">
        <img src={LOGO} className="Logo" alt="logo" />
        <br></br>
        <br></br>
        <p>{t('intro_paragraph')}</p>
        </div>

        {/* Office Section */}
        <div className="footer-section office">
        <h3 style={{textAlign: 'center'}}>{t('Office')}</h3>
        <p>📞 <a href="tel:+18137664900">Call Us: +1 (813) 766-4900</a></p>
          <p>5830 E 2ND ST Casper, WY 82609</p>
          <p>
    {t('Email:')}{' '}
    <a href="mailto:samuel@themerlingroupworld.com">
      samuel@themerlingroupworld.com
    </a>
    <Button variant="primary" href="https://decentmed.themerlingroupworld.com/reviews" target="_blank">
           {t("OUR REVIEWS")}
            </Button>
  </p>
        </div>

        {/* Social Icons Section */}
        <div style={{marginTop: '10px'}}className="footer-section social-icons">
          <h3 style={{textAlign: 'center'}}>{t('Social Media')}</h3>
          <div className="social-icons-list">
            <a href="https://www.linkedin.com/company/themerlingroupworld/">
              <FaLinkedin className="facebook" />
            </a>
            <a href="https://www.facebook.com/share/16SxAvn1Cr/?mibextid=wwXIfr">
              <FaFacebook className="tweet" />
            </a>
            <a href="https://wa.me/18137664900" className="whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@DCNTMD">
              <FaYoutube className="youtube" />
            </a>
            <a href="https://geyser.fund/project/decentmedpubliccancercure/">
            <img src={Geyser} className="geyserImg" alt="Geyser Fund" />
            </a>

          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        themerlingroupworld © 2025 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footers;