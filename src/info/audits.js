import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const AuditVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            name: `${t("SEO Audit: Jesania P")}`,
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/7OhJgp8Tjyw",
            name: `${t("SEO Audit: Tammy Machmali")}`
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/DU5HXGwFNxs?si=vp8oaLsPsd8wUH9y",
            name: `${t("SEO Audit: Pratha Ayurveda")}`
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/w-yYRJ5j5ks?si=lbbH72bkAkFIc-Ir",
            name: t("SEO Audit: Brandy Health Coaching")
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/Y1aDTHEaYWo?si=uxusvlopPSC7QXXY",
            name: t("SEO Audit: Southern Right Acupuncture")
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/Y1aDTHEaYWo?si=uxusvlopPSC7QXXY",
            name: t("SEO Audit: Southern Right Acupuncture")
        },
        {
            id: 8,
            videoUrl: "https://www.youtube.com/embed/7cgLrZ4IeV0?si=xPiDnmKYNDIl65RF",
            name: t("SEO Audit: Enzi Jones")
        },
        {
            id: 9,
            videoUrl: "https://www.youtube.com/embed/Kosw6zLecaI?si=f8GdgoE80uStqjW6" ,
            name: t("YouTube SEO Audit: Dr. Namuun Bat")
        },
        {
            id: 10,
            videoUrl: "https://www.youtube.com/embed/bp9yks-Wm2s" ,
            name: t("Why You Should Use YouTube for Marketing > Traditional SEO")
        }
    ]);
    return (
        <div className="contents">
            {/* The main title should be outside the map loop */}
            <h1 
                style={{
                    fontFamily: 'sans-serif',
                    textAlign: 'center',
                    fontSize: '2rem',  // Default font size
                    margin: '20px 0',   // Margin for spacing
                    padding: '0 10px',  // Padding for better alignment on smaller screens
                }}
            >
                {t("SEO Audit Videos")}
            </h1>
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

    return (
        <div className="plant-card">
            <div className="video-container" ref={videoRef}>
                {isInView ? (
                    <iframe
                        width="100%"
                        height="315"
                        title="Video"
                        src={val.videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                <h3>{val.name}</h3>
            </div>
        </div>
    );
}

export default AuditVids;
