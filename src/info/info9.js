import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefitts from "./benefitts";
import dyn from "../images copy/dyn.jpg";
import { useTranslation } from "react-i18next";
const Info9 = () => {
const {t} = useTranslation('common')
    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Mindset Coaching')}</h1>
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
          <p className="pr"><h2>{t("Mindset Coaching")}</h2></p>
          <p className='pr'>{t("A mindset coach helps you with getting a deeper understanding of who you really are. Try a mindset coach that can help you learn the science of achievement and the science of the mind so that you can create change at the root cause which lasts.")}</p>
          <p className="pr">{t("I’m Priscilla, a mindset coach passionate about helping individuals and entrepreneurs understand the transformative power of their mindset and how it directly impacts their results in all areas of their life so they can create their lives by design.")}</p>
          <p className="pr">{t("Why I’m so passionate about this, because I was stuck for years with personal and professional results that I did not like and couldn’t seem to change. My greatest pain was an almost 7 year journey to having a healthy baby with 3 losses along the way. I’m blessed to now be a mum to an amazing 2 year old boy!")}</p>
          <p className="pr">{t("What turned everything around for me was mentorship. I got to understand that the reason so many things in my life weren’t working was because I didn’t know who I really am and sadly I didn’t love or value myself and had many limiting beliefs holding me back from what I desired and my results were a reflection of that. Through mentorship I got to understand who I am, what I really want, how to shift habits and beliefs that weren’t serving me and most importantly, I truly fell in love with me for the first time in my life. As a result of my life turning around so beautifully, I trained under my mentor to be able to teach others the phenomenal material which changed my life and that’s what I do now.")}</p>
        <Button className="custom-btn" href="https://decentmed.org/coaching" target="_blank">
         {t("Try Coaching")}
        </Button>        
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/ya7yJQAjhi8?si=bDZPQpX5ROFThuv1"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          style={{
            maxWidth: '450px',
            width: '100%',
            height: '350px'
          }}
        />
        </div>
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
     <a href="https://source.dynamitelifestyle.com/the-source-code-challenge/priscilla-wmk" target="_blank" rel="noopener noreferrer">
      <figure>
          <img className='gridimag' src={dyn} alt='21 Day Challenge' />
        <figcaption>{t("Join 21 Day Challenge")}</figcaption>
        </figure>
        </a> 
        <br></br>
        <Benefitts />
        </div>
    )
}
export default Info9;
