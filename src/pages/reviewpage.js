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
                <meta
                name="description"
                content={t("Searching for a digital marketing agency near me? Read our reviews to see how clients benefit from data-driven SEO strategies and affordable PPC services like Google Ads and Meta Ads for their business growth.")}
                />
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

