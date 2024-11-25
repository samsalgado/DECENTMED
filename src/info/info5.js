import React from 'react'
import "../App.css";
import Forum from './forum';
import quote from '../images copy/quote.png';
import homeo from '../images copy/homeo.png';
import b from '../images copy/b.png';
import cys from '../images copy/cys.png';
import gluta from '../images copy/gluta.png';
import polyphenols from '../images copy/polyphenols.png';
import se from '../images copy/se.png';
import peroxidase from '../images copy/peroxidase.png';
import Collapsible from 'react-collapsible';
import CoQ10 from '../images copy/coq10.png';
const Info5 = () => {

  return (
    
    <div className='container'>
      <div className="title-container">
        <h1>Nutrition</h1>
        <div><img src={homeo} className="HOMEO" alt="logo" /></div>

        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Best Antioxidants for Your Immune System</th>}>
              <tr>
                <img className='pic' src={b} alt='' />
                <img className='pic' src={cys} alt='' />
                <img className='pic' src={gluta} alt='' />
                <img className='pic' src={peroxidase} alt='' />
                <img className='pic' src={polyphenols} alt='' />
                <img className='pic' src={se} alt='' />
              </tr>
              <tr>
                <td>Foods highest in Beta Carotene: Sweet Potatoes, Carrots, Spinach, Butternut Squash, Cantaloupe</td>
                <td>Foods highest in Cysteine: Oatmeals, Lentils, Tuna, Beef, Chicken Breast (Lean)</td>
                <td>Foods highest in Glutathione: Kale, Citrus fruits, Avocado, Spinach, Asparagus, Okra</td>
                <td>Foods highest in Peroxidase: Cantaloupe, Cauliflower, Grapefruit, Cucumber, Cabbage, Green beans</td>
                <td>Foods highest in Polyphenols: Broccoli, Turmeric, Berries, Apples, Black and Red Currants, Grapes, Apricots</td>
                <td>Foods highest in Selenium: Seafood, Lentils, Peas, Potatoes, Turkey, Brazil Nuts</td>

              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Benefits of CoQ10</th>}>
              <tr>
                <img className="pic1" src={CoQ10} alt='' />
              </tr>
              
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Best Vitamins for Health</th>}>
              <tr>
                <td>B Complex Vitamin: Pea Protein, Avocado, Brown Rice, Legumes</td>
              </tr>
              <tr>
                <td>Vitamin C: Strawberry, Orange, Broccoli, Brussel Sprouts, Mango</td>
              </tr>
              <tr>
                <td>Vitamin D: Apple, Elderberry, Avocado, Garlic, Kiwi, Peppers</td>
              </tr>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
      <div><img src={quote} className="TELE" alt="logo" /></div>
    <br></br>
    <div>
      
      <Forum />
    </div>
    </div>
    
  )
}

export default Info5