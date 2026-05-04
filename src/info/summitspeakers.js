import React, {useState, useRef, useEffect} from "react";
import '../App.css';
// Reusable wrapper for videos/images
function Speakers() {
  const [speakers] = useState([
     {
      name: "Bethany Bee",
      link: "https://beelimitlessnow.com/",
      videoUrl:"https://www.youtube.com/embed/ugSZ9oeYm8c?si=nIHZqOdX9JoH7vT0",
    },
     {
      name: "Charlotte Clark",
      link: "https://www.facebook.com/totalhealingcentre/",
      videoUrl:"https://www.youtube.com/embed/BGjJ4usFVXo?si=7ekvGMmRkbJL3_fk",
    },
     {
      name: "Bethany Stone",
      link: "https://www.thrivingbynature.com/",
      videoUrl:"https://www.youtube.com/embed/9pUjEybptCQ?si=emDj0hEwg-eygm8m",
    },
     {
      name: "Jim Pehkonen: Amazing Life Design",
      link: "https://amazinglifedesign.com/",
      videoUrl:"https://www.youtube.com/embed/nr2OmQRzAzQ?si=_FzbXMaZLky8IEeW",
    },
     {
      name: "Saumil Manek",
      link: "https://unioniscreation.com/",
      videoUrl:"https://www.youtube.com/embed/ncNrRRyriVU?si=_FQX6gK7tpqySozZ",
    },
    {
      name: "Dr. Stephanie Heinhold",
      link: "https://nourishedheartswellness.com/",
      videoUrl:"https://www.youtube.com/embed/zC62vgTyHLg?si=UEFju3xC4I9WVdkp",
    },
     {
      name: "Angela Romero",
      link: "https://grhc.love/",
      videoUrl:"https://www.youtube.com/embed/Ah4Usk_zcrg?si=TlVUQp1gdgohnFy7",
    },
      {
      name: "Caroline McQueen",
      link: "https://www.cdmhealthandwellness.com/",
      videoUrl:"https://www.youtube.com/embed/ac1DvrGlIDQ?si=0y1EZz-3GB-8ZyEL",
    },
    {
      name: "Dr. Tess Volner: Total Care Chiropractic",
      link: "https://totalcarechiro.com/",
      videoUrl:"https://www.youtube.com/embed/FTb_LYGzAVg?si=JrcHKc7F8tOktbP1",
    },
    {
      name: "Priscilla Muite",
      link: "https://sourceapp.dynamitelifestyle.com/thesource",
      videoUrl:"https://www.youtube.com/embed/ya7yJQAjhi8?si=vyqoNwLSncyYa-8L",
    },
    {
      name: "Shea Shulman",
      link: "https://www.sheashulmantherapy.com/",
      videoUrl:"https://www.youtube.com/embed/tWy0oFz82yw?si=Yphqt8MrJwzq8zHk",
    },
    {
      name:"Donald Pelles",
      link:"https://www.hypnosissilverspring.com/",
      videoUrl:"https://www.youtube.com/embed/AI1uRqbSUgQ?si=Jq2wW0rXvQ5a0TqB",
    },
     {
      name: "Lori Graham: Nutrify Your Life",
      link: "https://nutrifyourlife.com/",
      videoUrl:"https://www.youtube.com/embed/dvtBiqgSsoU?si=yeHuhGj889PfrjYz",
    },
     {
      name: "Lorna Ching-Carter: Optimal Root Wellness",
      link: "https://optimalrootwellness.com/",
      videoUrl:"https://www.youtube.com/embed/Q3N9OzN-3iE?si=VC5Hj7o4kiJVuuF_",
    },
    {
      name: "Stacy Theodossin: Healing Goddess",
      link: "https://www.healinggoddess.com/",
      videoUrl:"https://www.youtube.com/embed/ZaEGTAKvhSs?si=dYFlxRV-TrMVncPz",
    },
    {
      name: "Dr. Kristen Barnes: Meridian Passage Wellness",
      link: "https://meridianpassagewellness.com/",
      videoUrl:"https://www.youtube.com/embed/_GCEZaTmBBE?si=SlyPihE8IJAPypVX",
    },
    {
      name: "Ramona Crabtree-Falkner: Authentic Life Journey",
      link: "http://authenticlifejourney.com/",
      videoUrl:"https://www.youtube.com/embed/hgHkSicJ6xc?si=1iPqeQzH1GM3ObZ3"
    },
     {
      name: "Dr. Nadia Taylor: Essence of Life",
      link: "https://essenceoflife.us/",
      videoUrl:"https://rumble.com/embed/v6zhjpy/?pub=4hu51y",
    },
    {
      name: "Advertiser: Linda McBee (Happy DNA Candy)",
      link: "https://sites.google.com/view/aplgo-products/product-details",
      videoUrl:"https://www.youtube.com/embed/S1j-Oxijls8?si=HLLO1xYsTuiMjH7_",
    },
   {
      name: "Advertiser: Spectra Spray",
      link: "https://www.spectraspray.com/",
      videoUrl:"https://www.youtube.com/embed/At7Gc-qjbsc?si=mR8Nq0p20cHdGHhB",
    },
    {
      name: "Advertiser: Solve Your Out-of-Control Eating",
      link: "https://solveyouroutofcontroleating.com/",
      videoUrl:"https://www.youtube.com/embed/aXfU_SMr2fY?si=V9-VxHvLNEjShyIZ",
    }
  ]);
  return (
        <div className="contents">
            <div className="plant-container">
                {speakers.map((val, key) => (
                    <PlantCard key={key} val={val} />
                ))}
            </div>
        </div>
    );
}
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
     <h3>
      <a
        href={val.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#027360" }}
      >
        {val.name}
      </a>
    </h3>
  </div>
);
}
export default Speakers;
