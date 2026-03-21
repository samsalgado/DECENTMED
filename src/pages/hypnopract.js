import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import shea from "../cards/shea.png";
import don from "../cards/don.jpg";
import Green from '../cards/Green-hypnotherapy.png';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      iframe: "https://drive.google.com/file/d/14o0p_J7PigM-3OlyKMyHi8Xwbnrgda3z/preview"
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
      iframe:"https://www.youtube.com/embed/irOvpukq6HY?si=afUmQ9EfzU_V6GGV"
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
      iframe: "https://www.youtube.com/embed/tWy0oFz82yw"
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

        {showResults && (
          <div  data-aos="slide-left" className="container-blue">
          <div className="results-section py-5">

            <h2>
              {selectedCity
                ? `${t("Hypnotherapists in")} ${formattedLocation}`
                : t("Available Hypnotherapists")}
            </h2>

            {sortedProviders.map((provider) => (
              <div className="card mb-4" key={provider.id}>
                <div className="card-body row align-items-center">

                  {/* IMAGE */}
                  <div className="col-md-3">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      style={{ maxWidth: '100%' }}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="col-md-6 text-start">
                    <h4>{provider.name}</h4>
                    <p>{provider.locationLabel}</p>

                    <div className="mb-2">
                      {provider.badges.map((badge, i) => (
                        <span key={i} className="badge bg-light text-dark me-1">
                          {badge}
                        </span>
                      ))}
                      
                    </div>
                      
                    <p className="small">{provider.bio}</p>
                  </div>

                  {/* VIDEO */}
                  <div>
                    <iframe
                      style={{
                        borderRadius: "8px",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
                      }}
                      src={provider.iframe}
                      width="100%"
                      height="305px"
                      title={provider.name}
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* BUTTON */}
                  <div className="col-md-3">
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      {provider.buttonText}
                    </a>
                  </div>

                </div>
              </div>
              
            ))}
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