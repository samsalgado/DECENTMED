import spanish from '../../images copy/IMG_7054.jpeg';
import spanish2 from '../../images copy/IMG_7055.jpeg';
import spanish3 from '../../images copy/IMG_7056.jpeg';
import spanish4 from '../../images copy/IMG_7057.jpeg';
import spanish5 from '../../images copy/IMG_7058.jpeg';
import spanish6 from '../../images copy/IMG_7059.jpeg';
import spanish7 from '../../images copy/IMG_7060.jpeg';
import spanish8 from '../../images copy/IMG_7061.jpeg';
import spanish9 from '../../images copy/IMG_7062.jpeg';
import spanish10 from '../../images copy/IMG_7063.jpeg';
import spanish11 from '../../images copy/IMG_7064.jpeg';
import spanish12 from '../../images copy/IMG_7065.jpeg';
import spanish13 from '../../images copy/IMG_7066.jpeg';
import spanish14 from '../../images copy/IMG_7067.jpeg';
import spanish15 from '../../images copy/IMG_7068.jpeg';
import spanish16 from '../../images copy/IMG_7069.jpeg';
import spanish17 from '../../images copy/IMG_7070.jpeg';
import "../../App.css";
const Ivermectinedutch = ({ t }) => {
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

export default Ivermectinedutch;