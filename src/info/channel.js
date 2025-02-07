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
        <div className="container-bblue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Acupuncture Channels")}</h2>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Spleen Function in TCM")}</h4>
                    <img className='imgg' src={spleen} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Kidney Acupuncture")}</h4>
                    <img className='imgg' src={kidneyacu} alt='' />        
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Acupuncture Points")}</h4>
                    <img className='imgg' src={channels} alt='' />                 
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Acupuncture Treatment")}</h4>
                    <img className='imgg' src={acutreats} alt='' />
                </div>
              
            </div>
        </div>
    );
}

export default Channel;


