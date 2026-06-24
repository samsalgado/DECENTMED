import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Meno from "../info/meno";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export default function Menopause() {
const { t } = useTranslation('common');
    return( 
        <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Menopause")}</title>  
                          <meta name="description" content={t("Perimenopause vs Menopause and Postmenopause")} />        
        <meta name="description" content={t("Perimenopause vs Menopause and Postmenopause")} />
        <meta name="description" content={t("When searching Perimenopause vs Menopause and Postmenopause, remember that the body has an immense regenerative potential to heal itself. Find a practitioner that can help you address your needs.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Meno />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

