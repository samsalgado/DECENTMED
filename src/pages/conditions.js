// EducationMenu.js
import React from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const Conditions = () => {
const { t } = useTranslation('common');
  return (
    <NavDropdown title={t("Conditions")} id="education-dropdown">
        <ul><NavLink to="/cancer">{t('Cancer')}
      </NavLink>
      </ul>
      <ul><NavLink to="/ptsd">{t('PTSD')}
      </NavLink>
      </ul>
      <ul><NavLink to="/mindset">{t('Poor Self-Image')}
      </NavLink>
      </ul>
       <ul><NavLink to="/mindset">{t('Lacking Mental Clarity')}
      </NavLink>
      </ul>
      <ul><NavLink to="/homeopathy">{t('ADD')}
      </NavLink>
      </ul>
      <ul><NavLink to="/homeopathy">{t('Digestive Issues')}
      </NavLink>
      </ul>
      <ul><NavLink to="/naturopathy">{t('Trauma')}
      </NavLink>
      </ul>
      <ul><NavLink to="/naturopathy">{t('Chronic Fatigue')}
      </NavLink>
      </ul>
      <ul><NavLink to="/naturopathy">{t('Gut Health')}
      </NavLink>
      </ul>
      <ul><NavLink to="/detox">{t('Kidney Disease')}
      </NavLink>
      </ul>
      <ul>
        <NavLink to="/nutrigenomics">{t('Weight Loss')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/breath">{t('Insomnia')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/breath">{t('Stored Trauma')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/breath">{t('Stress')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Subconscious Blocks')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Fear')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Low Self-Esteem')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/hypnotherapy">{t('Imposter Syndrome')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Neck Pain')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Poor Circulation')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Osteoarthritis')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/acu">{t('Corporate Burnout')}
        </NavLink>
      </ul>
       <ul>
        <NavLink to="/ak">{t('Autism')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/ak">{t('Anxiety')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/transformationalcoaching">{t('Burnout')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/chelation">{t('Heart Disease')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/stemcell">{t('Knee Pain')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/ayurveda">{t('Prevention')}
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/nutrition">{t('High Blood Sugar')}
        </NavLink>
      </ul>
     
     
      <ul>
        <NavLink to="/meditation">{t('High Blood Pressure')}
        </NavLink>
      </ul>
    </NavDropdown>
  );
};

export default Conditions;
