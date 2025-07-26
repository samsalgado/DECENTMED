import React from "react";
import '../App.css';
import emotion from '../images copy/burnout.png';
import trauma from '../images copy/running.png';
import connct from '../images copy/confide.jpg';
import ptsd from '../images copy/action.png';
import str from '../images copy/adv.png';
import growth from '../images copy/growth.png';
import { useTranslation } from "react-i18next";
import stress from '../images copy/wisdom.png';
import sleep from '../images copy/reg.png';
function TsBenefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Empowerment Coaching")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Break Free from Burnout & Overwhelm")}</h4>
                    <img className='gridimage' src={emotion} alt='' />
                    <p className="e">
                        {t("- Shift out of cycles of stress, self-doubt, and exhaustion by learning how to realign with your energy, values, and personal truth.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Reclaim your Energy & Vitality")}</h4>
                    <img className='gridimage' src={trauma} alt='' />
                    <p className="e">
                     {t("- Discover how to stop overgiving and start nourishing yourself with practices that restore your energy and build resilience.")}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Cultivate Authentic Confidence")}</h4>
                    <img className='gridimage' src={connct} alt='' />
                    <p className="e">
                    {t("- Move beyond perfectionism, comparison, and imposter syndrome to embody empowered confidence from within.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Create Aligned, Purposeful Action")}</h4>
                    <img className='gridimage' src={ptsd} alt='' />
                    <p className="e">
                         {t("- Gain clarity on what truly matters to you and learn how to take intentional steps toward your goals — with focus, ease, and authenticity.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Master Mindful Emotional Regulation")}</h4>
                    <img className='gridimage' src={sleep} alt='' />
                    <p className="e">
                         {t("- Learn how to recognize, honor, and navigate your emotions with mindfulness practices that support balance and emotional well-being.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Strengthen Boundaries & Self-Advocacy")}</h4>
                    <img className='gridimage' src={str} alt='' />
                    <p className="e">
                        {t("- Develop healthy boundaries that honor your time, energy, and needs — both personally and professionally.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Awaken Your Inner Wisdom")}</h4>
                    <img className='gridimage' src={stress} alt='' />
                    <p className="e">
                        {t("- Deepen your connection to your intuition and inner guidance, allowing you to make empowered decisions with confidence and clarity.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>  {t("Experience Sustainable Growth & Lasting Change")}</h4>
                    <img className='gridimage' src={growth} alt='' />
                    <p className="e">
                          {t("- This isn’t a quick fix — it’s a holistic, heart-centered journey toward lasting transformation in how you show up in life and work.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TsBenefits;


