import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
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
</div>
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )
    
}
