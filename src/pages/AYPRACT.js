import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Stacy from '../cards/healinggoddess.png'
import { useTranslation } from 'react-i18next'
export function AYPract() {
  const { t } = useTranslation();

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Ayurveda Near Me")}</title>  
        <meta name="description" content={t("Ayurveda near me? Look no further than great ayurvedists that can assist you holsitically, and provide you wholeness.")} />
      </Helmet>

            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Ayurveda")}</h1>
 
  <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Heart of Wellness")}</h3>
      <a href='https://healinggoddessproducts.com/' />
    <figure>
        <img src={Stacy} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>Stacy Theodossin - The Healing Goddess      </h5>
      <p>
      {t("After Stacy graduated from San Diego State University in 1992, she moved to the Detroit area and began her career in sales and marketing.  She traveled the world and climbed the corporate ladder. But something was missing.  Before long, she was back to her studies – this time in Ayurvedic Medicine.  Her own journey to health and healing, through Ayurveda, had already begun a few years earlier -- when she was a patient with her own chronic health conditions. When she had the opportunity to deepen her knowledge, she jumped at the chance.  At first, it was from an academic standpoint.  She couldn’t wrap her mind around how it all worked.  After hours and years of study and residency, she found the answers she sought. Then, her mission was clear – she needed to teach others how to HEAL & TRANSFORM their own lives through Ayurveda, the 'wisdom of life'")}
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

