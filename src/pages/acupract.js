import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Treis from '../cards/oceantreis.jpg';
import { useTranslation } from 'react-i18next'
export function Acupract() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Acupuncturist Near Me")}</title>  
        <meta name="description" content={t("Searching Acupuncturist near me? Look no further than our fantastic acupuncturist that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <div class="container">
            <h1>{t("Acupuncture")}</h1>
            <h2>{t("Searching Acupuncturist Near me? We have you covered!")}</h2>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Ocean Treis Medical")}</h3>
      <a href='https://oceantreismedical.acubliss.app/portal/booking/nettie-criscio/bradenton/'>
    <figure>
        <img src={Treis} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <div>
      <iframe
  src="https://drive.google.com/file/d/1hmNaUgvbJ7nI5rmKIliGsLDsmEmdUsoJ/preview"
  width="100%"
  height="315px"
  title="Acupuncture"
  allow="autoplay"
  allowFullScreen
></iframe>
</div>
  <h5>{t("Ocean Treis Medical:")}</h5>
      <p>
      {t("ocean")}
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
