import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../images copy/background.jpg';

function Values() {
    const { t } = useTranslation("common");
    const learnmore = () => {
        window.location.href = 'https://themerlingroupworld.com/digitalmarketing'
    }
    return (
        <>
        <div className="container-bblue">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Education')}</h4>
                    <p className="edu">{t('Video Education Platform about Holistic Medicine and its various modalities. Our team offers interviews to all providers on the platform and seeks to collaborate with them to create educational series for their specific modality.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Showcasing Alternatives')}</h4>
                    <p className="edu">{t('Deemed as "alternative" in the 1970s, we strive to showcase and deepen the understanding of Holistic Medicine. Furthermore, funding studies and partnering with doctors that practice unique treatment offerings.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h4>{t('Treatment of Chronic Conditions')}</h4>
                    <p className="edu">{t('Our goal is to re-invest into the doctors on the platform to fund their research and studies.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Advanced Features')}</h4>
                    <p className="edu">{t('Features of the platform include: Data Analytics, Social Media Marketing, additional offering creation, interview showcases and AI-driven Solutions. For providers that do not have a website, we build custom pages.')}</p>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Values;
