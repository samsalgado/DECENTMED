import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
function Values() {
    const { t } = useTranslation("common");
    
    return (
        <>
        <div className="container-blue">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Education')}</h3>
                    <p className="edu">{t('Video Education Platform featuring each Holistic Medicine modality. Our team offers interviews to all providers on the platform and seeks to collaborate with them to create educational series for their specific modality.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t('Standardized Documentation')}</h3>
                    <p className="edu">{t("Boosting evidence-based claims by posting provider studies on our platform and a decentralized network.")}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h3>{t('Decentralized Insurance')}</h3>
                    <p className="edu">{t('One issue holistic medicine faces is low insurance reimbursements. By joining our platform, providers get equity in our apothecary. The sales from the apothecary are stored on a blockchain. The equity will be used to make treatments less expensive while funding providers from the apothecary.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                <h3>
        <a 
            href="https://themerlingroupworld.com/digitalmarketing" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
        >
            {t('Holistic Marketing')}
        </a>
    </h3>                    <p className="edu">{t('Facilitating patient acquisition and management via video marketing, active social marketing strategies and management systems for website and social media to differentiate your practice.')}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Values;
