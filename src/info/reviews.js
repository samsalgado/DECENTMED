import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; 
import { FaChevronDown } from 'react-icons/fa'; // Importing icon
import './Info.css';
import { Button } from 'react-bootstrap';
import graphic6 from '../images copy/IMG_7977.jpeg';
import newreview from '../images copy/newreview.png';
import newreviews from '../images copy/newonw.png';
import lori from '../images copy/IMG_9733.jpg';
import { useTranslation } from 'react-i18next';
import caroline from "../images copy/new_Review.png";
const Reviews = () => {
  const { t } = useTranslation('common');
  const learnmore = () => {
    window.location.href = 'https://cal.com/merlin-ayx5zg/30min'
  }
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
              <img className="gridimag" src={caroline} alt="New Review" />
             <img className="gridimag" src={newreviews} alt="New Review" />
            <img className="gridimag" src={lori} alt="New Review" />
            <img className="gridimag" src={newreview} alt="Testimonial" />
            <img className="gridimag" src={graphic6} alt="New Review" />
            <img alt='' />
             <Button onClick={learnmore} className="custom-btn">
          {t('Book Consultation')}
        </Button> 
    </Collapsible>
  </tbody>
</table>
</div>
  )
}
export default Reviews;
