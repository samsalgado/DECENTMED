import React from 'react';
import caseA from '../images copy/E1.png';
import caseB from '../images copy/E2.png';
import caseC from '../images copy/E3.png';
import caseD from '../images copy/E4.png';
import "../App.css";
const E = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default E;


  