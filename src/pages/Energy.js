import React, {useState, useEffect} from "react";
import '../info/acu.css'; 
import '../info/Info.css';
import product from "../images copy/reviewss.png";
import Collapsible from 'react-collapsible';
import { Button, Modal } from'react-bootstrap';
import EsBenefits from "./eben";
import AOS from 'aos';
import 'aos/dist/aos.css';
import spectraspray from "../images copy/spectraspray.png";
import { Helmet } from "react-helmet";
import Topbar from "./topbar";
import Footer from "../footer";
import thc2 from  "../images copy/thc2.png";
import thc4 from  "../images copy/thc4.png";
import thc6 from  "../images copy/thc6.png";
import thc7 from  "../images copy/thc7.png";
import thc8 from  "../images copy/thc8.png";
import thc9 from  "../images copy/thc9.png";
import thc5 from "../images copy/thc5.png";
import thc1 from  "../images copy/thc1.png";
import thc3 from  "../images copy/thc3.png";
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
export default function Energy () {
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
                    <title>{t("Intuitive Energy Healing")}</title>
                <meta property="og:title" content={t('Intuitive Energy Healing')} />                
                <meta name="description" content={t("Experience Intuitive Energy Healing")} />
                    <meta name="description" content={t("Seeking Energy Healing near me? Experience intuitive energy healing from around the world.")} />
                </Helmet>
                <header>
                    <Topbar />
                </header>
                   <div data-aos="slide-left" className="container-blue">

 <h1 className="logotitle">{t("Energy Healing")}</h1>
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
      <h2>{t("Tap into Remote Energy Healing")}</h2>
      <p className='pr'>-{t("Helps alleviate physical pain")}</p>
      <p className='pr'>-{t("Navigation through emotional distress")}</p>
      <p className='pr'>-{t("Clears monkey mind (anxiety) of the mind")}</p>
      <p className='pr'>-{t("Clearing major generational, conditions and illnesses")}</p>
      <h2>{t("Reiki healing for chronic fear and anxiety")}</h2>
            <p className='pr'>{t("Reiki is a Japanese energy-based therapeutic technique used to support relaxation, reduce stress, and assist the body’s natural healing processes.")}</p>
            <p className='pr'>{t("The word Reiki comes from two Japanese terms: Rei, meaning 'higher wisdom' or 'universal intelligence', and Ki, meaning 'life force energy'. Together, Reiki refers to universal life energy.")}</p>
            <p className='pr'>{t("During a session, a practitioner places their hands lightly on or just above specific areas of the body with the intention of supporting energetic balance. Reiki is believed to help regulate the nervous system, reduce physiological stress responses, and promote a state of deep relaxation. Many individuals report improved emotional balance, decreased anxiety, better sleep, and an overall sense of well-being following sessions.")}</p>
      <Button className="custom-btn" href="https://www.decentmed.org/energyhealers" target="_blank">{t("Try Energy Healing")}</Button>
        <iframe height="200px" width="100%" frameborder="no" scrolling="no" title="Stacy Theodossin DD" seamless src="https://player.simplecast.com/7c3a0915-ba46-4d06-93d8-b423a4de2039?dark=false"></iframe>

    </div>
    <div style={{
      flex: '1',
      minWidth: '400px',
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }}>
      
      <iframe 
        src="https://www.youtube.com/embed/BGjJ4usFVXo" 
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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RoNbOhrSAMc?si=VDkJwYAwDABiU2Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dmw4nDIS3ac?si=facb93zUWm9dOjDq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
<div data-aos="slide-right" className="container-blue">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/iA3DmEqtO1E?si=I8Tavmfvjo6x3_6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CTmY6wEpTdA?si=1aGXOoQ7jGXH2Ub6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/nxlKG_b3W80?si=aaLnoaO8yAj9XXIF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ugSZ9oeYm8c?si=bgDwSaZPqgYuXu9e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
            <Collapsible trigger={<th className="collapsible-triggger">{t('Energy Healing Education')}</th>}>
              <tr>
                <img className='gridimage' src={thc1} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc2} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc3} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc4} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc5} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc6} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc7} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc8} alt='Energy Healer near me' />
                  <img className='gridimage' src={thc9} alt='Energy Healer near me' />
              </tr>
        </Collapsible>
        <br></br>
           <a href="tel:+13163935162">
                <img className='gridimag' src={product} alt='The Flow of Feeling: Honoring Your Emotions at Work & in Life' />
                <figcaption>{t("Contact")}</figcaption>
                </a>
        <br></br>
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
       <div className="row justify-content-center">
        <h2 style={{textAlign:"center"}}>{t("Benefits of Quantum Energy Healing Techniques")}</h2>
        <p className="per">1. {t("DNA Transformation on a cellular level for enhanced immune system function")}</p>
        <p className="per">2. {t("Reset your Biofield")}</p>
        <p className="per">3. {t("Expansion in consciousness")}</p>
        <p className="per">4. {t("Whole Body Healing")}</p>
        <p className="per">5. {t("Chemical free living")}</p>
        <p className="per">6. {t("Integrate body, mind, spirit as Multidimensional being")}</p>
        <p className="per">7. {t("Become your best self and biohack your life")}</p>
        <p className="per">8. {t("New Earth Wayshower")}</p>
        </div>
    </div>
     <div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/04ojko4ZzvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
          <Button className="custom-btn" href="https://calendly.com/mgreenan89/30min" target="_blank">{t("Try Quantum Energy Healing")}</Button>
        <div data-aos="slide-right">
        <EsBenefits />
        </div>
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
