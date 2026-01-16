import '../App.css';
import Pgchelation from '../info/chelation';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
export function Chelation() {
const { t } = useTranslation("common");
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
      const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }

    return(
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Heavy Metal Detox")}</title>  
        <meta name="description" content={t("Learn about heavy metal detoxification with chelation therapy. Explore the potential benefits and safety considerations. Find out if chelation is right for you. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>

            <Pgchelation />
  <Button onClick={learnmore} className="custom-btn">
                          {t('Providers: Join Trusted Network')}
                        </Button> 
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


