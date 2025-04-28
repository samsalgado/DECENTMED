import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const NutritionVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/VQbku7HT5xM",
            name: t("Nutrify Your Life")
            
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/7_-8C4lscm",
            name: `${t("Life after Diabetes Diagnosis")}`
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/KlNp2sTOHls",
            name: `${t("Best Nut Butters for Nutrition")}`
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/WO2JsNcp6KQ",
            name: `${t("Type 2 Diabetes Myths Exposed")}`
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/Fu6xOytlYjs",
            name: `${t("Vitamin D Deficiency? Ask Your Doctor Today")}`
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/alQWiJn3YV8",
            name: `${t("Fighting Heart Disease ft Lori Graham")}`
        },
        {
            id: 8,
            videoUrl: "https://www.youtube.com/embed/g-V7DWerpvM",
            name: `${t("Omega 6 vs Omega 3 (Best Olive Oils without seed oils)")}`
        },
          {
            id: 9,
            videoUrl: "https://www.youtube.com/embed/Z5ijM3SOSEk",
            name: `${t("Lowering Blood Sugar is crucial for Menopause")}`
        },
        {
            id: 10,
            videoUrl: "https://www.youtube.com/embed/hMOVS5iimqM",
            name: `${t("Senior Nutrition: Combatting Joint Pain")}`
        },
        {
            id: 11,
            videoUrl: "https://www.youtube.com/embed/DOMwCgo3peA",
            name: `${t("Nutrify Your Life: Customer Testimonial")}`
        },
        {
            id: 12,
            videoUrl: "https://www.youtube.com/embed/alQWiJn3YV8",
            name: `${t("Senior Wellness Tips")}`
        },
         {
            id: 13,
            videoUrl: "https://www.youtube.com/embed/Fu6xOytlYjs",
            name: `${t("Vitamin D Deficiency Tips")}`
        },
{
            id: 14,
            videoUrl: "https://www.youtube.com/embed/2rVUfHZg954",
            name: `${t("Truth About Healthy Aging")}`
        },
        {
            id:15,
            videoUrl: "https://www.youtube.com/embed/ExaUfmORhqM",
            name: `${t("Dysfunctional Medicine: Exposing Conventional Medicine")}`
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

export default NutritionVids;
