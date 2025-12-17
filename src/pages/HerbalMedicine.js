import React from 'react'
import Topbar from "./topbar";
import "../info/homeo.css";
import Herbal from '../info/Herbal';
import { Button } from 'react-bootstrap';
import PlantVids from '../info/Plantvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import Footer from '../footer';
import '../App.css'
import { useTranslation } from 'react-i18next';
const HerbalMedicine = () => {
const { t } = useTranslation('common');
  return (
<div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>  {/* Add Helmet component */}
        <title>{t("Encyclopedia of Herbal Medicine")}</title>
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
        <h1 className='center'>{t('Encyclopedia of Herbal Medicine')}</h1>
        <PlantVids />
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default HerbalMedicine