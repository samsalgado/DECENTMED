
import React from 'react';
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

const NoStudy = ({ t }) => {
  const images = [
    caseA,
    caseB,
    case3,
    case33,
    system1,
    caseD,
    caseE,
    sys5
  ];

  // Add the website URL for each corresponding image
  const urls = [
    "https://nutrifyourlife.com/",
    "https://cdmhealthandwellness.com/",
    "https://oldwiseowladvisor.com/",
    "https://www.green-hypnotherapy.com/",
    "https://thesunrisewellness.com/",
    "https://grhc.love/",
    "https://robusthealthadvocacy.com/",
    "https://totalcarechiro.com/"
  ];

  return (
    <div className="container">
      <Carousel
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        renderThumbs={() =>
          images.map((image, index) => (
            <a
              key={index}
              href={urls[index]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />
            </a>
          ))
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="gridimag"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NoStudy;
