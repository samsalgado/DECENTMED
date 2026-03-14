import React, {useEffect} from 'react';
import "../App.css";
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spectraspray from "../images copy/spectraspray.png";
import chelationgraphicES from '../images copy/IMG_9296.jpeg';
import chelationgraphicNL from '../images copy/IMG_9297.jpeg';
import chelationgraphicHI from '../images copy/IMG_9310.jpeg';
import chelationgraphicFR from '../images copy/IMG_9298.jpeg';
import Collapsible from 'react-collapsible';
import graphic from '../images copy/chelation101.png';
import { Button } from 'react-bootstrap';
import chelationgraphic from '../images copy/chelationgraphic.png';
import chelationbenefits from '../images copy/chelationbenefits.png';
//import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Pgchelation = () => {
  const { t } = useTranslation('common');
   useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
      }, []);
  return (
    <div className='container'>
       <div data-aos="slide-right" className="container-blue">

       <h1 className="logotitle">{t("Chelation")}</h1>
       </div>
                    <div data-aos="slide-right" className="container-blue">

      <img className='gridimag' src={chelationgraphic} alt="Chelation Graphic" />
      {/* Title and Collapsible Content with Table Structure */}
        <div data-aos="slide-right" className="button-container">
              <Button className="custom-btn" href="https://decentmed.org/telehealth" target="_blank">
                {t("Find Providers")}
              </Button>
            </div>
        <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
 <div data-aos="slide-right" className='gridimage'>
              <iframe
              height="515"
              src="https://www.youtube.com/embed/utcEUI2EGyQ?si=fDVB9fC04fWMPR9D"
              title="Patient Acquisition Engine Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                maxWidth: '550px',
                width: '100%',
                height: '400px'
              }}    
            />
            </div>
      <div data-aos="slide-right" className="title-container">

        <table className="collapsibles-table">
          <tbody>
            <tr>
              <th className="collapsible-trigger">
                <Collapsible trigger= {t("Chelation 101 (Heavy Metal Detox)")}>
                  <div className="collapsible-content">
                    <img className='chelation-graphic' src={graphic} alt="Chelation 101" />
                    <img className='chelation-graphic' src={chelationgraphicES} alt="Chelation 101" />
                    <img className='chelation-graphic' src={chelationgraphicNL} alt="Chelation 101" />
                    <img className='chelation-graphic' src={chelationgraphicHI} alt="Chelation 101" />
                    <img className='chelation-graphic' src={chelationgraphicFR} alt="Chelation 101" />
                    <img className='dual' src={chelationbenefits} alt="Chelation Benefits" />
                    <img alt='' />
                  </div>
                </Collapsible>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Pgchelation;
