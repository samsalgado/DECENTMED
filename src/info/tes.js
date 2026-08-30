import React from 'react';
import caseA from '../images copy/T0.png';
import caseB from '../images copy/t1.png';
import caseC from '../images copy/t2.png';
import caseD from '../images copy/t3.png';
import caseE from '../images copy/t4.png';
import caseF from '../images copy/t5.png';
import caseH from '../images copy/t6.png';
import "../App.css";
const T = ({ t }) => {
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

export default T;


  