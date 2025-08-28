import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Ramona from '../cards/IMG_0587.jpeg';
import Anil from '../cards/anil.png';
import Kristina from "../images copy/kristina.png";
import Priscilla from '../cards/priscilla.jpg';
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

            <div className="container">
            <h1>{t("Certified Coaches for Health, Empowerment, Trauma & More")}</h1>
            <p>{t("Searching Health Coach Near me? We have you covered!")}</p>
 <div className="row">
    <div className="col-md-4">
    </div>
  </div>


  <div className="row">
    <div className="col-md-6">
    <h2>{t("Priscilla Wmk - Mindset Coach")}</h2>
    <a href='https://source.dynamitelifestyle.com/book-discovery-call-40/priscilla-wmk'>
    <figure>
        <img 
          src={Priscilla} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Free Discovery Call")}</figcaption>
        </figure>
      </a>
      <p>
        {t("I help individuals and entrepreneurs who want to achieve more to break through mental blocks, align with their highest potential and magnetize the success they truly desire.I help them understand the transformative power of their mindset and how it directly impacts their results in all areas of their life.")}
      </p>
      <p>
        {t("I work together with my incredible mentor Kim Calvert who I was trained by. She was the late Bob Proctor's #1 (and his only Executive Diamond pin holder, his highest global recognition) and went from £4.20 to an 8-figure entrepreneur by applying what we teach.")}
      </p>
    </div>
  </div>
<div className="row">
    <div className="col-md-6">
      <h2>{t("Authentic Life Journey")}</h2>
      <a href='https://authenticlifejourney.com/'>
    <figure>
        <img 
          src={Ramona} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
     
  <h3>{t("Ramona Crabtree-Falkner: Transformational Empowerment Coach")}</h3>
      <p>
        {t("Ramona Crabtree-Falkner is a Transformational Empowerment Coach, retreat leader, and speaker who helps professional women reclaim their energy, realign with purpose, and rise empowered in life and work. With over 20 years of experience in holistic wellness and mindfulness, she creates spaces for growth, healing, and authentic connection. She guides women on a path to Reclaim Energy. Realign Purpose. Rise Empowered.")}
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
    <h2>{t("Thrive Results Coaching")}</h2>
    <a href='https://secure.gethealthie.com/users/sign_up/clients?invite_code=52421d'>
    <figure>
        <img 
          src={Kristina} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Book Session")}</figcaption>
        </figure>
      </a>
      <h3>{t("Kristina Hess: Premiere Health Coach")}</h3>
      <p>
        {t("Kristina is a premiere health coach and licensed dietitian-nutritionist with a functional and integrative approach. Kristina is especially passionate about a clean, whole-foods based, cyclical ketogenic approach to treat inflammation and restore metabolic health. She utilizes nutrigenomics data and other functional lab tests to assess what is best for your biology.  Her speciality is to combine detailed personalization with ninja-level implementation for your accountability and compliance so that you get the best results (since knowing what to do and then not doing it, doesn’t help you whatsoever).   Sessions with Kristina might include EFT, MB-EAT exercises, the Tiny Habits method and Heartmath to improve your psychology & behavior around food.")}
      </p>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <h2>{t("Anil Narain Matai: Spirtual Coach")}</h2>
    <a href="mailto:anil.matai@gmail.com">
    <figure>
        <img 
          src={Anil} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Contact")}</figcaption>
        </figure>
      </a>
      <div>
      {/*<iframe
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
*/}
</div>
      <p>
        {t("I'm Anil N Matai, a dedicated poet, philosopher, and spiritual guide on a mission to share the timeless wisdom of Sufi thought through my spiritually enriching poems. Deeply committed to exploring the intricacies of the human soul's journey, consciousness, and the pursuit of spiritual awakening. My poetic work delves into themes of spirituality, love, and the eternal quest for a deeper connection with the divine. Inspiring and guiding others on their spiritual path, urging them to discover profound truths within. Through eloquent verses and profound insights, I encourage reflection, challenge material illusions, and invite a journey of self-discovery.")}
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