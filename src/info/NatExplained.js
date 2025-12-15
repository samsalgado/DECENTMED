import React from 'react';
import caseA from '../images copy/IMG_2810.jpeg';
import caseB from '../images copy/IMG_2782.jpeg';
import caseC from '../images copy/IMG_2832.jpeg';
import caseD from '../images copy/IMG_2783.jpeg';
import caseE from '../images copy/IMG_2785.jpeg';
import caseF from '../images copy/IMG_2786.jpeg';
import caseH from '../images copy/IMG_2787.jpeg';
import case8 from '../images copy/IMG_2789.jpeg';
import case9 from '../images copy/IMG_2833.jpeg';
import case10 from '../images copy/IMG_2834.jpeg';
import case11 from '../images copy/IMG_2790.jpeg';
import case12 from '../images copy/IMG_2835.jpeg';
import case13 from '../images copy/IMG_2792.jpeg';
import case14 from '../images copy/IMG_2793.jpeg';
import case15 from '../images copy/IMG_2795.jpeg';
import case16 from '../images copy/IMG_2796.jpeg';
import case17 from '../images copy/IMG_2797.jpeg';
import case18 from '../images copy/IMG_2798.jpeg';
import case19 from '../images copy/IMG_2799.jpeg';
import case20 from '../images copy/IMG_2800.jpeg';
import case21 from '../images copy/IMG_2837.jpeg';
import case22 from '../images copy/IMG_2838.jpeg';

import "../App.css";
const NatExplained = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseH, case8, case9, case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default NatExplained;


  