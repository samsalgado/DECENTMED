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
import { Helmet } from 'react-helmet'; // Import Helmet
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
     <Helmet>  {/* Add Helmet component */}
        <title>{t("Digital Marketing agency near me")}</title>
        <meta name="description" content={t("Searching for a digital marketing agency near me?Look no further; we implement data-driven SEO strategies and affordable PPC services like Google Ads or Meta Ads for your company.")} />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <SEO />
        <br></br>
        <AdditionalServices />
        <AuditVids />
        <h1 
                style={{
                    fontFamily: 'sans-serif',
                    width:"100%",
                    textAlign: 'center',
                    fontSize: '2rem',  // Default font size
                }}
            >
                {t("Buy Now")}
            </h1>

        <img className='gridimag' src={price} alt='' />
        <div className="gridimag">
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
    
