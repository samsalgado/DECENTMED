import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import HYPNO from '../info/hypno';
import Hypnovids from '../info/hypnovids';
import { useTranslation } from 'react-i18next';
export function Hypnotherapy() {
const { t } = useTranslation('common');
    return(
        <main className="page-content">

        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Hypnotherapy")}</title>  
        <meta name="description" content={t("Learn about Hypnotherapy and its benefits! Discover the ancient wisdom and techniques used to help people cope with stress, anxiety, and mental health challenges. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <HYPNO />
            <br></br>
            <h1 className='center'>{t("Online Hypnotherapy")}</h1>
            <Hypnovids />
            <footer>
                <Footer />
            </footer>
        </div>
        </main>
    )
    
}