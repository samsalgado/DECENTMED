import spanish from '../../images copy/IMG_7203.jpeg';
import spanish2 from '../../images copy/IMG_7204.jpeg';
import spanish3 from '../../images copy/IMG_7205.jpeg';
import spanish4 from '../../images copy/IMG_7206.jpeg';
import spanish5 from '../../images copy/IMG_7207.jpeg';
import spanish6 from '../../images copy/IMG_7208.jpeg';
import spanish7 from '../../images copy/IMG_7209.jpeg';
import spanish8 from '../../images copy/IMG_7210.jpeg';
import spanish9 from '../../images copy/IMG_7211.jpeg';
import spanish10 from '../../images copy/IMG_7213.jpeg';
import spanish11 from '../../images copy/IMG_7214.jpeg';
import spanish12 from '../../images copy/IMG_7215.jpeg';
import spanish13 from '../../images copy/IMG_7216.jpeg';
import spanish14 from '../../images copy/IMG_7217.jpeg';
import spanish15 from '../../images copy/IMG_7220.jpeg';
import spanish16 from '../../images copy/IMG_7221.jpeg';
import "../../App.css";
const Hoxseydutch = ({ t }) => {
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15, spanish16
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseydutch;


  