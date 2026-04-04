import "../App.css";
import 'aos/dist/aos.css';
import Topbar from "./topbar";
import Footer from '../footer';
import { Button } from "react-bootstrap";
import Grief from "../info/grief";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function WomensTrauma() {
const { t } = useTranslation('common');
const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
   
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
  <title>{t("Womens Trauma Therapy Treatment")}</title>     
                          <meta property="og:title" content={t("Womens Trauma Therapy Treatment")} />                
        <meta name="description" content={t("Womens Trauma Therapy Treatment")} />        
  <meta name="description" 
    content={t("Discover Womens Trauma Therapy Treatment combined with trauma release exercises to support healing and resilience. Learn how expert trauma coaches and practitioners help men release stress, restore balance, and improve overall wellbeing.")} />    
     </Helmet>
        <header>
            <Topbar />
        </header>
        <Grief />
        <div className="container-blue">
        <Button onClick={learnmore} className="custom-btn">
        {t('Providers: Signup Here')}
        </Button> 
                </div>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

