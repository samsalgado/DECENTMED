import React from 'react';
import caseA from '../images copy/C1.png';
import caseB from '../images copy/C2.png';
import caseC from '../images copy/C3.png';
import caseD from '../images copy/c4.png';
import caseE from "../images copy/c5.png";
import caseF from "../images copy/c6.png";
import cr7 from "../images copy/c7.png";
import case1 from "../images copy/c8.png";
import case2 from "../images copy/c9.png";
import case3 from "../images copy/c10.png";
import case4 from "../images copy/c11.png";
import case5 from "../images copy/c12.png";
import case6 from "../images copy/c13.png";
import case7 from "../images copy/cfin.png";

import "../App.css";
const C = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, cr7, case1, case2,
    case3, case4, case5, case6, case7
];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default C;


  