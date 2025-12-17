import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import Footer from "../../footer";
import constipation from "../../images copy/constipation.png";
import "../../App.css";
import { useTranslation } from "react-i18next";
const Blog1 = () => {
const {t} = useTranslation('common')
  return (
           <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t('Can Constipation cause Back Pain')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Can constipation cause back pain? Yes, think of it as a “check engine light” for the body. Learn about how to maintain and grow your health!" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t('Can Back Pain make you Constipated?')}</h1>
          <img className='gridimag' src={constipation} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
            <p>
            {t('An estimated “80% of the population will have significant back pain. According to the NIH, “15% of the US population deal with chronic constipation”, a statistic that highlights the American diet. Our bodies are interconnected systems; constipation causes stool buildup and affects the sacral nerve. Yes, constipation can cause back pain, specifically lower back pain.')}
            </p>
            <br></br>
            <div className='video-container'>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/s0Mz_vWmpzA?si=gPh1tvMdMEY9S45e"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
           <p>
          {t(`Health is optimal physical, mental, emotional and spiritual well-being. Over 50 million (15% of current pop.) Americans struggle with constipation. According to studies, “39.6% of Americans are obese”, more than double the percentage of constipated Americans. What is the American diet? The Standard American Diet (SAD) comprises high fats, dairy, oils, sugars, grains and artificial sweeteners. Shockingly, “65% of the world population have lactose intolerance”. If over half the world population (Over 4 billion people) struggle with lactose intolerance, why does American diet stress dairy? For decades, doctors linked dairy with dairy. However, athletes are turning toward plant-based protein and plant-based diets for nutrition. Star athletes — Serena and Venus Williams, Diana Taurasi (WNBA) and Nate Diaz(UFC) eat a vegan diet, along with many stars that eat primarily plant-based. Legends like Tom Brady, Arnold Schwarzenegger and LeBron James get their protein from plants. Moreover, plants are high in fiber — a cause of constipation is a low-fiber diet. Pears, strawberries, avocados, oats, raspberries and prunes are all good sources of fiber. Constipation is a symptom of a bigger problem — an obesity issue.`)}
(<a href="https://medlineplus.gov/genetics/condition/lactose-intolerance/#:~:text=Approximately%2065%20percent%20of%20the,people%20affected%20in%20these%20communities.">{t('Source')}</a>)         
 . </p>
           <p>
           {t(`Obesity is 1 of 5 causes of death in America - linked to over 60 chronic diseases. The late Dr. Sebi theorized that disease cannot survive in basic environments. Sebi instructed his patients to eat alkaline foods and avoid foods high in acidity. Dairy, processed foods and fatty oils are acidic foods. There is a direct link between inefficient nutrition and exercise and constipation. Regular exercise, eating fruits and vegetables and limiting dairy can address constipation.`)}
           </p>
           <p>
           {t('Back pain stems from many factors — including nerve damage, injury, posture, lack of mobility, and straining. The sacral nerve controls many functions, including motor function to the pelvic region, bowels and bladder function. Constipated individuals often have a damaged sacral nerve. Doctors can insert a device into the rectum to stimulate a bowel movement. Functional medical doctors theorize that the body is an interconnected system. Many diseases are warning signs for detrimental problems; the body can heal itself and cannot heal when it is fighting itself. Habitually eating leafy greens, oats, or fruits (lime juice) aids in constipation and provides the body with necessary antioxidants and vitamins. Water fasting(consult doctor) plays a role in fighting constipation by giving the digestive system a “rest” and letting the body relieve itself. Enemas are another way to rid the body of toxins and relieve constipation. Doctor-led enemas help the body remove toxins.')}
           </p>
           <p>
{t(`Constipation can cause back pain; think of it as a “check engine light” for the body. Ask yourself: “Do I eat enough fruits and vegetables?” “Do I get enough exercise?” “Am I lactose intolerant?” “Do I have sacral nerve damage?”. Prioritizing exercise and nutrition goes a long way in fighting disease. Eat enough fruits and vegetables and try an occasional fast (consult a doctor before doing so) to keep your body healthy. If you do these things and still find yourself struggling with constipation — you might have sacral nerve damage. Treat your body like an interconnected system; what you eat affects your entire body.`)}           
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
        href="https://decentmed.org/chiropractic" 
        target="_blank"
      >
        {t("Try Chiropractic")}
      </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Blog1; 
