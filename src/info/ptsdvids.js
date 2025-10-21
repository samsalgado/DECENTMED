import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const PTSDvids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl:"https://www.youtube.com/embed/Y1xPUNgQA8U?si=fSdI9gMSdLpnfgIc",
            name: t("PTSD Healing")
        },
        {
            id:2,
            videoUrl:"https://www.youtube.com/embed/TvwiLlOiGOg?si=1rgA1rBHhYaH1vTw",
            name: t("Healing Trauma & Invisible Wounds")
        },
        {
            id:3,
            videoUrl:"https://www.youtube.com/embed/_EEzjWjiCtM?si=8BOM7rKZiiauG_1L",
            name: t("The Power of Pyschedelics")
        },
        {
            id:4,
            videoUrl:"https://www.youtube.com/embed/GjPp6HbNvI8?si=9xsGwY2CmJZuq8LN",
            name: t("Intersection between Naturopathy and Pyschedelics")
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

export default PTSDvids;
