import React from 'react';
import caseA from '../images copy/tsmx0.png';
import caseB from '../images copy/tsmx1.png';
import caseC from '../images copy/tsmx3.png';
import caseD from '../images copy/tsmx4.png';
import "../App.css";
const MX = ({ t }) => {
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

export default MX;


  