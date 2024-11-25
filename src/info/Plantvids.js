import React, { useState } from "react";
import '../App.css';
const PlantVids = () => {
    const [plant, setPlants] = useState([
        {
            id:1,
            videoUrl: "https://www.youtube.com/embed/YeZBT6KMp8w?si=cLSpPZ8nMSpaW45L",
            name:"Goldenseal Herb", 
        },
        {
            id:2,
            videoUrl:"https://www.youtube.com/embed/gFhV5Si6z68?si=Ivd6tBkIi8BLBRK9",
            name:"Bidens Pilosa Plant"
        },
        {
            id:3,
            videoUrl:"https://www.youtube.com/embed/b5lzqiSX-4E?si=6Trxzvh1F6CfwASs",
            name:"Echinacea"
        },
        {
            id:4,
            videoUrl:"https://www.youtube.com/embed/P0-ujiQysaU?si=dnBYTjZJjFpPthYe",
            name:"Heliconia Metallica"
        },
        {
            id:5,
            videoUrl:"https://www.youtube.com/embed/uWE9z7yda0Y?si=vZLmF4OzxHlA0kCy",
            name:"Golden raintree"
        },
        {
            id:6,
            videoUrl:"https://www.youtube.com/embed/9-56XDGZ9h8?si=fml-0i_oqFbAYLkf" ,
            name:"Platycadus Orientalis"
        },
        {
            id:7,
            videoUrl:"https://www.youtube.com/embed/ZlwdkZLJgDY?si=MrAuHKiGkgLDgEKe",
            name:"Plumbago"
        },
        {
            id:8,
            videoUrl:"https://www.youtube.com/embed/-46uMGNFoAs?si=4RHGWTQoJjfKrKAR",
            name:"Plumeria"
        },
        {
            id:9,
            videoUrl:"https://www.youtube.com/embed/3T2u80WxRKA?si=EtfEbgbzXKThmS_N",
            name:"Aloe Vera"
        },
        {
            id:10,
            videoUrl:"https://www.youtube.com/embed/xCqygRzrUMY?si=cTBrmpovANZ3VxEm",
            name:"Crepe Myrtle"
        },
        {
            id:11,
            videoUrl:"https://www.youtube.com/embed/-MatPZb-rxg?si=POCZ2jMXpaFuLEcF",
            name:"Silver Maple"
        },
        {
            id:12,
            videoUrl:"https://www.youtube.com/embed/hs-11vr5wWY?si=zKD-ykhakh6Io_7E",
            name:"Elderberry"
        },
        {
            id:13,
            videoUrl:"https://www.youtube.com/embed/Paz8kPCdOo8?si=tj590SAxlckR5dCM",
            name:"Dandelion Root"
        },
        {
            id:14,
            videoUrl:"https://www.youtube.com/embed/ZOhZXi8uotk?si=3TE8JgMgIa-zrJXF",
            name:"Quercus Robur"
        },
        {
            id:15,
            videoUrl:"https://www.youtube.com/embed/_Vr2qoEaeuE?si=xI6XKlZiQAoUhCWL",
            name:"Virginia Mountain Mint"
        },
        {
            id:16,
            videoUrl:"https://www.youtube.com/embed/4y_JFUMup54?si=1nNXdQV4UIyt3R9T",
            name:"Wild Bergamot"
        },
        {
            id:17,
            videoUrl:"https://www.youtube.com/embed/R5vBTjyIrLE?si=LNkrjGktNoHu_zEk",
            name:"Moringa"
        },
        {
            id:18,
            videoUrl:"https://www.youtube.com/embed/FuiEgNf8PnQ?si=3Xy_-jfr-1Da1hgq",
            name:"Great Lobelia"
        },
        {
            id:19,
            videoUrl:"https://www.youtube.com/embed/-dIargQTX7E?si=4MBG7DeTx9-8U3if",
            name:"Jewelweed"
        },
        {
            id:20,
            videoUrl:"https://www.youtube.com/embed/Wef_Dyif_vA?si=ClPB06JRDKWEGYMs",
            name:"Rhus Typhina"
        },
        {
            id:21,
            videoUrl:"https://www.youtube.com/embed/MnV10TKtl2A?si=MO_WJhWg6yol4lKX",
            name:"African Tulip Tree"
        },
        {
            id:22,
            videoUrl:"https://www.youtube.com/embed/yMgXrBoJqSs?si=cWXXhaR9EHU6JyOr",
            name:"Rosa Nutkana"
        },
        {
            id:23,
            videoUrl:"https://www.youtube.com/embed/dmbJUMaZq_s?si=ObiTM1ItYEjqbf2U",
            name:"Blackberry"
        },
        {
            id:24,
            videoUrl:"https://www.youtube.com/embed/M5IPjiJ3G50?si=hlVjfeqfZ9sgE74g",
            name:"Black Locust Tree"
        },
        {
            id:25,
            videoUrl:"https://www.youtube.com/embed/khZ7BudeLXs?si=GZD71rOGzEMT7nl4",
            name:"Centaurea scabiosa"
        },
        {
            id:26,
            videoUrl:"https://www.youtube.com/embed/f4J1_yG8HZ8?si=-sYxCm1uJpv4n9dO",
            name:"Tansy"
        },
        {
            id:27,
            videoUrl:"https://www.youtube.com/embed/qwuF1WNS5vY?si=f4bVyLkWL7NzbJUs",
            name:"Hawthorn"
        },
        {
            id:28,
            videoUrl:"https://www.youtube.com/embed/wdhm2q9XGj0?si=XEr50Jdz5fZ8G0tM",
            name:"Ox-Eye Daisy"
        },
        {
            id:29,
            videoUrl:"https://www.youtube.com/embed/dMK5IY8IChQ?si=l92ZqGTMMLnVINyf",
            name:"Silver Birch"
        },
        {
            id:30,
            videoUrl:"https://www.youtube.com/embed/CodmjSsZoZ0?si=KRh8G2cUL7O5ni7W",
            name:"Melilotus Albus"
        },
        {
            id:31,
            videoUrl:"https://www.youtube.com/embed/sef5Ro1O9D0?si=1NGE9WGQBtOPP64N",
            name:"Purple Loosestrife"
        },
        {
            id:32,
            videoUrl:"https://www.youtube.com/embed/3Z5-Mf92H6k?si=I9FCQ43uZZOXTT-9",
            name:"Burmuda Grass"
        },
        {
            id:33,
            videoUrl:"https://www.youtube.com/embed/5ubbxpponns?si=6PuwFbQ8tLKRIOBy",
            name:"Spiny Amaranth"
        },
        {
            id:34,
            videoUrl:"https://www.youtube.com/embed/oWL3Fm4xL80?si=1sV1mQF-RsvYi2xD",
            name:"Thyme-Leaf Sandwort"
        },
        {
         id:35,
         videoUrl:"https://www.youtube.com/embed/Mt9mz7jQEwk?si=i0JwoKaL33eu9yEs",
         name:"Piripiri"   
        },
        {
            id:36,
            videoUrl:"https://www.youtube.com/embed/rfd8Xtl6jcE?si=RKrb9pkXAPWerS3C",
            name:"Lavender"
        },
        {
            id:37,
            videoUrl:"https://www.youtube.com/embed/oV7UQRXu6X0?si=GqGYmGUcQ2engYhV",
            name:"Angels Trumpet"
        },
        {
            id:38,
            videoUrl:"https://www.youtube.com/embed/XnzEMpsR6WM?si=GFB7KnQehfxnCrSl",
            name:"Indian Almond Leaf"
        },
        {
            id:39,
            videoUrl:"https://www.youtube.com/embed/KbpKmu4NZeg?si=3fop_upSQmrW_r16",
            name:"Peumus Boldus"
        },
        {
            id:40,
            videoUrl:"https://www.youtube.com/embed/mzVYCtPz73c?si=fanVY7y0ValCmqdr",
            name:"Banana"
        },
        {
            id:41,
            videoUrl:"https://www.youtube.com/embed/TAekH3a9fRU?si=ZB0OxqxnBaC0nUay",
            name:"Wedelia"
        },
        {
            id:42,
            videoUrl:"https://www.youtube.com/embed/N1ztMOfIkGw?si=p848MXDle08nZRVc",
            name:"Bush Candle Tree"
        }

        
    ]);
    return (
        <div className="plant-container">
            {plant.map((val, key) => {
                return (
                    <div key={key} className="col-6 col-md-2 text-center mb-4">
                        <div className="contain">
                        <iframe 
                           width="100%" // Full width
                           height="600" 
                            title="Video" 
                            src={val.videoUrl} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        />
                        <h3>{val.name}</h3>
                    </div>
                    </div>
                );
            })}
        </div>
    );
}
export default PlantVids;