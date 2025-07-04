import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import Ayurvedaa from '../info/ayurveda';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function Ayurveda() {
const {t} = useTranslation('common');
    return (
        <>
         <main className="page-content">
        
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Ayurveda Experience")}</title>  
        <meta name="description" content={t("Discover the transformative power of the Ayurveda Experience! Explore ancient practices for mind-body balance, natural healing, and a path to well-being. Learn more.")} />
      </Helmet>

        <header>
        <Topbar />
        </header>
            <Ayurvedaa />
       <br></br>
       
        <footer>
            <Footer />
        </footer>
        </main>
    </>
    )
}
