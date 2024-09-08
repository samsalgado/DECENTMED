import React from 'react'
import LOGO from "./images copy/LOGO.png";
import Grid from './info/grid';
import x from './images copy/x.png';
import youtube from './images copy/youtube.png';
import './App.css';

const Footer = () => {

  return (
<div className="footer-container">
<div className='socials'>
        <a href='https://twitter.com/ttf123457'>
            <img src={x} alt='' width={80} height={80} />
        </a>
        <a href='https://www.youtube.com/channel/UCviB2N6lC9aJu0eSw6FijWQ'>
            <img src={youtube} alt='' width={80} height={80}  />
        </a>
        </div>

          <div><img src={LOGO} className="Logo" alt="logo" /></div>
        <Grid />
      
        </div>
    )
}

export default Footer;
