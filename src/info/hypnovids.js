import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const Hypnovids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/3n3Wkzi9i1s",
            name: t("Conversational Hypnosis in Action Pt. 1")
            
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/oqBM35IBqXk",
            name: `${t("Conversational Hypnosis in Action Pt. 2")}`
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/tSFgmyCDrvo",
            name: `${t("How to Stop Choosing the Wrong Relationships")}`
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/GrAuvx6XzuU",
            name: `${t("How to Heal Trauma (5 Tips)")}`
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/eLynvmE1pWs",
            name: `${t("The KEY to Healing childhood Wounds")}`
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/Wq5dDr24iaM?si=eOk4jHcp1-iP5yBs",
            name: `${t("The OverSoul")}`
        },
        {
            id:8,
            videoUrl:"https://www.youtube.com/embed/lwPD6Ug3PAk",
            name: `${t("Tampa Healing: CPTSD")}`
        },
       {
            id:9,
            videoUrl:"https://www.youtube.com/embed/7VBO0_v4bmw",
            name: `${t("Releasing Soul Ties")}`
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

export default Hypnovids;
