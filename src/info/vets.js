import React from 'react';
import caseA from '../images copy/vet1.png';
import caseB from '../images copy/vet2.png';
import caseC from '../images copy/vet3.png';
import caseD from '../images copy/vet4.png';
import caseE from '../images copy/vet5.png';
import caseF from '../images copy/vet6.png';
import caseG from '../images copy/vet7.png';
import caseH from '../images copy/vet8.png';
import caseI from '../images copy/vet9.png';
import caseJ from '../images copy/vet10.png';
import caseK from '../images copy/vet11.png';
import case11 from "../images copy/case11.png";
import caseL from '../images copy/vet13.png';
import caseM from '../images copy/vet6.png';
import caseN from '../images copy/vet7.png';
import case1 from "../images copy/vet14.png";
import case2 from "../images copy/vet15.png";
import case3 from "../images copy/vet16.png";
import case4 from "../images copy/vet17.png";
import case5 from "../images copy/vet18.png";
import case6 from "../images copy/vet19.png";
import case7 from "../images copy/vet20.png";
import case8 from "../images copy/vet21.png";
import case99 from "../images copy/vet22.png";
import case9 from "../images copy/vet23.png";
import case10 from "../images copy/vet24.png";
import case111 from "../images copy/vet25.png";

import "../App.css";
const Vets = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH, 
    caseI, caseJ, caseK, caseM, caseN, case11, caseL, case1, case2, case3, case4, case5,
    case6, case7, case8, case9, case99,case10, case111
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Vets;


  