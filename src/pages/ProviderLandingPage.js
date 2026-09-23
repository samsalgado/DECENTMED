import '../App.css';
//import Providers from '../info/providrs';
import Providerpage from '../info/providerpage';
import { useEffect } from 'react';
import "../App.css";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Topbar from './topbar';
import Footer from '../footer';
import { buildProviderFaqSchema } from '../info/providerFaq';

// FAQPage structured data (Answer Engine Optimization) - lets AI search
// tools and Google's answer boxes lift these provider Q&As directly and
// cite this page as the source, driving provider searches here. The visible
// FAQ content it mirrors is rendered by ProviderFaqSection inside
// Providerpage. See HolisticHealthFAQ.js for the same pattern.
const providerFaqSchema = buildProviderFaqSchema();

export function ProviderLandingPage() {
  const {t} = useTranslation('common');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Provider Sign Up')}</title>
        <meta property="og:title" content={t("Provider Sign Up")} />
        <meta name="description" content={t("Join DecentMed's holistic provider network to get listed in our patient-facing directory, access telehealth booking, and grow your practice with built-in marketing and patient acquisition support.")} />
        <script type="application/ld+json">{JSON.stringify(providerFaqSchema)}</script>
        </Helmet>
      <Topbar />
             <Providerpage />
      <Footer />
    </div>
  );
}