
import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; // Adjusted path for CSS
import { FaChevronDown } from 'react-icons/fa'; // Importing icon
import ryantannehill from '../images copy/ryantannehillgraphic.png';
import jamaalcharles from '../images copy/JamaalCharles.png';
import whystemcell from '../images copy/whystemcell.png';
import whatisastemcell from '../images copy/what-is-a-stem-cell-illustration.jpg';
import stembenefits from '../images copy/stembenefits.png';
import './Info.css';
import stemtype from '../images copy/stem-type.jpg';
import graphic from '../images copy/Pink-Illustrative-Simple-Healthy-Habits-Infographic.jpeg';
import { useTranslation } from 'react-i18next';

const Stem = () => {
  const { t } = useTranslation('common')

  return (
    <div className='container'>
      <h1 className='title'>{t('Stem Cell Therapy')}</h1>

      {/* Responsive Video */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/AWyJ0Ek-dsE?si=mPK1R_JCMuTvWh6c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Flex container for equal width collapsibles */}
      <div className="collapsible-section">
        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Stem Cell Therapy Explained")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img src={stembenefits} className="gridimag" alt="Stem cell benefits" />
                <img className='gridimag' src={whatisastemcell} alt='What is a stem cell' />
                <img className='gridimag' src={stemtype} alt='Stem cell types' />
                <img className='gridimag' src={whystemcell} alt='Why stem cell' />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>

        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Benefits of Bone Marrow Stem Cells")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img className="gridimag" src={graphic} alt="Bone Marrow Stem Cell Benefits" />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>

        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Stem Cell Therapy NFL Case Studies")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img src={ryantannehill} className="gridimag" alt="Ryan Tannehill" />
                <img src={jamaalcharles} className="gridimag" alt="Jamaal Charles" />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stem;
