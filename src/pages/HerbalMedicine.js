import React from 'react'
import Topbar from "./topbar";
import "../info/homeo.css";
import Herbal from '../info/Herbal';
import PlantVids from '../info/Plantvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import Footer from '../footer';
import '../App.css'
const HerbalMedicine = ({ t }) => {

  return (
    <div className='wrapper'>
      <Helmet>  {/* Add Helmet component */}
        <title>{t("Encyclopedia of Herbal Medicine")}</title>
        <meta name="description" content={t("Encyclopedia of Herbal Medicine, the body has an immense regenerative potential to heal itself. Let herbal medicine transform your body! Explore how herbal medicine can support your body's natural healing potential. Learn more about herbal medicine and its benefits.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <main className='content'>
        <Herbal />
        <br></br>
        <h1 className='center'>Encyclopedia of Herbal Medicine</h1>
        <PlantVids />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>

  )
}

export default HerbalMedicine