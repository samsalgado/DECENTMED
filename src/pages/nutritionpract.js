import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import ReactPlayer from 'react-player';
import Nutrifyourlife from '../cards/nutrifyourlife.jpg';
import { useTranslation } from 'react-i18next'
export function Nutritionpract() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Nutritionist Near Me")}</title>  
        <meta name="description" content={t("Nutritionist near me? Look no further than our fantastic nutritionists that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Nutrition")}</h1>
            <h2>{t{Look no further when searching nutritionist near me on Google. We have the best nutritionist from around the world to serve you!")</h2>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Nutrify Your Life")}</h3>
      <a href='https://www.nutrifyourlife.com/'>
    <figure>
        <img src={Nutrifyourlife} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <div>
      <ReactPlayer
url="https://www.youtube.com/embed/Lz60aWbAI4Y?si=d9m5dVAgmJooSSwb"
height='400px'
width="100%"
controls={true}
/>
</div>
  <h5>Nutrify Your Life: </h5>
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
    )
    
}
