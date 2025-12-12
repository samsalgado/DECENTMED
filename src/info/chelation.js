import React from 'react';
import "../App.css";
import './Info.css';
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

  return (
    <div className='container'>
       <h1 style={{
    textDecoration: 'underline',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '4.5rem',
    paddingTop: '3rem'
  }}>{t("Chelation")}</h1>
      <img className='gridimag' src={chelationgraphic} alt="Chelation Graphic" />
      {/* Title and Collapsible Content with Table Structure */}
        <div className="button-container">
              <Button className="custom-btn" href="https://decentmed.org/telehealth" target="_blank">
                {t("Find Providers")}
              </Button>
            </div>
      

      <div className="title-container">

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
  );
}

export default Pgchelation;
