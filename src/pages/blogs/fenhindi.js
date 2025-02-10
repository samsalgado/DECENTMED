import spanish from '../../images copy/IMG_7105.jpeg';
import spanish2 from '../../images copy/IMG_7106.jpeg';
import spanish3 from '../../images copy/IMG_7107.jpeg';
import spanish4 from '../../images copy/IMG_7108.jpeg';
import spanish5 from '../../images copy/IMG_7109.jpeg';
import spanish6 from '../../images copy/IMG_7110.jpeg';
import spanish7 from '../../images copy/IMG_7111.jpeg';
import spanish8 from '../../images copy/IMG_7112.jpeg';
import spanish9 from '../../images copy/IMG_7113.jpeg';
import spanish10 from '../../images copy/IMG_7114.jpeg';
import spanish11 from '../../images copy/IMG_7115.jpeg';
import spanish12 from '../../images copy/IMG_7116.jpeg';
import spanish13 from '../../images copy/IMG_7117.jpeg';
import "../../App.css";
const Fenhindi= ({ t }) => {
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

export default Fenhindi;