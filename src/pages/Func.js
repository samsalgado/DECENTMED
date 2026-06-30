import "../info/Info.css";
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css";
import amy from "../images copy/essence.png";
import services from "../cards/Screenshot 2026-05-03 at 7.59.31 PM.png";
import am from "../cards/web-logo-scaled.png";
import brown from "../cards/drbrown.webp";
import prices from "../images copy/PRICESS.png";
import Footer from '../footer';
import { useTranslation } from 'react-i18next'
import { Button } from "react-bootstrap";
import { useEffect } from 'react';
export default function Func() {
  const { t } = useTranslation('common');

  // Solution 1: Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
useEffect(() => {
       AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
     }, []);  
  return(
  <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>
          <title>{t("Functional Medicine")}</title> 
               <meta property="og:title" content={t("Functional Medicine")} />                
                <meta name="description" content={t("Functional Medicine")} />
 
          <meta name="description" content={t("Working with complex disorders and cancers via functional medicine. Essence of Life Wellness Center assists you holsitically, utilizing frequencies to communicate with the brain.")} />
        </Helmet>
        <header style={{
          // Solution 3: If header has fixed positioning, ensure it doesn't push content down
          position: 'relative', // or 'static' instead of 'fixed'
          zIndex: 1000
        }}>
          <Topbar />
        </header>
        <div className="container-blue">
        <div>
        <div data-aos="slide-right" className="container-blue">
          <h1>{t("Functional Medicine")}</h1> 
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card" style={{ border: '1px solid #dee2e6' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img 
                        src={amy} 
                        alt="Essence of Life Wellness Center" 
                        style={{ 
                          maxWidth: '100px', 
                          maxHeight: '100px', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </div>
                    <div className="col-md-7">
                      <h2 className="h4 mb-1">{t('Essence of Life Wellness Center')}</h2>
                      <p className="text-muted mb-2">{t("Dr. Nadia Taylor")}</p>
                      
                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("Boyton Beach, FL")}
                      </p>
                      
                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("Holistic doctor")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Holistic nutritionist")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Cutting-edge technology")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Personalized care and approach")}</span>
                      </div>
                    </div>
                    <p>
                      {t("Dr. Nadia Taylor believes in holistic medicine because it helped to heal her from disease and maladies. She has recently opened up her own holistic healing center, Essence of Life, in Boynton Beach, Florida in September 2025 so that she can help others heal through some of the same modalities that helped her. Dr. Taylor is excited to be back in South Florida after years living elsewhere and is continually looking to make positive changes in the community. She has dedicated her life to a life of service for the betterment of others.")}
                    </p>
                      
            <iframe class="rumble" title="Alternative Cancer Treatment" width="640" height="360" src="https://rumble.com/embed/v6zhjpy/?pub=4hu51y" frameborder="0" allowfullscreen></iframe>
                    <div className="col-md-5 text-end">
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <div style={{ 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginBottom: '10px',
    color: '#333'
  }}>
   
  </div>
         

  <a 
    href="https://essenceoflife-wellness.practicebetter.io/#/609c398e2a832607ac9863a1/bookings" 
    target="_blank" 
    rel="noopener noreferrer"
  >
     <figure>
    <img 
      src={prices} 
      alt="The Center for Natural Health" 
      style={{ 
        maxWidth: '500px', 
        maxHeight: '420px', 
        objectFit: 'contain',
        width: '100%',
        cursor: 'pointer'
      }}
    />
    <figcaption>{t("Buy")}</figcaption>
    </figure>
  </a> 
</div>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="container-blue">
        <div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card" style={{ border: '1px solid #dee2e6' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img 
                        src={brown} 
                        alt="Hormone Health with Dr. Brown" 
                        style={{ 
                          maxWidth: '100px', 
                          maxHeight: '100px', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </div>
                    <div className="col-md-7">
                      <h2 className="h4 mb-1">{t('Hormone Health with Dr. Brown')}</h2>
                      <p className="text-muted mb-2">{t("DR. JEFFREY L. BROWN, D.O")}</p>
                      
                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("Palm Beach Gardens, FL")}
                      </p>
                      
                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("Functional Medicine")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Hormone Health")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Endometriosis")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Menopause")}</span>
                      </div>
                    </div>
                    <p>
                      {t("I empower women with endometriosis, adenomyosis and other painful menstrual disorders, to break free from their cycle of pain, boost fertility potential, and help them live a vibrant, fulfilling life through holistic care. I also help women navigate perimenopause and menopause naturally by uncovering the root causes of hormone imbalances, fatigue, weight gain, sleep issues, hot flashes, and mood changes so they can regain their energy, balance their hormones, and feel vibrant again. I address women’s health issues by using a comprehensive, holistic approach to understand the root cause and help the body return to normal.")}
                    </p>
                      
            <iframe class="youtube" title="Alternative Cancer Treatment" width="640" height="360" src="https://www.youtube.com/embed/JG8vDZFswmA?si=31jeRikdQ5uPDLVB" frameborder="0" allowfullscreen></iframe>
                    <div className="col-md-5 text-end">
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <div style={{ 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginBottom: '10px',
    color: '#333'
  }}>
   
  </div>
  <Button className="custom-btn" href="https://hormonehealthwithdrbrown.com/contact-us" target="_blank">
                {t("Book")}
  </Button>
</div>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>        
               <div className="container-blue">
        <div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card" style={{ border: '1px solid #dee2e6' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img 
                        src={am} 
                        alt="Optimal Root Wellness" 
                        style={{ 
                          maxWidth: '100px', 
                          maxHeight: '100px', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </div>
                    <div className="col-md-7">
                      <h2 className="h4 mb-1">{t('Optimal Root Wellness')}</h2>
                      <p className="text-muted mb-2">{t("Lorna Ching-Carter")}</p>
                      
                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("170 N Henderson Rd # 310, King of Prussia, PA 19406")}
                      </p>
                      
                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("Functional Medicine")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Advanced Testing")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Systems-Based Approach")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Personalized care and approach")}</span>
                      </div>
                    </div>
                    <p>
                      {t("After years in conventional healthcare, Lorna felt limited by short visits, symptom-based protocols, and systems that weren’t designed for true healing. She saw patients struggling with fatigue, gut issues, hormones, and chronic symptoms—and no one was putting the full picture together. Lorna created Optimal Root Wellness to change that. A practice where patients get time, answers, and support. A place where healing isn’t rushed—and where every step of your care is intentional. Lorna combines years of clinical experience with advanced training in functional and integrative medicine. Her approach includes: In-depth functional testing, Lifestyle and nutrition support, Root-cause analysis for chronic symptoms, Trauma-informed, relationship-centered care and Realistic plans that fit your life")}
                    </p>
                      
            <iframe class="youtube" title="Alternative Cancer Treatment" width="640" height="360" src="https://www.youtube.com/embed/Q3N9OzN-3iE?si=vsr7w14uyoTe2gvF" frameborder="0" allowfullscreen></iframe>
                    <div className="col-md-5 text-end">
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <div style={{ 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginBottom: '10px',
    color: '#333'
  }}>
   
  </div>
         

  <a 
    href="https://intakeq.com/booking/iejguw?serviceId=f42e0268-683d-4bfd-b582-f34712263a49" 
    target="_blank" 
    rel="noopener noreferrer"
  >
     <figure>
    <img 
      src={services} 
      alt="The Center for Natural Health" 
      style={{ 
        maxWidth: '500px', 
        maxHeight: '420px', 
        objectFit: 'contain',
        width: '100%',
        cursor: 'pointer'
      }}
    />
    <figcaption>{t("Buy")}</figcaption>
    </figure>
  </a> 
</div>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}