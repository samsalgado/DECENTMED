import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Green from '../cards/Green-hypnotherapy.png';
import { useTranslation } from 'react-i18next'
export function Hypnopract() {
const { t } = useTranslation('common');

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Hypnotherapy Near Me")}</title>  
        <meta name="description" content={t("Hypnotherapy near me? Look no further than great hypnotherapists that can assist you with therapy and finding wholeness.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Hypnotherapy")}</h1>
              <h2>{t("Searching Hypnotherapy Near me? We have you covered!")}</h2>

  <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Green Hypnotherapy")}</h3>
        <img src={Green} alt="logo" />
      <a href="tel:+18134856761" style={{ textDecoration: 'none' }}>
  <button style={{ display: 'flex' }} className="btn btn-primary">
    {t("Contact")}
  </button>
</a>      <h5>{t("Sarah Green:")}</h5>
      <p>
      {t("Green Hypnotherapy, while focused on individual healing, is also currently working towards building a community of healers who practice different modalities, such as Eastern medicine and acupuncture, massage therapy, body work (i.e. yoga, etc), traditional mental health counseling, Western medicine, and so much more. The aim is to connect and integrate the practices to better serve our communities and offer support to other healers.")}
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
