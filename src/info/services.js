import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation("common");
  return (
    <div className="container-blue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Ensuring Visibility in a Decentralized World')}</h3>
          <p className="edu">
            {t('- Interview Showcases to grow public awareness')} <br />
            {t('- Keyword optimization to ensure that your practice gets in front of your target market')} <br />
            {t('- Goal: Achieve top Google rankings')}
          </p>
        </div> 
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Holistic Summits & Conferences')}</h3>
          <p className="edu">
            {t('- Hosting virtual & onsite holistic medicine conferences')} <br />
            {t('- Paid providers receive speaking engagements and percent of sales from summits')} <br />
            {t('- Focus on education & industry promotion')}
          </p>
        </div> 
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Increase your Patient Bookings')}</h3>
          <p className="edu">
            {t('- Active Social Marketing Strategies to increase patient acquisition')} <br />
            {t('- Analytics to ensure that your practice is growing')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Streamlined Patient Management & Automated Followup')}</h3>
          <p className="edu">
            {t('- New technology into your website and business to ensure that your CRM system is efficient')} <br />
            {t('- AI Integration into your website for increased patient acquisition, management and retention')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Global Reach')}</h3>
          <p className="edu">
            {t('- Expand reach with multilingual pages')} <br />
            {t('- Available in Spanish, Dutch, French, Hindi, and more')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h3>{t('Increased Thought Leadership for Holistic Medicine')}</h3>
          <p className="edu">
            {t('- Publishing provider studies and showcase interviews to grow awareness')} <br />
            {t('- Dispelling misconceptions about holistic medicine by showcasing holistic treatments and therapies')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
