import React from 'react';
import styled from 'styled-components';
import val2 from "../images copy/Screenshot 2026-06-26 at 12.47.34 PM.png";
import val3 from "../images copy/Screenshot 2026-06-26 at 12.51.23 PM.png";
import val4 from "../images copy/Screenshot 2026-06-26 at 12.55.16 PM.png";
import val1 from "../images copy/Screenshot 2026-06-26 at 12.42.21 PM.png";

// Updated to use CSS Grid for a strict 2x2 layout
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates two equal columns */
  gap: 10px; /* Adjust spacing as needed */
  width: 100%;
  max-width: 800px; /* Optional: limits the grid size */
  margin: 0 auto;
`;

const GridImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 8px; /* Optional: makes it look a bit cleaner */
`;

const ImageGrid = () => {
  return (
    <GridContainer>
      <GridImage src={val1} alt="Education" />
      <GridImage src={val2} alt="Sales and Marketing System" />
      <GridImage src={val3} alt="spectra spray 3" />
      <GridImage src={val4} alt="spectra spray 4" />
    </GridContainer>
  );
};

export default ImageGrid;