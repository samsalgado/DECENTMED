import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import v from "../images copy/v.webp";
import saumil from "../images copy/saumil.png";
import sandra from "../images copy/sandra.png";
import debbie from "../images copy/ebbie-splin-769fb5b3f87b84_lg.jpg";
import linkedin from "../images copy/linkedin.png";
import mail from "../images copy/mail.png";
import x from "../images copy/x.png";
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import youtube from "../images copy/youtube.png";
import { handleMailClick } from '../utils/mailFallback';
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
      location: "Kansas City",
      availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      mail:"clarkcharlotte50@gmail.com",
      youtube:"https://www.youtube.com/@aquariuswellnessinstitute",
      instagram:"https://www.instagram.com/aquariuswellnessinstitute2.0?utm_source=qr&stkn=MzRxamg3b3cwZWd5",
      facebook:"https://www.facebook.com/aquariuswellnessinstitute",
      tiktok:"https://www.tiktok.com/@clcthc?_r=1&_t=ZP-99nZ1WuxrG3",
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
      location:t("Detroit, Michigan"),
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
      countries: ["USA"],
      mail:"mgreenan89@gmail.com",
      linkedin:"https://www.linkedin.com/in/michele-greenan-3b5622226/",
    },
    {
      id:3,
      name: t('Shosana Leopold'),
       title:t("Shosana's Healing Arts"),
       location: "Rainier, Washington",
       mail:"shoshana@iht.life",
       linkedin:"https://www.linkedin.com/in/shoshana-leopold-707991102/",
       facebook:"https://www.facebook.com/susanshoshana.leopold/",
       availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      image: C,
      website:"https://square.site/book/NNRR8PTT2YNB0/shoshana-s-healing-arts-ashland-or",
      video:"https://www.youtube.com/embed/3R48M38T8jY?si=_sdzi8ullbbF19vb",
      description: t("Shoshana Leopold is a grateful & happy Founder of SHA.  As a younger woman she earned degrees in Biology & Education & dedicated her work-life to improving science education in a variety of educational settings.  During these years, Shoshana learned that Western medicine is only one in a myriad of methods that could potentially help people be healthy & vibrant. She became fascinated by the benefits offered by holistic health traditions including Acupuncture, Homeopathy & Reflexology. Growing in the understanding that our natural tendency is to be healthy, she was intrigued & set about exploring the world of complimentary traditions for her family & herself. She was awed by just how powerful these healing methods are! It was with Reflexology that Shoshana first found a great professional fit. As a Reflexologist for more than 20 years, she has focused her work on creating full body relaxation, increasing energy & optimizing balance throughout the body. Always advancing her studies & expertise, Shoshana expanded her energy healing acumen by studying & adding Aromatherapy & more recently with IHT-Way© Coaching & Creation Healing,© both created & taught by Master teacher & Shaman, Adalayah (Aneeahseah). As a certified IHT-Way® practitioner, Shoshana has introduced new & dynamic, life-changing dimensions to her services. IHT-Way Coaching© offers the opportunity to take charge of the difficult, even daunting, issues in your life.  Whether you want more of or less of specific concerns, study & apply the IHT-Way© teachings to immediately & finally change them. With the profound form of energetic spiritual healing, Creation Healing the Souls Supreme Flight©, SHA offers the opportunity for clients to experience their natural state of wellbeing. Both Creation Healing© & IHT-Way© Coaching are available in person or remotely. Join Shoshana today in imagining & creating a world in which it is perfectly natural to feel great!"),
      servesGlobally: true,
      countries: ["USA"]
    },
    {
      id:4,
      name:t("Deborah Esplin"),
      location:"Canada",
      availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      mail:"desplin@deborahesplin.com",
      facebook:"https://www.facebook.com/alignedclarity/videos/",
      linkedin:"https://www.linkedin.com/in/deborah-esplin/",
      youtube:"https://www.youtube.com/c/debbieesplin",
      instagram:"https://www.instagram.com/aligned.clarity.montreal?stkn=eWNjbTg2anhwbjRt",
      image:debbie,
      website:"https://www.deborahesplin.com/",
      video:"https://www.youtube.com/embed/zIj0oiSeGrE?si=LRmM3yWzTLcpd3ls",
      description: t("Hello. I’m Debbie, creator of Aligned Clarity, a grounded and integrative approach that supports insight, wellness, reflection, and intentional forward movement. Through life coaching, Reiki, Art for Wellness, and holistic practices, I help people reconnect with themselves, gain clarity, and explore the patterns that may be holding them back. My path to this work grew from my own lifelong journey of self-exploration, personal growth, and searching for deeper understanding, balance, and meaning. Today, I bring both personal experience and professional training into a calm, supportive, and carefully held space for change."),
      servesGlobally: true,
      countries: ["Canada"]
    },
    {
      id:5,
       name:t("Veronica Perriera"),
      location:"Mesa, Arizona",
      availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      image:v,
      youtube:"https://www.youtube.com/@risingwithv",
      facebook:"https://www.facebook.com/RISINGWITHV/",
      instagram:"https://www.instagram.com/risingwithv/",
      website:"https://risingwithv.com/",
      video:"https://www.youtube.com/embed/RoNbOhrSAMc?si=D-vetwxogybHAzBq",
      description: t("I guide women back to themselves through my Frequency Reclamation™ Method a unique blend of sound therapy, energy healing, nervous system support, breathwork, and embodiment practices. My work is rooted in lived experience, professional training, and a deep commitment to making healing feel accessible, practical, and sustainable in everyday life."),
      servesGlobally: true,
      countries: ["USA"]
    },
    {
      id:6,
      name:t("Sandra Lee"),
      location:"Penticton, British Columbia, Canada",
      availability: t("Available Worldwide"),
      availabilityType: "telehealth",
      image:sandra,
      mail:"sandra@miracleinspirations.com",
      linkedin:"https://www.linkedin.com/in/sandra-lee-701662250/",
      instagram:"https://www.instagram.com/miracleinspirations/",
      youtube:"https://www.youtube.com/@sandralee1miracleinspirations",
      website:"https://miracleinspirations.com/schedule/",
      video:"https://www.youtube.com/embed/WeLWZR4FRak?si=o_ROoFa4P4VlBkO4",
      description: t("Your brain has more capacity to heal and change than you've been told. I work with people recovering from brain injuries, car accidents, falls, strokes, and concussions, including athletes, veterans, and stroke survivors. I also work with people dealing with focus issues including ADHD, and those concerned about cognitive decline and dementia. I work intuitively, seeing what is stored in the body and the energy field. Combined with Combat Brain Training, a documented system developed by neuroplastician John Kennedy with US Military support, this approach produces remarkable results, measurable in the same session. I am a Caltech-trained scientist with nearly 40 years of experience working at the intersection of the brain, the body, and the unconscious mind. I use NLP, Intuitive Sound Healing, and Combat Brain Training to find what is stopping you and release it at the source. The Spectrum of Anger™ is my framework for understanding how suppressed emotion stores in the body and the brain, creating the patterns that limit function, health, and performance. I am the creator of this framework and author of the upcoming book series of the same name."),
      servesGlobally: true,
      countries: ["USA, Canada"]
    },
    {
      id:7,
      name:t("Saumil Manek"),
      location:"Houston, Texas",
      availability: t("Available Worldwide"),
      availabilityType: "local",
      image:saumil,
      mail:"maneksaumil@gmail.com",
      instagram:"https://www.instagram.com/UNIONISCREATION/",
      youtube:"https://www.youtube.com/@Unioniscreation",
      website:"https://www.unioniscreation.com/",
      video:"https://www.youtube.com/embed/KZSLD5k6H9Y?si=QfO729J1oBQTSSMA",
      description: t("UNIONisCREATION™ was founded by Saumil and Lillian with the intention of building experiences that support both personal and collective wellness. With a shared passion for sound healing, yoga, and conscious living, they have cultivated a practice that blends ancient modalities with modern environments. Their work focuses on creating immersive journeys that are both accessible and deeply restorative, welcoming individuals from all walks of life into spaces of calm, connection, and renewal. Their approach is grounded, intentional, and community-centered, offering experiences that support mental clarity, emotional balance, and overall well-being."),
      servesGlobally: false,
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
        <meta name="description" content={t("Seeking energy healer near me? Look no further than great energy healers that can assist you holistically, and provide you wholeness.")} />
        </Helmet>
        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1 style={{ fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
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

          <div className="provider-grid" style={{ alignItems: 'start' }}>
            {practitionersToShow.map((practitioner) => (
              <div key={practitioner.id} className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
                <div className="card-body provider-card-body">
                  <div className="provider-card-top">
                    <img src={practitioner.image} alt={practitioner.name} className="provider-photo" />
                    <h2 className="h4 mb-1">{practitioner.name}</h2>
                    <p className="text-muted mb-0">{practitioner.title}</p>
                  </div>

                  <p className="mb-1">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <strong>{t("Based in:")}</strong> {practitioner.location}
                  </p>
                  <p className="mb-2">
                    <i className={practitioner.availabilityType === 'telehealth' ? "fas fa-video text-success me-1" : "fas fa-plane text-primary me-1"}></i>
                    {practitioner.availability}
                  </p>

                  {practitioner.video && (
                    <div className="provider-video">
                      <iframe
                        src={practitioner.video}
                        title={`${practitioner.name} Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}

                  <p className="card-text small provider-bio">{practitioner.description}</p>

                  <div className="provider-card-footer">
                    {practitioner.embedCode ? (
                      <div className="provider-booking-embed" dangerouslySetInnerHTML={{ __html: practitioner.embedCode }} />
                    ) : (
                      <a
                        href={practitioner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        {t("View Profile")}
                      </a>
                    )}
                    <div className="provider-social-icons">
                      {practitioner.mail && (
                        <a href={`mailto:${practitioner.mail}`} onClick={(e) => handleMailClick(e, practitioner.mail)} aria-label={t("Email")} title={t("Email")}>
                          <img src={mail} alt={t("Email")} />
                        </a>
                      )}
                      {practitioner.linkedin && (
                        <a href={practitioner.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                          <img src={linkedin} alt={t("LinkedIn")} />
                        </a>
                      )}
                      {practitioner.facebook && (
                        <a href={practitioner.facebook} target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                          <img src={facebook} alt={t("Facebook")} />
                        </a>
                      )}
                      {practitioner.instagram && (
                        <a href={practitioner.instagram} target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                          <img src={instagram} alt={t("Instagram")} />
                        </a>
                      )}
                      {practitioner.youtube && (
                        <a href={practitioner.youtube} target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                          <img src={youtube} alt={t("YouTube")} />
                        </a>
                      )}
                      {practitioner.tiktok && (
                        <a href={practitioner.tiktok} target="_blank" rel="noopener noreferrer" aria-label={t("TikTok")} title={t("TikTok")}>
                          <svg viewBox="0 0 448 512" width="26" height="26" fill="#000000" aria-hidden="true">
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                          </svg>
                        </a>
                      )}
                      {practitioner.x && (
                        <a href={practitioner.x} target="_blank" rel="noopener noreferrer" aria-label={t("X")} title={t("X")}>
                          <img src={x} alt={t("X")} />
                        </a>
                      )}
                    </div>
                  </div>
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