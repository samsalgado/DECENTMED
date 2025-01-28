import React from 'react'
import "../App.css";
import DETOXIMG from '../images copy/detoxpg.png';
import Fruits from './fruits';
import Protocols from './Protocols';
const Info3 = () => {

  return (
    
    <div className='container'>
              <h1>Detox</h1>

    <Fruits />
      <div className="collapsible">

      </div>
      <div><img className='FACTS' src={DETOXIMG} alt="logo" /></div>
    <br></br>
    <div className='ppr'>
      <br></br>
        <p>
        A detox cleanses the body. A water detox cleanse can flush out the body's toxins. The 3 day cleanse detox will restore your cells to ketosis. When detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. 
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
        <h4>Detoxification Protocols</h4>
     <div>
  <iframe
    className="rumble"
    width="100%"
    height="400px"
    src="https://rumble.com/embed/v6bxnhg/?pub=4hu51y"
    frameBorder="0"
    allowFullScreen
    title="Rumble video player"
  ></iframe>
</div>
    </div>
    <div className="title-container">
        <Protocols />
      </div>

    </div>
    
  )
}

export default Info3