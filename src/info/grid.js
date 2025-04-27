import React from 'react';
import '../App.css'; // Make sure CSS is linked
import Treatment from '../pages/treatment'; // Treatment images
const treatmentLinks = {
  homeopath: "https://themerlingroupworld.com/homeopathy",
  prevent: "https://themerlingroupworld.com/prevent-wellness",
  detox: "https://themerlingroupworld.com/detox",
  acupuncture: "https://themerlingroupworld.com/acupuncture",
  ayurveda: "https://themerlingroupworld.com/ayurveda",
  stemcell: "https://themerlingroupworld.com/stemcell",
  nutriton: "https://themerlingroupworld.com/nutrition",
  chiro: "https://themerlingroupworld.com/chiropractic",
  chelation: "https://themerlingroupworld.com/chelation",
  hypnotherapy: "https://themerlingroupworld.com/hypnotherapy",
  herbalmedicine: "https://themerlingroupworld.com/herbal-medicine",
  meditation: "https://themerlingroupworld.com/meditation",
  seo: "https://themerlingroupworld.com/digitalmarketing"
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
