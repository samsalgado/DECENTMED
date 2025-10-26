// import React from 'react';
// import './Footer.css';
// import Geyser from '../images copy/geyser.png';
// import { useTranslation } from 'react-i18next';
// import { FaLinkedin, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
// import { Button } from 'react-bootstrap';
// import LOGO from "../images copy/goklKk.png";

// const Footers = () => {
//   const { t } = useTranslation('common');

//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Products Section */}
//         <div className="footer-section office">
//           <h3 style={{ textAlign: 'center', marginTop: '-10px' }} className="footer-section about">{t("Products We Trust")}</h3>
//           <div style={{ display: 'flex', flexDirection: 'column' }}>

//             <Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'green', borderColor: 'green', }} href="https://decentmed.org/shop" target="_blank">
//               {t("Shop")}
//             </Button>
//           </div>
//         </div>

//         {/* About Section */}

//         <div style={{ textAlign: 'center', marginTop: '-10px' }} className="footer-section about">
//           <img src={LOGO} className="Logo" alt="logo" />
//           <br></br>
//           <br></br>
//           <p>{t('intro_paragraph')}</p>
//           <a
//   href="/HIPAA Compliance Policy.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'green', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}
// >
//   {t("View HIPAA Compliance Policy (PDF)")}
// </a>
//         </div>

//         {/* Office Section */}
//         <div className="footer-section office">
//           <h3 style={{ textAlign: 'center' }}>{t('Office')}</h3>
//           <div className="text-center">
//             <Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'green', borderColor: 'green', }}
//                      href="https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true" target="_blank">
//               {t("Book a Call")}
//             </Button>
//           </div>          
//           <p>5830 E 2ND ST Casper, WY 82609</p>
//           <p>
//             <Button
//               style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'green', borderColor: 'green', }}
//               href="https://decentmed.org/reviews" target="_blank">
//               {t("OUR REVIEWS")}
//             </Button>
//           </p>
//         </div>

//         {/* Social Icons Section */}
//         <div style={{ marginTop: '10px' }} className="footer-section social-icons">
//           <h3 style={{ textAlign: 'center' }}>{t('Social Media')}</h3>
//           <div className="social-icons-list">
//             <a href="https://www.linkedin.com/company/themerlingroupworld/">
//               <FaLinkedin className="facebook" />
//             </a>
//             <a href="https://www.facebook.com/share/16SxAvn1Cr/?mibextid=wwXIfr">
//               <FaFacebook className="tweet" />
//             </a>
//             <a href="https://wa.me/18137664900" className="whatsapp">
//               <FaWhatsapp />
//             </a>
//             <a href="https://www.youtube.com/@DCNTMD">
//               <FaYoutube className="youtube" />
//             </a>
//             <a href="https://geyser.fund/project/decentmedpubliccancercure/">
//               <img src={Geyser} className="geyserImg" alt="Geyser Fund" />
//             </a>

//           </div>
//         </div>
//       </div>
//       {/* Footer Bottom */}

//     </footer>
//   );
// };

// export default Footers;



import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import LOGO from "../images copy/goklKk.png";

const Footers = () => {
  const { t } = useTranslation('common');

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
            className="footer-link-btn"
          >
            {t("View HIPAA Compliance Policy (PDF)")}
          </a>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="footer-section links">
          <h3 className="footer-title">{t("Products We Trust")}</h3>
          <ul className="footer-list">
            <Button style={{width:'130px'}}
              className="footer-btn"
              href="https://decentmed.org/shop" target="_blank" rel="noreferrer"
            
            >
              {t("Shop")}
            </Button>
            <li><a href="https://decentmed.org/reviews" target="_blank" rel="noreferrer">{t("Our Reviews")}</a></li>
          </ul>
        </div>

        {/* ===== Office ===== */}
        <div className="footer-section office">
          <h3 className="footer-title">{t("Office")}</h3>
          <p className="footer-address">5830 E 2ND ST Casper, WY 82609</p>
          <Button
            className="footer-btn"
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
            <a href="https://www.linkedin.com/company/themerlingroupworld/" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/16SxAvn1Cr/?mibextid=wwXIfr" className="social-icon facebook">
              <FaFacebook />
            </a>
            <a href="https://wa.me/18137664900" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@DCNTMD" className="social-icon youtube">
              <FaYoutube />
            </a>
          </div>

          {/* ===== Geyser Fund under social ===== */}
          <a
            href="https://geyser.fund/project/decentmedpubliccancercure/"
            target="_blank"
            rel="noopener noreferrer"
            className="geyser-link"
            style={{ marginTop: '15px' }}
          >
            <img src={Geyser} className="geyserImgLarge" alt="Support DecentMed on Geyser Fund" />
            <span className="geyser-text">Donate via Geyser Fund</span>
          </a>
        </div>

      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DecentMed — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footers;