import '../App.css';
import PageWithTOC from '../Components/PageWithTOC';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import LynnPg from '../info/lynnpg';
import { useTranslation } from 'react-i18next';
export function Lynn() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Hypnosis & Narcissism")}</title>  
        <meta name="description" content={t("Explore the connection between narcissism and hypnosis. Discover how hypnosis can be used to address narcissistic behaviors, enhance self-awareness, and promote emotional healing. Learn more about the transformative potential of hypnosis.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
<PageWithTOC containerId="chiro-wrapper">
            <LynnPg />
</PageWithTOC>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}