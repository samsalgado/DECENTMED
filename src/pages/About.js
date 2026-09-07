import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import FAQ from '../info/faq';
import ANS from "../info/ans";
import { Helmet } from 'react-helmet';
export default function About({ t }) {
    return (
        <div>
            <Helmet>  {/* Add Helmet component */}
                <title>{t("About DecentMed | Holistic Health Information Portal")}</title>
        <meta property="og:title" content={t("About DecentMed | Holistic Health Information Portal")} />
        <meta name="description" content={t("The Merlin Group World is personally and professionally invested in the re-emergence of revolutionary therapies. Learn more about us.")} />
        </Helmet>
            <header>
                <Topbar />
            </header>
            <div >
            <FAQ />
             <br />
              <br />
                    <div className="container-blue" data-aos="slide-right">
            <ANS />
            </div>
            </div>
            <br />
            <footer>
            <Footer />
            </footer>
        </div>
    )
}


