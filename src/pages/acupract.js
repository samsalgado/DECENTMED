import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import Treis from '../cards/oceantreis.webp';
import Erica from '../cards/erica.webp';
import linkedin from "../images copy/linkedin.png";
import mail from "../images copy/mail.png";
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import x from "../images copy/x.png";
import { handleMailClick } from '../utils/mailFallback';
import { useTranslation } from 'react-i18next'
import { Button,  Modal } from 'react-bootstrap';

export default function Acupract() {
const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTampaLocation, setIsTampaLocation] = useState(false);
  const [isMilwaukeeLocation, setIsMilwaukeeLocation] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const txt = `My name is Nettie Criscio. I am a licensed acupuncturist and I just started my practice. I attended East West College of Natural Medicine in Sarasota. I got my master's in Oriental Medicine there, got all of my boards, Florida license and I just started my practice.
If youre in Tampa, Florida needing acupuncture. Visit Oson Treis Medical. We provide expert acupuncture treatments designed to relieve stress, reduce anxiety and restore balance.
 Our holistic approach goes beyond temporary relief, helping you achieve lasting calm, better sleep, improved digestion and overall well-being.
Think of it as a reset button for your mind and body so you can feel more grounded, energized and at ease in your daily life.
 Visit https://oceantreis.com/.`
  return(
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t("Find Acupuncturists Near You - Location-Based Acupuncture Care")}</title>
        <meta property="og:title" content={t("Find Acupuncturists Near You - Location-Based Acupuncture Care")} />
        <meta name="description" content={t("Find acupuncturists in your area. Enter your location to see available acupuncture providers near you.")} />
        </Helmet>
      <header>
        <Topbar />
      </header>
       <div className="container-blue">

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
                <div className="provider-grid mb-4" style={{ alignItems: 'start' }}>
                  <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
                    <div className="card-body provider-card-body">
                      <div className="provider-card-top">
                        <img src={Treis} alt="Ocean Treis Medical" className="provider-photo" />
                        <h3 className="h4 mb-1">{t('Dr. Nettie Criscio')}</h3>
                        <p className="text-muted mb-0">{t("Ocean Treis Medical")}</p>
                      </div>

                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("Tampa, Florida")}
                      </p>

                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("Corporate Burnout")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Stress Management")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Holistic Care")}</span>
                      </div>

                      <div className="provider-video">
                        <iframe
                          src="https://drive.google.com/file/d/1hmNaUgvbJ7nI5rmKIliGsLDsmEmdUsoJ/preview"
                          title="Acupuncture"
                          allow="autoplay"
                          allowFullScreen
                        />
                      </div>

                      <p className="card-text small provider-bio">
                        {t("We provide expert acupuncture treatments designed to relieve stress, reduce anxiety and restore balance. Our holistic approach goes beyond temporary relief, helping you achieve lasting calm, better sleep, improved digestion and overall well-being.")}
                      </p>

                      <Button className="btn btn-outline-primary mb-2" onClick={() => setShowModal(true)}>
                        {t("Transcript")}
                      </Button>
                      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="custom-modal" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>{t("Transcript")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>{t(txt)}</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowModal(false)}>
                            {t("Close")}
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <div className="provider-card-footer">
                        <div className="provider-booking-embed" style={{ minHeight: '600px' }}>
                          <iframe
                            title={t("Carepatron Online Booking")}
                            aria-label={t("Book appointments online via Carepatron")}
                            width="100%"
                            height="100%"
                            src="https://book.carepatron.com/Ocean-Treis-Medical/Dr--Nettie?p=.MG7pzmtQCi.vG7CRJViDA&s=mjaA41Jt&e=i"
                            style={{ border: 0, minHeight: '600px' }}
                          />
                        </div>
                        <div className="provider-social-icons">
                          <a href="mailto:contact@oceantreis.com" onClick={(e) => handleMailClick(e, 'contact@oceantreis.com')} aria-label={t("Email")} title={t("Email")}>
                            <img src={mail} alt={t("Email")} />
                          </a>
                          <a href="https://www.instagram.com/oceantreis" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                            <img src={instagram} alt={t("Instagram")} />
                          </a>
                          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                            <img src={linkedin} alt={t("LinkedIn")} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : isMilwaukeeLocation ? (
              <>
                <h2 className="mb-4">{t("Acupuncturists in")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                
                {/* Milwaukee Acupuncturist Listing */}
                <div className="provider-grid mb-4" style={{ alignItems: 'start' }}>
                  <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
                    <div className="card-body provider-card-body">
                      <div className="provider-card-top">
                        <img src={Erica} alt="Erica - Acupuncturist" className="provider-photo" />
                        <h3 className="h4 mb-1">{t("Erica Zernzach")}</h3>
                        <p className="text-muted mb-0">{t("A Right Path Wellness")}</p>
                      </div>

                      <p className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {t("Milwaukee, Wisconsin")}
                      </p>

                      <div className="mb-2">
                        <span className="badge bg-light text-dark me-1">{t("EZ Method Academy")}</span>
                        <span className="badge bg-light text-dark me-1">{t("EZ Method Apothecary")}</span>
                        <span className="badge bg-light text-dark me-1">{t("Wellness Care")}</span>
                      </div>

                      <p className="card-text small provider-bio">
                        {t("At A Right Path Wellness, our mission is to promote total wellness through holistic medicine—restoring balance within your body, mind and spirit. Certified in the ancient practice of Eastern Medicine, our practitioners activate your body’s innate healing abilities—empowering our community by showing you that the path to transformation is right within your reach.")}
                      </p>

                      <div className="contact-info small text-muted provider-bio">
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

                      <div className="provider-card-footer">
                        <a
                          href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVPK2rLwi2wW2Hcqnt45ru7xeMoXQ+UT3hcGgeFxwrNLxGas3EMbzye4U2WX/rwf9IYZDynb6+Fown6mYs0Nsk2BpT/NOiWu3gMIcjcx54KqTH4KyXa+URS5nvKy0AYp2ZueRDkn+eBaJi7meUvXLTDXuq6vGXcmPbRvasfHZGyLLi3eTPR9LgIPuOV4rK6W8Mya2KAv2FiUoQp1+s5fGqk7Y6y9hJHqSoM/MbpsZgQNkcbKgYpo1kmmLazM4XJ0T8yemk74007Ie4gqUguNOUYnQSWCu0K0dQ82ppPe7skL2I6ONF41SWIDf0BZzllZwb9PdAonfaRTwO9vxqKxZgGnyeREkAacIaUiHXeIo3euKsuPqhY41zH7o61bax3lThDNWgkwyPDFc5MvnIyiJvy4='
                          className="btn btn-outline-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("Book Appointment")}
                        </a>
                        <div className="provider-social-icons">
                          <a href="mailto:erica@arightpath.com" onClick={(e) => handleMailClick(e, 'erica@arightpath.com')} aria-label={t("Email")} title={t("Email")}>
                            <img src={mail} alt={t("Email")} />
                          </a>
                          <a href="https://www.facebook.com/arightpathwellness" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                            <img src={facebook} alt={t("Facebook")} />
                          </a>
                          <a href="https://www.instagram.com/arightpathwellness/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                            <img src={instagram} alt={t("Instagram")} />
                          </a>
                          <a href="https://twitter.com/arightpath" target="_blank" rel="noopener noreferrer" aria-label={t("X")} title={t("X")}>
                            <img src={x} alt={t("X")} />
                          </a>
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
                  <h3>{t("No acupuncturists available in")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h3>
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
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}