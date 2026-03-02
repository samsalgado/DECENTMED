import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Components() {
  const { t } = useTranslation("common");

  return (
    <div className="container-blue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Conversion Optimization Consulting')}</h3>
          <p className="edu">
            {t('We offer a system tailored conversion system designed to increasing patient acquisition for providers. Our strategies stretch beyond our website, offering comprehensive sales and marketing services tailored to meeting your goals.')}
          </p>
        </div> 
     <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Innovative Telehealth')}</h3>
          <p className="edu">
            {t('Unlike other telehealth platforms, our location-based telehealth directory is designed for system optimization and patient acquisition. DecentMed offers a CRM called Carepatron equipped with insurance capabilities, calendar, Google Suite, Zoom and paired with Stripe. Our goal is system optimization, providers can either utilize their own systems, receive training on our systems or we can manage the CRM for you.')}
          </p>
        </div> 
            <div className="row justify-content-center">
              
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h3>{t('Decentralized Medicine')}</h3>
                    <p className="edu">{t('At DecentMed, we post provider studies, educational content and testimonials on a decentralized network (Nostr) to combat censorship, validate the effectiveness of your work and increase patient acquisition for providers. We strive to create a new system of healthcare that works for both the patient and provider. To accomplish this feat, we offer equity in the project to providers via affiliate programs (15%), content library (5%) and Global Apothecary (5%). The apothecary will also payout patients in order to make treatments more affordable overtime.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Holistic Health Collective')}</h3>
                    <p className="edu">{t('Our platform is available in English, Spanish, French, Dutch, Simplified Chinese, Arabic and Hindi (plans to add more) to offer holistic medicine globally. Furthermore, we will host international webinars and live Summits for providers to grow their referral networks, authority and overall awareness of holistic medicine.')}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Components;
