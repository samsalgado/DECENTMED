import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import Chiro from '../info/chiro';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Chiropractic({t}) {
    return(
        <div>
                    <Helmet>  {/* Add Helmet component */}
        <title>{t("Chiropractor Near Me")}</title>  
        <meta name="description" content={t("When searching chiropractor near me, we have the volume of chiropractors worldwide. Find a chiropractors near you! Explore how chiropractors can support your body's natural healing potential. Learn more about chiropractic care and its benefits.")}/>
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Chiro />
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

