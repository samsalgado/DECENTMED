import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import Meridian from '../cards/meridian.png';
import { useTranslation } from 'react-i18next';
import drtess from '../cards/drtess.png';

export function Natpract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isWashingtonLocation, setIsWashingtonLocation] = useState(false);
  const [isKansas, setIsKansas] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-detect user location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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

    const washingtonTerms = [
      'washington', 'wa', 'port townsend', 'seattle', 'spokane', 'tacoma', 'bellevue',
      'vancouver', 'kent', 'everett', 'renton', 'federal way', 'yakima', 'bellingham',
      'kennewick', 'auburn', 'pasco', 'marysville', 'lakewood', 'redmond', 'shoreline',
      'richland', 'kirkland', 'burien', 'covington', 'walla walla', 'olympia'
    ];
    const kansasTerms = [
      'kansas', 'kansas city', 'north kansas city', 'gladstone', 'overland park', 'raymore', 'liberty', 'belton', 'independence', 'lees summit', 'blue springs', 'grandview', 'raytown', 'riverside',
      'platte city', 'olathe', 'leawood', 'fairway', 'prairie village', 'shawnee', 'lenexa', 'merriam', 'roeland park'
    ];
    const isWashington = washingtonTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
    const isKansas = kansasTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
    setIsWashingtonLocation(isWashington);
    setIsKansas(isKansas);

    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Dr. Tess Card Component with Calendly
  const DrTessCard = () => (
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card" style={{ border: '1px solid #dee2e6' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 text-center">
                <img 
                  src={drtess} 
                  alt="Total Health Solutions" 
                  style={{ 
                    maxWidth: '100px', 
                    maxHeight: '100px', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
              <div className="col-md-7">
                <h2 className="h4 mb-1">{t('Total Care Health Solutions')}</h2>
                <p className="text-muted mb-2">{t("Dr. Teresa Volner - Naturopathic Doctor")}</p>
                
                <p className="mb-2">
                  <i className="fas fa-video text-success me-2"></i>
                  {t("Telehealth Available")}
                </p>
                
                <div className="mb-2">
                  <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Blood Sugar to Balance")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Lab Testing")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Integrative Medicine vs Functional Medicine")}</span>
                </div>
                
                <p className="card-text small">
                  {t("Total Care Health Solutions provides comprehensive naturopathic care with a focus on personalized treatment plans. Specializing in integrative medicine, she combines traditional naturopathic principles with modern healthcare approaches to address your unique health needs.")}
                  <br />
                  <strong className="text-success">{t("Available for virtual consultations worldwide!")}</strong>
                </p>
              </div>
              <div className="col-md-3 text-end">
                
                <br />
                <a 
                  href="https://totalcarehealthsolutions.com/login" 
                  className="btn btn-primary mb-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t("Join Today")}
                </a>
              </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/L5Fg8RBgC6o?si=ZU5g_-E7tqskrXNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );

  return (
    <div>
        <Helmet>
          <title>{t("Find Naturopathic Doctors Near You - Location-Based Naturopathy Care")}</title>  
          <meta name="description" content={t("Find naturopathic doctors in your area. Enter your location to see available naturopathy practitioners near you.")} />
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
                <h1 className="text-center mb-4">{t("Naturopathie")}</h1>
                
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
          </div>

          {showResults && (
            <div className="results-section">
              {isWashingtonLocation ? (
                <>
                  <h2 className="mb-4">{t("Naturopathic Doctors in")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                  <DrTessCard />
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={Meridian} 
                                alt="Meridian Passage Wellness" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Meridian Passage Wellness')}</h2>
                              <p className="text-muted mb-2">{t("Kristen Barnes - Naturopathic Doctor")}</p>
                              <p className="mb-2">
                                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                {t("Port Townsend, Washington")}
                                <span className="ms-2">
                                  <i className="fas fa-video text-success me-1"></i>
                                  {t("Telehealth Available")}
                                </span>
                              </p>
                              <div className="mb-2">
                                <span className="badge bg-primary text-white me-1">{t("LOCAL WASHINGTON")}</span>
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Root Cause Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Psychedelic Medicine and Fascia Healing")}</span>
                              </div>
                              <p className="card-text small">
                                {t("Text")}
                              </p>
                                                          
                            </div>
                            <div className="col-md-3 text-end">
        

                              <a 
                                href="https://meridianpassagewellness.com/book-now/" 
                                className="btn btn-primary"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Book Now")}
                              </a>
                            </div>
                          <div className="d-flex justify-content-center mb-3">
                        <iframe
                          width="560"
                          height="315"
                          src="https://drive.google.com/file/d/17WvWujc0MhFQ0DM4xfjjqQEdOunjeNWO/preview"
                          title="Patient Acquisition Engine Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{
                            border: 0,
                            maxWidth: '100%',
                            height: 'auto'
                          }}
                        />
                      </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : isKansas ? (
                <>
                  <h2 className="mb-4">{t("Naturopathic Doctors in")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                  <DrTessCard />
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={Meridian} 
                                alt="Meridian Passage Wellness" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Meridian Passage Wellness')}</h2>
                              <p className="text-muted mb-2">{t("Kristen Barnes - Naturopathic Doctor")}</p>
                              <p className="mb-2">
                                <i className="fas fa-video text-success me-2"></i>
                                {t("Available via Telehealth")}
                                <span className="ms-2">
                                  <i className="fas fa-map-marker-alt text-primary me-1"></i>
                                  {t("Based in Washington")}
                                </span>
                              </p>
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Naturopathic Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Root Cause Medicine")}</span>
                              </div>
                              <p className="card-text small">
                                {t("At Meridian Passage Wellness, we are committed to helping you reclaim a vibrant, and healthy life. I provide holistic care that addresses the root causes of your health concerns, focusing on mind, body, and spirit. Whether you're dealing with chronic pain, fatigue, or mental health challenges, I offer a range of integrative therapies designed to support your journey to optimal health.")}
                                <br />
                                <strong className="text-success">{t("Offering telehealth consultations!")}</strong>
                              </p>
                            </div>
                            <div className="col-md-3 text-end">
                              <a 
                                href="https://meridianpassagewellness.com/book-now/" 
                                className="btn btn-outline-primary mb-2"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Book Telehealth Session")}
                              </a>
                              <br />
                              <a 
                                href="tel:+1206567827" 
                                className="btn btn-outline-primary mb-2"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Contact")}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mb-4">{t("Naturopathic Doctors serving")} {location}</h2>
                  <DrTessCard />
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="card" style={{ border: '1px solid #dee2e6' }}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2 text-center">
                              <img 
                                src={Meridian} 
                                alt="Meridian Passage Wellness" 
                                style={{ 
                                  maxWidth: '100px', 
                                  maxHeight: '100px', 
                                  objectFit: 'contain' 
                                }} 
                              />
                            </div>
                            <div className="col-md-7">
                              <h2 className="h4 mb-1">{t('Meridian Passage Wellness')}</h2>
                              <p className="text-muted mb-2">{t("Kristen Barnes - Naturopathic Doctor")}</p>
                              <p className="mb-2">
                                <i className="fas fa-video text-success me-2"></i>
                                {t("Available via Telehealth")}
                                <span className="ms-2">
                                  <i className="fas fa-map-marker-alt text-primary me-1"></i>
                                  {t("Based in Washington")}
                                </span>
                              </p>
                              <div className="mb-2">
                                <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Naturopathic Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Root Cause Medicine")}</span>
                                <span className="badge bg-light text-dark me-1">{t("Mind-Body-Spirit")}</span>
                              </div>
                              <p className="card-text small">
                                {t("At Meridian Passage Wellness, we are committed to helping you reclaim a vibrant, and healthy life. I provide holistic care that addresses the root causes of your health concerns, focusing on mind, body, and spirit. Whether you're dealing with chronic pain, fatigue, or mental health challenges, I offer a range of integrative therapies designed to support your journey to optimal health.")}
                                <br />
                                <strong className="text-success">{t("Now offering virtual consultations - connect with Kristen from anywhere!")}</strong>
                              </p>
                            </div>
                            <div className="col-md-3 text-end">
                              <a 
                                href="tel:+1206567827" 
                                className="btn btn-outline-primary mb-2"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {t("Book Telehealth Session")}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="alert alert-info">
                        <h4 className="alert-heading">
                          <i className="fas fa-info-circle me-2"></i>
                          {t("Telehealth Naturopathic Services Available")}
                        </h4>
                        <p className="mb-0">
                          {t("While we don't have local naturopathic doctors in your immediate area, both Dr. Tess Volner from Total Health Solutions and Kristen Barnes from Meridian Passage Wellness offer comprehensive telehealth consultations. Experience holistic naturopathic care and integrative therapies from the comfort of your home!")}
                        </p>
                        <hr />
                        <p className="mb-0">
                          <strong>{t("For local in-person consultations, our services are available in:")}</strong>
                          <br />
                          {t("Washington: Port Townsend, Seattle, Spokane, Tacoma, Bellevue, Vancouver, and surrounding areas")}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {!showResults && (
            <div className="default-content text-center" style={{ padding: '2rem 0' }}>
              <h2>{t("Professional Naturopathic Care")}</h2>
              <p className="lead text-muted">
                {t("Enter your location above to find qualified naturopathic doctors in your area")}
              </p>
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-leaf fa-2x text-primary mb-2"></i>
                      <h3>{t("Licensed Naturopaths")}</h3>
                      <p className="small text-muted">{t("Qualified and experienced naturopathic doctors")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-heart fa-2x text-primary mb-2"></i>
                      <h3>{t("Holistic Approach")}</h3>
                      <p className="small text-muted">{t("Mind, body, and spirit healing")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-video fa-2x text-primary mb-2"></i>
                      <h3>{t("Telehealth Available")}</h3>
                      <p className="small text-muted">{t("Virtual consultations for your convenience")}</p>
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
