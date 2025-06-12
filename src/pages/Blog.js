import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import '../App.css';
import Footer from '../footer';
import acuneed from '../images copy/acuneed.png';
import B17 from "../images copy/B17.png";
import batana from "../images copy/batana.png";
import blogs from '../images copy/blogs.png';
import mike from "../images copy/lanenaturopathy.png";
import cancerimg from "../images copy/cancerimg.png";
import green from "../images copy/green.png";
import tammy from "../images copy/tammy.png";
import cell from "../images copy/cell.png";
import chirotreat from '../images copy/chirotreats.png';
import constipation from '../images copy/constipation.png';
import consult from "../images copy/consult.png";
import depression from '../images copy/depression.jpg';
import Fenbendazole from '../images copy/Fenbendazole.png';
import hepB from "../images copy/hepB.png";
import hypnotherapy from "../images copy/hypno.png";
import Fagen from "../images copy/IMG_6505.jpeg";
import Ivermectin from '../images copy/IVERMECTINCANCER.jpeg';
import montreal from "../images copy/montreal.png";
import nutritionbenefits from "../images copy/nutritionbenefits.png";
import RoseOil from '../images copy/roseoil.png';
import shroom from '../images copy/shroom.webp';
import Topbar from './topbar';
const BlogPage = () => {
const { t } = useTranslation("common");
  return (
    <div>
    <Helmet>
        <title>Blogs</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn about how to maintain and grow your health! Explore our Wellness Blogs to learn from providers worldwide. Learn more about how to experience vitality." />
      </Helmet>
    <header>
        <Topbar />
        </header>
        <div className='container'>
        <h1 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}>{t("Health & Wellness Blogs")}</h1>
       <img className='gridimag' src={blogs} alt="logo" />
       </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t("Fenbendazole for Cancer")}</h2>
      <div className='container'>
      <a href='/fenbendazole'>
    <figure>
        <img className='gridimag' src={Fenbendazole} alt="logo" />
          <figcaption>{t("Click on image for full Blog")}</figcaption>
        </figure>
      </a>
      </div>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Ivermectin for Cancer')}</h2>
      <div className='container'>
      <a href='/ivermectin'>
    <figure>
        <img className='gridimag' src={Ivermectin} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}> {t('Can Constipation cause Back Pain?')}
    </h2>
    <div className='pr'>
    <p>
    {t('An estimated “80% of the population will have significant back pain. According to the NIH, “15% of the US population deal with chronic constipation”, a statistic that highlights the American diet. Our bodies are interconnected systems; constipation causes stool buildup and affects the sacral nerve. Yes, constipation can cause back pain, specifically lower back pain.')}
    </p>
    <div className='container'>
    <a href='/blog1'>
    <figure>
        <img className='gridimag' src={constipation} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>
    </div>
  </div>
      <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Dry Needling vs Acupuncture')}</h2>
      <div className='pr'>
      <p>
       {t('Acupuncture is a technique for balancing the flow of energy, or life force flowing through pathways in your body. Dry needling serves a purpose for musculoskeletal disorders and diseases, working to relieve the trigger point symptom.')}
      </p>
     
      </div>
      <div className='container'>
      <a href='/blog2'>
    <figure>
        <img className='gridimag' src={acuneed} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>

    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('The Curious Case of Cancer: Everyday Fruit for Prevention')}</h2>
    <div className='pr'>
    <p>
    {t(`“Cancer Cases, Deaths in Men Predicted to Surge by 2050”. Currently, cancer is responsible for 1 in 5 deaths in the world. There is no cure for cancer, and statisticians expect cancer deaths to rise. What if I told you that the cure to cancer is found in the foods we eat? The number one fast food chain in the world is McDonald’s. “Canola oil was first created in the early 1970s as a natural oil. But in 1995, Monsanto created a genetically modified version of canola oil. By 2009, over 90 percent of the Canadian canola oil crop was genetically engineered (1).” Dr. Sebi theorized that seed oils are carcinogenic once heated. Let’s explore the relationship between food, cancer, and fruits with powerful preventive properties.`)}
    </p>
    <div className='container'>
    <a href='/blog10'>
    <figure>
        <img className='gridimag' src={cancerimg} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
</div>  
    </div>
    <br></br>
    <br></br>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('How does the world get cheaper and less invasive healthcare?')}</h2>
    <div className='pr'>
        <p>
         {t(`A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days to restore the cells to ketosis. Furthermore, when detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness.`)} 
         <a href='https://gerson.org/'> {t('Cancer')}</a> {t('treatments globally like the Gerson Therapy and')} <a href='https://drsebiscellfood.com/'>{t('Dr. Sebi diet')}</a> {t('use forms of Green Diets and Detoxification to cleanse the body from toxins that cause cancer.')}</p>
        <div className='container'>
    <a href='/blog4'>
    <figure>
        <img className='gridimag' src={cell} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('What is Acupuncture?')}</h2>
    <div className='pr'>
        <p>
        {t('The process of acupuncture is a four-step process beginning with checking the pulse and other vitals. Then, insert the needles into acupuncture points or points where blood, lymph, and nerves can easily access connective tissue. Next, manipulate the needles, and sometimes moxibustion is applied. Moxibustion is a traditional Chinese medical technique that involves burning the herb mugwort to relieve cold or stagnant conditions by stimulating circulation. Finally, topical patches and herbal rub are applied to the post-need injection sites.')}
        </p>
        <div className='container'>
    <a href='/blog5'>
    <figure>
        <img className='gridimag' src={consult} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Vitamin B: Vitamin B17 - The Mysterious Case of Cancer')}</h2>
    <div className='pr'>
        <p>
        {t(`According to the book World Without Cancer: The Story of Vitamin B17 by G. Edward Griffin, 'Vitamin B17(Laetrile) can destroy cancer cells'. In this article, we will explore the components of Laetrile, the book's claim and why vitamin B17 or Laetrile is illegal in the United States.`)}
        </p>
        <div className='container'>
    <a href='/cancer'>
    <figure>
        <img className='gridimag' src={B17} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>      
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t(`What Is Hypnotherapy?`)}</h2>
    <div className='pr'>
        <p>
        {t(`To better understand Hypnotherapy we must first understand Hypnosis. Hypnosis is a natural, yet slightly altered, state of mind where communication and responsiveness with the subconscious mind is present. Hypnosis is being in a state of hypersuggestibility with an increased receptivity to suggestion. This state allows the hypnotherapist to better facilitate communication between the conscious and the subconscious mind.`)}
        </p>
        <div className='container'>
    <a href='https://www.green-hypnotherapy.com/the-green-thumb/page-4'>
    <figure>
        <img className='gridimag' src={hypnotherapy} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t(`New Study Explores How Food Choices Shape Mental Health and Affect Depression`)}</h2>
    <div className='pr'>
        <p>
        {t(`A new study from the University of Reading found that a poor-quality diet may be associated with changes in the brain structure that are linked to depression and anxiety.`)}
        </p>
        <div className='container'>
    <a href='https://needtoknow.news/2024/08/new-study-explores-how-food-choices-shape-mental-health-and-affect-depression/'>
    <figure>
        <img className='gridimag' src={depression} alt="logo" />
          <figcaption>{t('Click on image for blog by Epoch Times on correlation between Food and Mental Health')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        
    </div>

    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Batana Oil: Batana Oil Benefits')}</h2>
    <div className='pr'>
        <p>
        {t(`Because of his astounding results, Sebi grew a mega-following and a massive herbal empire. Among his products, is batana oil - a potential solution to hair loss. On popular social media apps TikTok and YouTube, batana oil has recently become popular online for its potential hair growth. Let's explore batana oil and its possible benefits for your hair.`)}
        </p>
    
      </div>
        </div>
        <div className='container'>
    <a href='/blog7'>
    <figure>
        <img className='gridimag' src={batana} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Acupuncture Montreal')}</h2>
    <div className='pr'>
        <p>
        {t('Mass immigration in Canada has its advantages and disadvantages; assimilation led to Canadians adopting Traditional Chinese Medicine (TCM). Acupuncture Montreal adoption began with British Columbia adding acupuncture to the')}<a href="https://pubmed.ncbi.nlm.nih.gov/25555597/">{t('Canadian Medical Services Plan in 2008.')}</a> {t('Ontario and British Columbia have the highest adoption of acupuncture among the ten provinces of Canada. Regulation in Canada is varied among the provinces. For instance')} <a href="https://acupuncturecanada.org/acupuncture-101/regulation-and-education/#:~:text=Medical%20doctors%20and%20dentists%20may,but%20Quebec%20and%20British%20Columbia.">{t('chiropractors can use acupuncture everywhere but in British Columbia and Quebec.')}</a> {t('British Columbia has most regulations regarding the provinces.')}</p>
    
      </div>
        </div>
        <div className='container'>
    <a href='/blog12'>
    <figure>
        <img className='gridimag' src={montreal} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Pain Pill for Back: Best Chiropractor Near Me')}</h2>
    <div className='pr'>
        <p>
        {t(`Back pain effects an estimated "80% of the US population". As people age, pain becomes more and more frequent. According to`)}  <a href="https://nida.nih.gov/news-events/news-releases/2024/05/over-115-million-pills-containing-illicit-fentanyl-seized-by-law-enforcement-in-2023">{t('NIDA')}</a>: {t(`Over 115 million pills containing illicit fentanyl seized by law enforcement in 2023, if this the seized number, imagine the actual number of pills containing fentanyl last year. The 'War on Drugs' was a collosal failure in the United States; Oregon decriminalized drugs in its state. However, this decision has not worked either, resulting in rampant drug use, overdose, homelessness and fentanyl deaths. Pain pills, or opioids have a long history of abuse and addiction. In 2022, over 107,000 people died of a drug overdose, with 75% of those deaths involving an opioid. According to WebMD: Estimated 3 million Americans suffer from OUD (Opioid Use Disorder). Chiropractors take a holistic perspective, the body can heal itself. Chiropractic techniques are 40% more effective than medical care for lower back pain. Suffering from back pain? Type: best chiropractor near me instead of using pain pills for back.`)}</p>    
      </div>
        </div>
        <div className='container'>
    <a href='/blog14'>
    <figure>
        <img className='gridimag' src={chirotreat} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>

    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Hepatitis B: Herbal Medicine On Hep B')}</h2>
    <div className='pr'>
    <p>
        {t(`Hepatitis B is a liver infection from HBV transmitted through another infected person’s blood, semen, or other fluids. Hepatitis B affects the liver and is more toxic in children than adults with the disease. The 5 major functions of the liver are supporting the body’s metabolism, immunity, digestion, detoxification, and vitamin storage. (Disclaimer not medical advice) There is currently no cure for hep B. This article will explore plants with potential benefits for fighting hepatitis B.`)}
        </p>
      </div>
    </div>
    <div className='container'>
    <a href='/blog8'>
    <figure>
        <img className='gridimag' src={hepB} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('The Importance of Nutrition')}</h2>
    <div className='pr'>
    <p>
    {t(`I am not a doctor or nutritionist, however, I am a developer and researcher who understands the value of showcasing Holistic Medicine to the public. Of the nine practices on the platform: Homeopathy, PRP, Hypnotherapy, Stem Cell Therapy, Chelation, Chiropractic, Ayurveda, and Acupuncture; Nutrition is the most valuable because it encompasses general elements of the others. I did not know that the Standard American Diet was insufficient for the vitamins humans lack. Humans lack vitamins A, D, E, and K, so nutritionists create diet plans specific to each person. Dr. Sebi was a herbalist who understood the correlation between diet and plants. His diet protocol might not be attainable for some people — a nutritionist can tailor a diet around different philosophies on health that work within someone’s capabilities. The most important element of a nutritionist is trust — have the confidence knowing that they have data on you and expertise in the health field.`)} 
        </p>
      </div>
    </div>
    <div className='container'>
    <a href='/blog9'>
    <figure>
        <img className='gridimag' src={nutritionbenefits} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Mushrooms & Relationships')}    </h2>
    <div className='pr'>
        <p>
        {t(`For many years now, I have been applying a very particular stipulation to my interpersonal relationships: Anyone who wishes to enter into and sustain a relationship with me of any kind, whether professional or personal, must be willing to consume entheogens with me on a continual and consistent basis. Otherwise, I have found that communication issues and personality barriers seem to arise, and I typically need to end the relationship.`)} 
        </p>
        <div className='container'>
    <a href='https://lern-herstory.com/stories/f/mushrooms-relationships'>
    <figure>
        <img className='gridimag' src={shroom} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
    
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('The Root Cause Approach: A Path to True Healing')}</h2>
    <div className='pr'>
        <p>
{t(`In the world of healthcare, a quiet revolution is underway. Patients and practitioners alike are realizing that the traditional 'band-aid' approach—managing symptoms without addressing underlying causes—often falls short. This growing awareness has sparked interest in functional medicine, a patient-centered approach that focuses on uncovering and resolving the root causes of illness. So, what makes functional medicine so transformative? Let’s explore why this approach is reshaping the future of healthcare.`)}        
</p>
        <div className='container'>
    <a href='https://www.linkedin.com/pulse/root-cause-approach-path-true-healing-randee-fagen-dev2e?utm_source=share&utm_medium=member_ios&utm_campaign=share_via'>
    <figure>
        <img className='gridimag' src={Fagen} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('How Feeling Your Emotions Can Improve Your Well-Being By: Tammy Machmali')}</h2>
    <div className='pr'>
        <p>
{t(`Have you ever wondered why some people seem so disconnected from their emotions?`)}        
</p>
        <div className='container'>
    <a href='https://www.tammymachmali.com/blog-tammy-machmali-holistic-healing-empowering-energy-work/forgiveness-for-healing-7ra44-yzmfe-sfhar-p2gxd-3yrd4'>
    <figure>
        <img className='gridimag' src={tammy} alt="logo" />
          <figcaption>{t('Experience Transformation')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Rose Oil Benefits')}</h2>
    <div className='pr'>
        <p>
        {t('Rose Oil stems from the petals of Rosa centifolia and Rosa damascena. First, we will explain the medicinal benefits of Rosa centifolia and Rosa damascena, according to PFAF.org.')} 
        </p>
        <div className='container'>
    <a href='/blog16'>
    <figure>
        <img className='gridimag' src={RoseOil} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Unlock a Calm and Balanced Mind with This Natural Supplement')}</h2>
    <div className='pr'>
        <p>
        {t('In our fast-paced world, stress and anxiety have become all too common. As a result, many individuals are seeking natural remedies to alleviate these persistent feelings of unease. One such remedy that has garnered attention in the Western world in recent years is Ashwagandha, a powerful adaptogenic herb with a long history in Ayurvedic medicine.')} 
        </p>
        <div className='container'>
    <a href='https://www.green-hypnotherapy.com/the-green-thumb'>
    <figure>
        <img className='gridimag' src={green} alt="logo" />
          <figcaption>{t('Click on image for full Blog')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2 style={{textDecoration:'underline', textAlign: 'center', margin: '20px 0' }}>{t('Ways to Improve Your Sleep Quality')}</h2>
    <div className='pr'>
        <p>
        {t(`Here are some natural ways to improve your sleep quality and overall health.`)} 
        </p>
        <div className='container'>
    <a href='/naturopathylane'>
    <figure>
        <img className='gridimag' src={mike} alt="logo" />
          <figcaption>{t('Click on image for full Blog by Michael Lane')}</figcaption>
        </figure>
      </a>
      </div>
        </div>
        </div>
    <Footer />
    </div>
  );
};

export default BlogPage;
