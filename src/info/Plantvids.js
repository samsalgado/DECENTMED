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
        videoUrl:"https://www.youtube.com/embed/3Z5-Mf92H6k?si=wJBEjwaeR1HGhA_9",
        name: `${t('Bermuda Grass')}`
    },
  
    {
        id: 36,
        videoUrl:"https://www.youtube.com/embed/rfd8Xtl6jcE?si=hm1VqbvQk3FQ1LiJ",
        name: `${t('Lavender')}`
    },
    {
        id: 37,
        videoUrl:"https://www.youtube.com/embed/oV7UQRXu6X0?si=HOvvl_L9fLgEYPPh",
        name: `${t('Angels Trumpet')}`
    },
    {
        id: 38,
        videoUrl:"https://www.youtube.com/embed/XnzEMpsR6WM?si=-pzXgryqGYz6a-Nt" ,
        name: `${t('Indian Almond Leaf')}`
    },
   
    {
        id: 41,
        videoUrl:"https://www.youtube.com/embed/TAekH3a9fRU?si=iQEPE28hfoHI7f-8",
        name: `${t('Wedelia')}`
    },
    
    {
        id: 43,
        videoUrl:"https://www.youtube.com/embed/lcKeU_AKQeQ?si=Z72HUfqCvWYWMBei",
        name: `${t('Heavenly Bamboo')}`
    },
   
    
    {
        id: 46,
        videoUrl: "https://www.youtube.com/embed/SlWgwzVn0rM?si=ZKR0qvK8m8K8D5G6",
        name: `${t('Chinese Witch Hazel')}`
    },
    
    {
        id: 48,
        videoUrl:"https://www.youtube.com/embed/1cB4G1oVtxk?si=oO77gwWVO-h3mm-b",
        name: `${t('Oriental bittersweet')}`
    },
   
    {
        id: 50,
        videoUrl:"https://www.youtube.com/embed/vEiwD8mdxe4?si=9mF7Rn2Swc-ieNZD",
        name: `${t('Winged Spindle Tree')}`
    },
   
    {
        id:52,
        videoUrl:"https://www.youtube.com/embed/jlx5JDDN-DA?si=6NMbunLdKTNuV1gs",
        name: `${t('Black Willow')}`
    },
    {
        id:53,
        videoUrl:"https://www.youtube.com/embed/dmbJUMaZq_s?si=N6_0JzcCMlAlsgMx",
        name: `${t('Blackberry')}`
    },
    
   
    {
        id:56,
        videoUrl:"https://www.youtube.com/embed/rHbqtcfKuZ8?si=NBeEQjUsbrthNfyx",
        name: `${t('Ditch Lily')}`
    },
    {
        id:57,
        videoUrl:"https://drive.google.com/file/d/1s17zt5RpHUTDUcOIc6xXvAwbpkhOCFni/preview",
        name: `${t('Lily Magnolia')}`
    },
    
    {
        id:59,
        videoUrl:"https://www.youtube.com/embed/8uOE2r6bkaw?si=MBqIqQVEhNc1SF0d",
        name: `${t('Mulberry')}`
    },
    
    {
        id:61,
        videoUrl:"https://www.youtube.com/embed/D2cNN0u-thY?si=f4p45oqxFsuemPmf",
        name: `${t('Oleander')}`
    },
   
    {
        id:63,
        videoUrl:"https://www.youtube.com/embed/h9ZDNtHrMuM?si=FiWcZt9O4SP1wR65",
        name:`${t('Rose Tea')}`
    },
    {
        id:64,
        videoUrl:"https://www.youtube.com/embed/H1vAnonkeSM?si=nvHSn9QvDBSy7k8h" ,
        name:`${t('Wild Sage')}`
    },
    {
        id:65,
        videoUrl:"https://www.youtube.com/embed/ytbsI1YPWa8?si=xr3HA32swKsq630r" ,
        name:`${t('Fremont Cottonwood')}`
    },
    
    {
        id:67,
        videoUrl:"https://www.youtube.com/embed/TuuWF91mfyM?si=6lvHbFqU13aeqauk",
        name:`${t('Kapok Tree')}`
    },
    {
        id:68,
        videoUrl:"https://www.youtube.com/embed/Hoj5NH7j9Fc?si=DufJFWdfR2mUS4Ik",
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
    <div
      ref={videoRef}
      style={{
        position: "relative",
        width: "100%",
        height: "315px",     // fixed height = fullscreen button visible
        overflow: "hidden",  // prevents parent overlap
        borderRadius: "8px",
        backgroundColor: "#000",
      }}
    >
      {isInView ? (
        <iframe
          title={`${val.name} Plant Video`}
          src={`${val.videoUrl}&modestbranding=1&rel=0&fs=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            touchAction: "manipulation",
            pointerEvents: "auto",
            zIndex: 1,
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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

