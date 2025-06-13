import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Stacy from '../cards/celllab7.png'
import { useTranslation } from 'react-i18next'
export function StemPract() {
  const { t } = useTranslation('common');

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Stem Cell Therapy Near Me")}</title>  
        <meta name="description" content={t("Stem Cell Therapy near me? Look no further than great ayurvedists that can assist you holsitically, and provide you wholeness.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div class="container">
        <h1 style={{
          fontFamily: 'sans-serif'
        }}>{t("Stem Cell Therapy")}</h1>
          <h2>{t("Searching Stem Cell Therapy Near me? We have you covered!")}</h2>
        <div class="row" >
          <div class="col-md-4">
          </div>
        </div>

  <div class="ro">
    <div class="col-md-10">
      <h3>{t("Cell Lab 7")}</h3>
      <a href='https://www.celllab7.com/'>
    <figure>
        <img src={Stacy} alt="logo" />
          <figcaption>{t("Book a Call")}</figcaption>
        </figure>
      </a>
      <p>
      {t("At Cell Lab 7, we bring extensive expertise in Molecular and Cell Culture solutions to support the R&D sector, Biotech industry, and academia. Our training and consultancy services are designed to empower labs with the knowledge, infrastructure, and guidance needed to achieve excellence in laboratory operations. Partner with us to elevate your lab’s capabilities and meet the highest standards in research and development.")}
      </p>
    </div>
    </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )

}

