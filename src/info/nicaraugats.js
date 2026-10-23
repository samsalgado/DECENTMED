import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import caseA from '../images copy/val0.png';
import caseB from '../images copy/Screenshot 2026-08-12 at 9.22.48 AM.png';
import system1 from "../images copy/Screenshot 2026-06-26 at 10.52.29 AM.png";
import caseD from "../images copy/Screenshot 2026-06-26 at 12.17.00 PM.png";
import caseE from "../images copy/Screenshot 2026-06-26 at 10.49.26 AM.png";
import sys5 from "../images copy/Screenshot 2026-06-26 at 12.18.01 PM.png";
import case3 from "../images copy/val222.png";
import cumfromass from "../cards/Our Plan.png";
import case33 from "../images copy/val333.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required carousel styles
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

const images = [
  cumfromass, caseA, caseB, case3, case33, system1, caseD, caseE, sys5
];

const NStudy = ({ t }) => {
  const isMobile = useIsMobile();

  return (
    <div className="container nstudy">
      <Carousel
        showThumbs={!isMobile}      // thumbnails are too small to use on phones
        showArrows={!isMobile}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={!isMobile}        // auto-advance is disruptive on touch screens
        interval={4000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        swipeScrollTolerance={10}
        preventMovementUntilSwipeScrollTolerance={true}
        useKeyboardArrows={true}
        renderThumbs={() =>
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
            />
          ))
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="gridimag nstudy-img"
              src={image}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NStudy;