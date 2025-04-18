import React from 'react'
import LOGO from "./images copy/LOGO.png";
import Grid from './info/grid';
import x from './images copy/x.png';
import youtube from './images copy/youtube.png';
import geyser from './images copy/geyser.png';
import './App.css';

const Footer = () => {

  return (
<div className="footer-container">
<div className='socials'>
        <a href='https://twitter.com/ttf123457'>
            <img src={x} alt='logo' className='Logo' />
        </a>
        <a href='https://www.youtube.com/playlist?list=PL8Q31etEj6NEEZGvqEw0UAOUG4O0ucsiz'>
            <img src={youtube} alt='Youtube' className='Logo'  />
        </a>
     <a href='https://geyser.fund/project/decentmedpubliccancercure/'>
            <img src={geyser} alt='Geyser Fund' className='Logo'  />
        </a>
        </div>
          <div><img src={LOGO} className="Logo" alt="logo" /></div>
        <Grid />
      
        </div>
    )
}

export default Footer;

