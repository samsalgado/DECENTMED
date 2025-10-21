import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Components() {
  const { t } = useTranslation("common");

  return (
    <div className="container-blue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Digital Marketing Consultancy')}</h3>
          <p className="edu">
            {t('We have partnered with a full-service digital marketing agency (S3 Visibility) specializing in optimizing the Google Ecosystem.')}
          </p>
        </div> 
     <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Telehealth Services')}</h3>
          <p className="edu">
            {t('Local or Telehealth Directory in which providers receive a video Interview for portal and HIPAA Compliant CRM systems for booking, handling insurance claims and enabled with Stripe. Note that we can embed your own calendar if you prefer.')}
          </p>
        </div> 
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Education')}</h3>
                    <p className="edu">{t('We work to make you an expert in your field by tailoring your education page to conditions people actively search for.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Published Studies')}</h3>
                    <p className="edu">{t("We publish your studies, reviews and researh to validate the effectiveness of your treatment method.")}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h3>{t('Insurance Reimbursement')}</h3>
                    <p className="edu">{t('We offer providers stake in our Apothecary for insurance reimbursement.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('International Credibility')}</h3>
                    <p className="edu">{t('Available in English, Spanish, French, Dutch, Simplified Chinese, Arabic and Hindi to establish your credibility internationally. Furthermore, we will have international webinars and live Summits featuring the expertise of providers.')}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Components;
