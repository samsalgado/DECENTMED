import React from 'react';
import caseA from '../images copy/h1.png';
import caseB from '../images copy/h2.png';
import caseC from '../images copy/h3.png';
import caseD from '../images copy/h4.png';
import caseE from '../images copy/h5.png';
import caseF from '../images copy/h6.png';
import caseH from '../images copy/h7.png';
import "../App.css";
const HStudy = ({ t }) => {
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

export default HStudy;


  