import React from 'react'
import "../App.css";
import ayurveda from "../images copy/ayurveda-science.png";
import Elements from './elements';

const Ayurvedaa = () => {

  return (
    
    <div className='container'>
              <h1>Ayurveda Experience</h1>
              <img className='gridimag' src={ayurveda} alt='Ayurveda Science' />

      <div className="title-container">

      </div>
      <div className="collapsible">
        <Elements />
      </div>
<iframe width="100%" height={600} src="https://www.youtube.com/embed/YHuAEIoV_Ow" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <br></br>
    <div className='pr'>
        <h3>What is Ayurveda?</h3>
      <p>
        Ayurveda is a holistic healing system developed in India based on the delicate balance between mind, body, and spirit. The goal of Ayurveda is promoting good health instead of fighting disease. The goal is to cleanse
        your body of undigested food, which stay in your body and lead to illness. The process is called 'panchakarma', designed to reduce your symptoms and restore harmony and balance. Other processes used are blood purification, massage, medical oils, herbs, enemas, and laxatives. 
        </p>
        <h3>Why Choose Ayurveda?</h3>
        <p>
            1. Truly embrace individual
        </p>
        <p>
            2. Foster self-awareness
        </p>
        <p>
            3. Focuses on prevention and the root cause of illness
        </p>
        <p>
            4. Truly intuitive
        </p>
    </div>
    <iframe width="100%" height={315} src="https://www.youtube.com/embed/BT3Sdg2B5Fc?si=6L1vMYZEMeNPaCH-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </div>
    
  )
}

export default Ayurvedaa