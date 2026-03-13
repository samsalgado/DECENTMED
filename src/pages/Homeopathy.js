import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import { Button } from "react-bootstrap";
import Homeo from "../info/homeopathypg";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Homeopathy() {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return( 
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>  {/* Add Helmet component */}
        <title>{t("Homeopathy Near Me")}</title>  
                        <meta property="og:title" content={t("Homeopathy Near Me")} />                
        <meta name="description" content={t("Homeopathy Near Me")} />
        <meta name="description" content={t("When searching homeopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a homeopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about homeopathy and its benefits.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Homeo />
                           <Button onClick={learnmore} target="_blank" className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

        <footer>
            <Footer />
        </footer>
    </div>
    )
}

