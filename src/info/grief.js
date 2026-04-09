import React, { useEffect, useState} from 'react';
import "./homeo.css";
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import book1 from "../images copy/graphic1.png";
import graphic0 from "../images copy/graphic0.png"
import book3 from "../images copy/Screenshot 2026-04-03 at 9.40.18 PM.png";
import book2 from "../images copy/Screenshot 2026-04-03 at 9.38.30 PM.png";
import book4 from "../images copy/Screenshot 2026-04-03 at 9.41.38 PM.png";
import book5 from "../images copy/Screenshot 2026-04-03 at 9.43.19 PM.png";
import book6 from "../images copy/Screenshot 2026-04-03 at 9.44.13 PM.png";
import FBen from './fBen';
import review1 from "../images copy/Screenshot 2026-04-03 at 9.45.54 PM.png";
import review2 from "../images copy/Screenshot 2026-04-03 at 9.47.02 PM.png";
import spectraspray from "../images copy/spectraspray.png";
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import { Button } from 'react-bootstrap';
const Grief = () => {
  const { t } = useTranslation('common');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
   useEffect(() => {
              AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
            }, []);
  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 992 && windowWidth > 768;
  const iframeStyle = {
  width: '100%',
  height: isSmallMobile ? '210px' : isMobile ? '260px' : isTablet ? '290px' : '330px', // slight bump
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
}; 
const titleStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '20px' : '30px',
    fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '2.5rem'
  };
const iframeWrapperStyle = {
  flex: isMobile || isTablet ? 'none' : '0 0 450px', // bumped from 400px
  width: '100%',
  maxWidth: isMobile || isTablet ? '100%' : '450px' // bumped from 420px
};
  return (
      <div className='container  mobile-optimized'>
        <div data-aos="slide-right" className="container-blue">
        <h1 className='logotitle' style={titleStyle}>{t('Womens Trauma Therapy Treatment')}</h1>
        </div>
        <div data-aos="slide-right" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '28px 0'
      }}>
        <div data-aos="slide-right" className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
      <div data-aos="slide-right" className='content-wrapper' style={{
          flex: '1'
        }}>
          <h2>{t("How does coaching assist with trauma?")}</h2>
      <p>{t("Coaching takes a forward-movement approach to trauma through supporting mindset shifts, upgrading inner narratives, and helping you see a future that is filled with life, joy, and purpose beyond what the world has put you through. While traditional therapy can support deeper processing of the past, there is also great power in bringing awareness to the present and taking small action steps towards your desired future.")}</p>
      <p>{t("Utilizing science-backed knowledge, tools, and resources that support broadening your perspective on various life challenges, we can tap into changing the narrative, calming the nervous system, and allowing your wise, empowered self to take the lead in your life. Together, we will gain knowledge on how the nervous system plays a critical role in keeping us stuck or supporting our growth. We will explore various techniques that calm the nervous system so that you can better work with your body and mind through awareness and wisdom.")}</p>
      <p>{t("We start with where you are at, honor what is going on in the present, and seek to gradually support stretching your comfort zone in a safe, compassionate environment. Through experiencing small victories, inner confidence and empowerment can support further progress and growth. Healing from trauma is a journey of a thousand steps, and breaking the process down to just the very next step with an explorer’s mindset can help you ultimately achieve the life of your dreams.")}</p>
      <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">
            {t("Experience Healing")}
        </Button>
      </div>
        <div style={iframeWrapperStyle}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/eEUGxoz19-I?si=czfah5eg9nO0SuQg"
          title="Patient Acquisition Engine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={iframeStyle}
   
        />
        </div>
      </div>
    </div>
        <div data-aos="slide-right" className="container-blue">
      <a href='https://www.nourishedheartswellness.com/book-online' alt="nourished hearts wellness">
            <img className='gridimag' src={graphic0} alt='GRAPHIC' />
             </a>
              <div data-aos="slide-right" className='gridimage'>
                      <a href='http://spectraspray.com/' alt="spectra spray">
                <img className='gridimag' src={spectraspray} alt='spectra spray' />
                </a>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/7bu3HRvtWwE?si=P6WSLCYc-Fjd0OS4"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
             <Button className="custom-btn" href="https://patreon.com/NourishedHeartsWellnessCoaching?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" >{t("Experience Trauma Relief")}</Button>  {/* Added Bootstrap Button */}
      </div>
      <div data-aos="slide-right">
              <Collapsible trigger={<div className="collapsible-trigger">{t("Slides")}</div>}>
         <img src={book1} className='gridimage' alt="img" />
        <img className='gridimage' src={book2} alt="img" />
        <img className='gridimage' src={book3} alt="img" />
        <img className='gridimage' src={book4} alt="img" />
        <img className='gridimage' src={book5} alt="img" />
        <img className='gridimage' src={book6} alt="img" />
        </Collapsible>
        <br></br>
        <Collapsible trigger={<div className="collapsible-trigger">{t("Client Testimonials")}</div>}>
                <img className='gridimage' src={review1} alt="img" />
                <img className='gridimage' src={review2} alt="img" />
        </Collapsible>
        <br></br>
        <FBen />
        </div>
      </div>
  );
};

export default Grief;
