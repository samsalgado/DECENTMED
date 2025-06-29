import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Nutrifyourlife from '../cards/nutrifyourlife.jpg';
import { useTranslation } from 'react-i18next'
export function Nutritionpract() {
const { t } = useTranslation('common');
    return(
      <main className="page-content">
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Nutritionist Near Me")}</title>  
        <meta name="description" content={t("Searching Nutritionist near me? Look no further than our fantastic nutritionists that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Nutrition")}</h1>
            <h2>{t("Searching Nutritionist Near me? We have you covered!")}</h2>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Nutrify Your Life")}</h3>
      <a href="tel:+12038295349">
    <figure>
        <img src={Nutrifyourlife} alt="logo" />
          <figcaption>{t("Contact")}</figcaption>
        </figure>
      </a>
      <div>
      <iframe
  src="https://drive.google.com/file/d/1FAa9HGZ_ABcLCE-75EbRyitItoW5FFmg/preview"
  width="100%"
  height="355px"
  allow="autoplay"
  title='nutrition provider'
  frameBorder="0"
  allowFullScreen
></iframe>
</div>
  <h5>{t("Nutrify Your Life:")}</h5>
      <p>
      {t("Welcome to Nutrifyourlife, where I am on a mission to revolutionize healthcare and empower individuals to take control of their health through diet and lifestyle modifications. My personalized functional medicine and nutrition sessions are tailored to your specific needs and goals whether it's weight loss, managing chronic conditions, or improving overall well-being. I work closely with you to create a customized plan that aligns with your preferences and health goals.")}
      </p>
    </div>
  </div>
</div>
            <footer>
                <Footer />
            </footer>
        </div>
        </main>
    )
    
}
