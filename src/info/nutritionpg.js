import React from 'react';
import "../App.css";
import Collapsible from 'react-collapsible';
import obese from '../images copy/obese.png';
import labs from '../images copy/8.jpg';
import brain from '../images copy/9.jpg';
import './Info.css';
import NutritionVids from '../info/nutritionvids';
import { Button } from 'react-bootstrap';
import drSebiES from '../images copy/IMG_9273.jpeg';
import NUTES from '../images copy/IMG_9306.jpeg';
import L1 from '../images copy/L1.png';
import L2 from '../images copy/L2.png';
import L3 from '../images copy/L3.png';
import L4 from '../images copy/L4.png';
import L5 from '../images copy/L5.png';
import L6 from '../images copy/L6.png';
import L7 from '../images copy/L7.png';
import L8 from '../images copy/L8.png';
import L9 from '../images copy/L9.png';
import L10 from '../images copy/L10.png';
import L11 from '../images copy/L11.png';
import L12 from '../images copy/L12.png';
import L13 from '../images copy/L13.png';
import L14 from '../images copy/L14.png';
import L15 from '../images copy/L15.png';
import L16 from '../images copy/L16.png';
import L17 from '../images copy/L7.png';
import L18 from '../images copy/L18.png';
import L19 from '../images copy/L19.png';
import L20 from '../images copy/L20.png';
import L21 from '../images copy/L21.png';
import L22 from '../images copy/L22.png';
import L23 from '../images copy/L23.png';
import L24 from '../images copy/L24.png';
import L25 from '../images copy/L25.png';
import L26 from '../images copy/L26.png';
import L27 from '../images copy/L27.png';
import L28 from '../images copy/L28.png';
import L29 from '../images copy/L29.png';
import L30 from '../images copy/L30.png';
import L31 from '../images copy/L31.png';
import L32 from '../images copy/L32.png';
import L33 from '../images copy/L33.png';
import L34 from '../images copy/L34.png';
import L35 from '../images copy/L35.png';
import L36 from '../images copy/L36.png';
import NUTFR from '../images copy/IMG_9307.jpeg';
import NUTNL from '../images copy/IMG_9308.jpeg';
import NUTHindi from '../images copy/IMG_9309.jpeg';
import case1 from '../images copy/nutritioncase1.png';
import case2 from '../images copy/nutritioncase2.png';
import case3 from '../images copy/nutritioncase3.png';
import case4 from '../images copy/nutritioncase4.png';
import case5 from '../images copy/nutritioncase5.png';
import case6 from '../images copy/nutritioncase6.png';
import case7 from '../images copy/nutritioncase7.png';
import case8 from '../images copy/CASE8.png';
import case9 from '../images copy/nutritioncase9.png';
import case10 from '../images copy/nutritioncase10.png';
import drSebiHindi from '../images copy/IMG_9274.jpeg';
import drSebINT from '../images copy/IMG_9275.jpeg';
import drSebiFrench from '../images copy/IMG_9276.jpeg';
import cogES from '../images copy/IMG_9277.jpeg'; 
import cogFR from '../images copy/IMG_9278.jpeg'; 
import drsebi from '../images copy/drsebi.jpeg';
import { useTranslation } from 'react-i18next';
import cogDutch from '../images copy/IMG_9279.jpeg';
import cogHindi from '../images copy/IMG_9280.jpeg';
const Nutritionpage = () => {
  const { t } = useTranslation("common");
  return (
    <div className='container mobile-optimized'>
      <h1 className="title" style={{ display: 'flex', marginTop: '120px', textAlign: 'center' }}>{t('Nutrition')}</h1>
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
          <p className='pr'>{t("If you are searching nutritionist near me, look no further than our holistic nutritionists offering traditional and alkaline diet recipes to reach your optimal self. For example, our nutritionists assist clients with the best plans rich in B vitamins, vitamin D, vitamin C and more. We provide nutritionists for a wide range of people, Lori Graham is a former OT and a functional nutritionist who helps menopausal women lower their blood sugar and reduce menopausal symptoms.")}</p>
            <h3>{t("Nutrition for Longevity")}</h3>
            <a href="https://www.nutrifyourlife.com/blog/an-understanding-of-aging-and-supplement-absorption"><h5>{t("Your Absorption Optimization Action Plan")}</h5></a>
              <p className='pr'>{t("- Test, Don't Guess: Comprehensive micronutrient and genetic testing")}</p>
              <p className='pr'>{t("- Address the Foundation: Optimize stomach acid and gut health")}</p>
              <p className='pr'>{t("- Personalize Your Protocol: Choose forms and doses based on YOUR genetics and deficiencies")}</p>
              <p className='pr'>{t("- Monitor and Adjust: Regular testing to track improvements and refine protocols")}</p>
            <Button className="custom-btn" href="https://decentmed.org/nutritionpract" target="_blank">
                {t("Find Providers")}
              </Button>
        </div>
      <iframe 
      width="100%" 
      height="650px" 
      src="https://rumble.com/embed/v6skowd/?pub=4hu51y" 
      title="Video player" 
      allow="autoplay" 
      allowFullScreen
      style={{
        maxWidth: '400px',
        width: '100%',
        height: 'auto'
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
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Obesity Facts')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={obese} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Dr. Sebi Food List')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={drsebi} alt='' />
                <img className='gridimage' src={drSebiFrench} alt='' />
                <img className='gridimage' src={drSebINT} alt='' />
                <img className='gridimage' src={drSebiHindi} alt='' />
                <img className='gridimage' src={drSebiES} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Clinical Nutritionist')}</th>}>
             <NutritionVids />
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Longevity Health Plan')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={L1} alt='' />
                <img className='gridimage' src={L2} alt='' />
                <img className='gridimage' src={L3} alt='' />
                <img className='gridimage' src={L4} alt='' />
                <img className='gridimage' src={L5} alt='' />
                <img className='gridimage' src={L6} alt='' />
                <img className='gridimage' src={L7} alt='' />
                <img className='gridimage' src={L8} alt='' />
                <img className='gridimage' src={L9} alt='' />
                <img className='gridimage' src={L10} alt='' />
                <img className='gridimage' src={L11} alt='' />
                <img className='gridimage' src={L12} alt='' />
                <img className='gridimage' src={L13} alt='' />
                <img className='gridimage' src={L14} alt='' />
                <img className='gridimage' src={L15} alt='' />
                <img className='gridimage' src={L16} alt='' />
                <img className='gridimage' src={L17} alt='' />
                <img className='gridimage' src={L18} alt='' />
                <img className='gridimage' src={L19} alt='' />
                <img className='gridimage' src={L20} alt='' />
                <img className='gridimage' src={L21} alt='' />
                <img className='gridimage' src={L22} alt='' />
                <img className='gridimage' src={L23} alt='' />
                <img className='gridimage' src={L24} alt='' />
                <img className='gridimage' src={L25} alt='' />
                <img className='gridimage' src={L26} alt='' />
                <img className='gridimage' src={L27} alt='' />
                <img className='gridimage' src={L28} alt='' />
                <img className='gridimage' src={L29} alt='' />
                <img className='gridimage' src={L30} alt='' />
                <img className='gridimage' src={L31} alt='' />
                <img className='gridimage' src={L32} alt='' />
                <img className='gridimage' src={L33} alt='' />
                <img className='gridimage' src={L34} alt='' />
                <img className='gridimage' src={L35} alt='' />
                <img className='gridimage' src={L36} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Case Studies')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={case1} alt='' />
                <img className='gridimage' src={case2} alt='' />
                <img className='gridimage' src={case3} alt='' />
                <img className='gridimage' src={case4} alt='' />
                <img className='gridimage' src={case5} alt='' />
                <img className='gridimage' src={case6} alt='' />
                <img className='gridimage' src={case7} alt='' />
                <img className='gridimage' src={case8} alt='' />
                <img className='gridimage' src={case9} alt='' />
                <img className='gridimage' src={case10} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Functional Nutrition Resources')}</th>}>
            <div className="collapsible-content">
  <img className='griddimage' src={labs} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={brain} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={cogHindi} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={cogDutch} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={cogFR} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={cogES} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={NUTHindi} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={NUTNL} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={NUTFR} alt="Functional Nutrition Resources"/>
  <img className='griddimage' src={NUTES} alt="Functional Nutrition Resources"/>
  <img alt='' />
</div>            
</Collapsible>                   
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Nutritionpage;
