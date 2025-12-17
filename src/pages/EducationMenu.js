// EducationMenu.js
import React, {useState} from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const EducationMenu = () => {
const { t } = useTranslation('common');
const isTouch = typeof window !== "undefined" && "ontouchstart" in window;
const [show, setShow] = useState(false);
const handleMouseEnter = () => {
  if (!isTouch) setShow(true);
};
const handleMouseLeave = () => {
  if (!isTouch) setShow(false);
};
const handleClick = () => {
  if (isTouch) setShow(prev => !prev);
};
  return (
    <>
    <style>
  {`
    /* Make the actual toggle white */
    #education-dropdown {
      color: white !important;
    }

    /* Kill Bootstrap's SVG (if present) and draw our own white arrow */
    #education-dropdown::after {
      background-image: none !important;
      border-top: 0.35em solid white !important;
      border-right: 0.35em solid transparent !important;
      border-left: 0.35em solid transparent !important;
      margin-left: 0.4em !important;
      vertical-align: 0.15em;
      content: "" !important;
      display: inline-block !important;
    }

    /* Underline on hover */
    #education-dropdown:hover {
      text-decoration: underline !important;
      text-decoration-color: white !important;
    }

    /* Keep arrow white on hover/focus */
    #education-dropdown:hover::after,
    #education-dropdown:focus::after {
      border-top-color: white !important;
    }
  `}
</style>
<NavDropdown
  title={
    <span style={{ color: "white" }}>
      {t("Education")}
    </span>
  }
  id="education-dropdown"
  className="scrollable-dropdown"
  show={show}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={handleClick}
>
  
      <ul><NavLink to="/homeopathy">{t('Homeopathy')}
      </NavLink>
      </ul>
      <ul><NavLink to="/naturopathy">{t('Naturopathy')}
      </NavLink>
      </ul>
      <ul><NavLink to="/herbalmedicine">{t('Herbal Medicine')}
      </NavLink>
      </ul>
      <ul>
        <NavLink to="/detox">{t('Detox')}
        </NavLink>
      </ul>
       <ul>
        <NavLink to="/functionalmedicine">{t('Functional Medicine')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/nutrigenomics">{t('Nutrigenomics')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/mindset">{t('Mindset Coaching')}
        </NavLink>
      </ul>

      <ul>
        <NavLink to="/breathwork">{t('Breathwork')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Hypnotherapy')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acupuncture">{t('Acupuncture')}
        </NavLink>
      </ul>
       <ul>
        <NavLink to="/applied-kinesiology">{t('Applied Kinesiology')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/transformationalcoaching">{t('Transformational Empowerment Coaching')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/chelation">{t('Chelation')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/stemcell">{t('Stem Cell')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/ayurveda">{t('Ayurveda')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/nutrition">{t('Nutrition')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/chiropractic">{t('Chiropractic')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/prevent">{t('Preventive Wellness')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/meditation">{t('Meditation')}
        </NavLink>
      </ul>
    </NavDropdown>
    </>
  );
};

export default EducationMenu;
