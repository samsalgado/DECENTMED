import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import "../info/Info.css";
import process from "../images copy/process.png";
import drtess from '../cards/drtess.png';
import amy from "../images copy/amy.jpeg";
import prices from "../images copy/prices.png";
import betterhealthsolutions from '../images copy/drk.png'
import { useTranslation } from 'react-i18next';
// Remote Page: Frequency Medicine:
//Dr. Amy Wicks
//BioChemistry
//Supplements & Herbs
//Homeopathy
//Emotional Work

export function Chiro() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isArizonaLocation, setIsArizonaLocation] = useState(false);
  const [isStLouisLocation, setIsStLouisLocation] = useState(false);
  const [isKansaCity, setKansasCity] = useState(false);
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

    // Check if location contains Arizona-related terms
    const arizonaTerms = [
      'arizona', 'az', 'scottsdale', 'phoenix', 'tempe', 'mesa', 
      'paradise valley', 'fountain hills', 'carefree', 'glendale'
    ];
    const stLouisTerms = [
      'missouri', 'mo', 'st charles', 'St. Charles', 'Saint Louis', 'st louis', 'Belleville','belleville',
       'carefree', 'Troy', 'Alton', 'troy', 'alton', 'edwardsville', 'Edwardsville'
    ];
const kansasTerms = [
      'kansas', 'kansas city', 'north kansas city', 'gladstone','overland park', 'raymore', 'liberty', 'belton', 'independence', 'lees summit', 'blue springs', 'grandview', 'raytown', 'riverside',
      'platte city', 'olathe', 'Kansas City', 'leawood', 'fairway', 'prairie village', 'shawnee', 'lenexa', 'merriam', 'roeland park', 'kc'
    ];
    const isAZ = arizonaTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );

    const isStLouis = stLouisTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );
        const isKansas = kansasTerms.some(term => 
      capitalizedLocation.toLowerCase().includes(term.toLowerCase())
    );

    setIsArizonaLocation(isAZ);
    setKansasCity(isKansas);
    setIsStLouisLocation(isStLouis);
    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return(
    <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>
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
                maxWidth: '100%',
                margin: '0 auto',
                padding: '0 1rem',
                flexWrap: 'wrap'
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
                      width:'100%',
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
            {isArizonaLocation ? (
              <>
                <h2 className="mb-4">{t("Chiropractors in")}{" "} {location}</h2>
                
                {/* Dr. Abbas Khayami - Arizona */}
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                              src={betterhealthsolutions} 
                              alt="Better Health Solutions" 
                              style={{ 
                                maxWidth: '100%', 
                                maxHeight: '100px', 
                                objectFit: 'contain' 
                              }} 
                            />
                          </div>
                          <div className="col-md-7">
                            <h2 className="h4 mb-1">{t('Dr. Abbas Khayami')}</h2>
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
                              href="tel:+14809456900" 
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
            ) : isStLouisLocation ? (
              <>
  <h2 className="mb-4">{t("Chiropractors in")}{" "}{location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
  
  <div className="row mb-4">
    <div className="col-md-12">
      <div className="card" style={{ border: '1px solid #dee2e6' }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-2 text-center">
              <img 
                src={amy} 
                alt="The Center for Natural Health" 
                style={{ 
                  maxWidth: '100px', 
                  maxHeight: '100px', 
                  objectFit: 'contain' 
                }} 
              />
            </div>
            <div className="col-md-7">
              <h2 className="h4 mb-1">{t('The Center for Natural Health')}</h2>
              <p className="text-muted mb-2">{t("Dr. Amy Wicks")}</p>
              
              <p className="mb-2">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                {t("St. Charles, Missouri")}
              </p>
              
              <div className="mb-2">
                <span className="badge bg-light text-dark me-1">{t("Chiropractic Adjustments")}</span>
                <span className="badge bg-light text-dark me-1">{t("Holistic Treatment for Complex Disorders")}</span>
                <span className="badge bg-light text-dark me-1">{t("NAET Treatment (Nambudripad's Allergy Elimnation Techniques)")}</span>
              </div>
              
              <p className="card-text small">
                {t("Dr. Wicks' passion is to help others that seem to have nowhere else to turn.  She specializes in treating hard to treat conditions including (but not limited to) back pain, headaches, neurological conditions, digestive issues, arthritis, food sensitivities, seasonal allergies, and many more. When the body is functioning optimally, the way it was designed, then it has the ability to heal itself.  With adjustments, proper nutrition and balancing the body's systems using AK and CK procedures and/or NAET, it is then able to function optimally.")}
              </p>
              <div className="col-md-6">
              <iframe
                src="https://drive.google.com/file/d/1t4ouK9Afjmmc7PaIYsWM3ALrS0Phkbqf/preview"
                title='Acupuncture'
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
            <div className="col-md-3 text-end">
              <img 
                src={prices} 
                alt="The Center for Natural Health" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '200px', 
                  objectFit: 'contain',
                  width: '100%',
                  marginBottom: '15px'
                }}
              />
              
<div style={{ display: 'grid', width: '100%', height: '100%', minWidth: '320px', minHeight: '600px' }}>
  <iframe 
    title="Carepatron Online Booking"
    width="100%" 
    height="100%" 
    src="https://book.carepatron.com/Total-Care-Chiropractic-Wellness-and-Diagnostic-Center-LLC/Total-Care?p=J2kttqPqTiCjLVl6UMymig&s=2QnHnlj.&e=i"
    style={{ border: 0 }}
  >
  </iframe>
</div>            
</div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</>
              ) : isKansaCity ? (
              <>
              <h2 className="mb-4">{t("Chiropractors in")}{" "}{location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card" style={{ border: '1px solid #dee2e6' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <img 
                              src={drtess} 
                              alt="Total Care Chiropractic" 
                              style={{ 
                                maxWidth: '100px', 
                                maxHeight: '100px', 
                                objectFit: 'contain' 
                              }} 
                            />
                          </div>
                          <div className="col-md-7">
                            <h2 className="h4 mb-1">{t('Total Care Chiropractic')}</h2>
                            <p className="text-muted mb-2">{t("Dr. Teresa Volner")}</p>
                            
                            <p className="mb-2">
                              <i className="fas fa-map-marker-alt text-primary me-2"></i>
                              {t("6308 College Boulevard Overland Park, KS 66211")}
                            </p>
                           
                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-1">{t("Chiropractic Adjustments")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Spinal Decompression near me")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Portable Hyperbaric Oxygen Chamber")}</span>
                              <span className="badge bg-light text-dark me-1">{t("Holistic Health Labs")}</span>
                            </div>
                            
                            <p className="card-text small">
                              {t("Discover comprehensive wellness solutions at Total Care Chiropractic today. Without medications, we treat a range of conditions using chiropractic care, supplements, advanced alternative therapies (like hyperbaric chamber & Emsella®), and more. Dr. Tess Volner is an experienced Doctor of Chiropractic and Natural Medicine, having worked in the field 10 years now & keeping up-to-date with advancements in the fields of chiropractic and natural medicine. Let's enhance your well-being today!")}
                            </p>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/L5Fg8RBgC6o?si=ZU5g_-E7tqskrXNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div>
                            <img 
                              src={process} 
                              alt="Total Care Chiropractic" 
                             style={{ 
                                maxWidth: '550px', 
                                maxHeight: '420px', 
                                objectFit: 'contain',
                                width: '100%'
                              }} 
                            />
                          </div>
                          </div>
                         <div className="col-md-3 text-end">
                            <div>
                            </div>
<div 
  style={{ 
    display: 'grid', 
    width: '100%', 
    height: 'auto',
    minHeight: '400px',
    maxHeight: '90vh',
    overflow: 'hidden'
  }}
>
  <iframe
    title="Carepatron Online Booking"
    alt="Book appointments online via Carepatron"
    width="100%"
    height="100%"
    src="https://book.carepatron.com/Total-Care-Chiropractic-Wellness-and-Diagnostic-Center-LLC/Teresa?p=J2kttqPqTiCjLVl6UMymig&s=Yh0KM2FQ&e=i"
    style={{
      border: 0,
      width: '100%',
      height: '100%',
      minHeight: '400px'
    }}
  />
</div>
                            <br />
                            <a 
                              href="tel:+19135224473" 
                              className="btn btn-primary mb-2"
                              target="_blank" 
                              style={{                                  color: '#fff',
                              backgroundColor: '#027360',}}
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
                  <h2>{t("No chiropractors available in ")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
                  <p className="text-muted">
                    {t("We currently don't have any chiropractors listed in your area. Our services are currently available in Arizona and Missouri.")}
                  </p>
                  
                  <div className="mt-4">
                    <h3>{t("Available Locations:")}</h3>
                    <p className="text-primary">
                      {t("Scottsdale, Phoenix, Tempe, Mesa, Paradise Valley - Arizona")}
                      <br />
                      {t("St. Louis, St. Charles, Troy, Alton, Edwardsville - Missouri")}
                    </p>
                  </div>
                  
                  <div className="mt-3">
                    <button 
                      className="custom-btn"
                      onClick={() => {
                        setLocation('Scottsdale, AZ');
                        setIsArizonaLocation(true);
                        setIsStLouisLocation(false);
                      }}
                    >
                      {t("View Arizona Chiropractors")}
                    </button>
                    <button 
                     className="custom-btn"
                      onClick={() => {
                        setLocation('St. Louis, MO');
                        setIsArizonaLocation(false);
                        setIsStLouisLocation(true);
                      }}
                    >
                      {t("View Missouri Chiropractors")}
                    </button>
                  </div>
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
                    <h3>{t("Licensed Professionals")}</h3>
                    <p className="small text-muted">{t("Qualified and experienced chiropractors")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                    <h3>{t("Location-Based")}</h3>
                    <p className="small text-muted">{t("Find practitioners near you")}</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-star fa-2x text-primary mb-2"></i>
                    <h3>{t("Quality Care")}</h3>
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