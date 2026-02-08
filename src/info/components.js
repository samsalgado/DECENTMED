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
            {t('We optimize your Google Business Profile, website and social media for conversions to increase your sales.')}
          </p>
        </div> 
     <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Telehealth Services')}</h3>
          <p className="edu">
            {t('Local or Telehealth Directory in which providers receive a Video Interview for portal and HIPAA Compliant CRM (Carepatron) systems for booking, handling insurance claims and enabled with Stripe. Note that we can embed your own calendar if you prefer.')}
          </p>
        </div> 
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Education')}</h3>
                    <p className="edu">{t('To grow awareness in your modality and increase patient acquisition, we publish your educational content on the platform - video, written and graphic content.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Published Studies')}</h3>
                    <p className="edu">{t("We publish your studies, reviews and researh to validate the effectiveness of your treatment method.")}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h3>{t('Decentralized Medicine Payout')}</h3>
                    <p className="edu">{t('We offer provider payouts from our Apothecary, Content Library and various Affiliate Programs like Promeed.com, Wish Garden Herbs and more.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Holistic Health Collective')}</h3>
                    <p className="edu">{t('Available in English, Spanish, French, Dutch, Simplified Chinese, Arabic and Hindi to establish your authority internationally. Furthermore, we will host international webinars and live Summits for providers to grow their referral networks and overall awareness of holistic medicine.')}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Components;
