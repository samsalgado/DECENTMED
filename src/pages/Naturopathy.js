import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Naturo from "../info/naturopathypg";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Naturopathy() {
const { t } = useTranslation('common');
    return( 
        <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>


        <Helmet>  {/* Add Helmet component */}
        <title>{t("Naturopathy Near Me")}</title>  
        <meta name="description" content={t("When searching naturopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a naturopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about naturopathy and its benefits.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Naturo />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

