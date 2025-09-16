import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect, useState } from 'react';
import Stacy from '../cards/healinggoddess.png'
import Yogi from '../cards/yogiSanjivana.jpg'
import { useTranslation } from 'react-i18next'

export function AYPract() {
  const { t } = useTranslation('common');
  const [userLocation, setUserLocation] = useState('');
  const [filteredPractitioners, setFilteredPractitioners] = useState([]);
  const [showAllPractitioners, setShowAllPractitioners] = useState(true);

  // Define practitioners data
  const practitioners = [
    {
      id: 1,
      name: t('Stacy Theodossin - The Healing Goddess'),
      title: t("Healing Goddess"),
      location: "Detroit, Michigan, USA",
      availability: t("Telehealth Available Worldwide"),
      availabilityType: "telehealth",
      image: Stacy,
      website: "https://healinggoddessproducts.com/",
      description: t("After Stacy graduated from San Diego State University in 1992, she moved to the Detroit area and began her career in sales and marketing. She traveled the world and climbed the corporate ladder. But something was missing. Before long, she was back to her studies – this time in Ayurvedic Medicine. Her own journey to health and healing, through Ayurveda, had already begun a few years earlier -- when she was a patient with her own chronic health conditions. When she had the opportunity to deepen her knowledge, she jumped at the chance. At first, it was from an academic standpoint. She couldn't wrap her mind around how it all worked. After hours and years of study and residency, she found the answers she sought. Then, her mission was clear – she needed to teach others how to HEAL & TRANSFORM their own lives through Ayurveda, the 'wisdom of life."),
      video: "https://drive.google.com/file/d/1D8iq7LsXMgercG-_td7e7gQexodAfzSv/preview",
      servesGlobally: true,
      countries: ["USA", "Canada", "UK", "Australia", "worldwide"]
    },
    {
      id: 2,
      name: t('Yogi Sanji - (Sanjivana)'),
      title: t("Yogi Sanjivana"),
      location: "India",
      availability: t("International Sessions Available"),
      availabilityType: "international",
      image: Yogi,
      website: "https://sanjivana.com/",
      description: t("My name is Yogi Sanji (Sanjivana), and my expertise is meditation and spiritual mentoring. I am a former monk of 20 years and have extensive experience teaching meditation to individuals and large groups. Meditation is my passion, interest, and life. I help people reach their goals of happiness, peace, and liberation through the practice of meditation and mindfulness. I teach meditation based on ancient traditions and doctrines which include deep insights, concentration, mindfulness, relaxation, and healing meditations. Sanjivana Kularathna - Serenity Meditations Meditation Teacher, Spiritual- Counselor, Therapist, Tutor, Mentor, Life Coach Energy work healing Working for Charities, Suicide prevention , Trauma Recovery , Rehabilitation, Sober Therapy and rebuilding lives."),
      servesGlobally: true,
      countries: ["India", "USA", "Canada", "UK", "Australia", "worldwide"]
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
    <div>
      <main className="page-content">
        <Helmet>
          <title>{t("Ayurveda Near Me")}</title>  
          <meta name="description" content={t("Ayurveda near me? Look no further than great ayurvedists that can assist you holistically, and provide you wholeness.")} />
        </Helmet>

        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1 style={{ fontFamily: 'sans-serif' }}>
            {t("Find Ayurveda Practitioners Near You")}
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

                <a href={practitioner.website} target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src={practitioner.image} style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px'
                    }} alt={practitioner.name} />
                    <figcaption>{t("View Website")}</figcaption>
                  </figure>
                </a>
                
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
      </main>
    </div>
  )
}