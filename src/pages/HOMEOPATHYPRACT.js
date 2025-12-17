import '../App.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import "../info/Info.css";
import Topbar from './topbar';
import Footer from '../footer';
import svet from "../cards/svetoslav.png";
import { useTranslation } from 'react-i18next';
export function HomeopathyPract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In real implementation, you'd use reverse geocoding API
          // For demo, we'll just set a default
          setUserLocation('Detect location...');
        },
        (error) => {
          setUserLocation('Enter your location');
        }
      );
    } else {
      setUserLocation('Enter your location');
    }
  }, []);

  const handleSearch = () => {
    if (!location.trim()) return;
    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
   <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t("Homeopathy Near Me")}</title>  
        <meta name="description" content={t("Homeopathy near to me? Look no further than great homeopaths that can assist you holistically, and provide you wholeness.")} />
      </Helmet>

      <header>
        <Topbar />
      </header>

      <div className="container">
        <div className="search-section" style={{ 
          background: '#f8f9fa', 
          padding: '2rem 0', 
          marginBottom: '2rem',
          borderRadius: '8px'
        }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h1 style={{textAlign:'center'}}>{t("Homeopathy")}</h1>
              <p>{t("Whether you're searching for homeopathy near to me​ our featured practitioners offer both in-person and virtual homeopathic services.")}</p>
              <div className="search-bar-container" style={{
                display: 'flex',
                gap: '10px',
                maxWidth: '800px',
                textAlign:"center",
                margin: '0 auto',
                padding: '0 1rem'
              }}>
                <div style={{ flex: '1', position: 'relative' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={userLocation}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={handleKeyPress}
                    style={{
                      height: '50px',
                      fontSize: '16px',
                      width: '200px',
                      paddingLeft: '40px',
                      border: '2px solid #dee2e6',
                      borderRadius: '6px'
                    }}
                  />
                  <i className="fas fa-map-marker-alt" style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6c757d'
                  }}></i>
                </div>
                <button
                  className="custom-btn"
                  onClick={handleSearch}
                  style={{
                    height: '50px',
                    padding: '0 2rem',
                    background: '#007bff',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '500'
                  }}
                >
                  <i className="fas fa-search me-2"></i>
                  {t("Search")}
                </button>
              </div>
            </div>
          </div>

          {showResults && (
            <div className="results-section">
              <h2 className="mb-4">{t("Homeopaths Available for Telehealth")}</h2>
              
              {/* First Practitioner - Dr. Svetoslav Bulatov */}
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="card" style={{ border: '1px solid #dee2e6' }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 text-center">
                          <img src={svet} alt="Dr. Svetoslav Bulatov" style={{ 
                            maxWidth: '100px', 
                            maxHeight: '100px', 
                            objectFit: 'contain' 
                          }} />
                        </div>
                        <div className="col-md-7">
                          <h2 className="h4 mb-1">{t('Dr. Svetoslav Bulatov')}</h2>
                          <p className="text-muted mb-2">{t("Riches of Health")}</p>
                          
                          <p className="mb-2">
                            <i className="fas fa-map-marker-alt text-primary me-2"></i>
                            {t("Israel")} | <i className="fas fa-video text-success me-1"></i>{t("Telehealth Available")}
                          </p>
                          
                          <div className="mb-2">
                            <span className="badge bg-light text-dark me-1">{t("Integrative Medicine")}</span>
                            <span className="badge bg-light text-dark me-1">{t("Quantum Healing")}</span>
                            <span className="badge bg-light text-dark me-1">{t("Online Consultations")}</span>
                          </div>
                          
                          <p className="card-text small">
                            {t("We are applying the best of ancient and modern medicine to resolve difficult cases. The integrative medicine looks at the whole person, not at the disease symptoms.")}
                          </p>
                          
                          <p className="card-text small">
                            <strong>{t("Pricing:")}</strong> {t("Quantum leap bodywork is R1000 for 60 min and R1600 for 120 min. R1600 for online consultation.")}
                          </p>
                        </div>
                        <div className="col-md-3 text-end">
                          <a 
                            href='https://www.richesofhealth.co.za/distant-consultation.php' 
                            className="btn btn-outline-primary mb-2"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {t("View Profile")}
                          </a>
                          <br />
                          <small className="text-muted">{t("Telehealth Available")}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast Section */}
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="card" style={{ border: '1px solid #dee2e6' }}>
                    <div className="card-body">
                      <h3 className="mb-3">{t("Listen to Our Homeopathy Podcast")}</h3>
                      <iframe 
                        src="https://iframe.iono.fm/chan/123" 
                        title="Homeopathy Podcast" 
                        width="100%" 
                        height="450" 
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          )}

          {/* Default content when no search performed */}
          {!showResults && (
            <div className="default-content text-center" style={{ padding: '2rem 0' }}>
              <h2>{t("Professional Homeopathic Care")}</h2>
              <p className="lead text-muted">
                {t("Enter your location above to find qualified homeopaths in your area. All our practitioners offer telehealth services worldwide.")}
              </p>
              
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-user-md fa-2x text-primary mb-2"></i>
                      <h3>{t("Licensed Professionals")}</h3>
                      <p className="small text-muted">{t("Qualified and experienced homeopaths")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-video fa-2x text-primary mb-2"></i>
                      <h3>{t("Telehealth Available")}</h3>
                      <p className="small text-muted">{t("Online consultations available worldwide")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-leaf fa-2x text-primary mb-2"></i>
                      <h3>{t("Natural Healing")}</h3>
                      <p className="small text-muted">{t("Holistic treatment and natural remedies")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}