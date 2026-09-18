import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Topbar from './topbar';
import Footer from '../footer';
import '../App.css';
import '../info/Info.css';
import Nutrifyourlife from '../cards/nutrifyourlife.jpg';
import linkedin from "../images copy/linkedin.png";
import mail from "../images copy/mail.png";
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import youtube from "../images copy/youtube.png";
import { handleMailClick } from '../utils/mailFallback';
export default function Nutritionpract() {
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
        <meta property="og:title" content={t("Find Nutritionists Near You - Location-Based Nutrition Care")} />
        <meta name="description" content={t("Find nutritionists in your area. Enter your location to see available nutrition practitioners near you.")} />
        </Helmet>

        <header>
          <Topbar />
        </header>
        <div className="container-blue">
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
                  <div className="provider-grid mb-4">
                    <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body provider-card-body">
                        <div className="provider-card-top">
                          <img src={Nutrifyourlife} alt="Nutrify Your Life" className="provider-photo" />
                          <h2 className="h4 mb-1">{t('Nutrify Your Life')}</h2>
                          <p className="text-muted mb-0">{t("Lori Graham Functional Nutrition")}</p>
                        </div>

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
                        <div className="provider-video">
                          <iframe
                            src="https://drive.google.com/file/d/1FAa9HGZ_ABcLCE-75EbRyitItoW5FFmg/preview"
                            title='Nutrify Your Life'
                            allow="autoplay"
                            allowFullScreen
                          />
                        </div>

                        <p className="card-text small provider-bio">
                          {t("Welcome to Nutrifyourlife, where I am on a mission to revolutionize healthcare and empower individuals to take control of their health through diet and lifestyle modifications. My personalized functional medicine and nutrition sessions are tailored to your specific needs and goals whether it's weight loss, managing chronic conditions, or improving overall well-being.")}
                        </p>

                        <div className="provider-card-footer">
                          <a href="tel:+12038295349" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                            {t("Contact")}
                          </a>
                          <div className="provider-social-icons">
                            <a href="mailto:loribgraham@gmail.com" onClick={(e) => handleMailClick(e, "loribgraham@gmail.com")} aria-label={t("Email")} title={t("Email")}>
                              <img src={mail} alt={t("Email")} />
                            </a>
                            <a href="https://www.facebook.com/lovetoeatright" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                              <img src={facebook} alt={t("Facebook")} />
                            </a>
                            <a href="https://www.instagram.com/lorigraham1156" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                              <img src={instagram} alt={t("Instagram")} />
                            </a>
                            <a href="https://www.linkedin.com/in/lori-graham-217b208/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                              <img src={linkedin} alt={t("LinkedIn")} />
                            </a>
                            <a href="https://www.youtube.com/@lorigraham9139" target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                              <img src={youtube} alt={t("YouTube")} />
                            </a>
                            <a href="https://www.tiktok.com/@lorigraham.nutritionist" target="_blank" rel="noopener noreferrer" aria-label={t("TikTok")} title={t("TikTok")}>
                              <svg viewBox="0 0 448 512" width="26" height="26" fill="#000000" aria-hidden="true">
                                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                              </svg>
                            </a>
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
                  <div className="provider-grid mb-4">
                    <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body provider-card-body">
                        <div className="provider-card-top">
                          <img src={Nutrifyourlife} alt="Nutrify Your Life" className="provider-photo" />
                          <h2 className="h4 mb-1">{t('Nutrify Your Life')}</h2>
                          <p className="text-muted mb-0">{t("Lori Graham - Functional Medicine & Nutrition")}</p>
                        </div>

                        <p className="mb-2">
                          <i className="fas fa-map-marker-alt text-primary me-1"></i>
                          {t("Based in Stamford, Connecticut")}
                        </p>

                        <div className="mb-2">
                          <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                          <span className="badge bg-light text-dark me-1">{t("Functional Medicine")}</span>
                          <span className="badge bg-light text-dark me-1">{t("Weight Management")}</span>
                          <span className="badge bg-light text-dark me-1">{t("Chronic Conditions")}</span>
                          <span className="badge bg-light text-dark me-1">{t("Personalized Nutrition")}</span>
                        </div>

                        <div className="provider-video">
                          <iframe
                            src="https://drive.google.com/file/d/1FAa9HGZ_ABcLCE-75EbRyitItoW5FFmg/preview"
                            title='Nutrify Your Life'
                            allow="autoplay"
                            allowFullScreen
                          />
                        </div>

                        <p className="card-text small provider-bio">
                          {t("Welcome to Nutrifyourlife, where I am on a mission to revolutionize healthcare and empower individuals to take control of their health through diet and lifestyle modifications. My personalized functional medicine and nutrition sessions are tailored to your specific needs and goals whether it's weight loss, managing chronic conditions, or improving overall well-being.")}
                          <br />
                          <strong className="text-success">{t("lori")}</strong>
                        </p>

                        <div className="provider-card-footer">
                          <a href="tel:+12038295349" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                            {t("Contact for Telehealth")}
                          </a>
                          <div className="provider-social-icons">
                            <a href="mailto:loribgraham@gmail.com" onClick={(e) => handleMailClick(e, "loribgraham@gmail.com")} aria-label={t("Email")} title={t("Email")}>
                              <img src={mail} alt={t("Email")} />
                            </a>
                            <a href="https://www.facebook.com/lovetoeatright" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                              <img src={facebook} alt={t("Facebook")} />
                            </a>
                            <a href="https://www.instagram.com/lorigraham1156" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                              <img src={instagram} alt={t("Instagram")} />
                            </a>
                            <a href="https://www.linkedin.com/in/lori-graham-217b208/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                              <img src={linkedin} alt={t("LinkedIn")} />
                            </a>
                            <a href="https://www.youtube.com/@lorigraham9139" target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                              <img src={youtube} alt={t("YouTube")} />
                            </a>
                            <a href="https://www.tiktok.com/@lorigraham.nutritionist" target="_blank" rel="noopener noreferrer" aria-label={t("TikTok")} title={t("TikTok")}>
                              <svg viewBox="0 0 448 512" width="26" height="26" fill="#000000" aria-hidden="true">
                                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                              </svg>
                            </a>
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