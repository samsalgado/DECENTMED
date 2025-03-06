import '../App.css';
import SEO from '../info/seo';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Digital Marketing({t}) {

    return(
        <div>
     <Helmet>  {/* Add Helmet component */}
        <title>{t("Digital marketing agency near me")}</title>
        <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <SEO />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }