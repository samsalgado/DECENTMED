import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; 
import { FaChevronDown } from 'react-icons/fa'; // Importing icon
import './Info.css';
import graphic6 from '../images copy/IMG_7977.jpeg';
import newreview from '../images copy/newreview.png';
import newreviews from '../images copy/newonw.png';
import lori from '../images copy/IMG_9733.jpg';
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
             <img className="gridimag" src={newreviews} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={lori} alt="Bone Marrow Stem Cell Benefits" />
            <img className="gridimag" src={newreview} alt="Testimonial" />
            <img className="gridimag" src={graphic6} alt="Bone Marrow Stem Cell Benefits" />
            <img alt='' />
    </Collapsible>
  </tbody>
</table>
</div>
  )
}
export default Reviews;
