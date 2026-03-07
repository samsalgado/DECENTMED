import React from "react";
import './acu.css'; 
import './Info.css';
import event6 from "../images copy/airtable.png";
import { Button } from'react-bootstrap';
import spectraspray from "../images copy/spectraspray.png";
import HealingBen from "./healben";
import { useTranslation } from "react-i18next";
const Info11 = () => {
const {t} = useTranslation('common');
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }

    return (
      <div className='container mobile-optimized'>
          <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Certified Sound Healing')}</h1>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
         <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className='content-wrapper' style={{
          flex: '1'
        }}>
          <p className='pr'>{t("Sound healing is an evidence-informed wellness practice that uses therapeutic sound frequencies to support nervous system regulation, stress reduction, and mental clarity. Through instruments such as crystal singing bowls, gongs, and harmonic tones, participants are guided into deep states of relaxation that support both mental and physical well-being.")}</p>
          <p className="pr">{t("Sound healing is a restorative wellness practice that uses carefully curated sound frequencies to guide the body and mind into deep relaxation. By slowing brainwave activity and calming the nervous system, sound healing supports stress reduction, emotional balance, and mental clarity. Participants often experience improved sleep, reduced anxiety, and a greater sense of grounding, making sound healing an effective complement to modern wellness programs—particularly for healthcare professionals and teams seeking sustainable stress management.")}</p>
          <Button className="custom-btn" href="https://decentmed.org/soundhealers" target="_blank">{t("Book Sound Healing Session")}</Button>  {/* Added Bootstrap Button */}
        </div>
         <div>
            <iframe class="rumble" title="Sound Healing" width="640" height="360" src="https://www.youtube.com/embed/3wMDLvsGszU?si=jH-somtaNgNFsU2J" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        
      </div>
    <div className="vertical-video">
  <iframe 
    className="rumble" 
    title="Sound Healing" 
    src="https://www.youtube.com/embed/fMwMZZcSFr0" 
    allowFullScreen>
  </iframe>
</div>
 <div className="vertical-video">
  <iframe 
    className="rumble" 
    title="Sound Healing" 
    src="https://www.youtube.com/embed/8ZHDsRhrUVc?si=TiAhnZhE-iOqm7Kc" 
    allowFullScreen>
  </iframe>
</div>
<div className="vertical-video">
  <iframe 
    className="rumble" 
    title="Sound Healing" 
    src="https://www.youtube.com/embed/ncNrRRyriVU?si=9uadKu3OfnUF59XS" 
    allowFullScreen>
  </iframe>
</div>
<div className="vertical-video">
  <iframe 
    className="rumble" 
    title="Sound Healing" 
    src="https://www.youtube.com/embed/KZSLD5k6H9Y?si=yItvGxx2DKOibhMO" 
    allowFullScreen>
  </iframe>
</div>
       <Button className="custom-btn" href="https://unioniscreation.com/" target="_blank">{t('Experience Sound Healing (UNIONisCREATION™)')}</Button>
      <br></br>
       <a href='https://www.spectraspray.com/shop' alt="spectra spray">
                  <img className='gridimag' src={spectraspray} alt='spectra spray' />
                   </a>
                       <br></br>  
                  <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Healing Sounds Testimonial')}</h1>
             <div style={{
  position: 'relative',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  aspectRatio: '9/16'
}}>
            <iframe 
    className="rumble" 
    title="Sound Healing" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      border: 'none'
    }}
               src="https://www.youtube.com/embed/V77nj2hLZtg" frameborder="0" allowfullscreen></iframe>
          </div>
                    <div style={{
  position: 'relative',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  aspectRatio: '9/16'
}}>
               <iframe 
    className="rumble" 
    title="Sound Healing" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      border: 'none'
    }}
           src="https://www.youtube.com/embed/Fk1kKCbr184" frameborder="0" allowfullscreen></iframe>
          </div>
                             <div style={{
  position: 'relative',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  aspectRatio: '9/16'
}}>
                   <iframe 
    className="rumble" 
    title="Sound Healing" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      border: 'none'
    }} 
            src="https://www.youtube.com/embed/4oWQToBMxpE" frameborder="0" allowfullscreen></iframe>
            </div>
            
     <div style={{
  position: 'relative',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  aspectRatio: '9/16'
}}>
                   <iframe 
    className="rumble" 
    title="Sound Healing" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      border: 'none'
    }}
             src="https://www.youtube.com/embed/TIdvnXPirrg" frameborder="0" allowfullscreen></iframe>
            </div>
      <style jsx>{`
        @media (max-width: 768px) {
        body, html { background: none !important; background-color: transparent !important; }
          .container-bbblue {
            flex-direction: column !important;
          }
          .content-wrapper {
            text-align: center !important;
          }
          .centered-video {
            max-width: 280px !important;
            margin-top: 20px !important;
            height: 200px !important;
          }
        }
      `}</style>
        <br></br>

      <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Events')}</h1>
         
       
         <a href="https://airtable.com/appzQKVIm0Fbh56Jo/shrcUTpEXH6Q4yC0k/tbllSz2OJz9xGEGHw">
        <img className='gridimage' src={event6} alt='Practice and Presence: An Ashtanga, Philosophy & Sound Healing Retreat' />
        </a>
        
        <br></br>
        <HealingBen />
         <Button onClick={learnmore} className="custom-btn">
                  {t('Providers: Signup Here')}
                </Button>       
        </div>
    )
}
export default Info11;
