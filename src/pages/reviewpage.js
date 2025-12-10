import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import Topbar from './topbar';
import Offer2 from '../offers/offer2';
import Offer from '../offers/offer';
import Reviews from '../info/reviews';
import Footer from '../footer';
import Pricing from "./pricingtiers";
import { Helmet } from 'react-helmet';
import Initial from "./initial";
export function ReviewPage() {
    const { t } = useTranslation("common");
    return(
        <div>
            <Helmet>
                <title>{t("Our Reviews")}</title>
                <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <Initial />
            <Reviews />
            {/* Centered image with mobile optimization */}
            <Pricing />
            <Offer2 />
            <Offer />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

