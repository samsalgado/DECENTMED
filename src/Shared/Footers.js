
import React, { useState } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Inspire from "../images copy/Inspire.png";
import LOGO from "../images copy/906f38b7-e2d8-45e0-89d3-15a867d484c1.png";
import alignable from "../images copy/alignable.png";
import wish from "../images copy/wish.png";
const Footers = () => {
  const { t } = useTranslation('common');
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ===== About Section ===== */}
        <div className="footer-section about">
          <img src={LOGO} className="footer-logo" alt="DecentMed Logo" />
          <p className="footer-intro">
            {t('intro_paragraph')}
          </p>
          <a
            href="/HIPAA Compliance Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn"
          >
            <Button className="custom-btn"
            >
              {t("View HIPAA Compliance Policy (PDF)")}
            </Button>
          </a>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="footer-section links">
          <h3 className="footer-title">{t("Products We Trust")}</h3>
          <ul className="footer-list">
            <Button style={{ width: '130px' }}
              className="custom-btn"
              href="https://decentmed.org/shop" target="_blank" rel="noreferrer"

            >
              {t("Shop")}
            </Button>
            <a
              href="https://www.awin1.com/cread.php?awinmid=59505&amp;awinaffid=2733802&amp;ued=https%3A%2F%2Fwww.wishgardenherbs.com%2Fcollections%2Fsale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wish} className="geyserImgLarge" alt="Alignable" />
            </a>

            <li><a href="https://decentmed.org/reviews" target="_blank" rel="noreferrer">{t("Our Reviews")}</a></li>
          </ul>
        </div>

        {/* ===== Office ===== */}
        <div className="footer-section office">
          <h3 className="footer-title">{t("Office")}</h3>
          <img src={alignable} className="geyserImgLarge" alt="Alignable" />
          <p className="footer-address">5830 E 2ND ST Casper, WY 82609</p>
          <Button
            className="custom-btn"
            href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true"
            target="_blank" rel="noopener noreferrer"
          >
            {t("Book a Call")}
          </Button>
        </div>

        {/* ===== Social Media ===== */}
        <div className="footer-section social">
          <h3 className="footer-title">{t("Follow Us")}</h3>
          <div className="social-icons-list">
            <a href="https://www.linkedin.com/company/themerlingroupworld/" aria-label="LinkedIn" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/16SxAvn1Cr/?mibextid=wwXIfr" aria-label="Facebook" className="social-icon facebook">
              <FaFacebook />
            </a>
            <a href="https://wa.me/18137664900" aria-label="WhatsApp" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@DCNTMD" aria-label="YouTube" className="social-icon youtube">
              <FaYoutube />
            </a>
          </div>

          {/* ===== Geyser Fund under social ===== */}
          <a
            href="https://inspireworldfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="geyser-link"
            style={{ marginTop: '15px' }}
          >
            <img src={Inspire} className="geyserImgLarge" alt="Support DecentMed on Geyser Fund" />
            <Button className="custom-btn">Support our Charity of Choice</Button>
          </a>
          {playVideo ? (
            <iframe 
              width="100%" 
              style={{ maxWidth: '360px' }}
              height="215" 
              src="https://www.youtube.com/embed/LFTzCOn59_s?autoplay=1&si=_FcEzoSIY3wmTOyI" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
          ) : (
            <div 
              onClick={() => setPlayVideo(true)} 
              style={{ 
                cursor: 'pointer', 
                position: 'relative', 
                width: '100%', 
                maxWidth: '360px',
                height: '215px', 
                backgroundColor: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
                marginTop: '15px'
              }}
            >
              <img 
                src="https://img.youtube.com/vi/LFTzCOn59_s/0.jpg" 
                alt="Video Thumbnail" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                backgroundColor: 'rgba(0,105,92,0.85)', 
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DecentMed — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footers;