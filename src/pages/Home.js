import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import Footer from '../footer';

import { Helmet } from'react-helmet'; // Import Helmet
export function Home({t}) {
    return (
        <>
        <Helmet>  
        <title>{t('Decent Med')}</title>  
        <meta name="description" content={t("Decent Med: explore a holistic approach to healthcare! We focus on natural healing and wellness practices that address the mind, body, and spirit. Learn more about holistic medicine and its benefits.")} />
      </Helmet>

        <header>
        <Topbar t={t} />
        </header>
            <Info t={t} />
       <br></br>
        <footer>
            <Footer t={t} />
        </footer>
    </>
    )
}
