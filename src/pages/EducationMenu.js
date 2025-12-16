// EducationMenu.js
import React, {useState} from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const EducationMenu = () => {
const { t } = useTranslation('common');
 const [show, setShow] = useState(false);
  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);
  return (
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
>
  {/* Inline style injection to force arrow white */}
  <span style={{ display: "none" }}>
    <style>
      
      {`
        .dropdown-toggle::after {
          border-top-color: white !important;
        }
          .dropdown-toggle:hover {
        text-decoration: underline !important;
        text-decoration-color: white !important;
      }
      `}
    </style>
  </span> 
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
  );
};

export default EducationMenu;
