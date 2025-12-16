import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import amy from "../images copy/amy.jpeg";
import prices from "../images copy/prices.png";
import Footer from '../footer';
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';

export function AKPract() {
  const { t } = useTranslation('common');

  // Solution 1: Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>
        <Helmet>
          <title>{t("Frequency Medicine")}</title>  
          <meta name="description" content={t("Working with complex disorders via frequency medicine. The Center for Natural Health assists you holsitically, utilizing frequencies to communicate with the brain.")} />
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
          }}>{t("Frequency Medicine")}</h1>
          
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card" style={{ border: '1px solid #dee2e6' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img 
                        src={amy} 
                        alt="The Center for Natural Health" 
                        style={{ 
                          maxWidth: '100px', 
                          maxHeight: '100px', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </div>
                    <div className="col-md-7">
                      <h2 className="h4 mb-1">{t('The Center for Natural Health')}</h2>
                      <p className="text-muted mb-2">{t("Dr. Amy Wicks")}</p>
                      
                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("St. Charles, Missouri")}
                      </p>
                      
                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("Bio-Chemistry")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Supplements, Herbs & Homeopathy")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Emotional Work")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Emotional Blockage work for Anxiety")}</span>
                      </div>
                    </div>
                    <p>
                      {t("Dr. Wicks' passion is to help others that seem to have nowhere else to turn. She specializes in finding the right balance of herbs, supplements, homeopathy and to free up emotional blockages.")}
                    </p>
                    <div className="col-md-5 text-end">
                      <img 
                        src={prices} 
                        alt="The Center for Natural Health" 
                        style={{ 
                          maxWidth: '500px', 
                          maxHeight: '420px', 
                          objectFit: 'contain',
                          width: '100%'
                        }}
                      />
                     <div style={{
  width: '100%',
  maxWidth: '500px',
  height: '600px',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  marginTop: '20px'
}}>
  <iframe 
    title={t("Carepatron Online Booking")} 
    src="https://book.carepatron.com/The-Center-for-Natural-Health/Dr--Amy?p=Nha96RlJRf28UsTlNh4uKg&s=AmsO3T6p&e=i" 
    style={{
      width: '100%',
      height: '100%',
      border: 'none'
    }}
  />
</div>

                    </div>
                    <div className="col-md-6">
                      <iframe
                        src="https://drive.google.com/file/d/1t4ouK9Afjmmc7PaIYsWM3ALrS0Phkbqf/preview"
                        title='Acupuncture'
                        allow="autoplay"
                        style={{
                          width: '100%',
                          height: '300px',
                          borderRadius: '4px',
                          border: 'none'
                        }}    
                        allowFullScreen
                      />
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
  )
}