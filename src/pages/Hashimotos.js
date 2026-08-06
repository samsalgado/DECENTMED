import React from 'react';
import caseA from '../images copy/belem.png';
import caseB from '../images copy/paola.png';
import caseC from '../images copy/ale.png';
import caseD from '../images copy/mademecream.png';
import "../App.css";
const Hashimoto = ({ t }) => {
  const images = [
    caseA, caseB, caseC, caseD];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};
export default Hashimoto;


  