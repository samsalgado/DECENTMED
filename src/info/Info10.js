import React from "react";
import './acu.css'; 
import './Info.css';
import event0 from "../images copy/event0.png";
import event from "../images copy/events.png";
import event1 from "../images copy/event1.png";
import event2 from "../images copy/event2.png";
import event3 from "../images copy/evnt.png";
import event4 from "../images copy/event4.png";
import event5 from "../images copy/event5.png";
import event6 from "../images copy/cistern.png";
import { Button } from'react-bootstrap';
import HealingBen from "./healben";
import { useTranslation } from "react-i18next";
const Info11 = () => {
const {t} = useTranslation('common')
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
    src="https://www.youtube.com/embed/fMwMZZcSFr0" 
    allowFullScreen>
  </iframe>
</div>
       <Button className="custom-btn" href="https://unioniscreation.com/" target="_blank">{t('Experience Sound Healing')}</Button>
      <br></br>
                  <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Healing Sounds Testimonial')}</h1>
             <div>
            <iframe class="rumble" title="Sound Healing" width="640" height="360"   src="https://www.youtube.com/embed/V77nj2hLZtg" frameborder="0" allowfullscreen></iframe>
          <iframe class="rumble" title="Sound Healing" width="640" height="360" src="https://www.youtube.com/embed/Fk1kKCbr184" frameborder="0" allowfullscreen></iframe>
          </div>
            <div>
            <iframe class="rumble" title="Sound Healing" width="640" height="360" src="https://www.youtube.com/embed/4oWQToBMxpE" frameborder="0" allowfullscreen></iframe>
            <iframe class="rumble" title="Sound Healing" width="640" height="360" src="https://www.youtube.com/embed/TIdvnXPirrg" frameborder="0" allowfullscreen></iframe>
            </div>
      <style jsx>{`
        @media (max-width: 768px) {
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
   <a href="https://buffalobayou.org/event/2025-light-sound-meditation-cistern/" alt="Thriving by Nature">
        <img className='gridimag' src={event0} alt='21 Day Challenge' />
        </a>
         <a href="https://www.eventbrite.com/e/soundbath-in-the-sky-spinning-sky-lounge-tickets-1975579591740" alt="Thriving by Nature">
        <img className='gridimag' src={event3} alt='21 Day Challenge' />
        </a>
         <a href="https://fareharbor.com/embeds/book/buffalobayou/items/246138/calendar/2021/04/?flow=404814&fbclid=IwAR06_Hdi53MrbqsSv6pl2t1zOLtgXAhn_bcsdUjGxv8yCUB2cJjYD60r_dI&full-items=yes" alt="Thriving by Nature">
        <img className='gridimag' src={event4} alt='21 Day Challenge' />
        </a>
         <a href="https://www.eventbrite.com/e/soundbath-in-the-sky-spinning-sky-lounge-tickets-1975579591740" alt="Thriving by Nature">
        <img className='gridimag' src={event5} alt='21 Day Challenge' />
        </a>
         <a href="https://fareharbor.com/embeds/book/buffalobayou/items/246138/calendar/2026/01/?flow=404814&fbclid=IwAR06_Hdi53MrbqsSv6pl2t1zOLtgXAhn_bcsdUjGxv8yCUB2cJjYD60r_dI&full-items=yes" alt="Thriving by Nature">
        <img className='gridimag' src={event6} alt='21 Day Challenge' />
        </a>
        <a href="https://www.eventbrite.com/e/walking-the-path-of-peace-a-transformative-meditation-journey-tickets-1979217173846" alt="Thriving by Nature">
        <img className='gridimag' src={event} alt='21 Day Challenge' />
        </a>
        <a href="https://danaguerrayoga.com/spi-retreat-2%2F20-2%2F22%2F26" alt="Thriving by Nature">
        <img className='gridimag' src={event1} alt='21 Day Challenge' />
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelJkLwEJnFEbUDOeOsyzxxMGQ-Ca38x6jOmKGq7bmhMVIiIw/viewform?pli=1" alt="Thriving by Nature">
        <img className='gridimag' src={event2} alt='21 Day Challenge' />
        </a>
        <br></br>
        <HealingBen />       
        </div>
    )
}
export default Info11;
