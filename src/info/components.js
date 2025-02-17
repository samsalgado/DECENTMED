import React from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

function Components() {
  const { t } = useTranslation("common");

  return (
    <div className="container-bblue">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Digital Business Card')}</h4>
          <p className="edu">
            {t('Showcase your company with a direct link to your booking page. The practices above will take users to a scrollview of As the project scales, there will be built-in 24 hour scheduler. Finally, all providers on the platform receive a showcase interview for your Telehealth portal.')}
          </p>
        </div> 
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Access to Client Databases')}</h4>
          <p className="edu">
            {t('You will gain access to patients who signup for forms throughout the application.')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Admin Privileges on Mobile App')}</h4>
          <p className="edu">
            {t('There is a mobile app equivalent of this project. Members of the coalition can post content on the mobile app and other admin privileges.')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Branded Content')}</h4>
          <p className="edu">
            {t('Providers get to showcase their content on our Blog page and various Education pages. The education pages are your canvas. All content showcased on the education page will be branded to your respective practice.')}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
          <h4>{t('Access to Herb & Cancer Studies/Trials')}</h4>
          <p className="edu">
            {t('Providers get to be the face of our Cancer Studies and various trials for our Herbs and their distinct uses.')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Components;
