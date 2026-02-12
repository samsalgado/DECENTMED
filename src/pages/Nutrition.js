import '../App.css';
import Nutritionpage from '../info/nutritionpg';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import spectraspray from "../images copy/spectraspray.png";
import FuncVids from '../info/functionalvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import FuncModal from '../info/funcmodal';
export function Nutrition() {
    const { t } = useTranslation('common');
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }    
    return (
      <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
            <Helmet>  
                <title>{t('Dr Sebi Food List')}</title>
                                <meta property="og:title" content={t("Dr Sebi Food List & Nutrition Education")} />                
        <meta name="description" content={t("Dr Sebi Food List")} />        

                <meta name="description" content="Explore Dr. Sebi's nutritional food list to wellness. Discover obesity facts and how you can improve your nutrition. Learn more about Dr. Sebi's nutritional philosophy." />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <Nutritionpage />
        <br></br>
         <a href='https://www.spectraspray.com/shop' alt="spectra spray">
            <img className='gridimag' src={spectraspray} alt='spectra spray' />
             </a>
        <h1 className='center'>{t("Functional Nutrition")}</h1>
      <FuncVids />
      <FuncModal />
                                   <Button onClick={learnmore} className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 
            <footer className='foot'>
                <Footer />
            </footer>
        </div>
    )
}




