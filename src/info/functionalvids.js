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
            videoUrl:"https://www.youtube.com/embed/HGaKE9gxYzY?si=40IqfPwwawevZt35",
            name:`${t("Build Resilience with Precision Nutrition for Longevity and Healthy Aging.")}`
        },
        {
            id:3,
            videoUrl:"https://www.youtube.com/embed/qqYcx52tvy4?si=hDANgqJAobTUb8ma",
            name:`${t("Women's Health with Lori Graham")}`
        },
        {
            id:3,
            videoUrl:"https://www.youtube.com/embed/2w59PmoZIUU?si=ZuJdDNsGCISv4IRB",
            name:`${t("Honest Health with Lori Graham")}`
        },
        {
            id:4,
            videoUrl:"https://www.youtube.com/embed/i2qgCodSdlA",
            name:`${t("Aging Gracefully with Lori Graham")}`
        },
         {
            id:4,
            videoUrl:"https://www.youtube.com/embed/8K0jfnoyvTc",
            name:`${t("State of Natural Medicine with Lori Graham")}`
        },
         {
            id:5,
            videoUrl:"https://www.youtube.com/embed/U0M03Reegos",
            name:`${t("Functional Medicine is for Nourishing")}`
        },
        {
            id:6,
            videoUrl:"https://www.youtube.com/embed/hD1qb8Jibgw",
            name:`${t("How to Tell If Your Glucose Pattern Is Actually Getting Better (Without Waiting 90 Days for Your A1C")}`
        },
            {
            id:7,
            videoUrl:"https://www.youtube.com/embed/bBqu541ces8",
            name:`${t("The Truth About Fruit and Blood Sugar (And Why 'Eat More Fruit' Is Bad Advice for Type 2)")}`
        },   
        {
            id:8,
            videoUrl:"https://www.youtube.com/embed/fA93EMLAuEw",
            name:`${t("Blood Sugar Control")}`
        },  
        {
            id:9,
            videoUrl:"https://www.youtube.com/embed/q1LDlydc8eo?si=QTqLG6ROvY1ovsQk",
            name:`${t("Blood Sugar Quiz")}`
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
