import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Nutri from './NUTR';
import { useTranslation } from 'react-i18next';
export function Nutrigenomics() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Nutrigenomics")}</title>  
        <meta name="description" content={t("Discover how Nutrigenomics and Somatic Breathwork can support mental health, reduce stress and anxiety, and restore balance. Explore ancient techniques blended with modern science to enhance your well-being.")} />
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