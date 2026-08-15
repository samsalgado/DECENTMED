import "../App.css";
import Topbar from "./topbar";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
import Footer from '../footer';
import Sibo from "../info/sibo";;
export default function SIBOTreatment() {
const { t } = useTranslation('common');
    return( 
        <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  
        <title>{t("What is Feldenkrais")}</title>  
        <meta name="description" content={t("How to Treat SIBO Naturally")} />        
        <meta name="description" content={t("Searching How to Treat SIBO Naturally? Functional Approaches & Gut Support")} />
        <meta name="description" content={t("If you are searching for how to treat SIBO naturally, you are not alone. Small Intestinal Bacterial Overgrowth (SIBO) is a complex condition, and many patients seek holistic approaches alongside their healthcare team.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Sibo />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

