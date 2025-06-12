import React from 'react';
import caseA from '../images copy/caseA.png';
import caseB from '../images copy/caseB.png';
import caseC from '../images copy/caseC.png';
import caseD from '../images copy/caseD.png';
import caseE from '../images copy/caseE.png';
import caseF from '../images copy/caseF.png';
import caseH from '../images copy/caseH.png';
import caseG from '../images copy/caseG.png';
import "../App.css";
const Hypnostudies = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hypnostudies;


  