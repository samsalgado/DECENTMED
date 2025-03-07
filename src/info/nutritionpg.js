import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
import obese from '../images copy/obese.png';
import './Info.css';
import drsebi from '../images copy/drsebi.jpeg';
import { useTranslation } from 'react-i18next';

const Nutritionpage = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container'>
      <h1 className="title">{t('Nutrition')}</h1>
      <iframe width="100%" height="650px" src="https://www.youtube.com/embed/2sZbrRXHJiU?si=kW8BOV3isy3SsQiD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

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
                <img alt='' />
              </tr>
            </Collapsible>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Nutritionpage;
