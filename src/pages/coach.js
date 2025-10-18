import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import Ramona from '../cards/IMG_0587.jpeg';
import Gorilla from '../cards/gorilla.png';
import Anil from '../cards/anil.png';
import Kristina from "../images copy/kristina.png";
import Priscilla from '../cards/priscilla.jpg';
import jimp from '../cards/jimp.png';
import { useTranslation } from 'react-i18next';
export function Coaching() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showAnil, setShowAnil] = useState(false);
  const [showJohn, setShowJohn] = useState(false);
  const [showJim, setShowJim] = useState(false);
  const [showPriscilla, setShowPriscilla] = useState(false);
  const [showKristina, setShowKristina] = useState(false);
  const [showRamona, setShowRamona] = useState(false);
  const [regionPriority, setRegionPriority] = useState('global'); // 'uk', 'india', 'global'
function CalendlyEmbed({ url, height = 700 }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const existingScript = document.getElementById('calendly-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: widgetRef.current,
        });
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [url]);

  return <div ref={widgetRef} style={{ minWidth: '320px', height }} />;
}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setUserLocation('Detect location...');
        },
        () => {
          setUserLocation('Enter your location');
        }
      );
    } else {
      setUserLocation('Enter your location');
    }
  }, []);

const handleSearch = () => {
  if (!location.trim()) {
    setShowAnil(true);
    setShowJohn(true);
    setShowPriscilla(true);
    setShowKristina(true);
    setShowJim(true);
    setShowRamona(true);
    setShowResults(true);
    setRegionPriority('global');
    return;
  }

  const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());

const indiaTerms = [
    'india', 'mumbai', 'delhi', 'bangalore', 'kolkata', 'chennai', 'hyderabad',
    'pune', 'ahmedabad', 'surat', 'jaipur', 'lucknow', 'kanpur', 'nagpur',
    'pakistan', 'bangladesh', 'sri lanka', 'nepal', 'bhutan', 'maldives',
    'afghanistan', 'karachi', 'lahore', 'islamabad', 'dhaka', 'colombo', 'kathmandu'
  ].map(term => term.toLowerCase());

  const ukTerms = [
    'uk', 'united kingdom', 'england', 'scotland', 'wales', 'northern ireland',
    'london', 'manchester', 'birmingham', 'glasgow', 'liverpool', 'edinburgh',
    'bristol', 'leeds', 'sheffield', 'cardiff', 'belfast', 'britain', 'gb'
  ].map(term => term.toLowerCase());

  const kenyaTerms = [
    'kenya', 'nairobi', 'mombasa', 'kisumu', 'nakuru', 'eldoret',
    'africa', 'east africa', 'uganda', 'tanzania', 'rwanda', 'ethiopia'
  ].map(term => term.toLowerCase());

  const usaTerms = [
    'usa', 'united states', 'america', 'us', 'connecticut', 'ct', 'darien',
    'stamford', 'norwalk', 'westport', 'new york', 'ny', 'new jersey', 'nj',
    'tri-state', 'tristate', 'manhattan', 'brooklyn', 'queens', 'bronx'
  ].map(term => term.toLowerCase());

  const westCoast = [
    'nevada', 'utah', 'las vegas', 'reno', 'nv', 'sparks', 'golden valley', 'hidden valley', 'chester', 'westwood', 'janesville'
  ].map(term => term.toLowerCase());

  const floridaTerms = [
    'florida', 'fl', 'clermont', 'orlando', 'tampa', 'miami', 'jacksonville',
    'tallahassee', 'gainesville', 'ocala', 'lakeland', 'kissimmee'
  ].map(term => term.toLowerCase());

  const lowerCaseLocation = capitalizedLocation.toLowerCase();

  const isIndia = indiaTerms.some(term => lowerCaseLocation.includes(term));
  const isUK = ukTerms.some(term => lowerCaseLocation.includes(term));
  const isKenya = kenyaTerms.some(term => lowerCaseLocation.includes(term));
  const isUSA = usaTerms.some(term => lowerCaseLocation.includes(term));
  const isFlorida = floridaTerms.some(term => lowerCaseLocation.includes(term));
  const isNV = westCoast.some(term => lowerCaseLocation.includes(term));

  // Set region priority for ordering
  if (isNV) {
    setRegionPriority('nv'); // Nevada gets Jim first
  } else if (isUSA || isFlorida) {
    setRegionPriority('usa'); // USA gets Kristina first
  } else if (isUK) {
    setRegionPriority('uk');
  } else if (isIndia) {
    setRegionPriority('india');
  } else {
    setRegionPriority('global');
  }

  setShowAnil(isIndia);
  setShowJohn(true); // Always show John
  setShowPriscilla(true); // Always show Priscilla
  setShowKristina(isUSA || isFlorida); // Show for any USA location
  setShowRamona(isFlorida || isUSA);
  setShowJim(isNV || isUSA);
  setShowResults(true);
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Component rendering functions
  const renderKristina = () => (
    showKristina && (
      <div className="row mb-4" key="kristina">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={Kristina} 
                    alt="Kristina" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('THRIVE Results Coaching')}</h2>
                  <p className="text-muted mb-2">{t("Kristina Hess CNS, LDN, Health Coach")}</p>
                  
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("30 Old Kings Hwy S Darien, Connecticut United States")}
                  </p>
                  
                  <div className="mb-2">
                    <span className="badge bg-success text-white me-1">{t("USA")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Health Coaching")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Clinical Nutrition")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Nutrigenomics")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("kristina_bio")}
                  </p>
                </div>
                <div className="col-md-3 text-end">
                  {/* Calendly Embed */}
                          <div className="col-md-12 mt-4">
                            <CalendlyEmbed url="https://calendly.com/kristinahess/15min" height={700} />
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
  const renderJim = () => (
    showJim && (
      <div className="row mb-4" key="kristina">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={jimp} 
                    alt="Amazing Life Design" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('Amazing Life Design')}</h2>
                  <p className="text-muted mb-2">{t("Jim Pehkonen, Life Architect")}</p>
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("Reno, NV 89508 United States")}
                  </p>                  
                  <div className="mb-2">
                    <span className="badge bg-success text-white me-1">{t("Cognitive-Behavioral Therapy and Psychology")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Trauma Coaching for Men")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Unlock your True Potential")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Mindfulness")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("jim_bio")}
                  </p>
                </div>
               <div className="col-md-3 text-end">
                  <a 
                    href="mailto:jim@amazinglifedesign.com"
                    className="btn btn-outline-primary"
                  >
                    {t("Contact")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderRamona = () => (
    showRamona && (
      <div className="row mb-4" key="ramona">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={Ramona} 
                    alt="Ramona" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('Authentic Life Journey')}</h2>
                  <p className="text-muted mb-2">{t("Ramona Crabtree-Falkner Transformational Empowerment Coach")}</p>
                  
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("Clermont, Florida, USA")}
                  </p>
                  
                  <div className="mb-2">
                    <span className="badge bg-success text-white me-1">{t("Florida")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Realign Purpose")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Corporate Burnout")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Mindfulness")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("empowerment_statement")}
                  </p>
                  <iframe
        className="centered-video"
        src="https://www.youtube.com/embed/hgHkSicJ6xc?si=P4xxLg4CeQ_grt5g"
        frameBorder="0"
        allowFullScreen
        title="YouTube video player"
        style={{
          maxWidth: '550px',
          width: '100%',
          height: 'auto'
        }}
      />
                </div>
                <div className="col-md-3 text-end">
                  <a 
                    href="https://authenticlifejourney.as.me/schedule/f3645bcd/?categories[]=FREE%20Exploratory%20Call"  
                    className="btn btn-outline-primary"
                  >
                    {t("Contact")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderPriscilla = () => (
    showPriscilla && (
      <div className="row mb-4" key="priscilla">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={Priscilla} 
                    alt="Priscilla Wmk" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('Priscilla Wmk')}</h2>
                  <p className="text-muted mb-2">{t("Mindset Coach")}</p>
                  
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("Kenya")}
                    <span className="ms-2">
                      <i className="fas fa-video text-success me-1"></i>
                      {t("Global Telehealth Available")}
                    </span>
                  </p>
                  
                  <div className="mb-2">
                    <span className="badge bg-success text-white me-1">{t("Global Coaching")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Mindset Transformation")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Mental Blocks")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Success Alignment")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("des")}
                  </p>
                </div>
                <div className="col-md-3 text-end">
                  <a 
                    href="https://source.dynamitelifestyle.com/book-discovery-call-40/priscilla-wmk" 
                    className="btn btn-outline-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  {t("Free Discovery Call")}
                  </a>
                </div>
              </div>
              
              {/* Video Section for Priscilla */}
              <div className="row mt-3">
                <div className="col-md-6">
                  <iframe
                    src="https://drive.google.com/file/d/1Kmm58fe3qd53eouhOZgz05W75wc06GGl/preview"
                    title='Priscilla Wmk'
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
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderJohn = () => (
    showJohn && (
      <div className="row mb-4" key="john">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={Gorilla} 
                    alt="Gorilla and She Coaching" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('Gorilla and She Coaching')}</h2>
                  <p className="text-muted mb-2">{t("John Craig - Metabolic Health Coach")}</p>
                  
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("United Kingdom")}
                    <span className="ms-2">
                      <i className="fas fa-video text-success me-1"></i>
                      {t("Telehealth Available")}
                    </span>
                  </p>
                  
                  <div className="mb-2">
                    <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Metabolic Health")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Acceleration Coaching")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Health Transformation")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("Specialized coaching for metabolic health and acceleration. Expert guidance for transformative health results and sustainable lifestyle changes. Lose 20–50 lbs+ of belly fat with sports nutritionist-led metabolism coaching that raises basal metabolic rate (BMR).")}
                  </p>
                   <iframe
                    src="https://drive.google.com/file/d/1Z0qVqBe8ukAEMHmKQtzqtWhWx1orq1ri/preview"
                    title='John Craig'
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
                <div className="col-md-3 text-end">
                  <div style={{ display: 'grid', width: '100%', height: '100%', minWidth: '320px', minHeight: '600px' }}>
                    <iframe 
                      title={t("Carepatron Online Booking")} 
                      alt={t("Book appointments online via Carepatron")} 
                      width="100%" 
                      height="100%" 
                      src="https://book.carepatron.com/John-Craig/John-?p=O3qUeu8jRmmaRzG7scOCTg&s=-XtLcg-i&e=i" 
                      style={{ border: 0 }}
                    />
                    
                  </div>
                </div>                        
                </div>
              
           
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderAnil = () => (
    showAnil && (
      <div className="row mb-4" key="anil">
        <div className="col-md-12">
          <div className="card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <img 
                    src={Anil} 
                    alt="Anil Narain Matai" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <div className="col-md-7">
                  <h2 className="h4 mb-1">{t('Anil Narain Matai')}</h2>
                  <p className="text-muted mb-2">{t("Spiritual Coach")}</p>
                  
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {t("India & South Asian Region")}
                  </p>
                  
                  <div className="mb-2">
                    <span className="badge bg-light text-dark me-1">{t("Spiritual Guidance")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Sufi Wisdom")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Soul Journey")}</span>
                    <span className="badge bg-light text-dark me-1">{t("Consciousness")}</span>
                  </div>
                  
                  <p className="card-text small">
                    {t("I'm Anil N Matai, a dedicated poet, philosopher, and spiritual guide on a mission to share the timeless wisdom of Sufi thought through my spiritually enriching poems. Deeply committed to exploring the intricacies of the human soul's journey, consciousness, and the pursuit of spiritual awakening.")}
                  </p>
                </div>
                <div className="col-md-3 text-end">
                  <div style={{ display: 'grid', width: '100%', height: '100%', minWidth: '320px', minHeight: '600px' }}>
                    <iframe 
                      title={t("Schedule Appointment")} 
                      width="100%" 
                      height="100%" 
                      src="https://calendly.com/anil-narain-matai/1-2-1" 
                      style={{ border: 0 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  // Function to render coaches in priority order
const renderCoachesInOrder = () => {
  const coaches = [];
  
  if (regionPriority === 'nv') {
    // Nevada: Jim first, then others
    coaches.push(renderJim());
    coaches.push(renderKristina());
    coaches.push(renderRamona());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
  } else if (regionPriority === 'usa') {
    // USA (non-Nevada): Kristina first
    coaches.push(renderKristina());
    coaches.push(renderRamona());
    coaches.push(renderJim());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
  } else if (regionPriority === 'uk') {
    // UK region: John first, then others
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
    coaches.push(renderKristina());
    coaches.push(renderRamona());
    coaches.push(renderJim());
  } else if (regionPriority === 'india') {
    // India region: Anil first, then others
    coaches.push(renderAnil());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderKristina());
    coaches.push(renderRamona());
    coaches.push(renderJim());
  } else {
    // Global/default order
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderKristina());
    coaches.push(renderRamona());
    coaches.push(renderAnil());
    coaches.push(renderJim());
  }
  
  return coaches.filter(Boolean); // Remove null/undefined entries
};
  return (
    <div>
      <main className="page-content">
        <Helmet>
          <title>{t("Find Health Coaches Near You - Location-Based Coaching Services")}</title>  
          <meta name="description" content={t("Find certified health coaches in your area. Enter your location to see available coaching professionals near you.")} />
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
                <h1 className="text-center mb-4">{t("Find Health Coaches Near You")}</h1>
                
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
              <h2 className="mb-4">{t("Health Coaches serving")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
              
              {/* Render coaches in priority order */}
              {renderCoachesInOrder()}

              {/* Show message if no location-specific coaches but still show global ones */}
              {!showAnil && !showKristina && !showRamona && (showJohn || showPriscilla) && (
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="alert alert-info">
                      <h4 className="alert-heading">
                        <i className="fas fa-globe me-2"></i>
                        {t("Global Coaching Services Available")}
                      </h4>
                      <p className="mb-0">
                        {t("While we may not have local coaches in your immediate area, our global coaching experts are available worldwide via telehealth consultations!")}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Default content when no search performed */}
          {!showResults && (
            <div className="default-content text-center" style={{ padding: '2rem 0' }}>
              <h2>{t("Professional Health Coaching")}</h2>
              <p className="lead text-muted">
                {t("Enter your location above to find qualified health coaches in your area")}
              </p>
              
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-user-friends fa-2x text-primary mb-2"></i>
                      <h3>{t("Certified Coaches")}</h3>
                      <p className="small text-muted">{t("Qualified and experienced health coaching professionals")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-globe fa-2x text-primary mb-2"></i>
                      <h3>{t("Global Reach")}</h3>
                      <p className="small text-muted">{t("Local and telehealth options available worldwide")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-heart fa-2x text-primary mb-2"></i>
                      <h3>{t("Transformational Results")}</h3>
                      <p className="small text-muted">{t("Personalized coaching for lasting health and wellness")}</p>
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
      </main>
    </div>
  );
}