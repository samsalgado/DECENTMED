import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../images copy/background.jpg';

function Values() {
    const { t } = useTranslation("common");
    const learnmore = () => {
        window.location.href = 'https://themerlingroupworld.com/digitalmarketing'
    }
    return (
        <>
        <div className="container-bblue">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Education')}</h4>
                    <p className="edu">{t('Video Education Platform about Holistic Medicine and its various modalities. Our team offers interviews to all providers on the platform and seeks to collaborate with them to create educational series for their specific modality.')}</p>
                </div> 
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Showcasing Alternatives')}</h4>
                    <p className="edu">{t('Deemed as "alternative" in the 1970s, we strive to showcase and deepen the understanding of Holistic Medicine. Furthermore, funding studies and partnering with doctors that practice unique treatment offerings.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4"> 
                    <h4>{t('Treatment of Chronic Conditions')}</h4>
                    <p className="edu">{t('Our goal is to re-invest into the doctors on the platform to fund their research and studies.')}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Advanced Features')}</h4>
                    <p className="edu">{t('Features of the platform include: Data Analytics, Social Media Marketing, additional offering creation, interview showcases and AI-driven Solutions. For providers that do not have a website, we build custom pages.')}</p>
                </div>
            </div>
        </div>
        <div className="marketing-section">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div 
                        className="card text-center"
                        style={{ 
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: 'none',
                            height: '560px',
                            width:'100%',
                            color: 'white',
                        }}
                    >
                        <div className="card-body">
                            <p style={{ textAlign: 'right', color:'#FFFF00', marginLeft: '-0.5cm' }}>{t('Content Creation')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '-0.5cm' }}>{t('Video Editing')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '0.5cm' }}>{t('Advertising')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.7cm' }}>{t('Custom Storytelling')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{t('Automation')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{t('Data Reporting')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm' }}>{t('SEO (Local & National)')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{t('Webinar Creation')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm' }}>{t('Social Media Optimization')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{t('Custom Page Creation')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm' }}>{t('Conversion Optimization')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.6cm'}}>{t('Branding & Consultation')}</p>
                            <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{t('Email Marketing')}</p>
                            <button onClick={learnmore} className="btn btn-primary">{t('Learn More')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Values;
