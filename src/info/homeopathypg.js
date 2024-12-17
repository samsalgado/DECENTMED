import React from 'react'
import "./homeo.css";
import quote from '../images copy/quote.png';
const Homeo = () => {

  return (
    <div className='thecontainer'>
    <div className='container'>
        <h1>Homeopathy</h1>
        <iframe
            width="100%"
            height="475"
            src="https://www.youtube.com/embed/j7bV-Ig45kg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
    <br></br>
    <br></br>
      <img src={quote} className="TELEa" alt="logo" />
      <div className="collapsible">
      </div>
    </div>
    </div>
  )
}

export default Homeo