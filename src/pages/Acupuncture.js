import '../App.css';
import Info1 from '../info/info1';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import PageWithTOC from '../Components/PageWithTOC';
export function Acupuncture({ t }) {

    return (
        <div>
                <Helmet>  {/* Add Helmet component */}
                    <title>{t("Acupuncture Therapy")}</title>
                    <meta name="description" 
                      content={t("Acupuncture Therapy: Learn the key differences in Dry Needling vs Acupuncture, and so much more. Explore how traditional techniques differ in our comprehensive guide.")} />
                </Helmet>
                <header>

                    <Topbar />
                </header>
                <PageWithTOC containerId="chiro-wrapper">
                    <Info1 />
                </PageWithTOC>
                <footer>
                    <Footer />
                </footer>
        </div>
    )
}


