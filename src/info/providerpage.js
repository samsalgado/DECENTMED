import React, {useEffect} from 'react';
import "../App.css";
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NStudy from './nicaraugats';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Providerpage = () => {
  const { t } = useTranslation('common');
   useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
      }, []);
       const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  return (
    <div className='container'>
       <div data-aos="slide-right" className="container-blue">

       <h1 className="logotitle">{t("Turn Your Expertise Into a Steady Flow of Paying Clients")}</h1>
       </div>
                    <div data-aos="slide-right" className="container-blue">
 <div data-aos="slide-right" className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/uOb-h9NLqKc?si=hGKK4rAgo27KCx6S"
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
           <NStudy />     
           <Button onClick={learnmore} className="custom-btn">
                          {t('Book Meeting')}
                  </Button>  
      </div>
    </div>
  );
}

export default Providerpage;
