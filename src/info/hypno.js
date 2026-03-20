import React, {useState, useEffect} from "react";
import './acu.css'; 
import './Info.css';
import { Button,  Modal } from'react-bootstrap';
import Benefits from "./benefits";
import { useTranslation } from "react-i18next";
import Collapsible from 'react-collapsible';
import ss from "../images copy/ss.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ssreview from "../images copy/ssreview.png";
import greenreview from "../images copy/greenreview.png";
import spectraspray from "../images copy/spectraspray.png";
import ReactDOM from 'react-dom';
import Hypnostudies from "./hypnostudy";
const HYPNO = () => {
const {t} = useTranslation('common');
   useEffect(() => {
      AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
    }, []);
  const [showModal, setShowModal] = useState(false);
    return (
      <div className='container mobile-optimized'>
         <div data-aos="slide-right" className="container-blue">
             <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t('Hypnotherapy')}</h1>
  </div>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }} data-aos="slide-right">
         <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }} data-aos="slide-right">
        <div className='content-wrapper' style={{
          flex: '1'
        }} data-aos="slide-right">
          <h1>{t("What is Hypnotherapy?")}</h1>
          <p className='pr'>{t("Hypnotherapy is a therapeutic technique that uses guided hypnosis to help individuals achieve a relaxed, focused state of mind, increasing their suggestibility and enabling them to address various issues. Hypnotherapy helps to break subconscious blocks that arise throughout people's lives. Utilize hypnotherapy to empower yourself and become your optimal YOU.")}</p>
          <h2 className='pr'>{t("Shea Shulman Therapy: Hypnotherapy for Trauma")}</h2>
          <p className='pr'>-{t("Clients are not required to re-live painful or traumatic experiences.")}</p>
          <p className='pr'>-{t("My hypnotherapy methodology creates fast, noticeable change beginning in the very first session.")}</p>
          <p className="pr">-{t("By working directly with the subconscious mind, I help clients eplace trauma, fear, doubt, grief, guilt, shame, stress, and anxiety with strength, certainty, emotional freedom, and the ability to move forward with confidence and happiness.")}</p>
          <p className="pr">-{t("Therapy is healing, restorative, empowering and life-changing")}</p>
          <h2 style={{textAlign:"center"}}>{t("Sports Hypnotherapy")}</h2>
          <p className="pr">{t("Sports Performance Coaching with Donald Pelles, Ph.D., is designed for athletes who want to perform at their highest level, consistently and under pressure. This work focuses on the mental side of performance, where outcomes are often decided.")}</p>
          <p className="pr">{t("Using targeted hypnotherapy and his Empowered Self Framework, Donald helps athletes deliberately access “the zone”, that state of simultaneous focus and relaxation where movement becomes fluid, timing sharpens, and execution feels natural. Through mental rehearsal, state control, and precise internal alignment, athletes strengthen mental toughness, refine technique, and perform with greater ease and consistency.")}</p>
          <p className="pr">{t("Limiting patterns such as hesitation, overthinking, or performance anxiety are resolved at their unconscious source, allowing training to translate more fully into competition. The result is a stronger, more reliable mental game, greater confidence, and the ability to perform with clarity, intensity, and control when it matters most.")}</p>
          <Button className="custom-btn" href="https://decentmed.org/hypnopract" target="_blank">{t("Book Hypnotherapy Session")}</Button>  {/* Added Bootstrap Button */}
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/65_dl3YowUI?si=Z7_t_F15anEquKTu"
          frameBorder="0"
          allowFullScreen
          title="Rumble video player"
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
          }}
        />
        </div>
      </div>
            <Button className="custom-btn" href="https://www.decentmed.org/hypnopract" target="_blank">{t('Find Out How Hypnotherapy Can Help You')}</Button>
      <br></br>
            {showModal && ReactDOM.createPortal(    
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered className="transcriptt-modal">
        <Modal.Header closeButton>
          <Modal.Title >{t("Transcript")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("txt")}</p>
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
      
       <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
    <div data-aos="slide-right" className="container-blue">

            <Collapsible trigger={<h3 className="collapsible-trigger">{t('Shea Shulman Therapy')}</h3>}>
  <div className="row">
     <iframe
              src="https://www.youtube.com/embed/DHsu659Guf0?si=wxdFEzmppJc6QqyJ"
              title='Hypnotherapy for Trauma'
              allow="autoplay"
              width="900"
              height="506"
              allowFullScreen
            />
              <iframe
              src="https://www.youtube.com/embed/NHyLltg_8_U?si=brtFn2UwCzmUDyGE"
              title='Hypnotherapy for Trauma'
              allow="autoplay"
              width="900"
              height="506"
              allowFullScreen
            />
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:+19415879198">
        <img src={ssreview} className="gridimage" alt="Shea Shulman Therapy Review" />
      </a>
      
    </div>
    
  </div>
     <img className='gridimage' src={ss} alt='SHEA SHULMAN THERAPY' />
</Collapsible>
  <Collapsible trigger={<h3 className="collapsible-trigger">{t('Green Hypnotherapy')}</h3>}>
  <div className="row">
     <iframe
              src="https://www.youtube.com/embed/Bab0AX_GRQw?si=_9GuTnJVa3PtVXal"
              title='Green Hypnotherapy'
              allow="autoplay"
              width="900"
              height="506"
              allowFullScreen
            />
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:+18134856761">
        <img src={greenreview} alt="Green Hypnotherapy Review" style={{
          width: '100%',
          maxWidth: '550px',
          height: 'auto',
          objectFit:'fill'
        }} />
      </a>
    </div>
  </div>
</Collapsible>
        <br></br>
        <div className="row justify-content-center">
        <h2 style={{textAlign:"center"}}>{t("Executive Performance Coaching")}</h2>
        <p className="per">{t("Executive Performance Coaching with Donald Pelles, Ph.D., is designed for leaders, entrepreneurs, and high-level professionals who expect to perform at their best when it matters most. This work goes beyond strategy and skill-building, focusing instead on the internal conditions that drive consistent, high-level execution.")}</p>
        <p className="per">{t("Through his Empowered Self Framework, Donald helps clients access a state of calm focus, clarity, and precision, the kind of state where decision-making sharpens, communication lands cleanly, and performance becomes reliable under pressure. Internal interference such as hesitation, overthinking, or loss of focus is resolved at its source, allowing for a more natural, effective way of operating.")}</p>
        <p className="per">{t("The result is not just improved performance, but a quieter mind, stronger presence, and the ability to meet high-stakes moments with confidence and control.")}</p>
        </div>
        <Benefits />
        <br></br> 
        <Collapsible trigger={<th className="collapsible-trigger">{t("Hypnotherapy Case Study")}</th>}>
        <Hypnostudies />
        <Button className="custom-btn" href="https://themerlingroupworld.com/hypnopract" target="_blank">{t("Book Hypnotherapy Session")}</Button>  {/* Added Bootstrap Button */}
        </Collapsible>
        </div>
        </div>
    )
}
export default HYPNO;
