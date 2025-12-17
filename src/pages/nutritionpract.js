import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Topbar from './topbar';
import Footer from '../footer';
import '../App.css';
import '../info/Info.css';

// Import images and assets
import krisina from '../images copy/kristina.png';
import Nutrifyourlife from '../cards/nutrifyourlife.jpg';

// ✅ Calendly Embed Component (inline, so no extra file needed)
function CalendlyEmbed({ url, height = 700 }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const existingScript = document.getElementById('calendly-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: widgetRef.current,
        });
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [url]);

  return <div ref={widgetRef} style={{ minWidth: '320px', height }} />;
}

export function Nutritionpract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isCromwellLocation, setIsCromwellLocation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-detect user location on page load
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
    const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());

    // Check if location contains Connecticut-related terms for Lori's in-person services
    const cromwellTerms = [
      'cromwell', 'connecticut', 'ct', 'middletown', 'portland', 'durham', 
      'berlin', 'rocky hill', 'hartford county', 'middlesex county'
    ];

    const isCromwell = cromwellTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
    
    setIsCromwellLocation(isCromwell);
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
          <title>{t("Find Nutritionists Near You - Location-Based Nutrition Care")}</title>  
          <meta name="description" content={t("Find nutritionists in your area. Enter your location to see available nutrition practitioners near you.")} />
        </Helmet>

        <header>
          <Topbar />
        </header>

        <div className="container">
          {/* Search Bar Section */}
          <div className="search-section" style={{ 
            background: '#f8f9fa', 
            padding: '2rem 0', 
            marginBottom: '2rem',
            borderRadius: '8px'
          }}>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className="text-center mb-4">{t("Find a Clinical Nutritionist, Holistic Nutritionist or Functional Nutritionist Near You")}</h1>
                
                <div className="search-bar-container" style={{
                  display: 'flex',
                  gap: '10px',
                  maxWidth: '800px',
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
                        width:'200px',
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
          </div>

          {showResults && (
            <div className="results-section">
              {isCromwellLocation ? (
                <>
                  <h2 className="mb-4">{t("Nutritionists in")} {location}</h2>
                  
                  {/* Lori - Cromwell Area In-Person */}
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={Nutrifyourlife} 
                                alt="Nutrify Your Life" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Nutrify Your Life')}</h2>
                              <p className="text-muted mb-2">{t("Lori Graham Functional Nutrition")}</p>
                              
                              <p className="mb-2">
                                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                {t("Stamford, Connecticut")}
                              </p>
                              
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Functional Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Weight Management")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Lower Blood Sugar")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Personalized Nutrition")}</span>
                              </div>
                              
                              <p className="card-text small">
                                {t("Welcome to Nutrifyourlife, where I am on a mission to revolutionize healthcare and empower individuals to take control of their health through diet and lifestyle modifications. My personalized functional medicine and nutrition sessions are tailored to your specific needs and goals whether it's weight loss, managing chronic conditions, or improving overall well-being.")}
                              </p>
                            </div>
                            <div className="col-md-3 text-end">
                              <a 
                                href="tel:+12038295349" 
                                className="btn btn-outline-primary"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Contact")}
                              </a>
                            </div>
                          </div>
                          
                          {/* Video Section for Lori */}
                          <div className="row mt-3 justify-content-center">
                            <div className="col-md-6">
                              <iframe
                                src="https://drive.google.com/file/d/1FAa9HGZ_ABcLCE-75EbRyitItoW5FFmg/preview"
                                title='Nutrify Your Life'
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

                  {/* Kristina - Virtual Services with Working Calendly */}
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={krisina} 
                                alt="Thrive Results Coaching" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Thrive Results Coaching')}</h2>
                              <p className="text-muted mb-2">{t("Kristina Hess - Clinical Nutritionist")}</p>
                  
                              <p className="mb-2">
                                <i className="fas fa-globe text-primary me-2"></i>
                                {t("USA (Virtual Consultations Only)")}
                              </p>
                              
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Clinical Nutrition")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Weight Management")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Nutrigenomics")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Metabolic Health")}</span>
                              </div>
                              
                              <p className="card-text small">
                                {t("Kristina is a licensed dietitian-nutritionist with a functional and integrative approach. She is especially passionate about a clean, whole-foods based, cyclical ketogenic approach to treat inflammation and restore metabolic health. She utilizes nutrigenomics data and other functional lab tests to assess what is best for your biology.")}
                              </p>
                            </div>
                          </div>
                          
                          {/* Calendly Embed */}
                          <div className="col-md-12 mt-4">
                            <CalendlyEmbed url="https://calendly.com/kristinahess/15min" height={700} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mb-4">{t("Nutritionists serving")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                  
                  {/* Lori - Available via Telehealth */}
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={Nutrifyourlife} 
                                alt="Nutrify Your Life" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Nutrify Your Life')}</h2>
                              <p className="text-muted mb-2">{t("Lori Graham - Functional Medicine & Nutrition")}</p>
                              
                              <p className="mb-2">
                                <span className="ms-2">
                                  <i className="fas fa-map-marker-alt text-primary me-1"></i>
                                  {t("Based in Stamford, Connecticut")}
                                </span>
                              </p>
                              
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Functional Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Weight Management")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Chronic Conditions")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Personalized Nutrition")}</span>
                              </div>
                              
                              <p className="card-text small">
                                {t("Welcome to Nutrifyourlife, where I am on a mission to revolutionize healthcare and empower individuals to take control of their health through diet and lifestyle modifications. My personalized functional medicine and nutrition sessions are tailored to your specific needs and goals whether it's weight loss, managing chronic conditions, or improving overall well-being.")}
                                <br />
                                <strong className="text-success">{t("lori")}</strong>
                              </p>
                            </div>
                            <div className="col-md-3 text-end">
                              <a 
                                href="tel:+12038295349" 
                                className="btn btn-outline-primary mb-2"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Contact for Telehealth")}
                              </a>
                            </div>
                          </div>
                          
                          {/* Video Section for Lori */}
                          <div className="row mt-3">
                            <div>
                              <iframe
                                src="https://drive.google.com/file/d/1FAa9HGZ_ABcLCE-75EbRyitItoW5FFmg/preview"
                                title='Nutrify Your Life'
                                allow="autoplay"
                                 style={{
                                  width: '100%',
                                  height: '300px',
                                  borderRadius: '4px',
                                  border: 'none',
                                  display: 'block',
                                  margin: '0 auto'
                                }}    
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kristina - Virtual Services Available Everywhere with Working Calendly */}
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={krisina} 
                                alt="Thrive Results Coaching" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                               
                            <div className="col-md-7">
                              <h2 style={{textAlign: 'center'}} className="h4 mb-1">{t('Thrive Results Coaching')}</h2>
                              <p className="text-muted mb-2">{t("Kristina Hess - Clinical Nutritionist")}</p>
                              
                              <p className="mb-2">
                                <i className="fas fa-globe text-primary me-2"></i>
                                {t("Virtual Consultations Only")}
                              </p>
                              
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Functional & Integrative")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Personalized Plans")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Nutrigenomics")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Metabolic Health")}</span>
                              </div>
                               
                              <p className="card-text small">
                                {t("Kristina is a licensed dietitian-nutritionist with a functional and integrative approach. She is especially passionate about a clean, whole-foods based, cyclical ketogenic approach to treat inflammation and restore metabolic health. She utilizes nutrigenomics data and other functional lab tests to assess what is best for your biology.")}
                              </p>
                          
                              <strong className="text-success">{t("kristina")}</strong>
                            </div>
                            <div className="col-md-3 text-end">
                              <a 
                                href="tel:+12039847989" 
                                className="btn btn-outline-primary mb-2"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Contact for Telehealth")}
                              </a>
                            </div>
                          </div>
                          
                          {/* Calendly Embed */}
                          <div className="col-md-12 mt-4">
                            <CalendlyEmbed url="https://calendly.com/kristinahess/15min" height={700} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Information about local vs telehealth options */}
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="alert alert-info">
                        <h4 className="alert-heading">
                          <i className="fas fa-info-circle me-2"></i>
                          {t("Telehealth Services Available")}
                        </h4>
                        <p className="mb-0">
                          {t("Experience personalized nutrition guidance from certified professionals through comprehensive telehealth consultations, available nationwide!")}
                        </p>
                        <hr />
                        <p className="mb-0">
                          <strong>{t("For local in-person consultations, Lori's services are available in:")}</strong>
                          <br />
                          {t("Connecticut: Stamford, Cromwell, Middletown, Portland, Durham, Berlin, Rocky Hill and surrounding areas")}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Default content when no search performed */}
          {!showResults && (
            <div className="default-content text-center" style={{ padding: '2rem 0' }}>
              <h2>{t("Professional Nutrition Care")}</h2>
              <p className="lead text-muted">
                {t("Enter your location above to find qualified nutritionists in your area")}
              </p>
              
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-apple-alt fa-2x text-primary mb-2"></i>
                      <h3>{t("Licensed Nutritionists")}</h3>
                      <p className="small text-muted">{t("Qualified and experienced nutrition professionals")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                      <h3>{t("Location-Based")}</h3>
                      <p className="small text-muted">{t("Find practitioners near you")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-heart fa-2x text-primary mb-2"></i>
                      <h3>{t("Personalized Care")}</h3>
                      <p className="small text-muted">{t("Tailored nutrition plans and wellness support")}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>

        <footer>
          <Footer />
        </footer>
    </div>
  );
}