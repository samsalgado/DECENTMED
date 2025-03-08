import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import acu from "../../images copy/ac.png";
import "../../App.css";
import { useTranslation } from "react-i18next";
const Blog5 = () => {
const {t} = useTranslation('common');
  return (
    <>
      <Helmet>
        <title>{t('Acupuncture near me')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Looking for acupuncture services close to home? Discover qualified acupuncturists offering holistic treatments for a range of health concerns." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}>{t('What is Acupuncture?')}</h1>
          <img className='gridimag' src={acu} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
          <p>
          {t('According to the')}<a href ="https://www.cdc.gov/" alt=''> {t('CDC,')}</a> {t(`there were \"70360 opioid deaths in 2019\". In an industry where the body divides into parts, acupuncture balances the flow of energy or life force believed to flow through pathways in your body. Acupuncture can relieve pain, nausea, vomiting, osteoarthritis and respiratory disorders at a reduced price and without the struggles of opioid addiction. Acupuncture works with the body's connective tissue that messages to your brain that alter brain chemistry in an effective and non-destructive way.`)}
</p>
     
           <p>
           {t('According to')} <a href="https://pubmed.ncbi.nlm.nih.gov/" alt=''>{t('Pubmed,')}</a> {t(`'the average cost of opioids is $67.98'. The approximate total of an entire treatment of acupuncture is $1000. Unlike opioids, acupuncture approximates the number of treatments it takes for treatment. Opioids range in price, and the cost of addiction is valuable to the toll it takes on your life.`)}
</p>
           <p>
           {t('The process of acupuncture is a four-step process beginning with checking the pulse and other vitals. Then, insert the needles into acupuncture points or points where blood, lymph, and nerves can easily access connective tissue. Next, manipulate the needles, and sometimes moxibustion is applied. Moxibustion is a traditional Chinese medical technique that involves burning the herb mugwort to relieve cold or stagnant conditions by stimulating circulation. Finally, topical patches and herbal rub are applied to the post-need injection sites.')}
           </p>
           <p>
           {t(`The ear is a microsystem for the whole body with pressure points that do various things. The entire body comprises the ear (neck, shoulder, cervix). One essential channel in acupuncture is the Buddha triangle, three points that help with stress, anxiety, depression, and trauma. The spleen channel connects strongly with the women's health point.`)}
           </p>
           <p>
           {t(`Acupuncture can treat (NOT MEDICAL CLAIM/ADVICE. CONSULT A MEDICAL PROFESSIONAL.) uterine fibroids, which affect roughly 70% of women. Acupuncture may treat digestive disorders, osteoarthritis, high blood pressure, and rheumatoid arthritis. Another type of acupuncture is gemstone acupuncture, a process comprised of gua sha, cupping, and gemstones placed on the body. Acupuncture is widely available: type 'acupuncture near me' and find an acupuncturist near you. Acupuncture is an alternative to pharmaceuticals for pain and other ailments.`)}
           </p>
        
           <p>
            
           </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog5; // Default export
