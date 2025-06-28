import React from "react";
import '../App.css';
import emotion from '../images copy/e.JPG';
import trauma from '../images copy/ad.JPG';
import connct from '../images copy/d.JPG';
import ptsd from '../images copy/l.JPG';
import str from '../images copy/str.JPG';
import { useTranslation } from "react-i18next";
import stress from '../images copy/r.JPG';
import sleep from '../images copy/sleep.JPG';
function Benefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Breathwork")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Emotional Regulation")}</h4>
                    <img className='gridimage' src={emotion} alt='' />
                    <p className="e">
                        {t("Breathwork helps regulate the nervous system, reducing emotional reactivity and bringing you back to balance, even in high-stress moments.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Releasing Stored Trauma")}</h4>
                    <img className='gridimage' src={trauma} alt='' />
                    <p className="e">
                     {t("Breath opens a powerful pathway to access and gently release trauma held in the body, creating space for healing and freedom.")}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Expanded Self-Awareness")}</h4>
                    <img className='gridimage' src={connct} alt='' />
                    <p className="e">
                    {t("Breath brings you into deeper presence, sharpening intuition, quieting mental noise and helping you reconnect with your inner voice.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Increased Energy & Vitality")}</h4>
                    <img className='gridimage' src={ptsd} alt='' />
                    <p className="e">
                         {t("When you breathe fully, your cells awaken. Breathwork oxygenates the body, boosts circulation, and leaves you feeling alive and energized.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Improved Sleep & Relaxation")}</h4>
                    <img className='gridimage' src={sleep} alt='' />
                    <p className="e">
                         {t("Practicing breathwork before bed calms the mind and activates the parasympathetic nervous system, making sleep deeper and more restful.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Breaking Cycles & Habits")}</h4>
                    <img className='gridimage' src={str} alt='' />
                    <p className="e">
                        {t("Use breath to interrupt addictive patterns and shift out of autopilot. It helps you reset your mind and body in real time.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Building Confidence & Inner Strength")}</h4>
                    <img className='gridimage' src={stress} alt='' />
                    <p className="e">
                        {t("Breath anchors you in your body and truth. Over time, it strengthens your trust in yourself and your ability to handle whatever comes.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>  {t("Spiritual Connection & Clarity")}</h4>
                    <img className='gridimage' src={connct} alt='' />
                    <p className="e">
                          {t("Breathwork creates space for sacred connection, to your higher self, spirit, or source. It dissolves mental clutter and clarifies your path.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;


