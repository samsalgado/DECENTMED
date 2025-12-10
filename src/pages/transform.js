import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Benefitts from './Transbenefits';
import { useTranslation } from 'react-i18next';
export function Transformational() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Transformative Coaching")}</title>  
        <meta name="description" content={t("Learn about transformative coaching and its benefits! Discover the ancient wisdom and techniques used to help people cope with stress, burnout, and more. Learn more.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Benefitts />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}