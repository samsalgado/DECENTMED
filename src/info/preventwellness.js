import React from 'react'
import preventchart from '../images copy/prevemt.png';
import Vitamins from './vitamins';
import "./prevent.css";
const PreventWellness = () => {

  return (
    
    <div className='container'>
      <div className="title-container">
        <h1>Preventive Wellness</h1>
      </div>
      <div className="collapsible">

      </div>
      <img src={preventchart} className="chart" alt="logo" />

    <br></br>
    <div className='pr'>
        <p>
        The body has an immense regenerative potential to heal itself. "Let thy food be medicine, and thy medicine be food", Hippocrates, this quote illustrates that fighting disease begins with food. Prevention starts with eating foods that boost the immune system. Consumption of antioxidants like Polyphenols or Beta Carotene assists the immune system in fighting disease before they arrive. Renowed healers, Dr. Sebi and Dr. Gerson found that a mixture of a plant-based diet and detoxification aids in fighting cancer. 
        </p>
        <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/QYK5YYh8Doc?si=kDUpYjE9IpJzk8pm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        <p>
         A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days to restore the cells to ketosis. Furthermore, when detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. 
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Green Diets and Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
    </div>
   
    <Vitamins />
    </div>
    
  )
}
export default PreventWellness