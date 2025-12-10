import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Traumapg from "../info/traumapg";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Trauma() {
const { t } = useTranslation('common');
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Trauma Systems Therapy")}</title>  
        <meta name="description" content={t("When searching trauma systems therapy, we feature the best trauma coaches and healers for men. Find a trauma coach or practitioner near you! Explore how Amazing Life Design can support your body's natural healing potential. Learn more about trauma systems therapy and its benefits.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Traumapg />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

