import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation('common');
    
    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Services")}</h2>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Video Marketing, Editing & Data-Driven Strategies")}</h4>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/1MuMf83gtiY" 
                        frameBorder="0" 
                        allowFullScreen
                        title="Data-Driven SEO Solutions"
                    ></iframe>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Data-Driven SEO Solutions")}</h4>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/2frVcbOSXRU" 
                        frameBorder="0" 
                        allowFullScreen
                        title="SEO Auditing & Reporting"
                    ></iframe>       
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("Google & Meta Ads")}</h4>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/rhomIkmUeF8" 
                        frameBorder="0" 
                        allowFullScreen
                        title="PPC"
                    ></iframe>                 
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t("YouTube & Social Media SEO")}</h4>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/oZaDBaleqoQ" 
                        frameBorder="0" 
                        allowFullScreen
                        title="YouTube & Social Media SEO"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

export default Services;