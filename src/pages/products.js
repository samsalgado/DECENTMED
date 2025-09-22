import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import obasi from "../images copy/obasi.png";
import SYOOCE from '../cards/SOLVEYOUROUTOFCONTROLEATING.png';
import lifewave from '../images copy/lifewave.png';
import linda from "../images copy/linda.png";
import { useTranslation } from 'react-i18next'
export function Shop() {
const { t } = useTranslation('common');
    return(
        <div>
        <main className="page-content">
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Products")}</title>  
        <meta name="description" content={t("Seeking Holistic products that help you meet your health needs. We only work with the best products in the world!")} />
      </Helmet>
            <header>
            <Topbar />
            </header>

            <div className="container">
            <h1>{t("Products We Trust")}</h1>
 <div className="row">
    <div className="col-md-4">
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <h2>{t("Solve your Out of Control Eating")}</h2>
      <a href='https://www.amazon.com/Solve-Your-Out-Control-Eating/dp/B0DDK2HDQN'>
    <figure>
        <img 
          src={SYOOCE} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Buy Book")}</figcaption>
        </figure>
      </a>
      <div>
     
</div>
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
  <div className="row">
    <div className="col-md-6">
      <h2>{t("Kelechi Obasi Product Bundle")}</h2>
      <a href='https://selar.com/m/kelechiobasi'>
    <figure>
        <img 
          src={obasi} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Buy")}</figcaption>
        </figure>
      </a>
      <div>
     
</div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
    <h2>{t("Lifewave Patch")}</h2>
    <a href='https://www.lifewave.com/awicks'>
    <figure>
        <img 
          src={lifewave} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Buy Now")}</figcaption>
        </figure>
      </a>
      <p>
        {t("Harness your body's flow of energy with X39.")}
      </p>
    </div>
  </div>
<div className="row">
    <div className="col-md-6">
      <h2>{t("Happy DNA Candy")}</h2>
      <a href='https://sites.google.com/view/lindamcbee806080/home'>
    <figure>
        <img 
          src={linda} 
          alt="logo" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
        />
          <figcaption>{t("Buy Now")}</figcaption>
        </figure>
      </a>
           <p>
        {t("An extensive review, the product line is plant-based and features some of the highest performing herbs in the world: Moringa, Turmeric, Elderberry, Rosemary and more. The product line extends beyond products. She also has services to help health coaches and Energy healers.")}
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