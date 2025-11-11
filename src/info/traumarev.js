import React from 'react';
import caseA from '../images copy/TA.png';
import caseB from '../images copy/TB.png';
import caseD from '../images copy/TD.png';
import caseE from '../images copy/TE.png';
import caseF from '../images copy/tf.png';
import "../App.css";
const Trev = () => {
  const images = [
    caseA, caseB, caseD, caseE, caseF
  ];
  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Trev;


  