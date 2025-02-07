import React from "react";
import '../App.css';
import SPACE from "../images copy/SPACE.png";
import AIR from "../images copy/AIR.png";
import fire from "../images copy/fi.png";
import AGUA from "../images copy/AGUA.png";
import EARTH from "../images copy/EARTH.png";
import { useTranslation } from 'react-i18next'
function Elements() {
    const { t } = useTranslation('common');
    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Ayurvedic Elements")}</h2>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Space")}</h4>
                    <img className='gridimage' src={SPACE} alt='' />
                   
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Air")}</h4>
                    <img className='gridimage' src={AIR} alt='' />
                    
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Fire")}</h4>
                    <img className='gridimage' src={fire} alt='' />
                  
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Water")}</h4>
                    <img className='gridimage' src={AGUA} alt='' />
                   
                </div>
              
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Earth")}</h4>
                    <img className='gridimage' src={EARTH} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Elements;

