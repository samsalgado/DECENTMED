import spanish from '../../images copy/IMG_7088.jpeg';
import spanish2 from '../../images copy/IMG_7089.jpeg';
import spanish3 from '../../images copy/IMG_7090.jpeg';
import spanish4 from '../../images copy/IMG_7091.jpeg';
import spanish5 from '../../images copy/IMG_7092.jpeg';
import spanish6 from '../../images copy/IMG_7093.jpeg';
import spanish7 from '../../images copy/IMG_7094.jpeg';
import spanish8 from '../../images copy/IMG_7095.jpeg';
import spanish9 from '../../images copy/IMG_7096.jpeg';
import spanish10 from '../../images copy/IMG_7097.jpeg';
import spanish11 from '../../images copy/IMG_7098.jpeg';
import spanish12 from '../../images copy/IMG_7099.jpeg';
import spanish13 from '../../images copy/IMG_7100.jpeg';
import spanish14 from '../../images copy/IMG_7101.jpeg';
import spanish15 from '../../images copy/IMG_7102.jpeg';
import spanish16 from '../../images copy/IMG_7103.jpeg';
import spanish17 from '../../images copy/IMG_7104.jpeg';
import "../../App.css";
const Ivermectinfrench= ({ t }) => {
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

export default Ivermectinfrench;