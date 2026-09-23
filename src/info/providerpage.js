import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NStudy from './nicaraugats';
import Reviews from './reviews';
import Pricing from '../pages/pricingtiers';
import ProviderFaqSection from './providerFaq';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const BOOK_MEETING_URL = "https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true";

const BookMeetingButton = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
      <Button className="custom-btn" href={BOOK_MEETING_URL} target="_blank">
        {t('Book Meeting')}
      </Button>
    </div>
  );
};

// Lazy-loaded, fullscreen-capable video card matching the style used on the
// education pages (e.g. decentmed.org/nutrition) - see functionalvids.js /
// nutritionvids.js for the source of this pattern. Shared here by the two
// videos on this page instead of being duplicated per-video.
const VideoCard = ({ videoUrl, title }) => {
  const { t } = useTranslation('common');
  const [isInView, setIsInView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fullscreen overlay is rendered through a portal into document.body so it
  // isn't at the mercy of an ancestor's CSS transform (e.g. this page's AOS
  // scroll-in animation) silently breaking a "position: fixed" overlay left
  // in place - see functionalvids.js for the full explanation.
  useEffect(() => {
    if (!isFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  return (
    <div className="plant-card">
      <div className="video-container" ref={videoRef} style={{ position: "relative" }}>
        {isInView ? (
          <>
            <iframe
              width="100%"
              height="315"
              title={title}
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              aria-label="Watch fullscreen"
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                fontSize: "18px",
                lineHeight: 1,
                cursor: "pointer",
                touchAction: "manipulation",
              }}
            >
              ⛶
            </button>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "315px",
              backgroundColor: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{t("Loading...")}</p>
          </div>
        )}
      </div>

      {isFullscreen && ReactDOM.createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            zIndex: 999999,
          }}
        >
          <iframe
            title={`${title} Fullscreen`}
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Exit fullscreen"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 1000000,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              fontSize: "20px",
              lineHeight: 1,
              cursor: "pointer",
              touchAction: "manipulation",
            }}
          >
            ✕
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};

const Providerpage = () => {
  const { t } = useTranslation('common');
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
  }, []);
  return (
    <div className='container'>
      <div data-aos="slide-right" className="container-blue">
        <h1 className="logotitle">{t("Turn Your Expertise Into a Steady Flow of Paying Clients")}</h1>
        <p>
          {t("DecentMed is a holistic medicine information portal that connects patients with providers. We post your video content, written content, graphics, reviews, and case studies on our platform — as well as on a decentralized platform called Nostr — in order to combat censorship and validate the effectiveness of your work. DecentMed is an innovative solution to send patients directly to you, fully educated on your process before they even book. Would you be open to a meeting on how to fill your calendar?")}
        </p>
      </div>

      <BookMeetingButton />

      <div data-aos="slide-right" className="container-blue">
        <div data-aos="slide-right" className="contents">
          <div className="div-wrapper">
            <VideoCard
              videoUrl="https://www.youtube.com/embed/uOb-h9NLqKc?si=hGKK4rAgo27KCx6S"
              title="Patient Acquisition Engine Video"
            />
          </div>
        </div>

        <BookMeetingButton />

        <NStudy />
      </div>

      <div data-aos="slide-right" className="container-blue">
        <h1 className="logotitle">{t("What Providers & Patients Are Saying")}</h1>
        <blockquote className="quote">
          {t("'I really was drawn to your vision of how you can help people with this type of platform'")}
          <br></br>
          {t("- Stacy Theodossin")}
        </blockquote>
        <div className="contents">
          <div className="div-wrapper">
            <VideoCard
              videoUrl="https://www.youtube.com/embed/iI5BqYd5FNo?si=5Til0TpUny87l4QG"
              title="Patient Testimonial Video"
            />
          </div>
        </div>
      </div>

      <BookMeetingButton />

      <Reviews />

      <Pricing />

      <ProviderFaqSection />

      <div data-aos="slide-right" className="container-blue">
        <BookMeetingButton />
      </div>
    </div>
  );
}

export default Providerpage;
