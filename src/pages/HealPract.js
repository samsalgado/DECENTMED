import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect, useState } from 'react';
import Saumil from '../cards/Saumil.png'
import { useTranslation } from 'react-i18next'
export function HealPract() {
  const { t } = useTranslation('common');
  const [userLocation, setUserLocation] = useState('');
  const [filteredPractitioners, setFilteredPractitioners] = useState([]);
  const [showAllPractitioners, setShowAllPractitioners] = useState(true);

  // Define practitioners data
  const practitioners = [
     {
      id: 1,
      name: t('Saumil Manek'),
      title: t("Saum"),
      location: "Houston, Texas, USA",
      availability: t("Available Nationwide"),
      availabilityType: "telehealth",
      image: Saumil,
      website:"https://unioniscreation.com/soundhealinghub",
      embedCode:`mailto:Unioniscreation@gmail.com`,
      video:"https://www.youtube.com/embed/tUI8bQYmjjc?si=p7LFqkSwRIqFGJEX",
      description: t("Saumil and Lillian Manek are the founders and lead facilitators of Union is Creation, a Houston-based wellness organization specializing in sound healing, meditation, and mindful movement. Together, they have guided thousands of participants through restorative experiences designed to support stress management, nervous system reset, and emotional well-being. Their work is especially tailored for professionals operating in high-performance and high-stress environments, including healthcare, corporate, and community settings."),
      servesGlobally: true,
      countries: ["USA"]
    }      
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLocationSearch = () => {
    if (!userLocation.trim()) {
      setShowAllPractitioners(true);
      setFilteredPractitioners([]);
      return;
    }

    const filtered = practitioners.filter(practitioner => {
      const locationLower = userLocation.toLowerCase().trim();
      
      // Check if practitioner serves globally
      if (practitioner.servesGlobally) {
        return true;
      }
      
      // Check if location matches practitioner's base location
      if (practitioner.location.toLowerCase().includes(locationLower)) {
        return true;
      }
      
      // Check if location matches any of the countries they serve
      return practitioner.countries.some(country => 
        country.toLowerCase().includes(locationLower) ||
        locationLower.includes(country.toLowerCase())
      );
    });

    setFilteredPractitioners(filtered);
    setShowAllPractitioners(false);
  };

  const clearSearch = () => {
    setUserLocation('');
    setShowAllPractitioners(true);
    setFilteredPractitioners([]);
  };

  const practitionersToShow = showAllPractitioners ? practitioners : filteredPractitioners;

  return(
   <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>
          <title>{t("Sound Bowl Healing Near Me")}</title>  
          <meta name="description" content={t("Seeking sound bowl healing near me? Look no further than great sound healers that can assist you holistically, and provide you wholeness.")} />
        </Helmet>

        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1 style={{ fontFamily: 'sans-serif' }}>
            {t("Find Sound Bowl Healing Near You")}
          </h1>

          {/* Location Search Section */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '30px',
            border: '1px solid #dee2e6'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>
              📍 {t("Enter Your Location")}
            </h3>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                placeholder={t("Enter city, state, or country (e.g., Detroit, India, USA)")}
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  outline: 'none',
                  textTransform: 'uppercase',
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
              />
              <button
                onClick={handleLocationSearch}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#027360',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                🔍 {t("Search")}
              </button>
              <button
                onClick={clearSearch}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'grey',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                {t("Show All")}
              </button>
            </div>
            
            {!showAllPractitioners && (
              <div style={{ marginTop: '15px', color: '#666' }}>
                {filteredPractitioners.length > 0 ? (
                  <p>✅ {t(`Found ${filteredPractitioners.length} practitioner(s) available for: ${userLocation}`)}</p>
                ) : (
                  <p>❌ {t(`No practitioners found for: ${userLocation}. Try a different location or view all practitioners.`)}</p>
                )}
              </div>
            )}
          </div>

          <div className="row">
            {practitionersToShow.map((practitioner) => (
              <div key={practitioner.id} className="col-md-10" style={{ marginBottom: '40px' }}>
                <h2>{practitioner.title}</h2>
                
                {/* Location and Availability Info */}
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid #dee2e6'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>📍</span>
                    <strong>{t("Based in:")}</strong>
                    <span style={{ marginLeft: '8px' }}>{practitioner.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>
                      {practitioner.availabilityType === 'telehealth' ? '🌐' : '✈️'}
                    </span>
                    <strong>{t("Availability:")}</strong>
                    <span style={{ 
                      marginLeft: '8px', 
                      color: practitioner.availabilityType === 'telehealth' ? '#28a745' : '#007bff', 
                      fontWeight: 'bold' 
                    }}>
                      {practitioner.availability}
                    </span>
                  </div>
                </div>

                {/* Display image without link */}
                <figure>
                  <img src={practitioner.image} style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                  }} alt={practitioner.name} />
                </figure>

                {/* Add contact button - with special handling for Yogi's embed code */}
               <div style={{ marginBottom: '20px' }}>
                  {practitioner.embedCode ? (
                    // Check if embedCode is a mailto link
                    practitioner.embedCode.startsWith('mailto:') ? (
                      <a 
                        href={practitioner.embedCode}
                        style={{
                          padding: '15px 30px',
                          backgroundColor: '#027360',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          display: 'inline-block',
                          marginBottom: '10px'
                        }}
                      >
                        ✉️ {t("Email")} {practitioner.name}
                      </a>
                    ) : (
                      // Render the embed code for iframe embeds
                      <div dangerouslySetInnerHTML={{ __html: practitioner.embedCode }} />
                    )
                  ) : (
                    // Regular button for other practitioners with website
                    <button 
                      onClick={() => window.open(practitioner.website, '_blank')}
                      style={{
                        padding: '15px 30px',
                        backgroundColor: '#027360',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginBottom: '10px'
                      }}
                    >
                      📞 {t("Contact")} {practitioner.title}
                    </button>
                  )}
                </div>
                {practitioner.services && (
                  <img src={practitioner.services} style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '8px'
                      }} alt={practitioner.name} />
                )}
                
                {practitioner.video && (
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", marginBottom: '20px' }}>
                    <iframe
                      src={practitioner.video}
                      title={`${practitioner.name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "0",
                        borderRadius: "12px"
                      }}
                    />
                  </div>
                )}

                <h3>{practitioner.name}</h3>
                <p>{practitioner.description}</p>
              </div>
            ))}
          </div>

          {practitionersToShow.length === 0 && !showAllPractitioners && (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              marginTop: '20px'
            }}>
              <h3>{t("No practitioners found")}</h3>
              <p>{t("Try searching for a different location or browse all available practitioners.")}</p>
            </div>
          )}
        </div>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}