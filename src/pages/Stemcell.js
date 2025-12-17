import '../App.css';
import Topbar from './topbar';
import Stem from '../info/stem';
import Footer from '../footer';
import { useEffect } from 'react';
import "../App.css";

import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function StemCell() {
const {t} = useTranslation('common')
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t('Stem Cell Therapy')}</title>  
        <meta
          name="description"
          content={t("Discover how Mesenchymal Stem Cell therapy supports tissue repair, reduces inflammation, and promotes natural healing for a wide range of conditions.")}        />      
</Helmet>
            <header>
            <Topbar />
            </header>
            <Stem />
            <br></br>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


