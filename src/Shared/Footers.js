import React from 'react';
import './Footer.css';
import Geyser from '../images copy/geyser.png'
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3 className='decent'>DECENT MED</h3>
          {/* <div className='imgdiv'><img src={LOGO} className="Logo" alt="logo" /></div> */}
          <p>
            We are an education platform that showcases Holistic Medicine and helps providers grow their business using AI-driven marketing strategies, social media management and unique offerings that helps our clients WIN.
          </p>
        </div>

        <div className="footer-section office">
          <h3>Office</h3>
          <p>Verlengde Keizer St 17B, Paramaribo, Suriname</p>
          <p>Email: themerlingroupworld@gmail.com</p>
          <p className='geyser'><a  href="https://geyser.fund/project/decentmedpubliccancercure/"> <img src={Geyser} className='geyserImg' alt="" /></a></p>
        </div>

        <div className="social-icons">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/themerlingroupworld/"><FaLinkedin className='facebook' /></a>
            <a href='https://twitter.com/ttf123457'><FaTwitter className='tweet' /></a>
            <a href="https://wa.me/18137664900" className='whatsapp'><FaWhatsapp /></a>
            <a href='https://www.youtube.com/playlist?list=PL8Q31etEj6NEEZGvqEw0UAOUG4O0ucsiz'><FaYoutube className='youtube' /></a>

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
