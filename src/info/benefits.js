import React from "react";
import '../App.css';
import esteem from '../images copy/esteem.webp';
import anxiety from '../images copy/anxiety.png';
import blocks from '../images copy/blocks.webp';
import ptsd from '../images copy/ptsd.png';
import fear from '../images copy/fear.png';
import { useTranslation } from "react-i18next";
import stress from '../images copy/stress.jpg';
import insomnia from '../images copy/insomnia.png';
function Benefits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Hypnotherapy")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Increased Self Confidence")}</h4>
                    <img className='gridimage' src={esteem} alt='' />
                    <p className="e">
                        {t("Studies show that close to 8/10 Americans have low self-esteem.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Decreased Anxiety")}</h4>
                    <img className='gridimage' src={anxiety} alt='' />
                    <p className="e">
                     {t("The advent of smart phones and social media has increased anxiety among today's youth. Mix that with mass shootings and school shootings, anxiety levels are high in the United States.")}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Releasing & Transforming Trauma Responses")}</h4>
                    <img className='gridimage' src={ptsd} alt='' />
                    <p className="e">
                    {t("Transform your pain and mental anguish into healing and wholeness.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4> {t("Dissolving & Transforming Subconscious Blocks")}</h4>
                    <img className='gridimage' src={blocks} alt='' />
                    <p className="e">
                         {t("Dissolving subconscious blocks can lead to increased self-awareness and emotional well-being.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Stress Reduction")}</h4>
                    <img className='gridimage' src={stress} alt='' />
                    <p className="e">
                        {t("High stress levels play a role in the development of diseases. It is not safe to have high cortisol levels in our sedentary lifestyles.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Overcoming Fears & Phobias")}</h4>
                    <img className='gridimage' src={fear} alt='' />
                    <p className="e">
                        {t("Fears restrict us from new experiences, do not let yourself hold you back with fear.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>  {t("Improving Sleep")}</h4>
                    <img className='gridimage' src={insomnia} alt='' />
                    <p className="e">
                          {t("According to the CDC, estimated 10-30% of the world struggle with insomnia.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;


