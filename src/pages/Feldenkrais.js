import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Feld from "../info/feld";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export default function Feldenkrais() {
const { t } = useTranslation('common');
    return( 
        <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("What is Feldenkrais")}</title>  
        <meta name="description" content={t("Naturopathy Near Me")} />        
        <meta name="description" content={t("What is Feldenkrais")} />
        <meta name="description" content={t("What is Feldenkrais? Discover the Feldenkrais Method: a gentle, somatic therapy that uses mindful movement to retrain your nervous system, relieve chronic pain, and improve mobility.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Feld />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

