import React from "react";
import '../App.css';
import practicalskills from "../images copy/practicalskills.png";
import partnership from '../images copy/partnership.png';
import env from '../images copy/env.png';
import youare from '../images copy/youare.png';
import confidence from "../images copy/confidence.png";
import { useTranslation } from "react-i18next";
import support from '../images copy/peace.png';
import selfcare from "../images copy/selfcare.png";
import accc from "../images copy/accc.png";
function Confidence() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Coaching Confidence")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Client Relationship Partner")}</h3>
                    <img className='gridimage' src={partnership} alt='' />
                    <p className="e">
                        {t("Our work is built on trust, respect, and collaboration. Just like in Montessori environments, you are an active participant in your growth, not someone being told what to do.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("You are met exactly where you are")}</h3>
                    <img className='gridimage' src={youare} alt='' />
                    <p className="e">
                     {t("There is no forcing, fixing, or shaming. I observe, listen, and guide based on your current season of life, honoring your pace, capacity, and lived experience.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Environment as a tool for change")}</h3>
                    <img className='gridimage' src={env} alt='' />
                    <p className="e">
                     {t("Using Montessori principles, we intentionally shape your physical, mental, and emotional environment so that growth feels supported rather than exhausting.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Practical life skills you can use immediately")}</h3>
                    <img className='gridimage' src={practicalskills} alt='' />
                    <p className="e">
                    {t("We focus on real world application, time management, emotional regulation, communication, boundaries, and daily rhythms that actually support your life, not add more pressure.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Confidence built through self trust, not dependency")}</h3>
                    <img className='gridimage' src={confidence} alt='' />
                    <p className="e">
                    {t("My role is to help you build clarity and confidence from within, so you are not reliant on me long term, but empowered to lead yourself forward.")}
                    </p>
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Gentle accountability that honors humanity")}</h3>
                    <img className='gridimage' src={accc} alt='' />
                    <p className="e">
                    {t("Accountability comes through connection and consistency, not fear or hustle culture. Progress is measured in sustainable change, not burnout.")}
                    </p>
                </div>
                 <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Whole person self-care, not surface level fixes")}</h3>
                    <img className='gridimage' src={selfcare} alt='' />
                    <p className="e">
                    {t("We address emotional, spiritual, physical, social, and intellectual self-care so nothing important gets neglected and everything works together.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("A calm, grounded space to think clearly again")}</h3>
                    <img className='gridimage' src={support} alt='' />
                    <p className="e">
                        {t("Many clients come feeling overwhelmed, overstimulated, and scattered. This work creates space to slow down, reflect, and move forward with intention and confidence.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Confidence;


