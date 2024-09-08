// EducationMenu.js
import React from 'react';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { NavLink } from 'react-router-dom';
import Treatment from './treatment';
const EducationMenu = () => {
  return (
    <NavDropdown title="Education">
        <ul><NavLink to="/homeopathy">Homeopathy
        <img className='coursepic' src={Treatment.homeopath} alt="" />
        </NavLink>
        </ul> 
      <ul>
      <NavLink to="/detox">Detox
      <img className='coursepic' src={Treatment.detox} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/hypnotherapy">Hypnotherapy
      <img className='coursepic' src={Treatment.hypnotherapy} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/acu">Acupuncture
      <img className='coursepic' src={Treatment.acupuncture} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/chelation">Chelation
      <img className='coursepic' src={Treatment.chelation}alt="" />   
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/stemcell">Stem Cell
      <img className='coursepic' src={Treatment.stemcell} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/ayurveda">Ayurveda
      <img className='coursepic' src={Treatment.ayurveda} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/nutrition">Nutrition
      <img className='coursepic' src={Treatment.nutriton} alt="" />
      </NavLink>
      </ul>
        <ul>
      <NavLink to="/chiropractic">Chiropractic
      <img className='coursepic' src={Treatment.chiro} alt="" />
      </NavLink>
      </ul>
      <ul>
      <NavLink to="/prevent">Preventive Medicine
      <img className='coursepic' src={Treatment.prevent} alt="" />
      </NavLink>
      </ul>
    </NavDropdown>
  );
};

export default EducationMenu;
