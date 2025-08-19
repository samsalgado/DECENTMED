import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Info9 from '../info/info9';
import { useTranslation } from 'react-i18next';
export function Mindset() {
const { t } = useTranslation('common');
    return(
        <div>
         <main className="page-content">
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Law of Attraction: Mindset Coach")}</title>  
        <meta name="description" content={t("Seeking a Mindset coach? Learn about Applied Kineiology and its benefits! Discover the techniques used to help with Autism Disorder, pain, and other complex disorders. Learn more.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Info9 />
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    
}
