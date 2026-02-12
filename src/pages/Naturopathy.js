import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import { Button } from "react-bootstrap";
import Naturo from "../info/naturopathypg";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Naturopathy() {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
    return( 
        <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>


        <Helmet>  {/* Add Helmet component */}
        <title>{t("Naturopathy Near Me")}</title>  
                          <meta name="description" content={t("Naturopathy Near Me")} />        
        <meta name="description" content={t("Naturopathy Near Me")} />
        <meta name="description" content={t("When searching naturopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a naturopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about naturopathy and its benefits.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Naturo />
              <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

        <footer>
            <Footer />
        </footer>
    </div>
    )
}

