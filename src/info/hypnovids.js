import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import '../App.css';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hypnovids = () => {
     useEffect(() => {
          AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
        }, []);
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/3n3Wkzi9i1s",
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/oqBM35IBqXk",
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/tSFgmyCDrvo",
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/GrAuvx6XzuU",
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/eLynvmE1pWs",
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/Wq5dDr24iaM?si=eOk4jHcp1-iP5yBs",
        },
        {
            id:8,
            videoUrl:"https://www.youtube.com/embed/lwPD6Ug3PAk",
        },
       {
            id:9,
            videoUrl:"https://www.youtube.com/embed/7VBO0_v4bmw",
        },
         {
            id:9,
            videoUrl:"https://www.youtube.com/embed/UfWUv1QoIec?si=BZUgPCyAHjpTnXpO",
        }
    ]);
    return (

        <div className="contents">
            <div className="plant-container">
                {plant.map((val, key) => (
                    <PlantCard key={key} val={val} />
                ))}
            </div>
        </div>
    );
};

const PlantCard = ({ val }) => {
    const { t } = useTranslation("common");
    const [isInView, setIsInView] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect(); // Stop observing once in view
                    }
                });
            },
            { threshold: 0.2 } // 50% visible in viewport
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Several of these are portrait-shot clips squeezed into a landscape
    // card, which can leave YouTube's own in-player fullscreen button too
    // cramped to reliably tap on mobile - so every card gets its own
    // fullscreen toggle instead of depending on that button. The overlay
    // is rendered through a portal straight into document.body rather than
    // in place: this page's AOS scroll-in animation leaves a lingering CSS
    // transform on the "container-blue" ancestor, and a transformed
    // ancestor becomes the containing block for any "position: fixed"
    // descendant instead of the real viewport - which silently breaks a
    // fixed-position overlay left in place. The portal sidesteps that.
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
          <div  data-aos="slide-right" className="container-blue">

            <div className="video-container" ref={videoRef} style={{ position: "relative" }}>
                {isInView ? (
                    <iframe
                        width="100%"
                        height="315"
                        title="Video"
                        src={`${val.videoUrl}${val.videoUrl.includes('?') ? '&' : '?'}modestbranding=1&rel=0&fs=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        loading="lazy"
                    />
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

                {isInView && (
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
                )}
                <h3>{val.name}</h3>
            </div>
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
              title="Video Fullscreen"
              src={`${val.videoUrl}${val.videoUrl.includes('?') ? '&' : '?'}modestbranding=1&rel=0&fs=1&autoplay=1`}
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
}

export default Hypnovids;
