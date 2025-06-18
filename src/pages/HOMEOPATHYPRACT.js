import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Lotus from '../cards/lotus.png';
import svet from "../cards/svetoslav.png";
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
            <p>{t("Whether you're searching for homeopathy near you or prefer online consultations, our featured practitioners offer both in-person and virtual homeopathic services.")}</p>
  <div class="row">
    <div class="col-md-4">
      <h3>{t("Riches of Health")}</h3>
      <a href='https://www.richesofhealth.co.za/index.php?'>
      <figure>
        <img src={svet} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>{t("Dr. Svetoslav Bulatov")}</h5>
      <p>
      {t("We are applying the best of ancient and modern medicine to resolve difficult cases. The integrative medicine looks at the whole person, not at the disease symptoms. We are educating professionals and public of missing links in medicine. We are doing an ongoing research to enable us to use the best diagnostic and healing methods for the highest benefit of the patient. We are running courses for health professionals and laymen on various topics. We have projects on Corporate Health Management, HIV/AIDS/TB, crime, etc. We only work with people that have a genuine desire to change their lifestyle, transform and heal themselves on spiritual, mental, emotional and physical level.")}
      </p>
      <p>{t("How much are our services?")}</p>
      <p>{t("Quantum leap bodywork is R1000 for 60 min and R1600 for 120 min. R1600 for online consultation.")}</p>
      <iframe src="https://iframe.iono.fm/chan/123" title='Homeopathy Podcast' width="100%" height="450" frameborder="0"></iframe>
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

