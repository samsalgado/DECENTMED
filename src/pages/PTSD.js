import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Ptsdd from "../info/ptsd";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function PTSD() {
const { t } = useTranslation('common');
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("CPTSD vs PTSD")}</title>  
        <meta name="description" content={t("Navigate 2025's latest insights on CPTSD vs PTSD. Understand the key differences in symptoms, causes, and specialized recovery paths for complex trauma.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
       <Ptsdd />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

