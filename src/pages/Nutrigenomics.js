import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import Nutri from './NUTR';
import { useTranslation } from 'react-i18next';
export function Nutrigenomics() {
const { t } = useTranslation('common');
     const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
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
                                               <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}