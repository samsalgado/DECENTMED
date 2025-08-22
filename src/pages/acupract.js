import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Treis from '../cards/oceantreis.jpg';
import Erica from '../cards/erica.png';
import { useTranslation } from 'react-i18next'

export function Acupract() {
const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTampaLocation, setIsTampaLocation] = useState(false);
  const [isMilwaukeeLocation, setIsMilwaukeeLocation] = useState(false);

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
  
    // Capitalize each word in the location
    const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());
  
    // Check if location contains Tampa-related terms
    const tampaTerms = ['tampa', 'Tampa, fl', 'fl', 'Florida', 'FL', 'bradenton', 'sarasota'];
    const isTP = tampaTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );

    // Check if location contains Milwaukee-related terms
    const milwaukeeTerms = ['milwaukee', 'wisconsin', 'wi', 'WI'];
    const isMW = milwaukeeTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
  
    setLocation(capitalizedLocation);  // Set the capitalized location in state
    setIsTampaLocation(isTP);
    setIsMilwaukeeLocation(isMW);
    setShowResults(true);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return(
    <div>
    <main className="page-content">

      <Helmet>
        <title>{t("Acupuncturist Near Me")}</title>  
        <meta name="description" content={t("Searching Acupuncturist near me? Look no further than our fantastic acupuncturist that can assist you on your pathway to wellness.")} />
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
              <h1 className="text-center mb-4">{t("Find Acupuncturists Near You")}</h1>
              
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

        {/* Results Section */}
        {showResults && (
          <div className="results-section">
            {isTampaLocation ? (
              <>
                <h2 className="mb-4">{t("Acupuncturists in")} {location}</h2>
                
                {/* Tampa Acupuncturist Listing */}
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <img 
                              src={Treis} 
                              alt="Ocean Treis Medical" 
                              style={{ 
                                maxWidth: '300px', 
                                maxHeight: '300px', 
                                objectFit: 'contain' 
                              }} 
                            />
                          </div>
                          <div>
                            <iframe
                              style={{
                                borderRadius: "8px",
                                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
                              }}
                              src="https://drive.google.com/file/d/1hmNaUgvbJ7nI5rmKIliGsLDsmEmdUsoJ/preview"
                              width="100%"
                              height="305px"
                              title="Acupuncture"
                              allow="autoplay"
                              allowFullScreen
                            />
                          </div>
                          <div className="col-md-7">
                            <h3 className="h4 mb-1">{t('Dr. Nettie Criscio')}</h3>
                            <p className="text-muted mb-2">{t("Ocean Treis Medical")}</p>
                            
                            <p className="mb-2">
                              <i className="fas fa-map-marker-alt text-primary me-2"></i>
                              {t("Tampa, Florida")}
                            </p>
                            
                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Corporate Burnout")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Stress Managment")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                            </div>
                            
                            <p className="card-text small">
                              {t("At Ocean Treis Medical, we provide expert acupuncture treatments designed to relieve stress, reduce anxiety, and restore balance. Our holistic approach goes beyond temporary relief—helping you achieve lasting calm, better sleep, improved digestion, and overall well-being. Think of it as a reset button for your mind and body, so you can feel more grounded, energized, and at ease in your daily life. Aside from burnout, Ocean Treis has fascial acupuncture. Fascial Acupuncture has many benefits, like reducing wrinkles and looking young. If you are in Tampa, search fascial acupuncture near me.")}
                            </p>
                          </div>
                          <div className="col-md-3 text-end">
                            <a 
                              href='https://oceantreismedical.acubliss.app/portal/booking/nettie-criscio/bradenton/' 
                              className="btn btn-outline-primary"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              {t("Book Appointment")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : isMilwaukeeLocation ? (
              <>
                <h2 className="mb-4">{t("Acupuncturists in")} {location}</h2>
                
                {/* Milwaukee Acupuncturist Listing */}
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <img 
                              src={Erica} 
                              alt="Erica - Acupuncturist" 
                              style={{ 
                                maxWidth: '300px', 
                                maxHeight: '300px', 
                                objectFit: 'contain',
                                borderRadius: '8px'
                              }} 
                            />
                          </div>
                          <div className="col-md-7">
                            <h3 className="h4 mb-1">{t("Erica Zernzach")}</h3>
                            <p className="text-muted mb-2">{t("A Right Path Wellness")}</p>
                            
                            <p className="mb-2">
                              <i className="fas fa-map-marker-alt text-primary me-2"></i>
                              {t("Milwaukee, Wisconsin")}
                            </p>
                            
                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("EZ Method Academy")}</span>
                              <span className="badge bg-light text-dark me-1">{t("EZ Method Apothecary")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Wellness Care")}</span>
                            </div>
                            
                            <p className="card-text small">
                              {t("At A Right Path Wellness, our mission is to promote total wellness through holistic medicine—restoring balance within your body, mind and spirit. Certified in the ancient practice of Eastern Medicine, our practitioners activate your body’s innate healing abilities—empowering our community by showing you that the path to transformation is right within your reach.")}
                            </p>
                            
                            <div className="contact-info small text-muted">
                              <p className="mb-1">
                                <i className="fas fa-phone me-2"></i>
                                {t("+1(414) 651-2850")}
                              </p>
                              <p className="mb-1">
                                <i className="fas fa-envelope me-2"></i>
                                {t("Erica@ARightPath.com")}
                              </p>
                              <p className="mb-1">
                                <i className="fas fa-clock me-2"></i>
                                {t("128 E Morgan Ave Milwaukee, WI 53207")}
                              </p>
                              <p className="mb-1">
                                <i className="fas fa-clock me-2"></i>
                                {t("M-F 10-8pm")}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 text-end">
                          <a 
                              href='https://arightpath.com/bookanappointment/' 
                              className="btn btn-outline-primary"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              {t("Book Appointment")}
                            </a>
                            <br />
                            <a 
                              href='mailto:Erica@ARightPath.com' 
                              className="btn btn-outline-primary mb-2"
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
              <div className="no-results text-center" style={{ padding: '3rem 0' }}>
                <div className="mb-4">
                  <i className="fas fa-search fa-3x text-muted mb-3"></i>
                  <h3>{t("No acupuncturists available in")} {location}</h3>
                  <p className="text-muted">
                    {t("We currently don't have any acupuncturists listed in your area. Our services are currently available in Tampa, FL and Milwaukee, WI.")}
                  </p>
                  
                  <div className="mt-4">
                    <h3>{t("Available Locations:")}</h3>
                    <div className="d-flex justify-content-center gap-4">
                      <div>
                        <p className="text-primary mb-1">
                          {t("Tampa, Florida")}
                        </p>
                        <button 
                          className="custom-btn"
                          onClick={() => {
                            setLocation('Tampa, FL');
                            setIsTampaLocation(true);
                            setIsMilwaukeeLocation(false);
                          }}
                        >
                          {t("View Tampa")}
                        </button>
                      </div>
                      <div>
                        <p className="text-primary mb-1">
                          {t("Milwaukee, Wisconsin")}
                        </p>
                        <button 
                          className="custom-btn"
                          onClick={() => {
                            setLocation('Milwaukee, WI');
                            setIsMilwaukeeLocation(true);
                            setIsTampaLocation(false);
                          }}
                        >
                          {t("View Milwaukee")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Default content when no search performed */}
        {!showResults && (
          <div className="default-content text-center" style={{ padding: '2rem 0' }}>
            <h2>{t("Professional Acupuncturists")}</h2>
            <p className="lead text-muted">
              {t("Enter your location above to find qualified acupuncturists in your area")}
            </p>
            
            <div className="row justify-content-center mt-4">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-user-md fa-2x text-primary mb-2"></i>
                    <h3>{t("Licensed Professionals")}</h3>
                    <p className="small text-muted">{t("Qualified and experienced acupuncturists")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                    <h3>{t("Location-Based")}</h3>
                    <p className="small text-muted">{t("Find practitioners near you")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-star fa-2x text-primary mb-2"></i>
                    <h3>{t("Holistic Care")}</h3>
                    <p className="small text-muted">{t("Professional treatment and service")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access to Available Locations */}
            <div className="mt-5">
              <h2 className="mb-3">{t("Available Locations")}</h2>
              <div className="d-flex justify-content-center gap-3">
                <button 
             className="custom-btn"

                  onClick={() => {
                    setLocation('Tampa, FL');
                    setIsTampaLocation(true);
                    setIsMilwaukeeLocation(false);
                    setShowResults(true);
                  }}
                >
                  {t("Tampa, Florida")}
                </button>
                <button 
                                           className="custom-btn"

                  onClick={() => {
                    setLocation('Milwaukee, WI');
                    setIsMilwaukeeLocation(true);
                    setIsTampaLocation(false);
                    setShowResults(true);
                  }}
                >
                  {t("Milwaukee, Wisconsin")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
      </main>
    </div>
  )
}