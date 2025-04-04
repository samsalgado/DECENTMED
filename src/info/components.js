import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Components() {
  const { t } = useTranslation("common");

  return (
    <div className="container-bblue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Digital Marketing Services')}</h4>
          <p className="edu">
            {t('We showcase your Holistic Medicine company using AI-driven marketing strategies, data analytics, and social media management to drive business growth.')}
          </p>
        </div> 
     <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Telehealth Services')}</h4>
          <p className="edu">
            {t('Our website is translated into multiple languages: Spanish, French, Dutch, Arabic (more if nec.) and English. We offer telehealth services to connect you with patients throughout the world.')}
          </p>
        </div> 
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Content Creation')}</h4>
          <p className="edu">
            {t('Transforming your content into videos for social media and your website. Video production or documentary creation for your company.')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Admin Privileges on Mobile App')}</h4>
          <p className="edu">
            {t('There is a mobile app equivalent of this project. Members of the coalition can post content on the mobile app and other admin privileges.')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Backlink Service')}</h4>
          <p className="edu">
            {t('Providers get access to backlinks via Blogs, videos and branded content. The education pages are your canvas. All content showcased on the education page will be branded to your respective practice. We strive to create residual income for our providers; creating E-Books, Webinars or other content to sell to your audience')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Profit Share')}</h4>
          <p className="edu">
            {t('Providers get access to profits from our Apothecary and showcased Cancer documentaries.')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Components;
