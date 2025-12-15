import React from 'react';
import caseA from '../images copy/Ramona1.png';
import caseB from '../images copy/Ramona2.png';
import caseC from '../images copy/Ramona3.png';
import caseD from '../images copy/Ramona4.png';
import caseE from '../images copy/Ramona5.png';
import caseF from '../images copy/Ramona6.png';
import caseH from '../images copy/Ramona7.png';
import case8 from '../images copy/Ramona8.png';
import "../App.css";
const Boundaries = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseH, case8
  ];
  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Boundaries;


  