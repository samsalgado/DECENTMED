import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';

const ClinVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
        {
            id:1,
            videoUrl:"https://www.youtube.com/embed/NT7KB15cy0Y?si=FUOym2PDvOHOalAk",
            name:`${t("Nutrigenomics")}`
        },
    
        {
            id:2,
            videoUrl:"https://www.youtube.com/embed/KXxR0FTPmW8?si=iPRlXggVolqrPHYW",
            name:`${t("3 Important Questions for Weight Loss")}`
        },
        {
            id:3,
            videoUrl:"https://www.youtube.com/embed/4FMYD6wjp74?si=L8kp2NN45VqA0B7n",
            name:`${t("CRAFTING YOUR IDEAL DIET - KRISTINA HESS LECTURE AT KETO SYMPOSIUM NYC 2022")}`
        },
        {
            id:4,
            videoUrl:"https://www.youtube.com/embed/HGaKE9gxYzY?si=40IqfPwwawevZt35",
            name:`${t("Build Resilience with Precision Nutrition for Longevity and Healthy Aging.")}`
        },
        {
            id:5,
            videoUrl:"https://www.youtube.com/embed/xe2fFDVxxgA?si=Qkzkg9-YIlNeXv3T",
            name:`${t("Genetics and personalized nutrition: why is this so important?")}`
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

export default ClinVids;
