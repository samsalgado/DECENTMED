import React from 'react'
import Forum from './forum';
import "./homeo.css";
import quote from '../images copy/quote.png';
import ReactPlayer from 'react-player';
import homeopathy from '../images copy/homeopathy.mp4';
import homeo from '../images copy/homeo.png';
const Homeo = () => {

  return (
    <div className='thecontainer'>
    <div className='container'>
        <h1>Homeopathy</h1>
        <ReactPlayer
      url={homeopathy} // Replace with your video URL
      width='100%'
      height='400px'
      controls={true}
    />
    <br></br>
      <img src={quote} className="TELEa" alt="logo" />
      <div className="collapsible">
      </div>
    <br></br>
    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
      <Forum />
    </div>
    </div>
  )
}

export default Homeo