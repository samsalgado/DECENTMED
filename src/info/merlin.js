import React from 'react';
import './Info.css'; // Import the CSS file

const Merlin = () => {
  return (
    <div className='theecontainer'>
         <div className='video-container'>
          <iframe
            width="100%"
            height='350vh'
            src="https://www.youtube.com/embed/V2u8gx0a9-s?si=IUL22A4v877coDLJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
};

export default Merlin;

