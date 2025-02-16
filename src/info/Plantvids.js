import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import { useTranslation } from "react-i18next";
const PlantVids = () => {
const {t} = useTranslation('common')
  const [plant] = useState([
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/YeZBT6KMp8w?si=cLSpPZ8nMSpaW45L",
        name: `${t('Goldenseal Herb')}`,
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/gFhV5Si6z68?si=Ivd6tBkIi8BLBRK9",
        name: `${t('Bidens Pilosa Plant')}`
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/b5lzqiSX-4E?si=6Trxzvh1F6CfwASs",
        name: `${t('Echinacea')}`
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/P0-ujiQysaU?si=dnBYTjZJjFpPthYe",
        name: `${t('Heliconia Metallica')}`
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/uWE9z7yda0Y?si=vZLmF4OzxHlA0kCy",
        name: `${t('Golden raintree')}`
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/9-56XDGZ9h8?si=fml-0i_oqFbAYLkf",
        name: `${t('Platycadus Orientalis')}`
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/embed/ZlwdkZLJgDY?si=MrAuHKiGkgLDgEKe",
        name: `${t('Plumbago')}`
    },
    {
        id: 8,
        videoUrl: "https://www.youtube.com/embed/-46uMGNFoAs?si=4RHGWTQoJjfKrKAR",
        name: `${t('Plumeria')}`
    },
    {
        id: 9,
        videoUrl: "https://www.youtube.com/embed/3T2u80WxRKA?si=EtfEbgbzXKThmS_N",
        name: `${t('Aloe Vera')}`
    },
    {
        id: 10,
        videoUrl: "https://www.youtube.com/embed/xCqygRzrUMY?si=cTBrmpovANZ3VxEm",
        name: `${t('Crepe Myrtle')}`
    },
    {
        id: 11,
        videoUrl: "https://www.youtube.com/embed/-MatPZb-rxg?si=POCZ2jMXpaFuLEcF",
        name: `${t('Silver Maple')}`
    },
    {
        id: 12,
        videoUrl: "https://www.youtube.com/embed/hs-11vr5wWY?si=zKD-ykhakh6Io_7E",
        name: `${t('Elderberry')}`
    },
    {
        id: 13,
        videoUrl: "https://www.youtube.com/embed/Paz8kPCdOo8?si=tj590SAxlckR5dCM",
        name: `${t('Dandelion Root')}`
    },
    {
        id: 14,
        videoUrl: "https://www.youtube.com/embed/ZOhZXi8uotk?si=3TE8JgMgIa-zrJXF",
        name: `${t('Quercus Robur')}`
    },
    {
        id: 15,
        videoUrl: "https://www.youtube.com/embed/_Vr2qoEaeuE?si=xI6XKlZiQAoUhCWL",
        name: `${t('Virginia Mountain Mint')}`
    },
    {
        id: 16,
        videoUrl: "https://www.youtube.com/embed/4y_JFUMup54?si=1nNXdQV4UIyt3R9T",
        name: `${t('Wild Bergamot')}`
    },
    {
        id: 17,
        videoUrl: "https://www.youtube.com/embed/R5vBTjyIrLE?si=LNkrjGktNoHu_zEk",
        name: `${t('Moringa')}`
    },
    {
        id: 18,
        videoUrl: "https://www.youtube.com/embed/FuiEgNf8PnQ?si=3Xy_-jfr-1Da1hgq",
        name: `${t('Great Lobelia')}`
    },
    {
        id: 19,
        videoUrl: "https://www.youtube.com/embed/-dIargQTX7E?si=4MBG7DeTx9-8U3if",
        name: `${t('Jewelweed')}`
    },
    {
        id: 20,
        videoUrl: "https://www.youtube.com/embed/Wef_Dyif_vA?si=ClPB06JRDKWEGYMs",
        name: `${t('Rhus Typhina')}`
    },
    {
        id: 21,
        videoUrl: "https://www.youtube.com/embed/MnV10TKtl2A?si=MO_WJhWg6yol4lKX",
        name: `${t('African Tulip Tree')}`
    },
    {
        id: 22,
        videoUrl: "https://www.youtube.com/embed/yMgXrBoJqSs?si=cWXXhaR9EHU6JyOr",
        name: `${t('Rosa Nutkana')}`
    },
    {
        id: 24,
        videoUrl: "https://www.youtube.com/embed/M5IPjiJ3G50?si=hlVjfeqfZ9sgE74g",
        name: `${t('Black Locust Tree')}`
    },
    {
        id: 25,
        videoUrl: "https://www.youtube.com/embed/khZ7BudeLXs?si=GZD71rOGzEMT7nl4",
        name: `${t('Centaurea scabiosa')}`
    },
    {
        id: 26,
        videoUrl: "https://www.youtube.com/embed/f4J1_yG8HZ8?si=-sYxCm1uJpv4n9dO",
        name: `${t('Tansy')}`
    },
    {
        id: 27,
        videoUrl: "https://www.youtube.com/embed/qwuF1WNS5vY?si=f4bVyLkWL7NzbJUs",
        name: `${t('Hawthorn')}`
    },
    {
        id: 28,
        videoUrl: "https://www.youtube.com/embed/wdhm2q9XGj0?si=XEr50Jdz5fZ8G0tM",
        name: `${t('Ox-Eye Daisy')}`
    },
    {
        id: 29,
        videoUrl: "https://www.youtube.com/embed/dMK5IY8IChQ?si=l92ZqGTMMLnVINyf",
        name: `${t('Silver Birch')}`
    },
    {
        id: 30,
        videoUrl: "https://www.youtube.com/embed/CodmjSsZoZ0?si=KRh8G2cUL7O5ni7W",
        name: `${t('Melilotus Albus')}`
    },
    {
        id: 31,
        videoUrl: "https://www.youtube.com/embed/sef5Ro1O9D0?si=1NGE9WGQBtOPP64N",
        name: `${t('Purple Loosestrife')}`
    },
    {
        id: 32,
        videoUrl: "https://www.youtube.com/embed/3Z5-Mf92H6k?si=I9FCQ43uZZOXTT-9",
        name: `${t('Burmuda Grass')}`
    },
    {
        id: 33,
        videoUrl: "https://www.youtube.com/embed/5ubbxpponns?si=6PuwFbQ8tLKRIOBy",
        name: `${t('Spiny Amaranth')}`
    },
    {
        id: 34,
        videoUrl: "https://www.youtube.com/embed/oWL3Fm4xL80?si=1sV1mQF-RsvYi2xD",
        name: `${t('Thyme-Leaf Sandwort')}`
    },
    {
        id: 35,
        videoUrl: "https://www.youtube.com/embed/Mt9mz7jQEwk?si=i0JwoKaL33eu9yEs",
        name: `${t('Piripiri')}`
    },
    {
        id: 36,
        videoUrl: "https://www.youtube.com/embed/rfd8Xtl6jcE?si=RKrb9pkXAPWerS3C",
        name: `${t('Lavender')}`
    },
    {
        id: 37,
        videoUrl: "https://www.youtube.com/embed/oV7UQRXu6X0?si=GqGYmGUcQ2engYhV",
        name: `${t('Angels Trumpet')}`
    },
    {
        id: 38,
        videoUrl: "https://www.youtube.com/embed/XnzEMpsR6WM?si=GFB7KnQehfxnCrSl",
        name: `${t('Indian Almond Leaf')}`
    },
    {
        id: 39,
        videoUrl: "https://www.youtube.com/embed/KbpKmu4NZeg?si=3fop_upSQmrW_r16",
        name: `${t('Peumus Boldus')}`
    },
    {
        id: 40,
        videoUrl: "https://www.youtube.com/embed/xQiCRN_gie8",
        name: `${t('English Ivy')}`
    },
    {
        id: 41,
        videoUrl: "https://www.youtube.com/embed/TAekH3a9fRU?si=ZB0OxqxnBaC0nUay",
        name: `${t('Wedelia')}`
    },
    {
        id: 42,
        videoUrl: "https://www.youtube.com/embed/N1ztMOfIkGw?si=p848MXDle08nZRVc",
        name: `${t('Bush Candle Tree')}`
    },
    {
        id: 43,
        videoUrl: "https://www.youtube.com/embed/lcKeU_AKQeQ",
        name: `${t('Heavenly Bamboo')}`
    },
    {
        id: 44,
        videoUrl: "https://www.youtube.com/embed/u0EopIpcrAw",
        name: `${t('Chinese Holly')}`
    },
    {
        id: 45,
        videoUrl: "https://www.youtube.com/embed/mRSnRX53QNc",
        name: `${t('Johnny Jump Up')}`
    },
    {
        id: 46,
        videoUrl: "https://www.youtube.com/embed/SlWgwzVn0rM",
        name: `${t('Chinese Witch Hazel')}`
    },
    {
        id: 47,
        videoUrl: "https://www.youtube.com/embed/_dA-c1F9aew",
        name: `${t('Bigleaf Hydrangea')}`
    },
    {
        id: 48,
        videoUrl: "https://www.youtube.com/embed/1cB4G1oVtxk",
        name: `${t('Oriental bittersweet')}`
    },
    {
        id: 49,
        videoUrl: "https://www.youtube.com/embed/_aZqcCtMDNs",
        name: `${t('Common Boxwood')}`
    },
    {
        id: 50,
        videoUrl:"https://youtube.com/embed/vEiwD8mdxe4",
        name: `${t('Winged Spindle Tree')}`
    },
    {
        id: 51,
        videoUrl:"https://www.youtube.com/embed/ITqIATgSwH0",
        name: `${t('French Lavender')}`
    },
    {
        id:52,
        videoUrl:"https://www.youtube.com/embed/hVaT0GEhKnA",
        name: `${t('Rosin Weed Plant')}`
    },
    {
        id:53,
        videoUrl: "https://www.youtube.com/embed/dmbJUMaZq_s?feature=share",
        name: `${t('Blackberry')}`
    },
    {
        id:54,
        videoUrl:"https://www.youtube.com/embed/qLXaDR1qZ_U",
        name: `${t('Slender Amaranth')}`
    },
    {
        id:55,
        videoUrl: "https://www.youtube.com/embed/lrE0nYyiaPs",
        name: `${t('Coral Tree')}`
    },
    {
        id:56,
        videoUrl:"https://www.youtube.com/embed/d1tr1oj8hIY",
        name: `${t('Lily of the Nile')}`
    },
    {
        id:57,
        videoUrl:"https://www.youtube.com/embed/rHbqtcfKuZ8",
        name: `${t('Lily Magnolia')}`
    },
    {
        id:58,
        videoUrl:"https://www.youtube.com/embed/Z-7UP5tMma8",
        name: `${t('Sweet Gum Tree')}`
    },
    {
        id:59,
        videoUrl:"https://www.youtube.com/embed/8uOE2r6bkaw",
        name: `${t('Mulberry')}`
    },
    {
        id:60,
        videoUrl:"https://www.youtube.com/embed/d1El8YLjMbM",
        name: `${t('Camellia')}`
    },
    {
        id:61,
        videoUrl:"https://www.youtube.com/embed/D2cNN0u-thY",
        name: `${t('Oleander')}`
    },
    {
        id:62,
        videoUrl:"https://www.youtube.com/embed/p_7yHzi8jRE",
        name:`${t('Ditch Lily')}`
    },
    {
        id:63,
        videoUrl:"https://www.youtube.com/embed/h9ZDNtHrMuM",
        name:`${t('Rose Tea')}`
    },
    {
        id:64,
        videoUrl:"https://www.youtube.com/embed/H1vAnonkeSM",
        name:`${t('Wild Sage')}`
    },
    {
        id:65,
        videoUrl:"https://www.youtube.com/embed/ytbsI1YPWa8",
        name:`${t('Fremont Cottonwood')}`
    },
    {
        id:66,
        videoUrl:"https://www.youtube.com/embed/H3bOZOhc-L8",
        name:`${t('Ceiba speciosa')}`
    },
    {
        id:67,
        videoUrl:"https://www.youtube.com/embed/TuuWF91mfyM",
        name:`${t('Kapok Tree')}`
    },
    {
        id:68,
        videoUrl:"https://www.youtube.com/embed/LKAckTLt6Ic",
        name:`${t('Koa Tree')}`
    },
    {
        id:69,
        videoUrl:"https://www.youtube.com/embed/Hv9HGwnH0Ug",
        name:`${t('Firecracker Plant')}`
    },
    {
      id:70,
      videoUrl:"https://www.youtube.com/embed/xnMR4ZUdz_A",
      name:`${t('Fragrant Inula')}`
      },
      {
      id:71,
      videoUrl:"https://www.youtube.com/embed/oNwiVguspDA",
      name:`${t('Golden Dewdrops')}`
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
                        <p>Loading...</p>
                    </div>
                )}
                <h3>{val.name}</h3>
            </div>
        </div>
    );
}
export default PlantVids;

