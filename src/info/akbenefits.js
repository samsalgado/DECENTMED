import React from "react";
import '../App.css';
import emotion from '../images copy/mus.png';
import trauma from '../images copy/aut.png';
import skelly from '../images copy/skelly.png';
import { useTranslation } from "react-i18next";
import organ from '../images copy/organ.png';
function Benefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("What is Applied Kinesiology and Clinical Kinesiology?")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Treating Muscle Weakness and Imbalance")}</h4>
                    <img className='gridimage' src={emotion} alt='' />
                    <p className="e">
                        {t("Applied Kinesiology works with the nervous system, lymphatic system, vascular system and identifies nutritional deficiencies.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Helps with Complex Disorders")}</h4>
                    <img className='gridimage' src={trauma} alt='' />
                    <p className="e">
                     {t("Utilizing combination of modalities to address emotinoal blockages and complex disorders like Anxiety, Autism and more. Some techniques have had better results than others, but most have helped to some degree. The top two that have been shown to have the most significance are Applied Kinesiology and SOT.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Utilizes muscle testing and emotional body mapping")}</h4>
                    <img className='gridimage' src={skelly} alt='' />
                    <p className="e">
                    {t("Form of Clinical Kinesiology and frequency medicine to address emotional blockages for disorders like Anxiety or certain food sensitivities. It also takes into account the entire GI system to make sure it is functioning optimally.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Assessing organ function and system imbalances")}</h4>
                    <img className='gridimage' src={organ} alt='' />
                    <p className="e">
                        {t("Addressing root causes rather than just symptoms, integrating physical, chemical, and emotional factors.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;


