import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; 
import { FaChevronDown } from 'react-icons/fa'; // Importing icon
import './Info.css';
import graphic from '../images copy/IMG_7976.jpeg';
import graphic2 from '../images copy/IMG_7978.jpeg';
import graphic3 from '../images copy/IMG_7979.jpeg';
import graphic4 from '../images copy/IMG_7980.jpeg';
import graphic5 from '../images copy/IMG_7981.jpeg';
import graphic6 from '../images copy/IMG_7977.jpeg';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const { t } = useTranslation('common')
  return (
<div className="title-container">
<table className="collapsibles-table">
  <tbody>
    <Collapsible 
      trigger={
        <th className="collapsible-trigger">
          {t("Client Reviews")} <FaChevronDown className="icon" />
        </th>
      }
    >
            <img className="gridimag" src={graphic2} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={graphic3} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={graphic4} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={graphic5} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={graphic} alt="Bone Marrow Stem Cell Benefits" />
      <img className="gridimag" src={graphic6} alt="Bone Marrow Stem Cell Benefits" />
      <img alt='' />
    </Collapsible>
  </tbody>
</table>
</div>
  )
}
export default Reviews;
