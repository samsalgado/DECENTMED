import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
const NutritionVids = () => {
    const { t } = useTranslation("common");
    const [plant] = useState([
      
        {
            id:1,
            videoUrl: "https://www.youtube.com/embed/hwr6p-iE2Rc?si=9L26-0oCBLzR0O8g",
            name:`${t("The 3x4 Blueprint")}`,
            transcript: `${t("This one is the 3x4 genetic test. I love this tube, they have you mail it back. This one is a very easy saliva collection. So you see you have a swab, you are gonna swab the insides of your cheeks. There’s a little tube with some liquid and you have to agitate the saliva with the liquid for a little bit and instructions are all in here and then you’re gonna put it back in the tube and mail it back. So it’s been really easy - you do a genetic test once because your genes don’t change, um, but with Nutrigenomics it really did help inform the kind of dietary plan that would be best for you, because we have lots of arguments in the nutrition space.")}`
        },
        {
            id:2,
            videoUrl:"https://www.youtube.com/embed/LP8sNt1Z5bE?si=dq3gFIuAlKcq_036",
            name:`${t("GLP-1 Works until this happens...")}`,
            transcript:`${t("We are seeing incredible weight loss results with GLP-1 Medications. But did you know that only 20% of GLP-1 users actually succeed in keeping the weight off once they come off of the medicine. That is because they didn’t change their habits and choices. In addition, most users aren’t addressing inflammation in their body and doing the work to preserve their muscle. So if you’re taking a GLP and you want a plan for coming off of the medicine - please reach out for support.")}`
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
                    <>
                    <iframe
                        width="100%"
                        height="315"
                        title="Video"
                        src={val.videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                    
</>

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
                
            </div>
            
        </div>
    );
}

export default NutritionVids;
