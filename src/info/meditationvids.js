import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const MeditationVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/uAYmlKc9R-k?si=RcAneTXFZopuzqaC",
            name: `${t("Enlightenment and Meditation")}`,
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/nL_UNpSBFnY?feature=shared",
            name: `${t("Mindfulness through Meditation")}`
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/JqHfqYasY6Y?si=Oslq9NBWoGF5y58w",
            name: `${t("All Things Meditation - All You Need to Know")}`
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

export default MeditationVids;
