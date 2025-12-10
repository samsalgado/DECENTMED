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
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t('Stem Cell Therapy')}</title>  
        <meta name="description" content="Unlock the potential of stem cell therapy! Explore how stem cells can be used to treat various conditions and promote healing. Learn more about this innovative therapy." />
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


