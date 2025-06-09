import React, {useEffect, useRef, useState } from "react";
import '../App.css';
import SEO from '../info/seo';
import { useTranslation } from 'react-i18next';
import AdditionalServices from '../info/Additional';
import Topbar from './topbar';
import AuditVids from '../info/audits';
import Offer2 from '../offers/offer2';
import Offer from '../offers/offer';
import Reviews from '../info/reviews';
import Footer from '../footer';
import price from '../images copy/PRICE.png';
import { Helmet } from 'react-helmet';

export function Marketing() {
    const { t } = useTranslation("common");

    const [plant] = useState([
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/rJU-KT9vdf0?si=JLRrDgZal4jhFesk",
            name: `${t("Premium Price Explanation")}`
        }
    ]);

    return(
        <div>
            <Helmet>
                <title>{t("Digital Marketing agency near me")}</title>
                <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <SEO />
            
            {/* Reduced spacing */}
            <div style={{ marginBottom: '1rem' }}></div>
            
            <AdditionalServices />
            <AuditVids />
            
            <h1 
                style={{
                    fontFamily: 'sans-serif',
                    width: "100%",
                    textAlign: 'center',
                    fontSize: '2rem',
                    margin: '1rem 0', // Reduced margin for mobile
                    padding: '0 1rem', // Add horizontal padding
                }}
            >
                {t("Buy Now")}
            </h1>

            {/* Centered image with mobile optimization */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '0 1rem', // Add padding for mobile
                marginBottom: '1rem', // Reduced margin
            }}>
                <img 
                    src={price} 
                    alt='Price' 
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                    }}
                />
            </div>

            {/* Video container with reduced spacing */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '0 1rem',
                marginBottom: '1rem',
            }}>
                {plant.map((val, key) => (
                    <PlantCard key={key} val={val} />
                ))}
            </div>
            
            <Offer2 />
            <Offer />
            <Reviews />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

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
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{
            width: '100%',
            maxWidth: '800px', // Limit max width
        }}>
            <div ref={videoRef} style={{
                width: '100%',
                marginBottom: '1rem',
            }}>
                {isInView ? (
                    <iframe
                        width="100%"
                        height="315"
                        title="Video"
                        src={val.videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        style={{
                            border: 'none',
                            borderRadius: '8px',
                        }}
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
                            borderRadius: '8px',
                        }}
                    >
                        <p>{t("Loading...")}</p>
                    </div>
                )}
                <h3 style={{
                    textAlign: 'center',
                    margin: '0.5rem 0 0 0', // Reduced margin
                    fontSize: '1.2rem',
                }}>{val.name}</h3>
            </div>
        </div>
    );
}