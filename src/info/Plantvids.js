import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from "react-i18next";
const PlantVids = () => {
const {t} = useTranslation('common')
  const [plant] = useState([
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/YeZBT6KMp8w?si=XRu8vUg6rYv7vvnC",
        name: `${t('Goldenseal Herb')}`,
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/b5lzqiSX-4E?si=rwEdg1MwNiEhD1ng",
        name: `${t('Echinacea')}`
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/uWE9z7yda0Y?si=9gT_XisbmWJYHI0G",
        name: `${t('Golden raintree')}`
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/9-56XDGZ9h8?si=GI3r_jllL5l1N0n9",
        name: `${t('Platycadus Orientalis')}`
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/embed/ZlwdkZLJgDY?si=iq8kj0cG7Eiama9i",
        name: `${t('Plumbago')}`
    },
    {
        id: 9,
        videoUrl: "https://www.youtube.com/embed/3T2u80WxRKA?si=K1kignC1IW9K0_sG",
        name: `${t('Aloe Vera')}`
    },
    {
        id: 10,
        videoUrl: "https://www.youtube.com/embed/xCqygRzrUMY?si=dPVlg1OPRB1li84s",
        name: `${t('Crepe Myrtle')}`
    },
    
    {
        id: 12,
        videoUrl: "https://www.youtube.com/embed/hs-11vr5wWY?si=MQ3Rm13QX6UB1AyE",
        name: `${t('Elderberry')}`
    },
    {
        id: 13,
        videoUrl: "https://www.youtube.com/embed/Paz8kPCdOo8?si=3umT0Wsro5hHNUqy",
        name: `${t('Dandelion Root')}`
    },
    {
        id: 14,
        videoUrl: "https://www.youtube.com/embed/ZOhZXi8uotk?si=3IHZQWbjiRHmyCXU",
        name: `${t('Quercus Robur')}`
    },
    {
        id: 15,
        videoUrl: "https://www.youtube.com/embed/_Vr2qoEaeuE?si=jYH0rpsK2Ur16OAf",
        name: `${t('Virginia Mountain Mint')}`
    },
    {
        id: 16,
        videoUrl: "https://www.youtube.com/embed/4y_JFUMup54?si=1FmQd8IXTygPChjg",
        name: `${t('Wild Bergamot')}`
    },
    {
        id: 17,
        videoUrl: "https://www.youtube.com/embed/R5vBTjyIrLE?si=5_F3Ty0iUTibWbeZ",
        name: `${t('Moringa')}`
    },
    {
        id: 18,
        videoUrl: "https://www.youtube.com/embed/FuiEgNf8PnQ?si=AMsIMxij8ciSwDoX",
        name: `${t('Great Lobelia')}`
    },
    {
        id: 19,
        videoUrl: "https://www.youtube.com/embed/-dIargQTX7E?si=ILtANxrDFOeEOyeK",
        name: `${t('Jewelweed')}`
    },
    {
        id: 20,
        videoUrl: "https://www.youtube.com/embed/Wef_Dyif_vA?si=2Phhh5E_wfslmdnO",
        name: `${t('Rhus Typhina')}`
    },
    {
        id: 21,
        videoUrl: "https://www.youtube.com/embed/MnV10TKtl2A?si=HAC6FN2MNEqu5COE",
        name: `${t('African Tulip Tree')}`
    },
    
    
    
    {
        id: 27,
        videoUrl: "https://www.youtube.com/embed/qwuF1WNS5vY?si=resMOtEnnRUD3bAB",
        name: `${t('Hawthorn')}`
    },
    
    {
        id: 29,
        videoUrl: "https://www.youtube.com/embed/-MatPZb-rxg?si=4f0WW41-XcIHbPEt",
        name: `${t('Silver Birch')}`
    },
   
    {
        id: 31,
        videoUrl: "https://www.youtube.com/embed/sef5Ro1O9D0?si=lAZKOYp_4abDkjZk",
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
  src={`${val.videoUrl}&modestbranding=1&rel=0&fs=1`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  allowFullScreen
  loading="lazy"
  style={{
    border: "none",
    touchAction: "manipulation",
  }}
  onTouchStart={(e) => {
    const iframe = e.currentTarget;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
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

