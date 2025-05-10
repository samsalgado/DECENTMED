import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
import obese from '../images copy/obese.png';
import labs from '../images copy/8.jpg';
import brain from '../images copy/9.jpg';
import './Info.css';
import drSebiES from '../images copy/IMG_9273.jpeg';
import NUTES from '../images copy/IMG_9306.jpeg';
import NUTFR from '../images copy/IMG_9307.jpeg';
import NUTNL from '../images copy/IMG_9308.jpeg';
import NUTHindi from '../images copy/IMG_9309.jpeg';
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
    <div className='container'>
      <h1 className="title">{t('Nutrition')}</h1>
      <iframe width="100%" height="650px" src="https://www.youtube.com/embed/0k7Nm4Z8Z2Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

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
  )
}

export default Nutritionpage;
