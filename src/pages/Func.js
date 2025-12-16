import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import amy from "../images copy/essence.png";
import prices from "../images copy/PRICESS.png";
import Footer from '../footer';
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
export function Func() {
  const { t } = useTranslation('common');

  // Solution 1: Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div>
      <main className="page-content" 
        // Solution 2: Ensure no top margin/padding on main container
       style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}
      >
        <Helmet>
          <title>{t("Functional Medicine")}</title>  
          <meta name="description" content={t("Working with complex disorders and cancers via functional medicine. Essence of Life Wellness Center assists you holsitically, utilizing frequencies to communicate with the brain.")} />
        </Helmet>
        <header style={{
          // Solution 3: If header has fixed positioning, ensure it doesn't push content down
          position: 'relative', // or 'static' instead of 'fixed'
          zIndex: 1000
        }}>
          <Topbar />
        </header>
        <div className="container" style={{
          // Solution 4: Remove any top spacing on container
          marginTop: 0,
          paddingTop: '20px' // Add some breathing room if needed
        }}>
          <h1 style={{
            fontFamily: 'sans-serif',
            // Solution 5: Ensure h1 starts at top
            marginTop: 0
          }}>{t("Functional Medicine")}</h1>
          
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

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}