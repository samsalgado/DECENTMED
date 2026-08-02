import React from 'react';
import caseA from '../images copy/M0.png';
import caseB from '../images copy/m1.png';
import caseC from '../images copy/m2.png';
import caseD from '../images copy/m3.png';
import caseE from '../images copy/m4.png';
import caseF from '../images copy/m5.png';
import caseH from '../images copy/m6.png';
import caseI from '../images copy/m7.png';
import casej from '../images copy/m9.png';
import casek from '../images copy/m8.png';
import casel from '../images copy/m10.png';
import caseM from '../images copy/m11.png';
import case1 from "../images copy/M12.png";
import case2 from "../images copy/M13.png";
import case3 from "../images copy/M14.png";
import case4 from "../images copy/M15.png";
import case5 from "../images copy/m16.png";
import case6 from "../images copy/m01.png";
import case7 from "../images copy/m02.png";
import case8 from "../images copy/m03.png";
import case9 from "../images copy/m00.png";
import case10 from "../images copy/m20.png";
import case11 from "../images copy/m21.png";
import case12 from "../images copy/m24.png";
import case13 from "../images copy/m25.png";
import case14 from "../images copy/m27.png";

import "../App.css";
const DNAStudy = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseH, caseI,
    casej, casek, casel, caseM, case1, case2, case3, case4, case5, case6,
    case7, case8, case9, case10, case11, case12, case13, case14
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default DNAStudy;


  