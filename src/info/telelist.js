import React from 'react';
import './Tele.css';
//Providers
const Directory = () => {
  const treatments = [ // Assuming Treatment is an array of image objects or paths
    { name: 'Acupuncture', src: require('../images copy/acupuncture.png'), alt: 'Acupuncture' },
    { name: 'Ayurveda', src: require('../images copy/ayurveda.png'), alt: 'Ayurveda' },
    { name: 'Chelation', src: require('../images copy/chelation.png'), alt: 'Chelation' },
    { name: 'Health Coach', src: require('../images copy/healthcoach.png'), alt: 'Detox' },
    { name: 'Chiropractic', src: require('../images copy/Chiropractic.png'), alt: 'Chiropractic' },
    { name: 'Homeopathy', src: require('../images copy/homeopathy.png'), alt: 'Homeopathy' },
    { name: 'Regenerative Medicine', src: require('../images copy/stem.png'), alt: 'Regenerative Medicine' },
    {name: 'PRP', src: require('../images copy/PRP.png'), alt: 'PRP' },
    {name:'Nutritionist', src: require('../images copy/nutrition.png'), alt: 'Nutritionist'},
    {name: 'Hypnotherapist', src: require('../images copy/hypno.png'), alt: 'Hypnotherapist'},
  ];

  const columns = 5;
  const rows = Math.ceil(treatments.length / columns); 

  return (
    <div className="grid">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="gridrow">
          {Array.from({ length: columns }).map((_, columnIndex) => {
            const index = rowIndex * columns + columnIndex;
            const treatment = treatments[index]; 
            if (!treatment) return null;

            return (
                <>
              <img
                key={treatment.name} 
                src={treatment.src}
                alt={treatment.alt}
                className="gridimage"
              />
              </>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Directory
