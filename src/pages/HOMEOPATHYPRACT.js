import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Lotus from '../cards/lotus.png'
import Shannon from '../cards/heartofwellness.png'
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
  <div class="row">
    <div class="col-md-6">
      <h3>{t("Heart of Wellness")}</h3>
      <a href='https://heartofwellness.org/'>
    <figure>
        <img src={Shannon} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>t{("Tim Shannon ND")}</h5>
      <p>
      {t("At Heart of Wellness, we offer a variety of services including family medicine and naturopathic services provided by our team of Naturopathic Physicians, Certified Nutritionist, and practitioners of Acupuncture & Asian Medicine. We also offer Massage Therapy and Physical Therapy to ensure that we are able to cater to your every need. Our focus is on healing your whole being, including your physical, emotional, mental, and spiritual well-being. We have a team of open-minded doctors who listen to and educate you, empowering you on your journey to optimum health and well-being with safe and effective treatments. Our facility has been rated as the number one health and medical center in the Olympia Washington area, and we encourage you to schedule an appointment and experience a different kind of healthcare.")}
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

