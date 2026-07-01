import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hypnovids = () => {
     useEffect(() => {
          AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
        }, []);
    const [plant] = useState([
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/3n3Wkzi9i1s",            
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/oqBM35IBqXk",
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/tSFgmyCDrvo",
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/GrAuvx6XzuU",
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/eLynvmE1pWs",
        },
        {
            id: 7,
            videoUrl: "https://www.youtube.com/embed/Wq5dDr24iaM?si=eOk4jHcp1-iP5yBs",
        },
        {
            id:8,
            videoUrl:"https://www.youtube.com/embed/lwPD6Ug3PAk",
        },
       {
            id:9,
            videoUrl:"https://www.youtube.com/embed/7VBO0_v4bmw",
        },
         {
            id:9,
            videoUrl:"https://www.youtube.com/embed/UfWUv1QoIec?si=BZUgPCyAHjpTnXpO",
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
          <div  data-aos="slide-right" className="container-blue">

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
        </div>
    );
}

export default Hypnovids;
