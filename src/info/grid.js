import React from 'react';
import '../App.css'; // Make sure CSS is linked
import Treatment from '../pages/treatment'; // Treatment images
const treatmentLinks = {
  homeopath: "https://decentmed.themerlingroupworld.com/homeopathy",
  prevent: "https://decentmed.themerlingroupworld.com/prevent",
  detox: "https://decentmed.themerlingroupworld.com/detox",
  acupuncture: "https://decentmed.themerlingroupworld.com/acu",
  ayurveda: "https://decentmed.themerlingroupworld.com/ayurveda",
  stemcell: "https://decentmed.themerlingroupworld.com/stemcell",
  nutriton: "https://decentmed.themerlingroupworld.com/nutrition",
  chiro: "https://decentmed.themerlingroupworld.com/chiropractic",
  empower:"https://decentmed.themerlingroupworld.com/transformationalcoaching",
  ak:"https://decentmed.themerlingroupworld.com/ak",
  nutri:"https://decentmed.themerlingroupworld.com/nutrigenomics",
  breathwork:"https://decentmed.themerlingroupworld.com/breath",
  chelation:"https://decentmed.themerlingroupworld.com/chelation",
  hypnotherapy:"https://decentmed.themerlingroupworld.com/hypnotherapy",
  herbalmedicine:"https://decentmed.themerlingroupworld.com/herbalmedicine",
  meditation:"https://tdecentmed.hemerlingroupworld.com/meditation",
  seo:"https://decentmed.themerlingroupworld.com/digitalmarketing"
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
