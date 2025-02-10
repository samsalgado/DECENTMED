import spanish from '../../images copy/IMG_7071.jpeg';
import spanish2 from '../../images copy/IMG_7072.jpeg';
import spanish3 from '../../images copy/IMG_7073.jpeg';
import spanish4 from '../../images copy/IMG_7074.jpeg';
import spanish5 from '../../images copy/IMG_7075.jpeg';
import spanish6 from '../../images copy/IMG_7076.jpeg';
import spanish7 from '../../images copy/IMG_7077.jpeg';
import spanish8 from '../../images copy/IMG_7078.jpeg';
import spanish9 from '../../images copy/IMG_7079.jpeg';
import spanish10 from '../../images copy/IMG_7080.jpeg';
import spanish11 from '../../images copy/IMG_7081.jpeg';
import spanish12 from '../../images copy/IMG_7082.jpeg';
import spanish13 from '../../images copy/IMG_7083.jpeg';
import spanish14 from '../../images copy/IMG_7084.jpeg';
import spanish15 from '../../images copy/IMG_7085.jpeg';
import spanish16 from '../../images copy/IMG_7086.jpeg';
import spanish17 from '../../images copy/IMG_7087.jpeg';
import "../../App.css";
const Ivermectinhindi = ({ t }) => {
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15, 
    spanish16, spanish17
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Ivermectinhindi;