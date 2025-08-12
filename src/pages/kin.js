import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import amy from "../images copy/amy.jpeg";
import prices from "../images copy/prices.png";
import Footer from '../footer';
import { useTranslation } from 'react-i18next'
export function AKPract() {
  const { t } = useTranslation('common');

    return(
        <div>
         <main className="page-content">
        <Helmet>  {/* Add Helmet component */}
        <title>{t("Frequency Medicine")}</title>  
        <meta name="description" content={t("Working with complex disorders via frequency medicine. The Center for Natural Health assists you holsitically, utilizing frequencies to communicate with the brain.")} />
      </Helmet>

      <header>
        <Topbar />
      </header>

      <div class="container">
        <h1 style={{
          fontFamily: 'sans-serif'
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
                            <h3 className="h4 mb-1">{t('Dr. Amy Wicks')}</h3>
                            <p className="text-muted mb-2">{t("The Center for Natural Health")}</p>
                            
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
                                objectFit: 'cover',
                                width: '100%'
                              }}
                            />
                            <a 
                              href="tel:+16367245757" 
                              className="btn btn-outline-primary"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              {t("Contact")}
                            </a>
                            
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
      </main>
    </div>
  )

}

