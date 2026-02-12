import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import HYPNO from '../info/hypno';
import Hypnovids from '../info/hypnovids';
import { useTranslation } from 'react-i18next';
export function Hypnotherapy() {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
    return(
      <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>  {/* Add Helmet component */}
        <title>{t("Hypnotherapy")}</title>  
                        <meta property="og:title" content={t("Hypnotherapy")} />                
        <meta name="description" content={t("Hypnotherapy")} />        

        <meta name="description" content={t("Learn about Hypnotherapy and its benefits! Discover the ancient wisdom and techniques used to help people cope with stress, anxiety, and mental health challenges. Learn more.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <HYPNO />
            <br></br>
            <h1 className='center'>{t("Hypnotherapy Services")}</h1>
            <Hypnovids />
                                   <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}