import React from "react";
import '../App.css';
import principles from "../images copy/ayurvedaprinciple.png";
import princ from "../images copy/ayurvedaprinciples.png";
import doshas from "../images copy/doshas.png";
import stacyd from "../images copy/stacyd.png";
import { Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
function Principles() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Ayurveda Explained")}</h2>
                    <div className="col-12 col-sm-8 col-md-6 text-center mb-4">
                    <img className='gridimage' src={princ} alt='' />
                    <img className='gridimage' src={principles} alt='' />

                    
                </div>
                    <img className='gridimag' src={stacyd} alt='' style={{width: '100%', height: 'auto'}} />
                      <img className='gridimag' src={doshas} alt='' style={{width: '100%', height: 'auto'}} />

<Button 
  as="a" 
  href="https://healinggoddess.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{ backgroundColor: '#027360', borderColor: '#027360', color: 'white' }}
>
  {t("Learn more from the Healing Goddess")}
</Button>            
</div>
       
        </div>
    );
}

export default Principles;

