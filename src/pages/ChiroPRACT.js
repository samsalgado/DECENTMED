import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import betterhealthsolutions from '../cards/betterheatlhsolutions.png'
import { useTranslation } from 'react-i18next'

export function Chiro() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isArizonaLocation, setIsArizonaLocation] = useState(false);

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

    // Check if location contains Arizona-related terms
    const arizonaTerms = [
      'arizona', 'az', 'scottsdale', 'phoenix', 'tempe', 'mesa', 
      'paradise valley', 'fountain hills', 'carefree', 'glendale'
    ];
    
    const isAZ = arizonaTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
    
    setIsArizonaLocation(isAZ);
    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return(
    <div>
      <Helmet>
        <title>{t("Find Chiropractors Near You - Location-Based Chiropractic Care")}</title>  
        <meta name="description" content={t("Find chiropractors in your area. Enter your location to see available chiropractic care providers near you.")} />
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
              <h1 className="text-center mb-4">{t("Find Chiropractors Near You")}</h1>
              
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

        {showResults && (
          <div className="results-section">
            {isArizonaLocation ? (
              <>
                <h2 className="mb-4">{t("Chiropractors in")} {location}</h2>
                
                {/* Chiropractor Listing */}
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <img 
                              src={betterhealthsolutions} 
                              alt="Better Health Solutions" 
                              style={{ 
                                maxWidth: '100px', 
                                maxHeight: '100px', 
                                objectFit: 'contain' 
                              }} 
                            />
                          </div>
                          <div className="col-md-7">
                            <h3 className="h4 mb-1">{t('Dr. Abbas Khayami')}</h3>
                            <p className="text-muted mb-2">{t("Better Health Solutions")}</p>
                            
                            <p className="mb-2">
                              <i className="fas fa-map-marker-alt text-primary me-2"></i>
                              {t("Scottsdale, Arizona")}
                            </p>
                            
                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Spinal Adjustments")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Pain Management")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                            </div>
                            
                            <p className="card-text small">
                              {t("Comprehensive chiropractic care in Scottsdale, AZ. Specializing in spinal health, pain reduction, and holistic wellness approaches.")}
                            </p>
                          </div>
                          <div className="col-md-3 text-end">
                            <a 
                              href='https://drkhayami.com/' 
                              className="btn btn-outline-primary"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              {t("View Profile")}
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
                  <h3>{t("No chiropractors available in")} {location}</h3>
                  <p className="text-muted">
                    {t("We currently don't have any chiropractors listed in your area. Our services are currently available in Arizona.")}
                  </p>
                  
                  <div className="mt-4">
                    <h5>{t("Available Locations:")}</h5>
                    <p className="text-primary">
                      {t("Scottsdale, Phoenix, Tempe, Mesa, Paradise Valley - Arizona")}
                    </p>
                  </div>
                  
                  <button 
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      setLocation('Scottsdale, AZ');
                      setIsArizonaLocation(true);
                    }}
                  >
                    {t("View Arizona Chiropractors")}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Default content when no search performed */}
        {!showResults && (
          <div className="default-content text-center" style={{ padding: '2rem 0' }}>
            <h2>{t("Professional Chiropractic Care")}</h2>
            <p className="lead text-muted">
              {t("Enter your location above to find qualified chiropractors in your area")}
            </p>
            
            <div className="row justify-content-center mt-4">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-user-md fa-2x text-primary mb-2"></i>
                    <h5>{t("Licensed Professionals")}</h5>
                    <p className="small text-muted">{t("Qualified and experienced chiropractors")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                    <h5>{t("Location-Based")}</h5>
                    <p className="small text-muted">{t("Find practitioners near you")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-star fa-2x text-primary mb-2"></i>
                    <h5>{t("Quality Care")}</h5>
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