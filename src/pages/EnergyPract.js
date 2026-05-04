import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect, useState } from 'react';
import michelle from "../cards/SUNRISEWELLNESS.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import C from '../cards/Headshot-Shoshana-from-Aneeahseah-3-152-scaled.jpg';
import Charlotte from '../cards/charlottethc.jpg'
import { useTranslation } from 'react-i18next'
export default function EnergyPract() {
  const { t } = useTranslation('common');
  const [userLocation, setUserLocation] = useState('');
  const [filteredPractitioners, setFilteredPractitioners] = useState([]);
  const [showAllPractitioners, setShowAllPractitioners] = useState(true);
 useEffect(() => {
              AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
            }, []);
  // Define practitioners data
  const practitioners = [
     {
      id: 1,
      name: t('Charlotte Clark'),
      title: t("Total Healing Centre"),
      location: "USA",
      availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      image: Charlotte,
      website:"https://thcclc.com/",
      embedCode:`<div style="display:grid;width:100%;height:100%;min-width:320px;min-height:600px"><iframe title="Carepatron Online Booking" alt="Book appointments online via Carepatron" width="100%" height="100%" src="https://book.carepatron.com/Total-Healing-Centre/charlotte?p=.1lVzAWBTimCNLZG5Hb7Pg&s=WnJ9JJSr&e=i" style="border:0;"></iframe></div>`,
      video:"https://www.youtube.com/embed/BGjJ4usFVXo",
      description: t("With years of experience in health and wellness, our founder is dedicated to helping clients reach their fullest potential. Through one-on-one sessions and group workshops, you will receive the guidance and motivation needed to transform your life."),
      servesGlobally: true,
      countries: ["USA"]
    },
    {
      id:2,
      name:t("Michele Greenan"),
      title:t("Sunrise Wellness"),
      location:t("USA"),
      availability: t("Available Worldwide"),
      availabilityType:"telehealth",
      image:michelle,
      website:"https://thesunrisewellness.com/",
      embedCode:`<div style="display:grid;width:100%;height:100%;min-width:320px;min-height:700px">
  <iframe 
    title="Schedule with Michael Greenan" 
    src="https://calendly.com/mgreenan89/30min?embed_domain=yourdomain.com&embed_type=Inline" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    frameborder="0"
    scrolling="no">
  </iframe>
</div>,`,
      video:"https://www.youtube.com/embed/ujxPrLsVYHQ?si=YyU0vMpJ6Te8jWKG",
      description:"The moment my life changed forever was the day I was diagnosed with intraductal carcinoma in my breast. What made it even more shocking was that I was in the best shape of my life. I had been lifting weights 5–7 days a week, pushing my body, mind, and spirit to new limits. I felt strong… yet everything shifted in an instant. When I received my diagnosis, I asked about natural and holistic options. I was told that if I chose that path, I could die. Those words echoed deeply within me. At the time, I was a wife and a mother of two beautiful children. I knew I had to make choices not from fear, but from alignment. I began looking inward. I started reprogramming my subconscious mind, listening to transformational speakers on YouTube because I knew my happiness and inner peace were not where I wanted them to be. That search led me to deeper healing. I sought guidance from a Reiki and spiritual master, and that is when everything truly began to shift. I immersed myself in learning, growth, and healing. I read Twin Flames and the Event by Jen McCarty and attended monthly sessions that helped me “fill my spiritual bank account.” Through this journey, I moved through layers of trauma, releasing old patterns and reprogramming my subconscious mind. I learned to trust. I learned to surrender. I learned to have faith in the Divine. Over time, I became Reiki certified, sound healing certified, and stepped into my path as a quantum healer. My healing became more than physical—it became spiritual, emotional, and energetic. I began to feel transformed at a cellular level, as if my very being was shifting into something lighter, clearer… more crystalline. This wasn’t just a healing journey. It was a rebirth.",
      servesGlobally: true,
      countries: ["USA"]

    },
    {
      id:3,
      name: t('Shosana Leopold'),
       title:t("Shosana's Healing Arts"),
       location: "USA",
       availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      image: C,
      website:"https://square.site/book/NNRR8PTT2YNB0/shoshana-s-healing-arts-ashland-or",
      video:"https://www.youtube.com/embed/3R48M38T8jY?si=_sdzi8ullbbF19vb",
      description: t("Shoshana Leopold is a grateful & happy Founder of SHA.  As a younger woman she earned degrees in Biology & Education & dedicated her work-life to improving science education in a variety of educational settings.  During these years, Shoshana learned that Western medicine is only one in a myriad of methods that could potentially help people be healthy & vibrant. She became fascinated by the benefits offered by holistic health traditions including Acupuncture, Homeopathy & Reflexology. Growing in the understanding that our natural tendency is to be healthy, she was intrigued & set about exploring the world of complimentary traditions for her family & herself. She was awed by just how powerful these healing methods are! It was with Reflexology that Shoshana first found a great professional fit. As a Reflexologist for more than 20 years, she has focused her work on creating full body relaxation, increasing energy & optimizing balance throughout the body. Always advancing her studies & expertise, Shoshana expanded her energy healing acumen by studying & adding Aromatherapy & more recently with IHT-Way© Coaching & Creation Healing,© both created & taught by Master teacher & Shaman, Adalayah (Aneeahseah). As a certified IHT-Way® practitioner, Shoshana has introduced new & dynamic, life-changing dimensions to her services. IHT-Way Coaching© offers the opportunity to take charge of the difficult, even daunting, issues in your life.  Whether you want more of or less of specific concerns, study & apply the IHT-Way© teachings to immediately & finally change them. With the profound form of energetic spiritual healing, Creation Healing the Souls Supreme Flight©, SHA offers the opportunity for clients to experience their natural state of wellbeing. Both Creation Healing© & IHT-Way© Coaching are available in person or remotely. Join Shoshana today in imagining & creating a world in which it is perfectly natural to feel great!"),
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
          <title>{t("Energy Healer Near Me")}</title> 
             <meta property="og:title" content={t("Energy Healer Near Me")} />                
                <meta name="description" content={t("Seeking Energy Healer Near Me? Experience lasting change!")} />
 
          <meta name="description" content={t("Seeking energy healer near me? Look no further than great energy healers that can assist you holistically, and provide you wholeness.")} />
        </Helmet>
        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1 style={{ fontFamily: 'sans-serif' }}>
            {t("Seeking Energy Healing Near Me?")}
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
                <div data-aos="slide-right" className="container-blue">
                <h2>{practitioner.title}</h2>
                
                {/* Location and Availability Info */}
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid #dee2e6'
                }}>
                        <div data-aos="slide-right" className="container-blue">

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
                </div>
                {/* Display image without link */}
                <figure>
                  <img src={practitioner.image} style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                  }} alt={practitioner.name} />
                </figure>

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