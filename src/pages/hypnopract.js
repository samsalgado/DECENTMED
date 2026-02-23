import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import Green from '../cards/Green-hypnotherapy.png';
import shea from "../cards/shea.png";
import { useTranslation } from 'react-i18next';

export function Hypnopract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    const trimmed = location.trim().toLowerCase();
    if (!trimmed) return;

    let city = null;

    if (trimmed.includes('sarasota')) {
      city = 'sarasota';
    } else if (trimmed.includes('tampa')) {
      city = 'tampa';
    }

    setSelectedCity(city);
    setShowResults(true);
  };

  const formattedLocation =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>{t("Hypnotherapy Near Me")}</title>
        <meta
          name="description"
          content={t("Looking for hypnotherapy near you? Find qualified hypnotherapists to assist with therapy and well-being.")}
        />
      </Helmet>

      <header>
        <Topbar />
      </header>

      <div className="container">

        {/* SEARCH */}
        <div
          className="search-section"
          style={{ background: '#f8f9fa', padding: '2rem 0', borderRadius: '8px' }}
        >
          <h1 className="text-center mb-4">
            {t("Find Hypnotherapist Near You")}
          </h1>

          <div
            className="search-bar-container"
            style={{ display: 'flex', gap: '10px', maxWidth: '800px', margin: '0 auto' }}
          >
            <input
              type="text"
              className="form-control"
              placeholder={userLocation}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              style={{ height: '50px', fontSize: '16px', borderRadius: '6px' }}
            />

            <button
              className="custom-btn"
              onClick={handleSearch}
              style={{ height: '50px', padding: '0 2rem' }}
            >
              {t("Search")}
            </button>
          </div>
        </div>

        {/* RESULTS */}
        {showResults && (
          selectedCity ? (
            <div className="results-section py-5">
              <h2>
                {t("Hypnotherapists in")} {formattedLocation}
              </h2>

              {selectedCity === 'tampa' && (
                <div className="card mb-4">
                  <div className="card-body row align-items-center">

                    <div className="col-md-3">
                      <img
                        src={Green}
                        alt="Green Hypnotherapy"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>

                    <div className="col-md-6 text-start">
                      <h4>{t("Green Hypnotherapy")}</h4>
                      <p>{t("Tampa, Florida")}</p>
                       <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Transform Negative Subconscious Beliefs")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Reprogram 'Hidden' Beliefs")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Overcome Trauma")}</span>
                            </div>
                      <p className="small">
                        {t("Green Hypnotherapy, while focused on individual healing, is also currently working towards building a community of healers who practice different modalities, such as Eastern medicine and acupuncture, massage therapy, body work (i.e. yoga, etc), traditional mental health counseling, Western medicine, and so much more. The aim is to connect and integrate the practices to better serve our communities and offer support to other healers.")}
                      </p>
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
                    <div className="col-md-3">
                      <a
                        href="https://calendly.com/greenhypnotherapy/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        {t("Book Consultation")}
                      </a>
                    </div>

                  </div>
                </div>
              )}

              {selectedCity === 'sarasota' && (
                <div className="card mb-4">
                  <div className="card-body row align-items-center">

                    <div className="col-md-3">
                      <img
                        src={shea}
                        alt="Shea Shulman Therapy"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>

                    <div className="col-md-6 text-start">
                      <h4>{t("Shea Shulman Therapy")}</h4>
                      <p>{t("Sarasota, Florida")}</p>
                       <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Subconscious Reprogramming")}</span>
                              <span className="badge bg-light text-dark me-1">{t("EMDR")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Overcome Trauma")}</span>
                            </div>
                      <p className="small">
                        {t("shea_bio")}
                      </p>
                    </div>
                        <div>
                          <iframe
                          style={{
                            borderRadius: "8px",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
                          }}
                          src="https://www.youtube.com/embed/tWy0oFz82yw?si=FVQbe1o75aOv1ZZR"
                          width="100%"
                          height="305px"
                          title="Acupuncture"
                          allow="autoplay"
                          allowFullScreen
                        ></iframe>  
                        </div>
                       
                    <div className="col-md-3">
                      <a
                        href="https://sheashulmantherapy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        {t("Learn More")}
                      </a>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="no-results text-center py-5">
              <h3>
                {t("No hypnotherapists available in")} {formattedLocation}
              </h3>

              <button
                className="custom-btn mt-3"
                onClick={() => {
                  setLocation("Tampa");
                  setSelectedCity("tampa");
                  setShowResults(true);
                }}
              >
                {t("View Florida Hypnotherapists")}
              </button>
            </div>
          )
        )}

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}