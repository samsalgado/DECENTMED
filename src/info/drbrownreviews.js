import React from 'react';
import caseA from '../images copy/review1.png';
import caseB from '../images copy/review2.png';
import caseC from '../images copy/rev3.png';
import "../App.css";
const Reviewss = ({ t }) => {
  const images = [
    caseA, caseB, caseC
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Reviewss;


  