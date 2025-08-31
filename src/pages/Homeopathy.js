import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Homeo from "../info/homeopathypg";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Homeopathy() {
const { t } = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return( 
        <main className="page-content" style={{
            // Solution 2: Ensure no top margin/padding on main container
            marginTop: 0,
            paddingTop: 0
          }}>

    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Homeopathy Near Me")}</title>  
        <meta name="description" content={t("When searching homeopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a homeopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about homeopathy and its benefits.")} />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Homeo />
        <footer>
            <Footer />
        </footer>
    </div>
    </main>
    )
}

