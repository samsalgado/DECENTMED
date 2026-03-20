import '../App.css';
import Providers from '../info/providrs';
import Footer from '../footer';
import { useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import LOGO from "../images copy/dmed.png";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function ProviderLandingPage() {
const {t} = useTranslation('common')
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
     

    return(
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t('Provider Landing')}</title>  
        <meta property="og:title" content={t("Provider Landing Page")} />                
        <meta name="description" content={t("Provider Landing Page")} />        
        <meta
          name="description"
          content={t("Discover how Mesenchymal Stem Cell therapy supports tissue repair, reduces inflammation, and promotes natural healing for a wide range of conditions.")}        />      
</Helmet>
<Navbar.Brand href="https://decentmed.org/" className="d-flex align-items-center">
          <img src={LOGO} className="Logo" alt="logo" />
        </Navbar.Brand>

            <Providers />
                             
            <br></br>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


