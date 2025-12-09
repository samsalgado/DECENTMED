import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import batana from '../../images copy/batana.png';
import "../../App.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Blog7 = () => {
const {t} = useTranslation('common');
  return (
    <>
      <Helmet>
        <title>{t('Batana Oil Benefits')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the hidden secret about hair growth. Batana oil is rich in vitamin E, learn more about batana oil benefits." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginTop: '110px', fontFamily: 'sans-serif' }}> {t('Batana Oil: Batana Oil Benefits')} </h1>
          <img className='gridimag' src={batana} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
          <p>
          {t(`Dr. Sebi was an herbalist, called a doctor because his unconventional diet protocols had miraculous consequences on people's health. Sebi claimed that the removal of 'lactose, carbonic acid, uric acid, milk, starches, and meat paired with cell cleansing cures cancer, AIDS, sickle cell, and more'. Dr. Sebi provided 'evidence' of his claims and won his lawsuit in the1980's. Dr. Sebi claimed, 'disease exists from mucus and acidity', asserting that people should eat foods that cleanse the body and avoid acidic food. Because of his astounding results, Sebi grew a mega-following and a massive herbal empire. Among his products, is batana oil - a potential solution to hair loss. On popular social media apps TikTok and YouTube, batana oil has recently become popular online for its potential hair growth. Let's explore batana oil and its possible benefits for your hair.`)}
        </p>
        <p>
{t(`'Let thy food be medicine, and thy medicine be food', a famous quote from the Greek physician Hippocrates indicates that medicine starts with what people put into their bodies. Pharmaceuticals are derived from plant roots, and many hair products contain dangerous chemicals , such as Dove, Nexxus, Suave, and Johnson & Johnson. Currently, the best product on the market for hair growth is Rogaine. What is Rogaine? Rogaine, or Topical Minoxidil is a medicine used to treat hair loss via direct application to the scalp. Moreover, according to Mayo Clinic, 'the science behind Rogaine is unknown'. Other studies indicate that Rogaine has minimal effects on hair growth. Other doctors do not think that 'Rogaine gets to the underlying cause of hair loss - androgens.' The body naturally produces androgens, but if the body has an excessive response to androgens - hair loss disorders like alopecia occur. Rogaine, like most other medicines, comes with side effects - burning, redness, stinging, and some cases 'entering breast milk and endangering the baby'.`)}        
</p>
        <p>
 {t(`What are the natural alternatives to Rogaine? Dr. Sebi argued that people should not eat cooked oils, like Palm or soybeans. However, the oil is extracted from American Palm Oil or`)}<a href="https://pfaf.org/user/Plant.aspx?LatinName=Elaeis+oleifera#google_vignette"> {t(`Elaeis oleifera.`)} </a>{t('Batana oil is extracted from the nuts and forms a')}<a href="https://www.hollywoodbeautyproducts.com/batana-oil-for-hair-growth/#:~:text=Batana%20oil,%20also%20called%20Ojon,hair.%E2%80%9D%20Their%20secret%20to%20beautiful"> {t('buttery')} {t('substance')} </a> {t('rich in antioxidants and vitamin E. According to pfaf.org: the oil from nuts is expected to stimulate hair loss and combat dandruff. Does batana oil work? The Tawira tribe is known as people of beautiful hair, and attributes their hair success to batana oil. Dr. Sebi claimed, The enzymes in it sink into the hair and revive the dead hair follicles, pairing scalp application of batana oil and a vegetarian diet maximizes results (according to Dr. Sebi).')} </p>
        <p> {t(`Similarly to vitamin B, the body does not produce vitamin E. If disease stems from a deficiency of vitamins, shouldn't hair loss from a deficiency in vitamin E - Dr. Sebi and the native tribes believed that consumption of necessary vitamins, an alkaline diet, and cellular foods keep the body. Conversely, Sebi argued that black people would benefit most from a vegan diet. According to`)} <a href="https://theconversation.com/what-is-alopecia-its-no-laughing-matter-for-millions-of-black-american-women-180213">{t('The Conversation:')} </a> "But it's more likely to affect <a href="https://www.jaad.org/article/S0190-9622(19)32299-6/abstract">{t(`African Americans`)}</a> {t(`than white or Asian Americans. About 1 million people in the U.S. have alopecia areata." Also, black people have a higher risk of heart disease. How are these diseases correlated? Diet - processed foods and vitamin-deficient diets are common in America generally, however, many African Americans are lactose intolerant. Vitamin E is highest in vegetable oils, Dr. Sebi argued, "When you heat these oils at high temperature - they become carcinogenic". Batana oil is high in vitamin E and is a raw substance applied to the hair for hair growth.`)}</p>
           <p>
           {t(`Dr. Sebi and other natural doctors and herbalists believe that the body should consume foods that address what the body cannot produce (vitamins E, B, and C). Dr. Sebi states, 'Best results occur when eating an alkaline diet and cellular-rich foods'`)}
           </p>
          </div>
          <Button 
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
        }}
        className="custom-btn"
        href="https://decentmed.org/apoth" 
        target="_blank"
      >
        {t("Visit Apothecary")}
      </Button>
      </div>
      <Footer />
    </>
  );
};

export default Blog7; 
