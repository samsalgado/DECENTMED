import React from "react";
import '../App.css';
import SEO from '../info/seo';
import { useTranslation } from 'react-i18next';
import AdditionalServices from '../info/Additional';
import Topbar from './topbar';
import AuditVids from '../info/audits';
import Offer2 from '../offers/offer2';
import Offer from '../offers/offer';
import Reviews from '../info/reviews';
import Footer from '../footer';
import price from "../images copy/TIER_3.png";
import { Helmet } from 'react-helmet';

export function Marketing() {
    const { t } = useTranslation("common");
    return(
        <div>
                            <main className="page-content">

            <Helmet>
                <title>{t("Digital Marketing agency near me")}</title>
                <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <SEO />
            
            {/* Reduced spacing */}
            <div style={{ marginBottom: '1rem' }}></div>
            
            <AdditionalServices />
            <AuditVids />
            {/* Centered image with mobile optimization */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '0 1rem', // Add padding for mobile
                marginBottom: '1rem', // Reduced margin
            }}>
                <img 
                    src={price} 
                    alt='Price' 
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                    }}
                />
            </div>

            <Offer2 />
            <Offer />
            <Reviews />
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
}

