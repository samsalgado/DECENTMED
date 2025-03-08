import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import chirotreat from '../../images copy/roseoil.png';
import "../../App.css";
import { useTranslation } from "react-i18next";
const Blog16 = () => {
const {t} = useTranslation('common')
  return (
    <>
      <Helmet>
        <title>{t('Rose Oil Benefits')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rose Oil Benefits: ose oil stems from the petals of Rosa centifolia and Rosa damascena. The petals are astringent and strong in vitamins A,C, and E." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}>{t('Rose Oil Benefits')}
      </h1>
          <img className='gridimag' src={chirotreat} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
        <p>
        {t(`Rose Oil stems from the petals of Rosa centifolia and Rosa damascena. First, we will explain the medicinal benefits of Rosa centifolia and Rosa damascena, according to PFAF.org. Then, explain the efficacy of rose oil according to published studies. Finally, we'll explain the benefits of Rose Oil (not medical advice) for certain conditions.`)} 
        </p>
        <p>
        {t('Rosa centifolia (Provence Rose) is one of the few plants without an exact habitat. Conversely, it is found in the wild and apparent in many habitats worldwide.It is important to note that the rose oil stems from the petals. However,')}
 <a href="https://pfaf.org/user/Plant.aspx?LatinName=Rosa+centifolia">{(`the root is astringent, the petals are laxative, and the fruit of the rose have vitamins A, C, and E.`)}</a>
 {t('According to PFAF.org, the oil of Provence Rose helps with aromatherapy.')} 
        </p>
        <p>
        {t('According to PFAF.org, Rosa Damascena is home to Asia (habitat). Unlike Rosa centifolia,')}
 <a href="https://pfaf.org/user/Plant.aspx?LatinName=Rosa+centifolia">{t('the petals are astringent.')}</a> 
{t(`The flowers and fruits have characteristics similar to those of Rosa centifolia. However, Rosa Damascena has more aperient, tonic, and cardiac properties.`)} 
        </p>
        <p>
        {t(`Now that the plants comprising rose oil have been examined. Let's jump into studies investigating the use of rose oil for certain conditions. Published in 2017 by Avicenna J Phytomed, let's review the therapeutic effects of rose oil. The`)}
 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5511972/#:~:text=In%20this%20study%2C%20it%20was,and%20better%20designation%20are%20required.">{t('study')}</a> 
{t(`examined "the analgesic, anti-depression, psychological relaxation, improved sexual health, and anti-anxiety effects of rose oil." The study took place in Iran, and the most abundant element in the oil was "β-citronellol (14.5-47.5%)". Among 772 participants, studies "indicate that rose oil showed immediate changes in physiology - skin changes, blood pressure, blood flow, brain activity, and muscle tension." One study indicated that inhalation of rose oil improved renal colic symptoms in patients. Amongst all the studies, rose oil has the strongest analgesic and anti-depressant effects.`)} 
        </p>
        <p>
        {t('Aromatherapy involves inhaling essential oils for therapeutic effects. Rose oil stems from the petals of Rosa centifolia and Rosa damascena. The petals are astringent and strong in vitamins A, C, and E. According to studies, rose oil helps most with pain (analgesic) and depression (anti-depressant).')} 
        </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog16; 
