import React from "react";
import '../App.css';
import empowerment from '../images copy/empowerment.png';
import calm from '../images copy/calm.png';
import success from '../images copy/success.png';
import { useTranslation } from "react-i18next";
import support from '../images copy/support.png';
function Benefitts() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of a Mindset Coach")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Empowerment")}</h4>
                    <img className='gridimage' src={empowerment} alt='' />
                    <p className="e">
                        {t("Mindset Coaching helps with understanding how you create your results and how you can change them, not dependent on things outside of you.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Helps with Success")}</h4>
                    <img className='gridimage' src={success} alt='' />
                    <p className="e">
                     {t("Success is 95% mindset and 5% strategy, a mindset coach helps you with the 95%.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Calmness of Mind")}</h4>
                    <img className='gridimage' src={calm} alt='' />
                    <p className="e">
                    {t("Being able to live with calmness of mind where you’re able to respond to life rather than react meaning you keep your power.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Support & Accountability")}</h4>
                    <img className='gridimage' src={support} alt='' />
                    <p className="e">
                        {t("Support and accountability to help keep you on track and provide guidance where needed.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefitts;


