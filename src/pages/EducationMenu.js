// EducationMenu.js
import React from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const EducationMenu = () => {
const { t } = useTranslation('common');
  return (
    <NavDropdown title={t("Education")} id="education-dropdown" className="scrollable-dropdown" >
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
        <NavLink to="/nutrigenomics">{t('Nutrigenomics')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/mindset">{t('Mindset Coaching')}
        </NavLink>
      </ul>

      <ul>
        <NavLink to="/breath">{t('Breathwork')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Hypnotherapy')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Acupuncture')}
        </NavLink>
      </ul>
       <ul>
        <NavLink to="/ak">{t('Applied Kinesiology')}
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
