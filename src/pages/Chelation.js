import '../App.css';
import Pgchelation from '../info/chelation';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';

export function Chelation() {
const { t } = useTranslation("common");
    return(
        <div>
      <main className="page-content">

        <Helmet>  {/* Add Helmet component */}
        <title>{t("Heavy Metal Detox")}</title>  
        <meta name="description" content={t("Learn about heavy metal detoxification with chelation therapy. Explore the potential benefits and safety considerations. Find out if chelation is right for you. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Pgchelation />
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    }


