import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import SYOOCE from '../images copy/SYOOCE.png';
import lifewave from '../images copy/lifewave.png';

const Footers = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Products Section */}
        <div className="footer-section products">
          <h3 className="decent">{t("Products We Trust")}</h3>
          <div className="col-6">
            <a href="https://www.amazon.com/Solve-Your-Out-Control-Eating/dp/B0DDK2HDQN">
              <img src={SYOOCE} className="product-img" alt="Solve Your Out Of Control Eating" />
            </a>
          </div>
          <div className="col-6">
            <a href="https://www.lifewave.com/awicks">
              <img src={lifewave} className="product-img" alt="Lifewave" />
            </a>
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
          <p>5830 E 2ND ST Casper, WY 82609</p>
          <p>{t('Email: themerlingroupworld@gmail.com')}</p>
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