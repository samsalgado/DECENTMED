import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation('common');

    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Services")}</h2>

                {/* First row with 3 videos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h4>{t("SEO Auditing & Reporting")}</h4>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/2CT8lXUxpXs" 
                            frameBorder="0" 
                            allowFullScreen
                            title="SEO Solutions"
                        ></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h4>{t("Chiropractic SEO 101")}</h4>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/wMtpYkz_Mfs?si=HruyijH_hdMq76ex" 
                            frameBorder="0" 
                            allowFullScreen
                            title="SEO Solutions"
                        ></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h4>{t("Data-Driven SEO Solutions")}</h4>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/2frVcbOSXRU?si=xBpL5XJeeMmKMRrV"
                            frameBorder="0" 
                            allowFullScreen
                            title="SEO Auditing & Reporting"
                        ></iframe>       
                    </div>
                </div>

                {/* Second row with 2 videos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 text-center mb-4">
                        <h4>{t("Keyword Research")}</h4>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/CuhSj3M9in8?si=dy0_pUB_WaPlLfhn"
                            frameBorder="0" 
                            allowFullScreen
                            title="AI in SEO"
                        ></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 text-center mb-4">
                        <h4>{t("How to use AI: Claude vs ChatGpt")}</h4>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/9nHfEBiWmBw?si=KPXoU2TQVl1TSOD-"
                            frameBorder="0" 
                            allowFullScreen
                            title="AI in SEO"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
