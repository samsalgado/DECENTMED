import '../App.css';
import Topbar from './topbar';
import { useEffect } from 'react';
import Footer from '../footer';
import Ayurvedaa from '../info/ayurveda';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function Ayurveda() {
const {t} = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Ayurveda Experience")}</title>  
        <meta name="description" content={t("Experience the future of wellness in 2025. Explore The Ayurveda Experience for AI-guided mind-body balance, natural healing, and personalized holistic health.")} />
      </Helmet>
        <header>
        <Topbar />
        </header>
            <Ayurvedaa />
       <br></br>
       
        <footer>
            <Footer />
        </footer>
    </div>
    )
}
