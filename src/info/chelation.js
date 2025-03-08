import React from 'react';
import "../App.css";
import './Info.css';
import Collapsible from 'react-collapsible';
import graphic from '../images copy/chelation101.png';
import chelationgraphic from '../images copy/chelationgraphic.png';
import chelationbenefits from '../images copy/chelationbenefits.png';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Pgchelation = () => {
  const { t } = useTranslation('common');

  return (
    <div className='container'>
      <h1 className='title'>{t("Chelation")}</h1>

      {/* YouTube Video */}
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/MLNGwB26M5k?si=mC7cdIxG3bRR8RQ9"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* Button Container - Centering and Stacking */}
      <div className="button-container">
        <Button variant="primary" href="http://crossroadsnaturopathic.com/" target="_blank">
          {t("Visit Crossroads Naturopathic")}
        </Button>
      </div>

      {/* Title and Collapsible Content with Table Structure */}
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <tr>
              <th className="collapsible-trigger">
                <Collapsible trigger={t("Chelation 101 (Heavy Metal Detox)")}>
                  <div className="collapsible-content">
                    <img className='chelation-graphic' src={graphic} alt="Chelation 101" />
                    <img className='gridimag' src={chelationgraphic} alt="Chelation Graphic" />
                    <img className='dual' src={chelationbenefits} alt="Chelation Benefits" />
                    <img />
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
