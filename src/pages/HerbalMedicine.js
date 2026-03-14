import React, {useEffect} from 'react'
import Topbar from "./topbar";
import "../info/homeo.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herbal from '../info/Herbal';
import { Button } from 'react-bootstrap';
import PlantVids from '../info/Plantvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import Footer from '../footer';
import '../App.css'
import { useTranslation } from 'react-i18next';
const HerbalMedicine = () => {
const { t } = useTranslation('common');
        const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  useEffect(() => {
      AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
    }, []);
  return (
<div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>  {/* Add Helmet component */}
        <title>{t("Encyclopedia of Herbal Medicine")}</title>
                           <meta property="og:title" content={t("Encyclopedia of Herbal Medicine")} />                
        <meta name="description" content={t("Experience Encyclopedia of Herbal Medicine")} />

        <meta name="description" content={t("Encyclopedia of Herbal Medicine, the body has an immense regenerative potential to heal itself. Let herbal medicine transform your body! Explore how herbal medicine can support your body's natural healing potential. Learn more about herbal medicine and its benefits.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
        <Herbal />
        <br></br>
         <Button className="custom-btn" href="https://decentmed.org/apoth" target="_blank">
          {t("Explore Apothecary")}
          </Button>
         <div data-aos="slide-right" className="container-blue">
        <h1 data-aos="slide-right" className='center'>{t('Encyclopedia of Herbal Medicine')}</h1>
        <PlantVids />
        </div>
                                   <Button onClick={learnmore} target='_blank' className="custom-btn">
                                  {t('Providers: Signup Here')}
                </Button> 

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default HerbalMedicine