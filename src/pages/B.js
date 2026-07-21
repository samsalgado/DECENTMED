import React from 'react';
import caseA from '../images copy/bj.png';
import caseB from '../images copy/bj1.png';
import caseC from '../images copy/bj3.png';
import caseD from '../images copy/bj4.png';
import caseBaileyJay from "../images copy/bj5.png";
import bj6 from "../images copy/bj6.png";
import tsbrazil from "../images copy/bj7.png";
import "../App.css";
const bJ = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseBaileyJay, bj6, tsbrazil];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};
export default bJ;


  