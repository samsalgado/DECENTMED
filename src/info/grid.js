import React from 'react';
import { useState, useEffect } from 'react'; // For managing grid layout (optional)
import "../App.css";
import Treatment from '../pages/treatment';
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
  seo:"https://themerlingroupworld.com/digitalmarketing"
}
const Grid = () => {
  const [columns, setColumns] = useState(2);

  const handleResize = () => {
    const newColumns = window.innerWidth >= 768 ? 3 : 2;
    setColumns(newColumns);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const treatmentNames = Object.keys(Treatment);
  const rows = Math.ceil(treatmentNames.length / columns);

  return (
    <div className="grid-container">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: columns }).map((_, columnIndex) => {
            const treatmentName = treatmentNames[rowIndex * columns + columnIndex];
            if (!treatmentName) return null;

            return (
              <a
                key={treatmentName}
                href={treatmentLinks[treatmentName] || "#"} // Fallback to "#" if no link exists
                className="grid-link"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
              >
                <img
                  src={Treatment[treatmentName]}
                  alt={treatmentName}
                  className="grid-image"
                />
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;


// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import Treatment from '../pages/treatment'; // Assume Treatment contains your data

// const Grid = () => {
//   const [columns, setColumns] = useState(2); // Initial columns for small devices

//   const handleResize = () => {
//     const newColumns = window.innerWidth >= 768 ? 3 : 2; // Adjust based on screen size
//     setColumns(newColumns);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial call
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const rows = Math.ceil(Object.keys(Treatment).length / columns); // Calculate rows based on data

//   return (
//     <div className="grid-container">
//       {Array.from({ length: rows }).map((_, rowIndex) => (
//         <div key={rowIndex} className="grid-row">
//           {Array.from({ length: columns }).map((_, columnIndex) => {
//             const treatmentName = Object.keys(Treatment)[rowIndex * columns + columnIndex];
//             if (!treatmentName) return null;

//             return (
//               <img
//                 key={treatmentName}
//                 src={Treatment[treatmentName]} // Image source from Treatment
//                 alt={treatmentName}
//                 className="grid-image"
//               />
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Grid;
