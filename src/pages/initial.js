import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../info/Info.css';
import '../info/acu.css'; // Import only acu.css for styling
import { useTranslation } from 'react-i18next';

const VIDEO_URL = "https://www.youtube.com/embed/iI5BqYd5FNo?si=5Til0TpUny87l4QG";

const Initial = () => {
  const { t } = useTranslation('common');
  const [isInView, setIsInView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  // Lazy-load and fullscreen-toggle behavior matches the video style used
  // on the education pages (e.g. decentmed.org/nutrition) - see
  // functionalvids.js / nutritionvids.js for the same pattern.
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

  // Fullscreen toggle rendered through a portal into document.body, so it
  // isn't at the mercy of an ancestor's CSS transform silently breaking a
  // "position: fixed" overlay left in place - see functionalvids.js for the
  // full explanation of this pattern.
  useEffect(() => {
    if (!isFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  return (
    <div className='container-blue'>
      <h1 className='title'>{t('Our Reviews')}</h1>
      <blockquote className="quote">
        {t("'I really was drawn to your vision of how you can help people with this type of platform'")}
        <br></br>
        {t("- Stacy Theodossin")}
      </blockquote>
      <div className="plant-card">
        <div className="video-container" ref={videoRef} style={{ position: "relative" }}>
          {isInView ? (
            <>
              <iframe
                width="100%"
                height="315"
                title="Patient Acquisition Engine Video"
                src={VIDEO_URL}
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
              title="Patient Acquisition Engine Video Fullscreen"
              src={VIDEO_URL}
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
    </div>
  )
}

export default Initial
