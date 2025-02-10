import spanish from '../../images copy/IMG_7137.jpeg';
import spanish2 from '../../images copy/IMG_7138.jpeg';
import spanish3 from '../../images copy/IMG_7139.jpeg';
import spanish4 from '../../images copy/IMG_7140.jpeg';
import spanish5 from '../../images copy/IMG_7141.jpeg';
import spanish6 from '../../images copy/IMG_7142.jpeg';
import spanish7 from '../../images copy/IMG_7143.jpeg';
import spanish8 from '../../images copy/IMG_7144.jpeg';
import spanish9 from '../../images copy/IMG_7145.jpeg';
import spanish10 from '../../images copy/IMG_7146.jpeg';
import spanish11 from '../../images copy/IMG_7147.jpeg';
import spanish12 from '../../images copy/IMG_7148.jpeg';
import spanish13 from '../../images copy/IMG_7149.jpeg';
import "../../App.css";
const Fendutch= ({ t }) => {
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

export default Fendutch;


  