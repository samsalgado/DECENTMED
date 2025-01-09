import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import MeditationInfo from '../info/mediationinfo';
import { Helmet } from 'react-helmet'; // Import Helmet
export default function Meditation({t}) {
    return (
        <>
                <Helmet>  {/* Add Helmet component */}
        <title>{t("Sleep Meditation")}</title>  
        <meta name="description" content={t("Discover the transformative power of Meditation! Sleep meditation and more; how meditation can help you heal. Learn more.")} />
      </Helmet>

        <header>
        <Topbar />
        </header>
            <MeditationInfo />
       <br></br>
       
        <footer>
            <Footer />
        </footer>
    </>
    )
}