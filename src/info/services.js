import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation("common");

  return (
    <div className="container-bblue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Technical SEO')}</h4>
          <p className="edu">
            {t('- SEO & Social Media Audits')} <br />
            {t('- Keyword optimization')} <br />
            {t('- Improving page speed & web performance')} <br />
            {t('- Growing backlinks')} <br />
            {t('- Goal: Achieve top Google rankings')}
          </p>
        </div> 

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Holistic Telehealth Conferences')}</h4>
          <p className="edu">
            {t('- Hosting virtual & onsite holistic medicine conferences')} <br />
            {t('- Topics: Acupuncture, Chiropractic, Nutrition, Preventive Medicine, Stem Cell Therapy, Ayurveda, Chelation, Naturopathy, Hypnotherapy, and Homeopathy')} <br />
            {t('- Focus on education & industry promotion')}
          </p>
        </div> 

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Social Media Marketing')}</h4>
          <p className="edu">
            {t('- Managing social media accounts')} <br />
            {t('- Developing custom strategies for growth & engagement')} <br />
            {t('- Enhancing online presence')}
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Website Management')}</h4>
          <p className="edu">
            {t('- Custom page development')} <br />
            {t('- Backend security & maintenance')} <br />
            {t('- Marketing & analytics integration')}
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Web Analytics & Reporting')}</h4>
          <p className="edu">
            {t('- Weekly SEO audits using SEMRush, Moz, Google Search Console, and other tools')} <br />
            {t('- Data-driven insights to optimize performance')}
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Translated Website')}</h4>
          <p className="edu">
            {t('- Expand reach with multilingual support')} <br />
            {t('- Available in Spanish, Dutch, Portuguese, Hindi, and more')}
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
          <h4>{t('Security Services')}</h4>
          <p className="edu">
            {t('- Specialized security for healthcare data & providers')} <br />
            {t('- Security auditing & development to protect sensitive information')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
