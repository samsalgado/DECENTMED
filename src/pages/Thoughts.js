import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import Info9 from '../info/info9.js';
import { useTranslation } from 'react-i18next';
export function Mindset() {
const { t } = useTranslation('common');
const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return(
     <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Law of Attraction: Mindset Coach")}</title>  
        <meta name="description" content={t("Explore mindset coaching designed to build resilience, improve focus, and support personal growth. Learn how expert mindset coaching can help you overcome obstacles and achieve lasting change.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Info9 />
                             <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Join Trusted Network')}
                </Button>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}
