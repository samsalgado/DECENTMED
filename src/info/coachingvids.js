import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const Coachingvids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/yjgLPwXBekM?si=7XlosUtYq4XUI2Rb",
            name: t("Boost Your Metabolism Quickly With Strength Training")
            
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/Y4DT7HfWiZI?si=oev7qjGgBELKpJtv",
            name: `${t("Build MASSIVE Shoulder Muscles Without Stepping Foot in the Gym")}`
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/eLlNwRspy2k?si=EKK3jRkOdSvWhcUd",
            name: `${t("The Number One Method For Building Leg Muscles | Full Masterclass")}`
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/6uoIieJto-s?si=Q4KZy8Az0aYzgnad",
            name: `${t("Fix Your Mental Health To See The Strongest Version of You in 2025!")}`
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/V2sOVnlTdDc?si=yxlTVpYRCNBTf7si",
            name: `${t("No-Cook High-Protein Meal in 2 Minutes!")}`
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/HQcLNaYLf6w?si=_K7uJwSlUqiAm20E",
            name: `${t("The Carnivore Diet: Is It Worth the Hype?")}`
        },
      {
            id: 8,
            videoUrl: " https://www.youtube.com/embed/Z8oi7T7RoHk?si=ehoL8NCgHOaj-wVY",
            name: `${t("Transform Your Body with the Metabolic Acceleration Strategy | Build Muscle & Lose Fat Fast")}`
        },
     
        {
            id:9,
            videoUrl:"https://www.youtube.com/embed/cdoS6IYADF4?si=f_Tno57ZWgUbuu00",
            name: `${t("6 Steps to Kickstart Your Metabolism (and Lose Weight Faster)")}`
        },
       {
            id:10,
            videoUrl:"https://www.youtube.com/embed/FS8qgpDiQWY?si=usMtoLYqYBAUioEW",
            name: `${t("Unlock the secrets to accelerating your metabolism")}`
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

export default Coachingvids;
