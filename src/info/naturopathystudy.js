import React from 'react';
import caseA from '../images copy/Nslide1.png';
import caseB from '../images copy/Nslide2.png';
import caseC from '../images copy/Nslide3.png';
import caseD from '../images copy/Nslide4.png';
import caseE from '../images copy/Nslide5.png';
import caseF from '../images copy/Nslide6.png';
import caseH from '../images copy/Nslide7.png';
import "../App.css";
const NatStudy = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseH
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default NatStudy;


  