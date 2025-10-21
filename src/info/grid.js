import React from 'react';
import '../App.css'; // Make sure CSS is linked
import Treatment from '../pages/treatment'; // Treatment images
const treatmentLinks = {
  homeopath: "https://decentmed.org/homeopathy",
  prevent: "https://decentmed.org/prevent",
  detox: "https://decentmed.org/detox",
  acupuncture: "https://decentmed.org/acu",
  ayurveda: "https://decentmed.org/ayurveda",
  stemcell: "https://decentmed.org/stemcell",
  nutriton: "https://decentmed.org/nutrition",
  chiro: "https://decentmed.org/chiropractic",
  empower:"https://decentmed.org/transformationalcoaching",
  ak:"https://decentmed.org/ak",
  nutri:"https://decentmed.org/nutrigenomics",
  breathwork:"https://decentmed.org/breath",
  chelation:"https://decentmed.org/chelation",
  hypnotherapy:"https://decentmed.org/hypnotherapy",
  herbalmedicine:"https://decentmed.org/herbalmedicine",
  meditation:"https://tdecentmed.org/meditation",
  seo:"https://decentmed.org/digitalmarketing"
};

const Grid = () => {
  const treatmentNames = Object.keys(Treatment);
  return (
   <div className='containe'>
 <div className="grid-contain">
      {treatmentNames.map((treatmentName, index) => (
        <a
          key={index}
          href={treatmentLinks[treatmentName] || "#"}
          className="grid-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Treatment[treatmentName]}
            alt={treatmentName}
            className="grid-imag"
          />
        </a>
      ))}
    </div>
</div>
  );
};

export default Grid;
