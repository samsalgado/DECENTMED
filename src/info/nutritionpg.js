import React from 'react';
import "../App.css";
import Collapsible from 'react-collapsible';
import obese from '../images copy/obese.png';
import labs from '../images copy/8.jpg';
import brain from '../images copy/9.jpg';
import './Info.css';
import { Button } from 'react-bootstrap';
import drSebiES from '../images copy/IMG_9273.jpeg';
import NUTES from '../images copy/IMG_9306.jpeg';
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
      <h1 className="title">{t('Nutrition')}</h1>
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
          <p className='pr'>{t("If you are searching nutritionist near me, look no further than our holistic nutritionists offering traditional and alkaline diet recipes to reach your optimal self. For example, our nutritionists assist clients with the best plans rich in B vitamins, vitamin D, vitamin C and more. We provide nutritionists for a wide range of people, Lori Graham is a former OT and a functional nutritionist who helps menopausal women lower their blood sugar and reduce menopausal symptoms.")}</p>
            <Button variant="primary" href="https://themerlingroupworld.com/nutritionpract" target="_blank">
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
