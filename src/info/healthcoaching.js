import React from "react";
import '../App.css';
import esteem from '../images copy/pg.png';
import anxiety from '../images copy/motivation.png';
import blocks from '../images copy/chronic.png';
import ptsd from '../images copy/awareness.png';
import { useTranslation } from "react-i18next";
function HealthCoaching() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Integrative Health Coaching")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Personal Guidance")}</h3>
                    <img className='gridimage' src={esteem} alt='' />
                    <p className="e">
                        {t("personal")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Motivation and Accountability")}</h3>
                    <img className='gridimage' src={anxiety} alt='' />
                    <p className="e">
                     {t("motivation")}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Improved Self Awareness")}</h3>
                    <img className='gridimage' src={ptsd} alt='' />
                    <p className="e">
                    {t("selfaware")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Support for Chronic Conditions")}</h3>
                    <img className='gridimage' src={blocks} alt='' />
                    <p className="e">
                         {t("chronic")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HealthCoaching;


