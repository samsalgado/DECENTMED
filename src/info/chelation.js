import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
import graphic from '../images copy/chelation101.png';
import chelationgraphic from '../images copy/chelationgraphic.png';
import chelationbenefits from '../images copy/chelationbenefits.png';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
const Pgchelation = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
            <h1>{t("Chelation")}</h1> 

  <iframe width="100%" height="500px" src="https://www.youtube.com/embed/MLNGwB26M5k?si=mC7cdIxG3bRR8RQ9"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  <Button variant="primary" href="http://crossroadsnaturopathic.com/" target="_blank">Visit Crossroads Naturopathic</Button>  {/* Added Bootstrap Button */}

  <div className="title-container">

   <img className='gridimag' src={chelationgraphic} alt='' />
<table className="collapsibles-table">
    <tbody> 
    <Collapsible trigger={
      <Button>
     {t("Chelation 101 (Heavy Metal Detox)")}
     </Button>}>
        <tr>
          <img alt='' />
        <img className='chelation-graphic' src={graphic} alt='' />
        <img className='dual' src={chelationbenefits} alt='' />
        <img alt='' />
        </tr>
      
      </Collapsible>

    </tbody>
  </table>

</div>

  </div>
    
  )
}

export default Pgchelation