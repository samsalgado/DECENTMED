import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Footers = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Products Section */}
        <div className="footer-section products">
          <h3 className="decent">{t("Products We Trust")}</h3>
          <Button variant="primary" href="https://decentmed.themerlingroupworld.com/shop" target="_blank">
           {t("Shop")}
            </Button>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          </div>
        </div>

        {/* About Section */}
        <div className="footer-section about">
          <h3 className="decent">DECENT MED</h3>
          <p>{t('intro_paragraph')}</p>
        </div>

        {/* Office Section */}
        <div className="footer-section office">
          <h3>{t('Office')}</h3>
          <p>📞 <a href="tel:+18137664900">Call Us: +1 (813) 766-4900</a></p>
          <p>5830 E 2ND ST Casper, WY 82609</p>
          <p></p>
          <p>
    {t('Email:')}{' '}
    <a href="mailto:samuel@themerlingroupworld.com">
      samuel@themerlingroupworld.com
    </a>
  </p>
          <p className="geyser">
            <a href="https://geyser.fund/project/decentmedpubliccancercure/">
              <img src={Geyser} className="geyserImg" alt="Geyser Fund" />
            </a>
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="footer-section social-icons">
          <h3>{t('Social Media')}</h3>
          <div className="social-icons-list">
            <a href="https://www.linkedin.com/company/themerlingroupworld/">
              <FaLinkedin className="facebook" />
            </a>
            <a href="https://twitter.com/ttf123457">
              <FaTwitter className="tweet" />
            </a>
            <a href="https://wa.me/18137664900" className="whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@DCNTMD">
              <FaYoutube className="youtube" />
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