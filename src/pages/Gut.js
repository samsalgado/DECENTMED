import React from 'react';
import caseA from '../images copy/az0.png';
import caseB from '../images copy/az1.png';
import caseC from '../images copy/az3.png';
import "../App.css";
const StomachIssues = ({ t }) => {
  const images = [
    caseA, caseB, caseC];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};
export default StomachIssues;


  