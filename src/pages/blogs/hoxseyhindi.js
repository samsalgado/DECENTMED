import spanish from '../../images copy/IMG_7222.jpeg';
import spanish2 from '../../images copy/IMG_7223.jpeg';
import spanish3 from '../../images copy/IMG_7224.jpeg';
import spanish4 from '../../images copy/IMG_7225.jpeg';
import spanish5 from '../../images copy/IMG_7226.jpeg';
import spanish6 from '../../images copy/IMG_7227.jpeg';
import spanish7 from '../../images copy/IMG_7228.jpeg';
import spanish8 from '../../images copy/IMG_7229.jpeg';
import spanish9 from '../../images copy/IMG_7230.jpeg';
import spanish10 from '../../images copy/IMG_7231.jpeg';
import spanish11 from '../../images copy/IMG_7232.jpeg';
import spanish12 from '../../images copy/IMG_7233.jpeg';
import spanish13 from '../../images copy/IMG_7234.jpeg';
import spanish14 from '../../images copy/IMG_7235.jpeg';
import spanish15 from '../../images copy/IMG_7236.jpeg';
import spanish16 from '../../images copy/IMG_7237.jpeg';
import spanish17 from '../../images copy/IMG_7238.jpeg';
import spanish18 from '../../images copy/IMG_7239.jpeg';
import spanish19 from '../../images copy/IMG_7240.jpeg';
import spanish20 from '../../images copy/IMG_7241.jpeg';
import "../../App.css";
const Hoxseyhindi = ({ t }) => {
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15,spanish16, spanish17, spanish18, spanish19, spanish20
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseyhindi;


  