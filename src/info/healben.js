import React from "react";
import '../App.css';
import para from '../images copy/para.png';
import focus from '../images copy/focus.png';
import img3 from '../images copy/stress.jpg';
import vibe from '../images copy/vibe.png';
import serene from '../images copy/serene.png';
import support from '../images copy/peace.png';
import selfcare from "../images copy/selfcare.png";
import { useTranslation } from "react-i18next";
import img6 from '../images copy/img6.png';
function Healben() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Sound Healing Practitioner")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Activating the parasympathetic response")}</h3>
                    <img className='gridimage' src={para} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Supports mental health and emotional regulation, helping reduce anxiety and mental fatigue")}</h3>
                    <img className='gridimage' src={img6} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Improves sleep quality by calming the mind and lowering physiological arousal")}</h3>
                    <img className='gridimage' src={img3} alt='' />
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Enhances focus and cognitive clarity, supporting productivity and decision-making")}</h3>
                    <img className='gridimage' src={focus} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Relieves physical tension and discomfort through vibrational relaxation")}</h3>
                    <img className='gridimage' src={vibe} alt='' />
                   
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Encourages mindfulness and presence, improving mind-body awareness")}</h3>
                    <img className='gridimage' src={serene} alt='' />
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Supports emotional release and resilience, particularly in high-stress environments")}</h3>
                    <img className='gridimage' src={support} alt='' />
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Promotes overall well-being and burnout prevention, ideal for healthcare and corporate teams")}</h3>
                    <img className='gridimage' src={selfcare} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Healben;


