import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import '../App.css';
import { useTranslation } from 'react-i18next';
const MeditationVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/uAYmlKc9R-k?si=RcAneTXFZopuzqaC",
            name: t("Enlightenment and Meditation"),
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/nL_UNpSBFnY?feature=shared",
            name: t("Mindfulness through Meditation")
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/JqHfqYasY6Y?si=Oslq9NBWoGF5y58w",
            name: t("All Things Meditation - All You Need to Know")
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/GMe5_qOxP1Y?si=r8mZX1ZVPalVFsnq",
            name: t("Mind Rest - Guided Breath Meditation")
        }
    ]);

    return (
        <div className="contents">
            <div className="plant-container">
                {plant.map((val) => (
                    <PlantCard key={val.id} val={val} />
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
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    // Fullscreen toggle rendered through a portal into document.body, so it
    // isn't at the mercy of an ancestor's CSS transform (e.g. an AOS
    // scroll-in animation elsewhere on the page) silently breaking a
    // "position: fixed" overlay left in place - see Plantvids.js for the
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
        <div className="plant-card">
            <div
        ref={videoRef}
        style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 aspect ratio
            overflow: "hidden",
            borderRadius: "8px",
            backgroundColor: "#000",
        }}
        >
   {isInView ? (
       <iframe
            title={`${val.name} Plant Video`}
            src={`${val.videoUrl}&modestbranding=1&rel=0&fs=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                touchAction: "manipulation",
                pointerEvents: "auto",
                zIndex: 1,
            }}
            />
      ) : (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
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
            </div>

            <h3>{val.name}</h3>

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
                        title={`${val.name} Fullscreen`}
                        src={`${val.videoUrl}&modestbranding=1&rel=0&fs=1&autoplay=1`}
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

export default MeditationVids;
