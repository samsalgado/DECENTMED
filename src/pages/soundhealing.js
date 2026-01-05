import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Info10 from '../info/Info10';
import { useTranslation } from 'react-i18next';
export function Soundhealing() {
const { t } = useTranslation('common');
    return(
     <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Healing Sounds")}</title>  
            <meta name="description" content={t("Discover the power of healing sounds to reduce stress, enhance relaxation, and promote emotional well-being. Experience therapeutic sound frequencies that support your journey to inner peace and balance.")} />      </Helmet>
            <header>
            <Topbar />
            </header>
            <Info10 />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}
