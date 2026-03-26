import React, {useEffect} from 'react';
import ImageGrid from './ImageGrid';
import "./stem.css"; 
import { Button } from 'react-bootstrap';
import './Info.css';
import Reviews from '../info/reviews';
import OurPlan from "../cards/Our Plan.png";
import AOS from 'aos';
import stats from "../images copy/Screenshot 2026-03-21 at 10.58.45 AM.png";
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const Providers = () => {
  const { t } = useTranslation('common')
   const learnmore = () => {
    window.location.href = 'https://cal.com/merlin-ayx5zg/30min'
  } 
  useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
      }, []);
  return (
    <>
  <div data-aos="slide-right" className="container-blue">
<h1 className='logotitle' style={{ display: 'flex', marginTop: '120px', textAlign: 'center' }}>
        {t('Turn Your Expertise Into a Steady Flow of Paying Clients')}
      </h1>
        <div data-aos="slide-right" className="container-blue">
            <img className='gridimag' src={OurPlan} alt='spectra spray' />
        <Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
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
      <div className='container-blue' data-aos="slide-right">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uOb-h9NLqKc?si=SrrlhrlhY2udLoGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
             </div>
      <div data-aos="slide-right" className="container-blue">
 <div className="row justify-content-center">
        <h1 style={{textAlign:"center"}}>{t("How We Transform Your Business")}</h1>
        <h5 className="per">{t("At DecentMed, we post provider educational content, studies and testimonials on a decentralized network in order to combat censorship, validate the effectiveness of your work and increase patient acquisition. Providers on our platform can access additional revenue streams through annual payouts from our Apothecary, Affiliate Programs, and Content Library.")}</h5>
        <Button onClick={learnmore} target='_blank' className="custom-btn">
          {t('Book Meeting')}
        </Button> 
        </div>
        <ImageGrid />
        <br />
         <Button onClick={learnmore} className="custom-btn">
          {t('Book Meeting')}
        </Button> 
<div className='container mobile-optimized'>
       <div data-aos="slide-right" className="container-blue">
      <h1 className="logotitle">{t("Who Is DecentMed For?")}</h1>
      </div>
      <div data-aos="slide-right" className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div data-aos="slide-right" className='content-wrapper' style={{
          flex: '1'
        }}>
          <p className="pr">{t("DecentMed is designed for providers that want more patients without having to do networking or pay consistently for marketing. Holistic providers and coaches that have expertise in their field: testimonials, case studies and more that demonstrate their expertise. Finally, our platform is designed to grow the market share of holistic medicine - providing annual payouts from our content library, apothecary and affiliate programs to establish an additional revenue stream for providers and coaches.")}</p>
          <br></br>
          <Button className="custom-btn" href="https://cal.com/merlin-ayx5zg/30min" target="_blank">
            {t("Book Meeting")}
          </Button>
        </div>
        <div><img src={stats} className="gridimage" alt="logo" style={{
          maxWidth: '400px',
          width: '100%',
          height: 'auto'
        }} /></div>
        </div>
        </div>
      {/* Flex container for equal width collapsibles */}
      <div className="collapsible-section">
        <div className="title-container">
        <Reviews />
        </div>
      </div>
      </div>
      </>
  );
}

export default Providers;

