import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import acuneed from "../../images copy/acuneed.png";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
const Blog2 = () => {
const {t} = useTranslation('common')
  return (
        <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>

      <Helmet>
        <title>{t('Dry Needling vs Acupuncture')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dry needling vs acupuncture: Acupuncture is a technique for balancing the flow of energy, or life force flowing through pathways in your body. Dry needling serves a purpose for musculoskeletal disorders and diseases." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t('Dry Needling vs Acupuncture')}</h1>
          <img className='gridimag' src={acuneed} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
            <p>
            {t(`Acupuncture is a technique for balancing the flow of energy, or life force flowing through pathways in your body. Via little insertions, acupuncture works with the body's connective tissue to alter brain chemistry. The major purpose of acupuncture is pain management. 'Increased blood flow equals increased healing time'. If an athlete has a prolonged injury or partial tear, they can opt for dry needling and ultrasound therapy as an alternative to steroids. Acupuncturists use more than one technique, dry needling does not directly go into the skin, instead working with the infected area. Another route is acupressure, a manual pressure used instead of fine-needling. Another approach is cupping, an alternative treatment using suction cups to stimulate skin and muscles.`)}
            </p>
            <br></br>
            <div className='video-container'>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/cJIHng7oaWM?si=zzIkenFP5H3l6ahb"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
           <p>
        {t(`Dry needling serves a purpose for musculoskeletal disorders and diseases, working to relieve the trigger point symptom. Unlike Traditional Chinese medicine, dry needles work with the body's anatomy. There are two types - pistoning (insertion directly into the trigger point) and muscle contraction (insertion directly into the skin). This technique is used more for pain and stiffness of the muscles. Regardless, dry needling and acupuncture are both considered safe via a practitioner.`)}
      </p>
      <p>
        {t(`Acupuncture works to increase blood flow, reduce inflammation, and does not alter your brain chemistry or have side effects like pharmaceuticals. Pharmaceuticals disrupt your brain chemistry and do not work with your brain's pathways.`)}
      </p>
          </div>
               <Button 
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
        }}
        className="custom-btn"
        href="https://decentmed.org/acupuncture" 
        target="_blank"
      >
        {t("Try Acupuncture")}
      </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Blog2; // Default export
