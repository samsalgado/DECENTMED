import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Info9 from '../info/info9';
import { useTranslation } from 'react-i18next';
export function Mindset() {
const { t } = useTranslation('common');
    return(
        <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Law of Attraction: Mindset Coach")}</title>  
        <meta name="description" content={t("Explore mindset coaching designed to build resilience, improve focus, and support personal growth. Learn how expert mindset coaching can help you overcome obstacles and achieve lasting change.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Info9 />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}
