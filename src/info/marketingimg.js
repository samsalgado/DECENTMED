import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../images copy/background.jpg';
function Marketing() {
const learnmore = () => {
        window.location.href = 'https://themerlingroupworld.com/digitalmarketing'
    }
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
export default Marketing;
