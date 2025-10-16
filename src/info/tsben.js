import React from "react";
import '../App.css';
import empowerment from '../images copy/jim1.png';
import jim2 from '../images copy/jim2.jpeg';
import calm from '../images copy/jim3.png';
import success from '../images copy/jim4.png';
import jim5 from '../images copy/jim5.png';
import { useTranslation } from "react-i18next";
import support from '../images copy/jim6.png';
import jim7 from '../images copy/jim7.png';
function TsBen() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("7 Stages of Trauma Healing")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Empowerment for Personal Growth")}</h3>
                    <img className='gridimage' src={empowerment} alt='' />
                    <p className="e">
                        {t("By working with Jim Pehkonen, you’ll learn how to tap into your inner strength and resources to achieve personal growth.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Building Resilience")}</h3>
                    <img className='gridimage' src={jim2} alt='' />
                    <p className="e">
                     {t("One of the key benefits of working with Jim is that he helps his clients build resilience. With Jim’s support and guidance, you will develop the mental tools necessary to handle adversity with grace and strength.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Finding Balance")}</h3>
                    <img className='gridimage' src={calm} alt='' />
                    <p className="e">
                    {t("Jim understands the struggle of balancing work and life all too well and works closely with his clients to achieve a healthy work-life balance. He believes that finding this balance is crucial for living a fulfilling life and will help you prioritize your goals and responsibilities while still making time for self-care.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Heal and Empower Yourself")}</h3>
                    <img className='gridimage' src={success} alt='' />
                    <p className="e">
                        {t("Work through your trauma to uncover the version of yourself you’ve been hiding. Gain tools to overcome fear, anxiety, and low self-esteem.")}
                    </p>
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Take Action Toward a Better Future")}</h3>
                    <img className='gridimage' src={jim5} alt='Take Action Toward a Better Future' />
                    <p className="e">
                        {t("Discover actionable steps through reflection and strategy. Develop skills that will help you sustain growth and healing for the long term.")}
                    </p>
                </div> <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Find Community and Build Stronger Relationships")}</h3>
                    <img className='gridimage' src={support} alt='' />
                    <p className="e">
                        {t("Support and accountability to help keep you on track and provide guidance where needed.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Support and Guidance")}</h3>
                    <img className='gridimage' src={jim7} alt='' />
                    <p className="e">
                        {t("In addition to focusing on personal development, I also help clients achieve a healthy work-life balance. Many of us struggle with balancing our careers, relationships, and personal goals. As a life coach, I can help you identify areas in your life that may be out of balance and work with you to make positive changes that will enhance your overall well-being. Personal growth is an ongoing journey, and my role as a life coach is to support and guide you along the way!")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TsBen;


