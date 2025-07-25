import React from "react";
import '../App.css';
import emotion from '../images copy/mus.png';
import trauma from '../images copy/aut.png';
import naet from '../images copy/ap.png';
import skelly from '../images copy/skelly.png';
import light from '../images copy/light.png';
import { useTranslation } from "react-i18next";
import organ from '../images copy/organ.png';
function Benefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("What is Applied Kinesiology?")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Treating Muscle Weakness and Imbalance")}</h4>
                    <img className='gridimage' src={emotion} alt='' />
                    <p className="e">
                        {t("Applied Kinesiology works with the nervous system, lymphatic system, vascular system and identifies nutritional deficiencies.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Helps with Complex Disorders like Autism")}</h4>
                    <img className='gridimage' src={trauma} alt='' />
                    <p className="e">
                     {t("Studies have been done on the significance of chiropractic helping children with autism and have shown significant results. Some techniques have had better results than others, but most have helped to some degree. The top two that have been shown to have the most significance are Applied Kinesiology and SOT.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Utilizes the body’s own information")}</h4>
                    <img className='gridimage' src={skelly} alt='' />
                    <p className="e">
                    {t("It addresses cranial faults and corrects any subluxations (improper movement of a joint). It also takes into account the entire GI system to make sure it is functioning optimally.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("NAET (Nambudripad's Allergy Elimination Technique)")}</h4>
                    <img className='gridimage' src={naet} alt='' />
                    <p className="e">
                         {t("The NAET system is based on the theory of electromagnetic energy. The human body has a flow of electromagnetic currents that corresponds physically to the currents of the central and peripheral nervous systems.  When the body has an allergic response, blockages occur in the electrical currents, which in turn produce different symptoms based on the meridian, or energy channel, where the blockages occur.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Light Force Adjustment")}</h4>
                    <img className='gridimage' src={light} alt='' />
                    <p className="e">
                         {t("Incorporating muscle testing to help determine which approach is best for you including activator instrument, manual therapy, nutritional supplements, acupuncture, etc.")}
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


