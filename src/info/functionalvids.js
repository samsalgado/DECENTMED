import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import '../App.css';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FuncVids = () => {
    const { t } = useTranslation("common");
     useEffect(() => {
           AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
         }, []);
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
            videoUrl:"https://www.youtube.com/embed/Xe-hAInphCk",
            name:`${t("What Happens If You Wait Until Your A1C Is 7.0 to Act")}`
        },
        {
            id:10,
            videoUrl:"https://www.youtube.com/embed/m74Bf4uGpH4?si=-h1Cg3tTh_tdUmHa",
            name:`${t("Raw Diet-an Introduction: Fuelling your body with optimal vitamins, minerals, antioxidants and fiber")}`
        },
        {
            id:11,
            videoUrl:"https://www.youtube.com/embed/Ocq-WcrSNBU",
            name:`${t("This is Why Your Heart Doesn't Care That You'Feel Fine'")}`
        },
         {
            id:12,
            videoUrl:"https://www.youtube.com/embed/iM1dMJ0coU4",
            name:`${t("Why You Can't Stop Thinking About Food HOW TO STOP THE HIGH BLOOD SUGAR = FOOD OBSESSION")}`
        },
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
    const [isFullscreen, setIsFullscreen] = useState(false);
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

    // Several of these are portrait-shot clips squeezed into a landscape
    // card, which can leave YouTube's own in-player fullscreen button too
    // cramped to reliably tap on mobile - so every card gets its own
    // fullscreen toggle instead of depending on that button. The overlay
    // is rendered through a portal straight into document.body rather than
    // in place: this page's AOS scroll-in animation leaves a lingering CSS
    // transform on the card itself, and a transformed ancestor becomes the
    // containing block for any "position: fixed" descendant instead of the
    // real viewport - which silently breaks a fixed-position overlay left
    // in place. The portal sidesteps that.
    useEffect(() => {
        if (!isFullscreen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isFullscreen]);

    return (
        <div data-aos="slide-right" className="plant-card">
            <div data-aos="slide-right" className="video-container" ref={videoRef} style={{ position: "relative" }}>
                {isInView ? (
                    <iframe
                        width="100%"
                        height="315"
                        title="Video"
                        src={`${val.videoUrl}${val.videoUrl.includes('?') ? '&' : '?'}modestbranding=1&rel=0&fs=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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

                {isInView && (
                    <button
                        type="button"
                        onClick={() => setIsFullscreen(true)}
                        aria-label="Watch fullscreen"
                        style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                            borderRadius: "6px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            fontSize: "18px",
                            lineHeight: 1,
                            cursor: "pointer",
                            touchAction: "manipulation",
                        }}
                    >
                        ⛶
                    </button>
                )}
                <h3>{val.name}</h3>
            </div>

            {isFullscreen && ReactDOM.createPortal(
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "#000",
                  zIndex: 999999,
                }}
              >
                <iframe
                  title={`${val.name} Fullscreen`}
                  src={`${val.videoUrl}${val.videoUrl.includes('?') ? '&' : '?'}modestbranding=1&rel=0&fs=1&autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  aria-label="Exit fullscreen"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 1000000,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    fontSize: "20px",
                    lineHeight: 1,
                    cursor: "pointer",
                    touchAction: "manipulation",
                  }}
                >
                  ✕
                </button>
              </div>,
              document.body
            )}
        </div>
    );
}

export default FuncVids;
