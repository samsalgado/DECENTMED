import React from "react";
import '../App.css';
import emotion from '../images copy/breath.jpg';
import trauma from '../images copy/gemstones.jpg';
import source from '../images copy/source.png';
import ptsd from '../images copy/journaling.jpg';
import reiki from '../images copy/reiki.png';
import medi from '../images copy/medi.png';
import growth from '../images copy/growth.png';
import { useTranslation } from "react-i18next";
import stress from '../images copy/wisdom.png';
function EsBenefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Energy Healing Techniques")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Breathwork")}</h4>
                    <img className='gridimag' src={emotion} alt='' />
                   
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("A collection of gemstones")}</h4>
                    <img className='gridimage' src={trauma} alt='' />
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Journaling and Intentions")}</h4>
                    <img className='gridimage' src={ptsd} alt='' />
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("The ability to hear from source")}</h4>
                    <img className='gridimage' src={source} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Meditation or Praying")}</h4>
                    <img className='gridimage' src={medi} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Reiki")}</h4>
                    <img className='gridimage' src={reiki} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Learning one's self and their journey")}</h4>
                    <img className='gridimage' src={stress} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>  {t("Herbs and Essential Oils")}</h4>
                    <img className='gridimage' src={growth} alt='' />
                </div>
            </div>
        </div>
    );
}

export default EsBenefits;


