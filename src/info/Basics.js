import React from 'react';
import caseA from '../images copy/basic1.png';
import caseB from '../images copy/basic2.png';
import caseC from '../images copy/basic3.png';
import caseD from '../images copy/basic4.png';
import caseE from '../images copy/basic5.png';
import caseF from '../images copy/basic6.png';
import caseG from '../images copy/basic7.png';
import caseH from '../images copy/basic8.png';
import caseK from '../images copy/basic9.png';
import case11 from "../images copy/basic11.png";
import caseL from '../images copy/basic12.png';
import caseM from '../images copy/basic13.png';
import caseN from '../images copy/basic14.png';
import case1 from "../images copy/basic15.png";
import case2 from "../images copy/basic16.png";
import case3 from "../images copy/basic17.png";
import case4 from "../images copy/basic18.png";
import case5 from "../images copy/basic19.png";
import case6 from "../images copy/basic20.png";
import case7 from "../images copy/basic21.png";
import case8 from "../images copy/basic22.png";
import case99 from "../images copy/basic23.png";
import case9 from "../images copy/basic25.png";
import "../App.css";
const Basics = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH, 
    caseK, case11, caseL, caseM, caseN, case1, case2, case3, case4, case5,
    case6, case7, case8, case99, case9
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Basics;


  