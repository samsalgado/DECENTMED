import React from "react";
import './Info.css';
import "../App.css";
import { Button} from'react-bootstrap';
import { useTranslation } from "react-i18next";
import adhd from "../images copy/adhd.png";
import spectraspray from "../images copy/spectraspray.png";
const Adhdberg = () => {
const {t} = useTranslation('common');
    return (
        <div>
      <div className='container mobile-optimized'>
       <h1
  style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}
>
          {t('ADHD Iceberg')}</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
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
              <h3>{t("ADHD is an Iceberg")}</h3>
          <p className='pr'>{t("What most people see above the surface looks high functioning: intelligence, creativity, quick thinking, big ideas, bursts of productivity, even success. It can look like someone who is capable, driven, and managing just fine. But beneath the waterline is the much larger mass that actually determines direction and stability. Under the surface live unfinished tasks, avoidance loops, mental overload, perfectionism, difficulty prioritizing, shame from past inconsistency, and a nervous system that becomes easily overstimulated. The visible distraction is only the tip. The real weight, and the real opportunity for change, is underneath.")}</p>
                        <p className='pr'>{t("As a Completion & Calm Strategist, I help individuals understand what’s below their iceberg, build brain-friendly systems that support focus, and use structured accountability to move from avoidance to steady follow-through with more clarity, confidence, and calm.")}</p>
                        <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">{t("Book Coaching Session")}</Button>  {/* Added Bootstrap Button */}
            </div>
            <div className="video-wrapperr">
            <iframe
              width="100%"
              height="615"
          src="https://www.youtube.com/embed/ouZrZa5pLXk?si=04fS9aIvdyf6Lv5g"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '500px',
                width: '100%',
                height: 'auto'
              }}    
            />
            </div>
          </div>
        </div>
        <div>
           <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
           <Button className="custom-btn" href="https://www.decentmed.org/coaching" target="_blank">{t('Find Out How An AHDH Coach Can Help You')}</Button>
           <a href='https://calendly.com/ambernacolle/15-30min' alt="ADHD Iceberg">
            <img className='gridimag' src={adhd} alt='ADHD Iceberg' />
             </a>
        </div>
    </div>
    </div>
    )
}
export default Adhdberg;
