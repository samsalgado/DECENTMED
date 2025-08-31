import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import Chiro from '../info/chiro';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function Chiropractic() {
const { t } = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(
        <div>
 <main className="page-content" style={{
            // Solution 2: Ensure no top margin/padding on main container
            marginTop: 0,
            paddingTop: 0
          }}>
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
            </main>
        </div>
    )

}

