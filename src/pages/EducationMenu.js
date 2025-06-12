// EducationMenu.js
import React from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Treatment from './treatment';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const EducationMenu = () => {
const { t } = useTranslation('common');
  return (
    <NavDropdown title={t("Education")} id="education-dropdown">
      <ul><NavLink to="/homeopathy">{t('Homeopathy')}
        <img className='coursepic' src={Treatment.homeopath} alt="" />
      </NavLink>
      </ul>
      <ul><NavLink to="/naturopathy">{t('Naturopathy')}
        <img className='coursepic' src={Treatment.naturopathy} alt="" />
      </NavLink>
      </ul>
      <ul><NavLink to="/herbalmedicine">{t('Herbal Medicine')}
        <img className='coursepic' src={Treatment.herbalmedicine} alt="" />
      </NavLink>
      </ul>
      <ul>
        <NavLink to="/detox">{t('Detox')}
          <img className='coursepic' src={Treatment.detox} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Hypnotherapy')}
          <img className='coursepic' src={Treatment.hypnotherapy} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Acupuncture')}
          <img className='coursepic' src={Treatment.acupuncture} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/chelation">{t('Chelation')}
          <img className='coursepic' src={Treatment.chelation} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/stemcell">{t('Stem Cell')}
          <img className='coursepic' src={Treatment.stemcell} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/ayurveda">{t('Ayurveda')}
          <img className='coursepic' src={Treatment.ayurveda} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/nutrition">{t('Nutrition')}
          <img className='coursepic' src={Treatment.nutriton} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/chiropractic">{t('Chiropractic')}
          <img className='coursepic' src={Treatment.chiro} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/prevent">{t('Preventive Wellness')}
          <img className='coursepic' src={Treatment.prevent} alt="" />
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/meditation">{t('Meditation')}
          <img className='coursepic' src={Treatment.meditation} alt="" />
        </NavLink>
      </ul>
    </NavDropdown>
  );
};

export default EducationMenu;
