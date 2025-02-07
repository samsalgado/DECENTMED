import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import HYPNO from '../info/hypno';
import { useTranslation } from 'react-i18next';
export function Hypnotherapy() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Hypnotherapy")}</title>  
        <meta name="description" content={t("Learn about Hypnotherapy and its benefits! Discover the ancient wisdom and techniques used to help people cope with stress, anxiety, and mental health challenges. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <HYPNO />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}