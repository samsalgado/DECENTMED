import React from 'react';
import caseA from '../images copy/w1.png';
import caseB from '../images copy/w2.png';
import caseC from '../images copy/w3.png';
import caseD from '../images copy/w4.png';
import caseE from '../images copy/w5.png';
import caseF from '../images copy/w6.png';
import caseG from '../images copy/w7.png';
import caseH from '../images copy/w8.png';
import caseK from '../images copy/w9.png';
import case11 from "../images copy/w10.png";
import caseL from '../images copy/w11.png';
import caseM from '../images copy/w12.png';
import caseN from '../images copy/w14.png';
import case1 from "../images copy/w15.png";
import case2 from "../images copy/w16.png";
import case3 from "../images copy/w17.png";
import case4 from "../images copy/w18.png";
import case5 from "../images copy/w19.png";
import "../App.css";
const Women = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH, 
    caseK, case11, caseL, caseM, caseN, case1, case2, case3, case4, case5,
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Women;


  