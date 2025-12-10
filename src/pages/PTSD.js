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
        <meta name="description" content={t("When searching naturopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a naturopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about naturopathy and its benefits.")} />
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

