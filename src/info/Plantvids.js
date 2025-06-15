import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from "react-i18next";
const PlantVids = () => {
const {t} = useTranslation('common')
  const [plant] = useState([
    {
        id: 1,
        videoUrl: "https://drive.google.com/file/d/1BuzdZ_vKZAZsMxEGT1tTIjQ7ivr6u4l_/preview",
        name: `${t('Goldenseal Herb')}`,
    },
    {
        id: 3,
        videoUrl: "https://drive.google.com/file/d/1BS4fA9VaoW_C0uK6zoGsdrDLb8kUdunR/preview",
        name: `${t('Echinacea')}`
    },
    {
        id: 5,
        videoUrl: "https://drive.google.com/file/d/1AWBxTGqCFm4vp_LurBYSKzg9hmydlNec/preview",
        name: `${t('Golden raintree')}`
    },
    {
        id: 6,
        videoUrl: "https://drive.google.com/file/d/1W39LpYI4FEOsGi_E0QVsEHHQIdnvi_cA/preview",
        name: `${t('Platycadus Orientalis')}`
    },
    {
        id: 7,
        videoUrl: "https://drive.google.com/file/d/1aXufzeFI-OJd3WeyxIwcigW_6Hn42AHo/preview",
        name: `${t('Plumbago')}`
    },
    {
        id: 9,
        videoUrl: "https://drive.google.com/file/d/1z3Ou0u47IJW_J867Z1-eeFVcy8r15nAs/preview",
        name: `${t('Aloe Vera')}`
    },
    {
        id: 10,
        videoUrl: "https://drive.google.com/file/d/1pVJMlbtEVcjVzXxUnZHgued9TGcjNScX/preview",
        name: `${t('Crepe Myrtle')}`
    },
    
    {
        id: 12,
        videoUrl: "https://drive.google.com/file/d/1scDfw1j37oyHR6H773ApzOTzljIfnfR5/preview",
        name: `${t('Elderberry')}`
    },
    {
        id: 13,
        videoUrl: "https://drive.google.com/file/d/1_TIY-5mPSCgq5tCF4HBScDd7aXXJKnMq/preview",
        name: `${t('Dandelion Root')}`
    },
    {
        id: 14,
        videoUrl: "https://drive.google.com/file/d/1xqvayT504gteyWX80L43kWCPRyvJCGPC/preview",
        name: `${t('Quercus Robur')}`
    },
    {
        id: 15,
        videoUrl: "https://drive.google.com/file/d/1QpSfEjfGyvCdp83weEHhPLP3ArrbkNhe/preview",
        name: `${t('Virginia Mountain Mint')}`
    },
    {
        id: 16,
        videoUrl: "https://drive.google.com/file/d/1bOyjNdcUJ7Mr3PGgRTv9R-gpNvFqrlvi/preview",
        name: `${t('Wild Bergamot')}`
    },
    {
        id: 17,
        videoUrl: "https://drive.google.com/file/d/1SRC7udJIgIJyZsp3GYYzxlLCB6LvFEAe/preview",
        name: `${t('Moringa')}`
    },
    {
        id: 18,
        videoUrl: "https://drive.google.com/file/d/1S-EdvImf_6DusccEqzuBteyAPo0UbRzQ/preview",
        name: `${t('Great Lobelia')}`
    },
    {
        id: 19,
        videoUrl: "https://drive.google.com/file/d/1kkkkElaJh7WyTn2meUrN_iHFvfg1Yq6K/preview",
        name: `${t('Jewelweed')}`
    },
    {
        id: 20,
        videoUrl: "https://drive.google.com/file/d/1RxLBiAmTbte08UFUMued5FzJBRmEIhPl/preview",
        name: `${t('Rhus Typhina')}`
    },
    {
        id: 21,
        videoUrl: "https://drive.google.com/file/d/1A1Jz9ejlCmAbJjWrEyh8eVmCv8dxuAYk/preview",
        name: `${t('African Tulip Tree')}`
    },
    
    
    
    {
        id: 27,
        videoUrl: "https://drive.google.com/file/d/1sifshmL4pyuHB2YnpubbxcQl12YnArmr/preview",
        name: `${t('Hawthorn')}`
    },
    
    {
        id: 29,
        videoUrl: "https://drive.google.com/file/d/1B7onN62i98GnLRhwyD8in7ji3vETh3A3/preview",
        name: `${t('Silver Birch')}`
    },
   
    {
        id: 31,
        videoUrl: "https://drive.google.com/file/d/1ERMXHM1-HrlRfKTkniWgjYwyYkLvNY_F/preview",
        name: `${t('Purple Loosestrife')}`
    },
    {
        id: 32,
        videoUrl: "https://drive.google.com/file/d/1ODDEdscTPzE_HQbSnnVrKJbvCRECzSLY/preview",
        name: `${t('Burmuda Grass')}`
    },
  
    {
        id: 36,
        videoUrl: "https://drive.google.com/file/d/1IZWL3wlQpkHRH42YZBkslqczpV-22Q0U/preview",
        name: `${t('Lavender')}`
    },
    {
        id: 37,
        videoUrl: "https://drive.google.com/file/d/1KzbloPOa5z9Mymainc-JNZ8Pk9_z-Kcc/preview",
        name: `${t('Angels Trumpet')}`
    },
    {
        id: 38,
        videoUrl: "https://drive.google.com/file/d/1omRAFRJOarQFBa406HbxA-LSoBHvKo8o/preview",
        name: `${t('Indian Almond Leaf')}`
    },
   
    {
        id: 41,
        videoUrl: "https://drive.google.com/file/d/15YqsYVW9W_9NyECrtZCzj72REzqEV66p/preview",
        name: `${t('Wedelia')}`
    },
    
    {
        id: 43,
        videoUrl: "https://drive.google.com/file/d/117i79_KVKIVZPkbtQT_LuP5dEQuvO6AC/preview",
        name: `${t('Heavenly Bamboo')}`
    },
   
    
    {
        id: 46,
        videoUrl: "https://drive.google.com/file/d/1v2YJ0KV8nFz5PO9H6lWmSC0oBEiaz_VZ/preview",
        name: `${t('Chinese Witch Hazel')}`
    },
    
    {
        id: 48,
        videoUrl: "https://drive.google.com/file/d/1QptS5Ghu21gUdOvrdJbRi7AKNSQgb4TM/preview",
        name: `${t('Oriental bittersweet')}`
    },
   
    {
        id: 50,
        videoUrl:"https://drive.google.com/file/d/1lX3CLM1UuaTQK62xN9FFUqdmG5go_8tn/preview",
        name: `${t('Winged Spindle Tree')}`
    },
   
    {
        id:52,
        videoUrl:"https://drive.google.com/file/d/1Tern4WH4keiPoXM2_NE7z2XX3hiGSBWS/preview",
        name: `${t('Black Willow')}`
    },
    {
        id:53,
        videoUrl: "https://drive.google.com/file/d/1b-AD95XdSYsMdGdQaQTaWfFcfeeiYr6S/preview",
        name: `${t('Blackberry')}`
    },
    
   
    {
        id:56,
        videoUrl:"https://drive.google.com/file/d/1myFYkL_Fe9pH5sbaCvt-4UvnYZMld2iD/preview",
        name: `${t('Ditch Lily')}`
    },
    {
        id:57,
        videoUrl:"https://drive.google.com/file/d/1s17zt5RpHUTDUcOIc6xXvAwbpkhOCFni/preview",
        name: `${t('Lily Magnolia')}`
    },
    
    {
        id:59,
        videoUrl:"https://drive.google.com/file/d/1S8p1iDeD5tZL7AtuJY146fwFuYkqjX_6/preview",
        name: `${t('Mulberry')}`
    },
    
    {
        id:61,
        videoUrl:"https://drive.google.com/file/d/1pkh6LmwSe9GmFixRbNGWgl8-at5MFofS/preview",
        name: `${t('Oleander')}`
    },
   
    {
        id:63,
        videoUrl:"https://drive.google.com/file/d/1K3fFqslGlgV3aTCxPOp521O5l1_vnZvH/preview",
        name:`${t('Rose Tea')}`
    },
    {
        id:64,
        videoUrl:"https://drive.google.com/file/d/1VBU5CAtMyvIpK0GLkUnRJSAL-mTIgFTZ/preview",
        name:`${t('Wild Sage')}`
    },
    {
        id:65,
        videoUrl:"https://drive.google.com/file/d/15dulWo-MNc4p4WVqXHo1ohCWdvCnUKyM/preview",
        name:`${t('Fremont Cottonwood')}`
    },
    
    {
        id:67,
        videoUrl:"https://drive.google.com/file/d/1eQLEzNs_HPuOVuZJXX_qDCe6JhpwYv9a/preview",
        name:`${t('Kapok Tree')}`
    },
    {
        id:68,
        videoUrl:"https://drive.google.com/file/d/1jbFntKpQ-QTTSnz9wqJN-rmaWEg2qTrV/preview",
        name:`${t('Benefits of Turmeric')}`

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
                        title={`${val.name} Plant Video`}
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
                        <p>Loading...</p>
                    </div>
                )}
            </div>
            <h3>{val.name}</h3>
        </div>
    );
}
export default PlantVids;

