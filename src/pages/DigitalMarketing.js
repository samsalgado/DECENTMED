import '../App.css';
import SEO from '../info/seo';
import AdditionalServices from '../info/Additional';
import Topbar from './topbar';
import AuditVids from '../info/audits';
import Reviews from '../info/reviews';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Marketing({t}) {

    return(
        <div>
     <Helmet>  {/* Add Helmet component */}
        <title>{t("Digital Marketing agency near me")}</title>
        <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <SEO />
        <br></br>
        <AdditionalServices />
        <AuditVids />
        <Reviews />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }
