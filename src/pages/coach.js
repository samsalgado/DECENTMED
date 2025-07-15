import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Ramona from '../cards/IMG_0587.jpeg';
import Gorilla from '../cards/gorilla.png';
import { useTranslation } from 'react-i18next'
export function Coaching() {
const { t } = useTranslation('common');
    return(
        <div>
        <main className="page-content">

        <Helmet>  {/* Add Helmet component */}
        <title>{t("Health Coaching Near Me")}</title>  
        <meta name="description" content={t("Searching Health Coach Near me? Look no further than our fantastic health coaches that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div class="container">
            <h1>{t("Health Coaching")}</h1>
            <h2>{t("Searching Health Coach Near me? We have you covered!")}</h2>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Gorilla and She Coaching")}</h3>
      <a href='https://www.gorillaandshecoaching.com/'>
    <figure>
        <img src={Gorilla} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <div>
      <iframe
  src="https://drive.google.com/file/d/1Z0qVqBe8ukAEMHmKQtzqtWhWx1orq1ri/preview"
  width="100%"
  title="John Craig" 
  height="355px"
  allow="autoplay"
  frameBorder="0"
  allowFullScreen
  style={{
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: 'none',
    overflow: 'hidden'
  }}
></iframe>
</div>
  <h5>{t("Gorilla and She Coaching:")}</h5>
      <p>
        {t("gorilla")}
      </p>
    </div>
  </div>
<div class="row">
    <div class="col-md-6">
      <h3>{t("Authentic Life Journey")}</h3>
      <a href='https://authenticlifejourney.com/'>
    <figure>
        <img src={Ramona} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
     
  <h5>{t("Ramona Crabtree-Falkner: Transformational Empowerment Coach")}</h5>
      <p>
        {t("I see you. You’re a dedicated, high-achieving professional woman who seems to have it all together on the outside, yet inside, you feel exhausted, overwhelmed, and disconnected. You’re juggling responsibilities, meeting expectations, and giving your all to your career, family, and the world—yet you feel like something is missing. I know this struggle well because I’ve been exactly where you are. I spent years hustling—building a business, pushing through exhaustion, and ignoring what my body and spirit needed—until it all caught up with me. Burnout, health challenges, and a deep sense of disconnect forced me to stop and reassess. I had to learn to prioritize myself, set boundaries, and embrace aligned action instead of constantly striving. Now, I live what I teach. I choose balance, make space for joy, and trust my intuition to guide me forward. And I help women like you do the same.")}
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
