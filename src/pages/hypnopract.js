import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import shea from "../cards/shea.jpg";
import don from "../cards/don.jpg";
import Green from '../cards/Green-hypnotherapy.png';
import mail from "../images copy/mail.png";
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import youtube from "../images copy/youtube.png";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hypnopract() {
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
useEffect(() => {
      AOS.init({ duration: 1000, once: false}); // once:true means animation runs only once
    }, []);
  // ✅ SEARCH LOGIC
const handleSearch = () => {
  const trimmed = location.trim().toLowerCase();
  if (!trimmed) return;

  let city = null;

  if (trimmed.includes('sarasota')) {
    city = 'sarasota';
  } else if (trimmed.includes('tampa')) {
    city = 'tampa';
  } 
  // Florida catch-all
  else if (
    trimmed.includes('florida') ||
    trimmed.includes('fl') ||
    trimmed.includes('miami') ||
    trimmed.includes('orlando') ||
    trimmed.includes('jacksonville')
  ) {
    city = 'tampa'; // default priority for Florida
  }

  setSelectedCity(city);
  setShowResults(true);
};
  const formattedLocation =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  // ✅ PROVIDERS
  const providers = [
    {
      id: 'tampa',
      name: t("Green Hypnotherapy"),
      city: 'tampa',
      locationLabel: t("Tampa, Florida"),
      image: Green,
      link: "https://calendly.com/greenhypnotherapy/new-meeting",
      buttonText: t("Book Consultation"),
      bio: t("Green Hypnotherapy, while focused on individual healing, is also currently working towards building a community of healers who practice different modalities, such as Eastern medicine and acupuncture, massage therapy, body work (i.e. yoga, etc), traditional mental health counseling, Western medicine, and so much more. The aim is to connect and integrate the practices to better serve our communities and offer support to other healers."),
      badges: [
        t("Transform Negative Subconscious Beliefs"),
        t("Reprogram 'Hidden' Beliefs"),
        t("Overcome Trauma")
      ],
      iframe: "https://drive.google.com/file/d/14o0p_J7PigM-3OlyKMyHi8Xwbnrgda3z/preview",
      mail: "greenhypnotherapy@gmail.com",
      youtube: "https://www.youtube.com/channel/UCo7sDvf5wB9eE8bInWqf7wQ",
      instagram: "https://www.instagram.com/ThatHypnoSis",
      tiktok: "https://www.tiktok.com/@thathypnosis"
    },
    {
      id:"United States",
      name:t("Hypnosis Silver Spring"),
      city:t("Silver Springs, Maryland"),
      locationLabel:t("United States"),
      image:don,
      link:"https://calendly.com/donald-pelles/hypnotherapy-consultation?month=2026-03",
      buttonText: t("Book Consulation"),
      bio:t("Donald Pelles, Ph.D., is a hypnotherapist based in Silver Spring, MD, working with clients over the internet. He helps individuals resolve difficult challenges and transform how they experience their lives, using his Empowered Self Framework. Through targeted hypnotherapy and NLP, Donald works with clients to move beyond anxiety, fears, unwanted habits, and performance blocks, while also enhancing focus, confidence, and effectiveness in the moments that matter most. His work supports lasting, authentic change and a greater sense of clarity, ease, and high-level performance. Hypnotherapy is Donald’s third successful career; he was previously a mathematics professor and later a software developer. He is happily married to Rosalyn Pelles, and they have three sons and three grandchildren."),
      badges:[
        t("Rewire Unconscious patterns"),
        t("Executive High Performance Coaching"),
        t("Advanced NLP"),
        t("Sports Hypnosis"),
        t("Self-Hypnosis")
      ],
      iframe:"https://www.youtube.com/embed/AI1uRqbSUgQ?si=B08d14I-3TsipDXa",
      mail: "don@hypnosissilverspring.com",
      youtube: "https://www.youtube.com/channel/UCfd_0ah70XzLzHyyxOy7F9w",
      serviceAreas: t("DC Metro Area, Houston, Durham NC, Raleigh NC, Chapel Hill NC, Atlanta, and everywhere else, via the Internet")
    },
     {
      id: 'sarasota',
      name: t("Shea Shulman Therapy"),
      city: 'sarasota',
      locationLabel: t("Sarasota, Florida"),
      image: shea,
      link: "https://sheashulmantherapy.com/",
      buttonText: t("Learn More"),
      bio: t("shea_bio"),
      badges: [
        t("Subconscious Reprogramming"),
        t("EMDR"),
        t("Overcome Trauma")
      ],
      iframe: "https://www.youtube.com/embed/tWy0oFz82yw",
      mail: "sheashulmantherapy@outlook.com",
      instagram: "https://www.instagram.com/sheashulmantherapy/",
      facebook: "https://www.facebook.com/p/Shea-Shulman-Therapy-100084499541130/"
    }
  ];

  // ✅ SORTING
  const sortedProviders = [...providers].sort((a, b) => {
    if (!selectedCity) return 0;
    if (a.city === selectedCity) return -1;
    if (b.city === selectedCity) return 1;
    return 0;
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>{t("Find Hypnotherapists Near You - Location-Based Hypnotherapy Care")}</title>
        <meta property="og:title" content={t("Find Hypnotherapists Near You - Location-Based Hypnotherapy Care")} />
        <meta name="description" content={t("Find hypnotherapists in your area. Enter your location to see available hypnotherapy providers near you.")} />
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

        {showResults && (
          <div  data-aos="slide-left" className="container-blue">
          <div className="results-section py-5">

            <h2>
              {selectedCity
                ? `${t("Hypnotherapists in")} ${formattedLocation}`
                : t("Available Hypnotherapists")}
            </h2>

            <div className="provider-grid" style={{ alignItems: 'start' }}>
              {sortedProviders.map((provider) => (
                <div className="card provider-card" key={provider.id}>
                  <div className="card-body provider-card-body">
                    <div className="provider-card-top">
                      <img src={provider.image} alt={provider.name} className="provider-photo" />
                      <h4 className="mb-1">{provider.name}</h4>
                    </div>

                    <p className="mb-2">
                      <i className="fas fa-map-marker-alt text-primary me-2"></i>
                      {provider.locationLabel}
                    </p>
                    {provider.serviceAreas && (
                      <p className="mb-2 small">
                        <strong>{t("Service Areas:")}</strong> {provider.serviceAreas}
                      </p>
                    )}

                    <div className="mb-2">
                      {provider.badges.map((badge, i) => (
                        <span key={i} className="badge bg-light text-dark me-1">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="provider-video">
                      <iframe
                        src={provider.iframe}
                        title={provider.name}
                        allow="autoplay"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <p className="small provider-bio">{provider.bio}</p>

                    <div className="provider-card-footer">
                      <a
                        href={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        {provider.buttonText}
                      </a>
                      <div className="provider-social-icons">
                        {provider.mail && (
                          <a href={`mailto:${provider.mail}`} aria-label={t("Email")} title={t("Email")}>
                            <img src={mail} alt={t("Email")} />
                          </a>
                        )}
                        {provider.facebook && (
                          <a href={provider.facebook} target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                            <img src={facebook} alt={t("Facebook")} />
                          </a>
                        )}
                        {provider.instagram && (
                          <a href={provider.instagram} target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                            <img src={instagram} alt={t("Instagram")} />
                          </a>
                        )}
                        {provider.youtube && (
                          <a href={provider.youtube} target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                            <img src={youtube} alt={t("YouTube")} />
                          </a>
                        )}
                        {provider.tiktok && (
                          <a href={provider.tiktok} target="_blank" rel="noopener noreferrer" aria-label={t("TikTok")} title={t("TikTok")}>
                            <svg viewBox="0 0 448 512" width="26" height="26" fill="#000000" aria-hidden="true">
                              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        )}

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}