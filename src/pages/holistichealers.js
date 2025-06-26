import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import JenB from '../cards/SOLVEYOUROUTOFCONTROLEATING.png';
import { useTranslation } from 'react-i18next'
export function HolisticHealers() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Emotional Eating Coach")}</title>  
        <meta name="description" content={t("If you want one of the best emotional eating books, look no further than the duo of Michelle Holzberger and emotional eating coach Vickie Todd.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <div class="container">
            <h1>{t("Emotional Eating Coaches and Emotional Eating Books")}</h1>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Solve your Out of Control Eating")}</h3>
      <h4>{t("Vickie Todd")}</h4>
      <h4>{t("Michele Holzberger")}</h4>
      <a href='https://www.amazon.com/Solve-Your-Out-Control-Eating/dp/B0DDK2HDQN'>
    <figure>
        <img src={JenB} alt="logo" />
          <figcaption>{t("Buy Book")}</figcaption>
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
  <h5>{t("Solve your Out of Control Eating:")}</h5>
      <p>
      {t("This book isn't about quick fixes or miracle diets; it's about understanding the 'whys' behind your eating habits. Learn from patients who share their own experiences and dive into their world, one filled with self-discovery and 'ah-ha' moments of how the past affects today’s choices. You too will discover groundbreaking connections, relatable anecdotes, and a roadmap to a healthier relationship with food.")}
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
