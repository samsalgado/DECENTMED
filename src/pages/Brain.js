import React, {useState, useEffect} from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import product from "../images copy/miracles.png";
import Collapsible from 'react-collapsible';
import { Button, Modal } from'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import B from "./B";
import spectraspray from "../images copy/spectraspray.png";
import { Helmet } from "react-helmet";
import Topbar from "./topbar";
import Footer from "../footer";
import ts1 from  "../images copy/ts1.png";
import b0 from "../images copy/b0.png";
import b1 from "../images copy/b1.png";
import b2 from "../images copy/b2.png";
import b3 from "../images copy/b3.png";
import b4 from "../images copy/b4.png";
import b5 from "../images copy/b5.png";
import b6 from "../images copy/b6.png";
import ts2 from  "../images copy/ts3.png";
import ts4 from  "../images copy/ts4.png";
import ts5 from "../images copy/Screenshot 2026-07-20 at 6.48.42 PM.png";
import ts from  "../images copy/ts.png";
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
export default function Brain () {
const {t} = useTranslation('common');
const [showModal, setShowModal] = useState(false);
const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
   useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
      }, []);    
    return (
         <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
                <Helmet>  {/* Add Helmet component */}
                    <title>{t("Emotional Brain Training")}</title>
                <meta property="og:title" content={t('Emotional Brain Training')} />                
                <meta name="description" content={t("Experience Intuitive Energy Healing")} />
                    <meta name="description" content={t("Seeking Energy Healing near me? Experience intuitive energy healing from around the world.")} />
                </Helmet>
                <header>
                    <Topbar />
                </header>
                   <div data-aos="slide-left" className="container-blue">

 <h1 className="logotitle">{t("Emotional Brain Training")}</h1>
 </div>
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
    gap: '20px',
    maxWidth: '1200px',
    width: '100%'
  }}>
    <div className='content-wrapper' style={{
      flex: '1',
      minWidth: '300px'
    }} data-aos="slide-right">
      <h2>{t("What is Emotional Brain Training?")}</h2>
      <p className='pr'>{t("I work with people recovering from brain injuries (from accidents, falls, stroke, etc.), living with chronic headaches or migraines, or experiencing changes in focus, memory, and mental clarity. My approach, The Witnessed Body™, combines intuitive sound healing with Combat Brain Training, a neuroplasticity-based system developed by neuroplastician John Kennedy with support from the U.S. military. One works at the structural level by training the brain to focus and rewire, while the other helps release what the brain and body may be holding at the energetic level. Conventional treatment often helps structurally but doesn't always reach what remains underneath. By addressing both levels together, I've seen changes become possible that structural work alone could not achieve.")}</p>
      <p className='pr'>{t("My work focus is sensing where energy in the brain and body is stuck or moving, then helping that energy move. That movement is what facilitates function returning. I perceive what someone's brain and body are holding through sight, feeling, and knowing, and I work with it in real time, alongside targeted neuroplasticity training. Sessions are conducted remotely, and many clients notice a shift as early as the first session. This work supports the brain and body's own capacity to heal. It works alongside medical care, not in place of it.")}</p>
      <div>
        <h2>{t("Emotional Brain Training Breakdown")}</h2>
                    <p className='pr'>{t("Support for brain injury recovery that goes beyond symptom management, addressing what is held at both the structural and energetic level. Sessions conducted entirely remotely, so location is never a barrier to care. A personalized, layered approach. No two sessions look the same, because no two bodies are holding the same thing. Many clients notice results as early as the first session. A credentialed foundation. Combat Brain Training was developed with US military support and brings a documented, targeted neuroplasticity framework to the work Nearly 40 years of experience understanding how injury, stress, and suppressed patterns show up in the body Works alongside medical care rather than replacing it.")}</p>
                    <p className="pr">{t("The goal is not to tell people what is true for them, but to help them access their own deeper knowing and understanding.")}</p>
      </div>
      <Button className="custom-btn" href="https://wwww.shinewithsandra.com/cc" target="_blank">{t("Book Sound Healing Session")}</Button>
    </div>
    <div style={{
      flex: '1',
      minWidth: '400px',
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }}>
      
      <iframe 
        src="https://www.youtube.com/embed/WeLWZR4FRak?si=SvSFUK6CXWVX0h9Q" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        title="Embed recording" 
        allowFullScreen 
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0px",
          top: "0px",
          overflow: "hidden"
        }}
      />
     
    </div>
  </div>
  
</div>     
<a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/k1xiB5xFrqQ?si=QgSv5ucYcmlbs2Xt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<div data-aos="slide-right" className="container-blue">
  <Collapsible
    trigger={
      <div className="collapsible-trigger">
        {t('Emotional Brain Training Reviews')}
      </div>
    }
  >
    <B />
  </Collapsible>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/_q0sEC3gkWU?si=oXAbuUgszceZqsnF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br></br>
                  {showModal && ReactDOM.createPortal(               
                  <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="transcriptt-modal">
                <Modal.Header closeButton>
                  <Modal.Title>{t("Transcript")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    {t("Close")}
                  </Button>
                </Modal.Footer>
              </Modal>,
              document.body)}

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
            <Collapsible trigger={<th className="collapsible-triggger">{t('Emotional Brain Training Case Study')}</th>}>
              <tr>
                <img className='gridimage' src={ts} alt='Emotional Brain Training Case Study' />
                  <img className='gridimage' src={ts1} alt='Emotional Brain Training Case Study' />
                  <img className='gridimage' src={ts2} alt='Emotional Brain Training Case Study' />
                  <img className='gridimage' src={ts4} alt='Emotional Brain Training Case Study' />
                  <img className='gridimage' src={ts5} alt='Emotional Brain Training Case Study' />
              </tr>
        </Collapsible>
             <Collapsible trigger={<th className="collapsible-triggger">{t('Emotional Brain Training Case Study 2')}</th>}>
              <tr>
                <img className='gridimag' src={b0} alt='Emotional Brain Training Case Study' />
                  <img className='gridimag' src={b1} alt='Emotional Brain Training Case Study' />
                  <img className='gridimag' src={b2} alt='Emotional Brain Training Case Study' />
                <img className='gridimag' src={b3} alt='Emotional Brain Training Case Study' />
                  <img className='gridimag' src={b4} alt='Emotional Brain Training Case Study' />
                  <img className='gridimag' src={b5} alt='Emotional Brain Training Case Study' />
                <img className='gridimag' src={b6} alt='Emotional Brain Training Case Study' />
              </tr>
        </Collapsible>
        <br></br>
           <a href="https://shinewithsandra.com/brainstory">
                <img className='gridimag' src={product} alt='Emotional Brain Training' />
                <figcaption>{t("Contact")}</figcaption>
                </a>
        <br></br>
          <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
          </Button> 
               <footer>
              <Footer />
            </footer>
 </div>
        </div>
    )
}
