import React from 'react';
import Channel from './channel';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; // Import only acu.css for styling

const Info1 = () => {
  return (
    <div className='container'>
      <h1>Acupuncture</h1>


      <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/cJIHng7oaWM?si=zzIkenFP5H3l6ahb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
<div>
      <img className='gridimag' src={acuchart} alt='Ac' />
      </div>
    <Channel />
    </div>
    
  )
}

export default Info1
