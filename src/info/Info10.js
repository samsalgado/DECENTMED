import React from "react";
import './acu.css'; 
import './Info.css';
import event0 from "../images copy/soundbath0.png";
import event from "../images copy/yogaesp.png";
import event1 from "../images copy/discoverygreen.png";
import event2 from "../images copy/tulum.png";
import event4 from "../images copy/pathofpeace.png";
import event6 from "../images copy/ashtanga.png";
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
       <Button className="custom-btn" href="https://unioniscreation.com/" target="_blank">{t('Experience Sound Healing')}</Button>
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
   <a href="https://www.eventbrite.com/e/soundbath-in-the-sky-spinning-sky-lounge-tickets-1975579591740" alt="Thriving by Nature">
        <img className='gridimag' src={event0} alt='Soundbath in the Sky' />
        </a>
         
         <a href="https://www.eventbrite.com/e/walking-the-path-of-peace-a-transformative-meditation-journey-tickets-1979217173846" alt="Thriving by Nature">
        <img className='gridimag' src={event4} alt='Walking the Path of Peace – A Transformative Meditation Journey' />
        </a>
       
         <a href="https://danaguerrayoga.com/spi-retreat-2%2F20-2%2F22%2F26">
        <img className='gridimag' src={event6} alt='Practice and Presence: An Ashtanga, Philosophy & Sound Healing Retreat' />
        </a>
        <a href="https://www.eventbrite.com/e/clase-de-yoga-y-meditacion-de-sonido-en-espanol-tickets-1981592083264?utm_experiment=test_share_listing&aff=ebdsshios&sg=7a4e794b9d12b8a3f4e8678c16e9e1f35735553342284a297b019fdf079ba2256048608c9bd5854f090ade83973649271d5be69a2c9391177f36b12d992dbd527e5e029f0f8af00c36c7abce24" alt="Thriving by Nature">
        <img className='gridimag' src={event} alt='Clase de Yoga y Meditación de Sonido en Español' />
        </a>
        <a href="https://www.eventbrite.com/e/the-grounding-hour-yoga-for-mind-body-tickets-1981591197615?utm_experiment=test_share_listing&aff=ebdsshios&sg=7a4e794b9d12b8a3f4e8678c16e9e1f35735553342284a297b019fdf079ba2256048608c9bd5854f090ade83973649271d5be69a2c9391177f36b12d992dbd527e5e029f0f8af00c36c7abce24" alt="Thriving by Nature">
        <img className='gridimag' src={event1} alt='The Grounding Hour: Yoga for Mind & Body' />
        </a>
        <a href="https://my-site-67hyw2es-unioniscreation.wix-vibe.com/" alt="Thriving by Nature">
        <img className='gridimag' src={event2} alt='REBIRTH: Your Tulum Journey Begins' />
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
