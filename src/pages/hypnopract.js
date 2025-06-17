import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import Green from '../cards/Green-hypnotherapy.png';
import { useTranslation } from 'react-i18next';

export function Hypnopract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTampaLocation, setIsTampaLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setUserLocation('Detect location...'),
        () => setUserLocation('Enter your location')
      );
    } else {
      setUserLocation('Enter your location');
    }
  }, []);

  const handleSearch = () => {
    if (!location.trim()) return;
    const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());

    // Check if location contains Tampa-related terms
    const tampaTerms = ['tampa', 'Tampa', 'fl', 'Florida', 'FL'];

    const isTampa = tampaTerms.some(term =>
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );

    setLocation(capitalizedLocation);
    setIsTampaLocation(isTampa);
    setShowResults(true);
  };

  return (
    <div>
      <Helmet>
        <title>{t("Hypnotherapy Near Me")}</title>
        <meta name="description" content={t("Looking for hypnotherapy near you? Find qualified hypnotherapists to assist with therapy and well-being.")} />
      </Helmet>

      <header><Topbar /></header>

      <div className="container">
        <div className="search-section" style={{ background: '#f8f9fa', padding: '2rem 0', borderRadius: '8px' }}>
          <h1 className="text-center mb-4">{t("Find Hypnotherapist Near You")}</h1>
          <div className="search-bar-container" style={{ display: 'flex', gap: '10px', maxWidth: '800px', margin: '0 auto' }}>
            <input
              type="text"
              className="form-control"
              placeholder={userLocation}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              style={{ height: '50px', fontSize: '16px', borderRadius: '6px' }}
            />
            <button className="btn btn-primary" onClick={handleSearch} style={{ height: '50px', padding: '0 2rem' }}>
              <i className="fas fa-search me-2"></i>{t("Search")}
            </button>
          </div>
        </div>

        {showResults ? (
          <div className="results-section">
            {isTampaLocation ? (
              <>
                <h2>{t("Hypnotherapists in")} {location}</h2>
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <img 
                              src={Green} 
                              alt="Green Hypnotherapy" 
                              style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain' }} 
                            />
                          </div>
                          <div>
                          <iframe
                          style={{
                            borderRadius: "8px",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
                          }}
                          src="https://drive.google.com/file/d/14o0p_J7PigM-3OlyKMyHi8Xwbnrgda3z/preview"
                          width="100%"
                          height="305px"
                          title="Acupuncture"
                          allow="autoplay"
                          allowFullScreen
                        ></iframe>                        
                        </div>
                          <div className="col-md-7">
                            <h3 className="h4 mb-1">{t('Sarah Green')}</h3>
                            <p className="text-muted mb-2">{t("Green Hypnotherapy")}</p>
                            <p className="mb-2">
                              <i className="fas fa-map-marker-alt text-primary me-2"></i>
                              {t("Tampa, Florida")}
                            </p>
                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Transform Negative Subconscious Beliefs")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Reprogram 'Hidden' Beliefs")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Overcome Trauma")}</span>
                            </div>
                            <p className="card-text small">
                              {t("Green Hypnotherapy, while focused on individual healing, is also currently working towards building a community of healers who practice different modalities, such as Eastern medicine and acupuncture, massage therapy, body work (i.e. yoga, etc), traditional mental health counseling, Western medicine, and so much more. The aim is to connect and integrate the practices to better serve our communities and offer support to other healers.")}
                            </p>
                          </div>
                          <div className="col-md-3 text-end">
                            <a 
                              href="tel:+18134856761"
                              className="btn btn-outline-primary"
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
              <div className="no-results text-center" style={{ padding: '3rem 0' }}>
                <div className="mb-4">
                  <i className="fas fa-search fa-3x text-muted mb-3"></i>
                  <h3>{t("No hypnotherapists available in")} {location}</h3>
                  <p className="text-muted">
                    {t("We currently don't have any hypnotherapists listed in your area. Our services are currently available in Tampa, FL.")}
                  </p>
                  <button 
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      setLocation('Tampa, FL');
                      setIsTampaLocation(true);
                    }}
                  >
                    {t("View Tampa Hypnotherapists")}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="default-content text-center">
            <h2>{t("Professional Hypnotherapy")}</h2>
            <p className="lead text-muted">{t("Enter your location above to find qualified hypnotherapists in your area.")}</p>
          </div>
        )}
      </div>

      <footer><Footer /></footer>
    </div>
  );
}
