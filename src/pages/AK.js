import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import {Button} from 'react-bootstrap';
import Info8 from '../info/info8';
import { useTranslation } from 'react-i18next';
export function AppliedKinesiology() {
const { t } = useTranslation('common');
const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return(
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Applied Kinesiology")}</title>  
        <meta name="description" content={t("Seeking Applied Kinesiology near me? Learn about Applied Kineiology and its benefits! Discover the techniques used to help with Autism Disorder, pain, and other complex disorders. Learn more.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <Info8 />
         <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Join Trusted Network')}
                </Button> 
            <footer>
                <Footer />
            </footer>
        </div>
    )
    
}
