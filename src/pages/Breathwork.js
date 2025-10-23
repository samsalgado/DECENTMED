import '../App.css';
import PageWithTOC from '../Components/PageWithTOC';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import BREATH from '../info/br';
import { useTranslation } from 'react-i18next';
export function Breathworkk() {
const { t } = useTranslation('common');
    return(
        <div>
         <main className="page-content">

        <Helmet>  {/* Add Helmet component */}
        <title>{t("Somatic Breathwork")}</title>  
        <meta name="description" content={t("Learn about Somatic breathwork and its benefits! Discover the ancient wisdom and techniques used to help people cope with stress, anxiety, and mental health challenges. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
<PageWithTOC containerId="chiro-wrapper">

            <BREATH />
</PageWithTOC>

            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    
}