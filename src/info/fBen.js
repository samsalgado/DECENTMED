import React from "react";
import '../App.css';
import empowerment from '../images copy/Screenshot 2026-04-03 at 10.21.00 PM.png';
import jim2 from '../images copy/jim2.jpeg';
import calm from '../images copy/jim3.png';
import success from '../images copy/Screenshot 2026-04-03 at 10.26.07 PM.png';
import jim5 from '../images copy/Screenshot 2026-04-03 at 10.27.37 PM.png';
import { useTranslation } from "react-i18next";
import support from '../images copy/Screenshot 2026-04-03 at 10.29.10 PM.png';
import purpose from '../images copy/purpose.png';
import gift from "../images copy/Screenshot 2026-04-03 at 10.32.24 PM.png";
function FBen() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("8 Benefits of Trauma Healing")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Build confidence through compassionate community support")}</h3>
                    <img className='gridimage' src={empowerment} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Become aware of the mind and body cues so you can respond wisely and compassionately")}</h3>
                    <img className='gridimage' src={jim2} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Develop habits that align with your core values")}</h3>
                    <img className='gridimage' src={calm} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Explore your authentic self through creativity and curiosity")}</h3>
                    <img className='gridimage' src={success} alt='' />
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Learn to accept what is while striving to optimize what is possible")}</h3>
                    <img className='gridimage' src={jim5} alt='Take Action Toward a Better Future' />
                </div> <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Settle the nervous system so your wise inner guide can support forward progress")}</h3>
                    <img className='gridimage' src={support} alt='' />
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Shift the narrative from victim to conscious co-creator rooted in purpose")}</h3>
                    <img className='gridimage' src={purpose} alt='' />
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Tap into authentic living through letting your greatest gifts and talents shine brightly")}</h3>
                    <img className='gridimage' src={gift} alt='' />
                </div>
            </div>
        </div>
    );
}

export default FBen;


