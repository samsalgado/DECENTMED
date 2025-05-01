import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import ReactPlayer from 'react-player';
import Stacy from '../cards/healinggoddess.png'
import Yogi from '../cards/yogiSanjivana.jpg'
import { useTranslation } from 'react-i18next'
export function AYPract() {
  const { t } = useTranslation();
  console.log(t("Ayurveda"));
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
            <h1 style={{ 
    fontFamily: 'sans-serif' 
  }}>{t("Ayurveda")}</h1>
 
  <div class="row" >
    <div class="col-md-4">
    </div>
  </div>

  <div class="ro">
    <div class="col-md-10">
      <h3>{t("Healing Goddess")}</h3>
      <a href='https://healinggoddessproducts.com/'>
    <figure>
        <img src={Stacy} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <div>
      <ReactPlayer
url="https://www.youtube.com/embed/pM79ofh3cUM"
height='400px'
width="100%"
controls={true}
/>
</div>
      <h5>{t("Stacy Theodossin - The Healing Goddess")}</h5>
      <p>
      {t("After Stacy graduated from San Diego State University in 1992, she moved to the Detroit area and began her career in sales and marketing.  She traveled the world and climbed the corporate ladder. But something was missing.  Before long, she was back to her studies – this time in Ayurvedic Medicine.  Her own journey to health and healing, through Ayurveda, had already begun a few years earlier -- when she was a patient with her own chronic health conditions. When she had the opportunity to deepen her knowledge, she jumped at the chance.  At first, it was from an academic standpoint.  She couldn’t wrap her mind around how it all worked.  After hours and years of study and residency, she found the answers she sought. Then, her mission was clear – she needed to teach others how to HEAL & TRANSFORM their own lives through Ayurveda, the 'wisdom of life.")}
      </p>
    </div>
<br></br>
    <div class="col-md-10">
      <h3>{t("Yogi Sanjivana")}</h3>
      <a href=' https://sanjivana.com/'>
    <figure>
        <img style={{width:"100%"}}  src={Yogi} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <h5>{t(Yogi Sanji - (Sanjivana)")}</h5>
      <p>
      {t("My name is Yogi Sanji (Sanjivana), and my expertise is meditation and spiritual mentoring. I am a former monk of 20 years and have extensive experience teaching meditation to individuals and large groups. Meditation is my passion, interest, and life. I help people reach their goals of happiness, peace, and liberation through the practice of meditation and mindfulness. I teach meditation based on ancient traditions and doctrines which include deep insights, concentration, mindfulness, relaxation, and healing meditations.  Sanjivana Kularathna - Serenity Meditations Meditation Teacher, Spiritual- Counselor, Therapist, Tutor, Mentor, Life Coach Energy work healing  Working for Charities, Suicide p evention , Trauma Recovery , Rehabilitation, Sober Therapy and rebuilding lives.")}
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

