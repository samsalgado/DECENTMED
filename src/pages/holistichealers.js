import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import { useEffect } from 'react';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import JenB from '../cards/SOLVEYOUROUTOFCONTROLEATING.png';
import { useTranslation } from 'react-i18next'
export function HolisticHealers() {
const { t } = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(
      <main className="page-content">

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
      <h2>{t("Solve your Out of Control Eating")}</h2>
      <h3>{t("Vickie Todd")}</h3>
      <h3>{t("Michele Holzberger")}</h3>
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
  <h3>{t("Michelle Holzberger, Victoria Todd: 'Solve your Out of Control Eating'")}</h3>
      <p>
        {t("Victoria Todd, Cleveland OH and Michele Holzberger, Tampa, FL are passionate about making psychological tools accessible to everyone. With backgrounds in mental health and psychoanalysis, they’ve dedicated themselves to helping individuals understand and overcome the deeper emotional issues that drive their eating habits.")}
      </p>
      <p>
        {t("This revolutionary book takes readers on a journey through real-life success stories, offering practical strategies to uncover and overcome the emotional roadblocks behind diet failures and disordered eating. Co-authors Victoria Todd and Michele Holzberger have transformed the way we approach eating issues, making this resource both interactive and accessible for the everyday person.")}
      </p>
      <p>
        {t("'Vickie originally came to me with a write-up utilizing her experience as a psychoanalyst about doing podcasts for mental health professionals,' said Holzberger. 'As soon as I read it, I thought, ‘This could help so many people struggling with their eating habits. It needs to be a book!'")}
      </p>
      <p>
        {t("The authors’ mission was clear: to create a guide that offers the life-changing tools typically available only to the .001% of the population—roughly 3,000 practicing analysts in the U.S.—and make these concepts understandable and usable for the rest of us. At the core of Solve Your Out-of-Control Eating is an understanding that unhealthy eating patterns are often not just about food—they're about emotions, habits, and deeper psychological issues. By presenting complex psychological principles in an easy-to-understand manner, the authors break down key concepts from the renowned psychoanalyst Anna Freud into bearable bits that readers can easily apply to their daily lives.")}
      </p>
      <p>
      {t("This interactive guide combines insightful personal stories with workbook-like activities that challenge readers to examine their own emotional roadblocks. Through quizzes, timelines, and self-observation exercises, the book leads readers on a detective-like journey to solve the mystery of their eating habits. It’s more than just a book—it’s a roadmap to understanding emotional triggers and achieving lasting change.")}
      </p>
    </div>
  </div>
</div>
            <footer>
                <Footer />
            </footer>
        </div>
        </main>
    )
    
}
