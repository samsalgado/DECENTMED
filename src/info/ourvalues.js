import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

function Values() {
    const { t } = useTranslation("common");

    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Education')}</h4>
                    <p className="edu">{t('Education Description')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Showcasing Alternatives')}</h4>
                    <p className="edu">{t('Alternatives Description')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Treatment of Chronic Conditions')}</h4>
                    <p className="edu">{t('Chronic Conditions Description')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Advanced Features')}</h4>
                    <p className="edu">{t('Advanced Features Description')}</p>
                </div>
            </div>
        </div>
    );
}

export default Values;
