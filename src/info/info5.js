import React from 'react';
import "../App.css";
import Forum from './forum';
import quote from '../images copy/quote.png';
import homeo from '../images copy/homeo.png';
import './Info.css';
//import ultt from "../images copy/ultt.png";
import b from '../images copy/b.png';
import cys from '../images copy/cys.png';
import gluta from '../images copy/gluta.png';
import polyphenols from '../images copy/polyphenols.png';
import se from '../images copy/se.png';
import peroxidase from '../images copy/peroxidase.png';
import Collapsible from 'react-collapsible';
import CoQ10 from '../images copy/coq10.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Info5 = () => {
  const { t } = useTranslation("common"); // Access translation function

  return (
    <div className='container'>
      <div className="title-container">
        <h1 className="title">{t('Nutrition')}</h1>
        <div><img src={homeo} className="HOMEO" alt="logo" /></div>

        <table className="collapsibles-table">
          <tbody> 
            <Collapsible trigger={<th className="collapsible-title">{t('Best Antioxidants for Your Immune System')}</th>}>
              <tr>
                <img className='pic' src={b} alt='' />
                <img className='pic' src={cys} alt='' />
                <img className='pic' src={gluta} alt='' />
                <img className='pic' src={peroxidase} alt='' />
                <img className='pic' src={polyphenols} alt='' />
                <img className='pic' src={se} alt='' />
              </tr>
              <tr>
                <td>{t('Foods highest in Beta Carotene: Sweet Potatoes, Carrots, Spinach, Butternut Squash, Cantaloupe')}</td>
                <td>{t('Foods highest in Cysteine: Oatmeals, Lentils, Tuna, Beef, Chicken Breast (Lean)')}</td>
                <td>{t('Foods highest in Glutathione: Kale, Citrus fruits, Avocado, Spinach, Asparagus, Okra')}</td>
                <td>{t('Foods highest in Peroxidase: Cantaloupe, Cauliflower, Grapefruit, Cucumber, Cabbage, Green beans')}</td>
                <td>{t('Foods highest in Polyphenols: Broccoli, Turmeric, Berries, Apples, Black and Red Currants, Grapes, Apricots')}</td>
                <td>{t('Foods highest in Selenium: Seafood, Lentils, Peas, Potatoes, Turkey, Brazil Nuts')}</td>
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">{t('Benefits of CoQ10')}</th>}>
              <tr>
                <img className="pic1" src={CoQ10} alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">{t('Best Vitamins for Health')}</th>}>
              <tr>
                <td>{t('B Complex Vitamin: Pea Protein, Avocado, Brown Rice, Legumes')}</td>
              </tr>
              <tr>
                <td>{t('Vitamin C: Strawberry, Orange, Broccoli, Brussel Sprouts, Mango')}</td>
              </tr>
              <tr>
                <td>{t('Vitamin D: Apple, Elderberry, Avocado, Garlic, Kiwi, Peppers')}</td>
              </tr>
            </Collapsible>
          </tbody>
        </table>
      </div>
      
      <div><img src={quote} className="TELE" alt="logo" /></div>
      <br />
      <div>
        <Forum />      
        </div>
    </div>
  );
}

export default Info5;
