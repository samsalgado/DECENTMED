import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Lotus from '../cards/lotus.png'
import { useTranslation } from 'react-i18next'
export function HomeopathyPract() {
const { t } = useTranslation('common');

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Homeopathy Near Me")}</title>  
        <meta name="description" content={t("Homeopathy near me? Look no further than great homeopaths that can assist you holsitically, and provide you wholeness.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Homeopathy")}</h1>
             <h2>{t("Searching Homeopathy Near me? We have you covered!")}</h2>

  <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Lotus Potentia Holistics")}</h3>
      <a href='https://lotuspotentiaholistics.org/'>
    <figure>
        <img src={Lotus} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>{t("Kelechi Obasi")}</h5>
      <p>
      {t("Our approach to medicine serves to complete the flow of energy within your energy system, to restore and improve your overall health, mind, soul & body, and our complementary therapies which are a combination of modern and ancient traditional medical practices takes you on that journey for a more fulfilled life.")}
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

