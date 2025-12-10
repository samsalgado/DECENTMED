import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import "../info/Info.css";
import { useTranslation } from 'react-i18next'

export function StemPract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Auto-detect user location on page load
  useEffect(() => {
        window.scrollTo(0, 0);
    
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
    
    // Capitalize each word
    const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());
    
    setLocation(capitalizedLocation);
    setShowResults(true);
  };

  return(
    <div>
      <Helmet>
        <title>{t("Find Stem Cell Therapy Near You - Location-Based Treatment")}</title>  
        <meta name="description" content={t("Find stem cell therapy providers in your area. Enter your location to see available stem cell treatment centers near you.")} />
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
              <h1 className="text-center mb-4">{t("Find Stem Cell Therapy Near You")}</h1>
              
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
                    style={{
                      height: '50px',
                      width:'200px',
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

        {/* Results Section - Always show "No providers available" */}
        {showResults && (
          <div className="results-section">
            <div className="no-results text-center" style={{ padding: '3rem 0' }}>
              <div className="mb-4">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h3>{t("No stem cell therapy providers available in")} {location}</h3>
                <p className="text-muted">
                  {t("We currently don't have any stem cell therapy providers listed in your area. We are working to expand our network of qualified practitioners.")}
                </p>
                
                <div className="mt-4 p-4" style={{ background: '#f8f9fa', borderRadius: '8px', maxWidth: '600px', margin: '2rem auto' }}>
                  <h5 className="text-primary">{t("What is Stem Cell Therapy?")}</h5>
                  <p className="text-muted small mb-0">
                    {t("Stem cell therapy uses the body's natural healing mechanisms to treat various conditions. These treatments require specialized medical facilities and trained professionals to ensure safety and effectiveness.")}
                  </p>
                </div>
                
                <div className="mt-4">
                  <h6>{t("Looking for other treatments?")}</h6>
                  <p className="text-muted small">
                    {t("We offer various other therapeutic options that may be available in your area.")}
                  </p>
                  
                  <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
                    <a href="/chiropract" className="btn btn-outline-primary btn-sm">
                      {t("Chiropractic Care")}
                    </a>
                    <a href="/acupuncturists" className="btn btn-outline-primary btn-sm">
                      {t("Acupuncture")}
                    </a>
                    <a href="/naturopathicproviders" className="btn btn-outline-primary btn-sm">
                      {t("Naturopathy")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Default content when no search performed */}
        {!showResults && (
          <div className="default-content text-center" style={{ padding: '2rem 0' }}>
            <h2>{t("Advanced Stem Cell Therapy")}</h2>
            <p className="lead text-muted">
              {t("Enter your location above to search for stem cell therapy providers in your area")}
            </p>
            
            <div className="row justify-content-center mt-4">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-microscope fa-2x text-primary mb-2"></i>
                    <h5>{t("Advanced Technology")}</h5>
                    <p className="small text-muted">{t("Cutting-edge regenerative medicine")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-user-md fa-2x text-primary mb-2"></i>
                    <h5>{t("Specialized Care")}</h5>
                    <p className="small text-muted">{t("Expert medical professionals")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-heartbeat fa-2x text-primary mb-2"></i>
                    <h5>{t("Healing Potential")}</h5>
                    <p className="small text-muted">{t("Natural regenerative treatments")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="alert alert-info" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h6 className="alert-heading">{t("About Stem Cell Therapy")}</h6>
                <p className="mb-0 small">
                  {t("Stem cell therapy is a form of regenerative medicine that uses the body's natural healing mechanisms to treat various medical conditions. These treatments require specialized facilities and trained medical professionals.")}
                </p>
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