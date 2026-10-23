import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import caseA from '../images copy/w0.png';
import caseB from '../images copy/w111.png';
import system1 from "../images copy/fuentes.png";
import caseD from "../images copy/angelar.png";
import caseE from "../images copy/angelaf.png";
import sys5 from "../images copy/ttc.png";
import case3 from "../images copy/owl.png";
import case33 from "../images copy/sarah.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import "./NoStudy.css";
const MOBILE_QUERY = "(max-width: 768px)";
// Tracks whether the viewport is mobile-sized (updates on rotate/resize)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange); // older Safari
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return isMobile;
};

// Image and URL kept together so they can't get out of sync
const sites = [
  { image: caseA,   url: "https://nutrifyourlife.com/",           name: "Nutrify Your Life" },
  { image: caseB,   url: "https://cdmhealthandwellness.com/",     name: "CDM Health & Wellness" },
  { image: case3,   url: "https://oldwiseowladvisor.com/",        name: "Old Wise Owl Advisor" },
  { image: case33,  url: "https://www.green-hypnotherapy.com/",   name: "Green Hypnotherapy" },
  { image: system1, url: "https://thesunrisewellness.com/",       name: "Sunrise Wellness" },
  { image: caseD,   url: "https://grhc.love/",                    name: "GRHC" },
  { image: caseE,   url: "https://robusthealthadvocacy.com/",     name: "Robust Health Advocacy" },
  { image: sys5,    url: "https://totalcarechiro.com/",           name: "Total Care Chiropractic" },
];

const NoStudy = ({ t }) => {
  const isMobile = useIsMobile();

  return (
    <div className="container nostudy">
      <Carousel
        // Thumbnails are too small to tap on phones, so hide them there
        showThumbs={!isMobile}
        showIndicators={true}
        showArrows={!isMobile}
        showStatus={false}
        infiniteLoop={true}
        // Auto-advancing slides are disruptive on touch screens
        autoPlay={!isMobile}
        interval={4000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        swipeScrollTolerance={10}
        preventMovementUntilSwipeScrollTolerance={true}
        useKeyboardArrows={true}
        renderThumbs={() =>
          sites.map(({ image, name }, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} thumbnail`}
              loading="lazy"
            />
          ))
        }
      >
        {sites.map(({ image, url, name }, index) => (
          <div key={index} className="nostudy-slide">
            <img
              className="gridimag nostudy-img"
              src={image}
              alt={`${name} website preview`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <a
              className="nostudy-visit"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Visit {name} &rarr;
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NoStudy;