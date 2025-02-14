import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import betterhealthsolutions from '../cards/betterheatlhsolutions.png'
import { useTranslation } from 'react-i18next'
export function Chiro() {
  const { t } = useTranslation('common');

    return(
        <div>
        <Helmet>
        <title>{t("Best Chiropractor Near Me")}</title>  
        <meta name="description" content={t("Best Chiropractor near me? Look no further than great chiropractors that can assist you holsitically, and provide you relief.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Chiropractic")}</h1>
 
  <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Better Health Solutions")}</h3>
      <a href='https://drkhayami.com/'>
    <figure>
        <img src={betterhealthsolutions} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>{t('Dr. Abbas Khayami')}</h5>
      <p>
      {t("In Scottsdale, AZ, chiropractic care could be just what you need! This type of healthcare focuses on diagnosing and treating problems with your muscles, bones, and joints, particularly those related to your spine. Chiropractors, as healthcare professionals, can help enhance nerve function, reduce pain, and promote healing through techniques like spinal adjustments.")}
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

