import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import System from "../info/system";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from "react-i18next";
export default function OurSystem () {
const { t } = useTranslation('common');
 const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Our System")}</title>
        <meta property="og:title" content={t("Our System")} />
        <meta name="description" content={t("MoreActive is an all-in-one digital wellness platform designed to streamline holistic health by integrating physical fitness, personalized nutrition, and mental health resources into a single accessible app.")} />
        </Helmet>
        <header>
            <Topbar />
        </header>
       <System />
         <div className="container-blue" style={{ textAlign: 'center' }}>
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

