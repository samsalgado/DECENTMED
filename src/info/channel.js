import React from "react";
import '../App.css';
import channels from '../images copy/channels.png';
import acutreats from '../images copy/acupuncturetreats.png';
import spleen from '../images copy/spleen.png';
import kidneyacu from '../images copy/kidneyacu.png';
import { useTranslation } from "react-i18next";
function Channel() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Acupuncture Channels")}</h2>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Spleen Function in TCM")}</h3>
                    <img className='imgg' src={spleen} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Kidney Acupuncture")}</h3>
                    <img className='imgg' src={kidneyacu} alt='' />        
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Acupuncture Points")}</h3>
                    <img className='gridimag' src={channels} alt='' />                 
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Acupuncture Treatment")}</h3>
                    <img className='imgg' src={acutreats} alt='' />
                </div>
              
            </div>
        </div>
    );
}

export default Channel;


