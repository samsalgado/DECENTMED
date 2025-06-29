import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import FAQ from '../info/faq';
import { Helmet } from 'react-helmet';

export function About({ t }) {
    return (
        <div>
    <main className="page-content">

            <Helmet>  {/* Add Helmet component */}
                <title>{t("The Merlin Group World")}</title>
                <meta name="description" content={t("The Merlin Group World is personally and professionally invested in the re-emergence of revolutionary therapies. Learn more about us.")} />
            </Helmet>

            <header>
                <Topbar />
            </header>
            <FAQ />
            <footer>
            <Footer />
            </footer>
            </main>

        </div>
    )
}


