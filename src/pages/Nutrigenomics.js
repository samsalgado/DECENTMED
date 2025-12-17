import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Nutri from './NUTR';
import { useTranslation } from 'react-i18next';
export function Nutrigenomics() {
const { t } = useTranslation('common');
    return(
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Nutrigenomics")}</title>  
        <meta name="description" content={t("Discover the best nutrigenomics services for weight management. Learn how DNA‑based nutrition can optimize metabolism, support healthy weight goals, and improve overall wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Nutri />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}