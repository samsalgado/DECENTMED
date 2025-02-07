import '../App.css';
import Topbar from './topbar';
import Info3 from '../info/info3';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function Detox() {
const { t } = useTranslation('common');
    return(
        <div>
                    <Helmet>  {/* Add Helmet component */}
        <title>{t("3 Day Detox Cleanse")}</title>  
        <meta name="description" content={t("3 Day Detox cleanse can clean the body from toxins. A detox cleanse is a great way to reset your cells into ketosis. Jumpstart your health journey!")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Info3 />
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

