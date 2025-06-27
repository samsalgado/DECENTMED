import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import JenB from '../cards/scarlett.JPG';
import { useTranslation } from 'react-i18next'
export function Breathwork() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Somatic Breathwork")}</title>  
        <meta name="description" content={t("If you want one of the best emotional eating books, look no further than the duo of Michelle Holzberger and emotional eating coach Vickie Todd.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <div class="container">
            <h1>{t("Somatic Breathwork & Breathwork Coaches")}</h1>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Scarlett Dee")}</h3>
      <a href='mailto:info@tribe-yoga.com'>
    <figure>
        <img src={JenB} alt="logo" />
          <figcaption>{t("Email")}</figcaption>
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
  <h5>{t("Scartlett Dee, Somatic Breathwork Coach:")}</h5>
      <p>
      {t("Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership.")}
      </p>
      <p>
        {t("Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer")}
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
