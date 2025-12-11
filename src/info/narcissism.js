import React from "react";
import '../App.css';
import emotion from '../images copy/hyp.jpeg';
import trauma from '../images copy/life.jpg';
import toxic from "../images copy/toxic.png";
import str from '../images copy/str.JPG';
import { useTranslation } from "react-i18next";
import rebuild from "../images copy/selflove.png";
import stress from '../images copy/i.png';
import sleep from '../images copy/boundaries.jpg';
function Narcissism() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Lynn's Methodology")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("How do you reprogram your subconscious mind")}</h3>
                    <img className='gridimage' src={emotion} alt='' />
                    <p className="e">
                        {t("Self hypnosis added into the program, because through personal experience, it directs the subconscious mind towards feeling positive and having a healthy sense of well-being.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Past Life Hypnosis near me")}</h3>
                    <img className='gridimage' src={trauma} alt='' />
                    <p className="e">
                        {t("Available in Ontario, Canada: My coaching program makes sense of the confusion and mental fog often associated with toxic dynamics, such as gaslighting and manipulation.  This clarity allows you to understand past patterns and develop a healthier worldview. Tap into the past version of you and discover the you that was healthy, happy and lived an abundant life.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Identify Toxic Cycles")}</h3>
                    <img className='gridimage' src={toxic} alt='' />
                    <p className="e">
                    {t("By identifying and understanding the underlying beliefs and triggers that contributed to the toxic cycle, you can break free from repeating those dynamics.  The program focuses on creating new healthy patterns of thinking and behavior.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Rebuild yourself")}</h3>
                    <img className='gridimage' src={rebuild} alt='' />
                    <p className="e">
                    {t("Toxic relationships often erode self-esteem and identity.  This coaching program provides the tools and support to challenge internalized negative beliefs and rebuild a strong sense of self-worth and self-acceptance.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Set Boundaries")}</h3>
                    <img className='gridimage' src={sleep} alt='' />
                    <p className="e">
                        {t("You learn to recognize your limits and assert your needs without guilt or fear.  This is crucial for protecting your emotional well-being and preventing future toxic dynamics.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Breaking Cycles & Habits")}</h3>
                    <img className='gridimage' src={str} alt='' />
                    <p className="e">
                        {t("You learn to recognize your limits and assert your needs without guilt or fear.  This is crucial for protecting your emotional well-being and preventing future toxic dynamics.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Processing Emotion")}</h3>
                    <img className='gridimage' src={stress} alt='' />
                    <p className="e">
                    {t("The program helps you process complex emotions like anger, grief and shame in a safe environment.  You develop a toolkit of effective strategies such as mindfulness, to manage stress and emotional triggers, having greater resilience.")}
                    </p>
                </div>
               
            </div>
        </div>
    );
}

export default Narcissism;


