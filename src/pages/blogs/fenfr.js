import spanish from '../../images copy/IMG_7118.jpeg';
import spanish2 from '../../images copy/IMG_7119.jpeg';
import spanish3 from '../../images copy/IMG_7121.jpeg';
import spanish4 from '../../images copy/IMG_7120.jpeg';
import spanish5 from '../../images copy/IMG_7122.jpeg';
import spanish6 from '../../images copy/IMG_7123.jpeg';
import spanish7 from '../../images copy/IMG_7124.jpeg';
import spanish8 from '../../images copy/IMG_7125.jpeg';
import spanish9 from '../../images copy/IMG_7126.jpeg';
import spanish10 from '../../images copy/IMG_7127.jpeg';
import spanish11 from '../../images copy/IMG_7128.jpeg';
import spanish12 from '../../images copy/IMG_7129.jpeg';
import spanish13 from '../../images copy/IMG_7130.jpeg';
import "../../App.css";
const Fenfrance= ({ t }) => {
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Fenfrance;


  