import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PreventWellness from '../info/preventwellness';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Prevent() {
      const { t } = useTranslation('common');
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }   
    return(
      <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

             <Helmet>  {/* Add Helmet component */}
        <title>Cellular Regeneration</title>  
        <meta name="description" content="Cellular regneration, your health is interconnected to your external environment, energy source, and internal body functions. Explore how preventive wellness can help you in your health journey." />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <PreventWellness />
                                         <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

