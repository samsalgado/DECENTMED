import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import { Button } from "react-bootstrap";
import Traumapg from "../info/traumapg";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export function Trauma() {
const { t } = useTranslation('common');
const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
  <title>{t("Trauma Systems Therapy & Trauma Release Exercises")}</title>     
                          <meta property="og:title" content={t("Trauma Systems Therapy & Trauma Release Exercises")} />                
        <meta name="description" content={t("Trauma Systems Therapy & Trauma Release Exercises")} />        
   
  <meta name="description" 
    content={t("Discover trauma systems therapy combined with trauma release exercises to support healing and resilience. Learn how expert trauma coaches and practitioners help men release stress, restore balance, and improve overall wellbeing.")} />    
     </Helmet>
        <header>
            <Topbar />
        </header>
        <Traumapg />
                          <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

