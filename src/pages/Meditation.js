import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
import MeditationVids from '../info/meditationvids';
import MeditationInfo from '../info/mediationinfo';
import MedBenefits from '../info/meditationbenefits';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export default function Meditation() {
const { t } = useTranslation('common');
 useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

                <Helmet>  {/* Add Helmet component */}
        <title>{t("Sleep Meditation")}</title>  
        <meta name="description" content={t("Discover the transformative power of Meditation! Sleep meditation and more; how meditation can help you heal. Learn more.")} />
      </Helmet>
        <header>
        <Topbar />
        </header>
            <MeditationInfo />
         <br />
      <MedBenefits />
       <br></br>
        <h1 className='center'>{t("Meditation 101")}</h1>
      <MeditationVids />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}
