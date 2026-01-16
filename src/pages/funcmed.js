import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Info11 from '../info/info11';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
export function FuncMed() {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Functional Medicine")}</title>  
        <meta name="description" content={t("Learn about Functional Medicine and its benefits! Discover the ancient wisdom and techniques used to help people cope with lifestyle changes and mental health challenges. Learn more.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
           <Info11 />
                           <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Join Trusted Network')}
                </Button> 

            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}