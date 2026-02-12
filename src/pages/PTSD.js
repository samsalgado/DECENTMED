import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Ptsdd from "../info/ptsd";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function PTSD() {
const { t } = useTranslation('common');
 const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("CPTSD vs PTSD")}</title>  
                                                                  <meta property="og:title" content={t("CPTSD vs PTSD")} />                
        <meta name="description" content={t("CPTSD vs PTSD")} />        
        <meta name="description" content={t("Navigate 2025's latest insights on CPTSD vs PTSD. Understand the key differences in symptoms, causes, and specialized recovery paths for complex trauma.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
       <Ptsdd />
                                          <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

        <footer>
            <Footer />
        </footer>
    </div>
    )
}

