import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation('common');

    return (
        <div className="container-blue">
            <div className="row justify-content-center">
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("How We Do It")}</h2>

                {/* First row with 3 videos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h3>{t("Increase your Patient Bookings by 20%")}</h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h3>{t("Streamlined Patient Management & Automated Followup")}</h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
                        <h3>{t("Stand out in your Space with Video")}</h3>     
                    </div>
                </div>

                {/* Second row with 2 videos */}
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 text-center mb-4">
                        <h3>{t("Ensuring Visibility in a Decentralized World")}</h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 text-center mb-4">
                        <h3>{t("Springboard to your Patients with Social Media")}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
