import React, {useState, useRef, useEffect} from "react";
import '../App.css';
// Reusable wrapper for videos/images
function Speakers() {
  const [speakers] = useState([
     {
      name: "Bethany Bee",
      time:"12pmCST",
      link: "https://beelimitlessnow.com/",
      videoUrl:"https://www.youtube.com/embed/ugSZ9oeYm8c?si=nIHZqOdX9JoH7vT0",
    },
     {
      name: "Charlotte Clark",
      time:"12:30pmCST",
      link: "https://www.facebook.com/totalhealingcentre/",
      videoUrl:"https://www.youtube.com/embed/BGjJ4usFVXo?si=7ekvGMmRkbJL3_fk",
    },
     {
      name: "Bethany Stone",
      time:"1pmCST",
      link: "https://www.thrivingbynature.com/",
      videoUrl:"https://www.youtube.com/embed/9pUjEybptCQ?si=emDj0hEwg-eygm8m",
    },
     {
      name: "Jim Pehkonen: Amazing Life Design",
      time:"1:30pmCST",
      link: "https://amazinglifedesign.com/",
      videoUrl:"https://www.youtube.com/embed/nr2OmQRzAzQ?si=_FzbXMaZLky8IEeW",
    },
    {
      name: "Scarlett Dee",
      time:"2:00pmCST",
      link: "https://scarlettdee.com/home",
      videoUrl:"https://www.youtube.com/embed/DGbznd3EYtg?si=xbzibAMpk61LmD88",
    },
{
      name: "Sheila Sembly-Crum",
      time:"2:30pmCST",
      link: "https://www.linkedin.com/in/sheila-sembly-crum/",
      videoUrl:"https://www.youtube.com/embed/c3MYwUAsNsM?si=OsHRwYtvBO9R_PGd",
    },
    {
      name: "Michele Greenan",
      time:"3:00pmCST",
      link: "https://thesunrisewellness.com/",
      videoUrl:"https://www.youtube.com/embed/dmw4nDIS3ac?si=lY8BNzYNOh6iDKus",
    },
     {
      name: "Saumil Manek",
      time:"3:30pmCST",
      link: "https://unioniscreation.com/",
      videoUrl:"https://www.youtube.com/embed/ncNrRRyriVU?si=_FQX6gK7tpqySozZ",
    },
     {
      name: "Angela Romero",
      time:"4:30pmCST",
      link: "https://grhc.love/",
      videoUrl:"https://www.youtube.com/embed/Ah4Usk_zcrg?si=TlVUQp1gdgohnFy7",
    },
      {
      name: "Caroline McQueen",
      time:"May 29: 12:00pmCST",
      link: "https://www.cdmhealthandwellness.com/",
      videoUrl:"https://www.youtube.com/embed/ac1DvrGlIDQ?si=0y1EZz-3GB-8ZyEL",
    },
    {
      name: "Dr. Tess Volner: Total Care Chiropractic",
            time:"May 29: 12:30pmCST",
      link: "https://totalcarechiro.com/",
      videoUrl:"https://www.youtube.com/embed/FTb_LYGzAVg?si=JrcHKc7F8tOktbP1",
    },
    {
      name: "Priscilla Muite",
            time:"May 29: 1:00pmCST",
      link: "https://sourceapp.dynamitelifestyle.com/thesource",
      videoUrl:"https://www.youtube.com/embed/ya7yJQAjhi8?si=vyqoNwLSncyYa-8L",
    },
    {
      name: "Shea Shulman",
            time:"May 29: 1:30pmCST",
      link: "https://www.sheashulmantherapy.com/",
      videoUrl:"https://www.youtube.com/embed/tWy0oFz82yw?si=Yphqt8MrJwzq8zHk",
    },
    {
      name:"Donald Pelles",
            time:"May 29: 2:00pmCST",
      link:"https://www.hypnosissilverspring.com/",
      videoUrl:"https://www.youtube.com/embed/AI1uRqbSUgQ?si=Jq2wW0rXvQ5a0TqB",
    },
     {
      name: "Lori Graham: Nutrify Your Life",
            time:"May 29: 2:30pmCST",
      link: "https://nutrifyourlife.com/",
      videoUrl:"https://www.youtube.com/embed/dvtBiqgSsoU?si=yeHuhGj889PfrjYz",
    },
     {
      name: "Lorna Ching-Carter: Optimal Root Wellness",
      time:"Roundtable Speaker",
      link: "https://optimalrootwellness.com/",
      videoUrl:"https://www.youtube.com/embed/Q3N9OzN-3iE?si=VC5Hj7o4kiJVuuF_",
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
    <h4>{val.time}</h4>
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
