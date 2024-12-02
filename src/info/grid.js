import React from 'react';
import { useState, useEffect } from 'react'; // For managing grid layout (optional)
import "../App.css";
import Treatment from '../pages/treatment';

const Grid = () => {
  const [columns, setColumns] = useState(2); // Optional state for dynamic column count

  const handleResize = () => {
    // Optional logic to adjust columns based on screen size
    const newColumns = window.innerWidth >= 768 ? 3 : 2; // Example: 3 columns for screens wider than 768px
    setColumns(newColumns);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Cleanup on unmount

  const rows = Math.ceil(Object.keys(Treatment).length / columns); // Calculate rows based on Treatment object

  return (
    <div className="grid-container">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: columns }).map((_, columnIndex) => {
            const treatmentName = Object.keys(Treatment)[rowIndex * columns + columnIndex]; // Get treatment name by index
            if (!treatmentName) return null; // Handle potential out-of-bounds access

            return (
              <img
                key={treatmentName} // Important for performance with dynamic content
                src={Treatment[treatmentName]} // Access image by name from Treatment object
                alt={treatmentName} // Descriptive alt text based on treatment name
                className="grid-image"
              />
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
