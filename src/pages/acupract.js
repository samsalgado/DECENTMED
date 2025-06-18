import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Treis from '../cards/oceantreis.jpg';
import { useTranslation } from 'react-i18next'
export function Acupract() {
const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTampaLocation, setIsTampaLocation] = useState(false);
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
    const tampaTerms = ['tampa', 'Tampa, fl', 'fl', 'Florida', 'FL'];
    const isTP = tampaTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
  
    setLocation(capitalizedLocation);  // Set the capitalized location in state
    setIsTampaLocation(isTP);
    setShowResults(true);
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
/*
        <div>
        <Helmet>
        <title>{t("Acupuncturist Near Me")}</title>  
        <meta name="description" content={t("Searching Acupuncturist near me? Look no further than our fantastic acupuncturist that can assist you on your pathway to wellness.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <div class="container">
            <h1>{t("Acupuncture")}</h1>
            <h2>{t("Searching Acupuncturist Near me? We have you covered!")}</h2>
 <div class="row">
    <div class="col-md-4">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h3>{t("Ocean Treis Medical")}</h3>
      <a href='https://oceantreismedical.acubliss.app/portal/booking/nettie-criscio/bradenton/'>
    <figure>
        <img src={Treis} alt="logo" />
          <figcaption>{t("View Website")}</figcaption>
        </figure>
      </a>
      <div>
      <iframe
  src="https://drive.google.com/file/d/1hmNaUgvbJ7nI5rmKIliGsLDsmEmdUsoJ/preview"
  width="100%"
  height="315px"
  title="Acupuncture"
  allow="autoplay"
  allowFullScreen
></iframe>
</div>
  <h5>{t("Ocean Treis Medical:")}</h5>
      <p>
      {t("ocean")}
      </p>
    </div>
  </div>
</div>
*/
    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
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
                  className="btn btn-primary"
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
                
                {/* Chiropractor Listing */}
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
></iframe>

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
                              {t("At Ocean Treis Medical, we provide expert acupuncture treatments designed to relieve stress, reduce anxiety, and restore balance. Our holistic approach goes beyond temporary relief—helping you achieve lasting calm, better sleep, improved digestion, and overall well-being. Think of it as a reset button for your mind and body, so you can feel more grounded, energized, and at ease in your daily life.")}
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
            ) : (
              <div className="no-results text-center" style={{ padding: '3rem 0' }}>
                <div className="mb-4">
                  <i className="fas fa-search fa-3x text-muted mb-3"></i>
                  <h3>{t("No acupuncturists available in")} {location}</h3>
                  <p className="text-muted">
                    {t("We currently don't have any acupuncturists listed in your area. Our services are currently available in Tampa, Fl.")}
                  </p>
                  
                  <div className="mt-4">
                    <h5>{t("Available Locations:")}</h5>
                    <p className="text-primary">
                      {t("Tampa, Florida")}
                    </p>
                  </div>
                  
                  <button 
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      setLocation('Tampa, Fl');
                      setIsTampaLocation(true);
                    }}
                  >
                    {t("View Tampa Acupuncturists")}
                  </button>
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
                    <h5>{t("Licensed Professionals")}</h5>
                    <p className="small text-muted">{t("Qualified and experienced acupuncturists")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                    <h5>{t("Location-Based")}</h5>
                    <p className="small text-muted">{t("Find practitioners near you")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-star fa-2x text-primary mb-2"></i>
                    <h5>{t("Holistic Care")}</h5>
                    <p className="small text-muted">{t("Professional treatment and service")}</p>
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
    )
    
}
