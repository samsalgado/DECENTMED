import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import JenB from '../cards/divineintuition.png';
import { useTranslation } from 'react-i18next'
export function HolisticHealers() {
const { t } = useTranslation('common');
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Holistic Health Practitioners")}</title>  
        <meta name="description" content={t("Searching psychic near me? Look no further than our variety page that features psychics, psychedelic providers, various coaches, and more.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Pyschics, Mediums, & Psychedelic Therapy Support")}</h1>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Divine Intuitions")}</h3>
      <a href='https://divineintuitionsjennyb.com/book-now/'>
    <figure>
        <img src={JenB} alt="logo" />
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
  <h5>{t("Divine Intuitions:")}</h5>
      <p>
      {t(" My name is Jenny B and I am a Divine Intuitive. As a Medium, my mission is to provide help & comfort to my clients so they can talk to a loved one, make an important decision and more!")}
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
