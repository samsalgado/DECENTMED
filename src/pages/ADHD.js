import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import Adhdberg from '../info/adhdberg';
import { useTranslation } from 'react-i18next';
export function ADHD() {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
 
    return(
      <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("ADHD Iceberg")}</title>  
        <meta property="og:title" content={t("ADHD Iceberg")} />                
        <meta name="description" content={t("ADHD Iceberg")} />        
        <meta name="description" content={t("Learn about the ADHD Iceberg and how coaching can help! Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Adhdberg />
                                                           <div className="container-blue">

             <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 
</div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}