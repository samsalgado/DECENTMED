import React from 'react';
import caseA from '../images copy/v1.png';
import caseB from '../images copy/v2.png';
import caseC from '../images copy/v3.png';
import caseD from '../images copy/v4.png';
import caseE from '../images copy/v5.png';
import caseF from '../images copy/v6.png';
import caseH from '../images copy/v7.png';
import case8 from '../images copy/v8.png';
import case9 from '../images copy/v8.png';
import case10 from '../images copy/v9.png';
import case11 from '../images copy/v10.png';
import case12 from '../images copy/v11.png';
import case13 from '../images copy/v12.png';
import case14 from '../images copy/v13.png';
import case15 from '../images copy/v14.png';
import case16 from '../images copy/v15.png';

import "../App.css";
const BloodSugar = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseH, case8,case9,case10,case11,case12,case13,case14,case15,case16
  ];
  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default BloodSugar;


  