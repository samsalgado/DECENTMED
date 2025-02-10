import spanish from '../../images copy/IMG_7168.jpeg';
import spanish2 from '../../images copy/IMG_7169.jpeg';
import spanish3 from '../../images copy/IMG_7170.jpeg';
import spanish4 from '../../images copy/IMG_7171.jpeg';
import spanish5 from '../../images copy/IMG_7172.jpeg';
import spanish6 from '../../images copy/IMG_7173.jpeg';
import spanish7 from '../../images copy/IMG_7174.jpeg';
import spanish8 from '../../images copy/IMG_7175.jpeg';
import spanish9 from '../../images copy/IMG_7176.jpeg';
import spanish10 from '../../images copy/IMG_7177.jpeg';
import spanish11 from '../../images copy/IMG_7178.jpeg';
import spanish12 from '../../images copy/IMG_7179.jpeg';
import spanish13 from '../../images copy/IMG_7180.jpeg';
import spanish14 from '../../images copy/IMG_7181.jpeg';
import spanish15 from '../../images copy/IMG_7182.jpeg';
import spanish16 from '../../images copy/IMG_7183.jpeg';
import spanish17 from '../../images copy/IMG_7184.jpeg';

import "../../App.css";
const Hoxseyfr = ({ t }) => {
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15,spanish16, spanish17
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseyfr;


  