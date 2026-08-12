import React from 'react';
import { Carousel } from "react-responsive-carousel";
import caseA from '../images copy/val0.png';
import caseB from '../images copy/Screenshot 2026-08-12 at 9.22.48 AM.png';
import system1 from "../images copy/Screenshot 2026-06-26 at 10.52.29 AM.png";
import caseD from "../images copy/Screenshot 2026-06-26 at 12.17.00 PM.png";
import caseE from "../images copy/Screenshot 2026-06-26 at 10.49.26 AM.png";
import sys5 from "../images copy/Screenshot 2026-06-26 at 12.18.01 PM.png";
import case3 from "../images copy/val222.png";
import cumfromass from "../cards/Our Plan.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required carousel styles
import case33 from "../images copy/val333.png";
import "../App.css";
const NStudy = ({ t }) => {
  const images = [
    cumfromass, caseA, caseB, case3, case33, system1, caseD, caseE, sys5
  ];

  return (
    <div className="container">
        <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        showStatus={false}
      >
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt={`Slide ${index + 1}`} />
      ))}
      </Carousel>
    </div>
  );
};

export default NStudy;


  