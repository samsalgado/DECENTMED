import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import Meridian from '../cards/meridian.png';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
export function Natpract() {
const { t } = useTranslation('common');
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    return(
        <div>
        <main className="page-content">
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Naturopathy Near Me")}</title>  
        <meta name="description" content={t("Searching Nutritionist near me? Look no further than our fantastic nutritionists that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Naturopathy")}</h1>
            <p>{t("Searching Naturopathy Near me? We have you covered!")}</p>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h2>{t("Meridian Passage Wellness")}</h2>
      <a href='https://meridianpassagewellness.com/book-now/'>
    <figure>
        <img src={Meridian} alt="logo" />
          <figcaption>{t("Book Now")}</figcaption>
        </figure>
      </a>
      {/*
      <div>
      <ReactPlayer
url="https://www.youtube.com/embed/Wezd6eo9Cfo"
height='400px'
width="100%"
controls={true}
/>
</div>
*/      
}
  <h3>{t("Meridian Passage Wellness:")}</h3>
      <p>
      {t("At Meridian Passage Wellness, we are committed to helping you reclaim a vibrant, and healthy life. I provide holistic care that addresses the root causes of your health concerns, focusing on mind, body, and spirit. Whether you’re dealing with chronic pain, fatigue, or mental health challenges, I offer a range of integrative therapies designed to support your journey to optimal health. Join me and begin your personalized healing journey today.")}
      </p>
    </div>
  </div>
</div>
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    
}
