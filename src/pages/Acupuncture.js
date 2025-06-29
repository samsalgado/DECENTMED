import '../App.css';
import Info1 from '../info/info1';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Acupuncture({t}) {

    return(
        <div>
                <main className="page-content">
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Dry Needling vs Acupuncture")}</title>  
        <meta name="description" content={t("Dry Needling vs Acupuncture: Explore the differences and find the right approach for your pain relief needs. Learn more about these alternative therapies.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Info1 />
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    }


