import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import Footer from '../footer';
export function Home() {
    const { t } = useTranslation('common');
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
<Footer></Footer>

            </footer>

        </>
    )
}
