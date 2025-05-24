import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
function Values() {
    const { t } = useTranslation("common");
    
    return (
        <>
        <div className="container-bblue">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Education')}</h4>
                    <p className="edu">{t('Video Education Platform featuring each Holistic Medicine modality. Our team offers interviews to all providers on the platform and seeks to collaborate with them to create educational series for their specific modality.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Showcasing Alternatives')}</h4>
                    <p className="edu">{t("Deemed as 'alternative' in the 1970s, we strive to showcase and deepen the understanding of Holistic Medicine. Furthermore, funding studies and partnering with doctors that practice unique treatment offerings.")}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h4>{t('Webinars & Collaborative Summits')}</h4>
                    <p className="edu">{t('We offer webinars and collaborative summits to build your authority and expertise in your modality in holistic medicine. We will market your current webinars and summits, and build our own DECENTMED summits for each individual modality. We decentralize data to help providers collaborate with one another to optimize treatment options.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Holistic Marketing')}</h4>
                    <p className="edu">{t('Our telehealth directory operates as a marketing agency - managing provider social media, SEO on their website, backlinks to their site, video interviews, data analytics, conversion tracking and custom-built webpages - ensuring that holistic medicine grows in market share.')}</p>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Values;
