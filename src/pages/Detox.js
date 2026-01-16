import '../App.css';
import Topbar from './topbar';
import Info3 from '../info/info3';
import { Button } from 'react-bootstrap';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import PageWithTOC from '../Components/PageWithTOC';
export function Detox() {
    const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }

    return (
         <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

                <Helmet>  {/* Add Helmet component */}
                    <title>{t("3 Day Detox Cleanse")}</title>
                    <meta name="description" content={t("3 Day Detox cleanse can clean the body from toxins. A detox cleanse is a great way to reset your cells into ketosis. Jumpstart your health journey!")} />
                </Helmet>

                <header>
                    <Topbar />
                </header>

                <PageWithTOC  containerId="chiro-wrapper">
                <Info3 />
                <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 
                </PageWithTOC>
                <footer>
                    <Footer />
                </footer>
        </div>
    )

}

