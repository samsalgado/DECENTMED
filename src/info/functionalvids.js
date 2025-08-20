import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const FuncVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        
        {
            id:1,
            videoUrl:"https://www.youtube.com/embed/-fm6pwSGcUU?si=ysZi1D8aGn20THg3",
            name:`${t("The Devastating Truth About Why Your Healthy Diet Isn't Working")}`
        },
        {
            id:2,
            videoUrl: "https://drive.google.com/file/d/18yp2Ua9zqubpxzA7E2UPIyOOEZ-1zqxI/preview",
            name: `${t("Dysfunctional Medicine: Exposing Conventional Medicine")}`
        },
        {
            id:3,
            videoUrl: "https://drive.google.com/file/d/1JEapKS8tjSO4OA09tRAOHvZMlmeBb5jX/preview",
            name: `${t("Dysfunctional Medicine")}`
        }

    ]);
    return (
        <div className="contents">
            <div className="div-wrapper">
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

export default FuncVids;
