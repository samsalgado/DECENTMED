import React from 'react';
import '../info/Info.css'; // Import the CSS file
import Offer from '../offers/offer';

const Practice = () => {
  return (
    <div className='theecontainer'>
         <div className='video-container'>
         <iframe
            width="100%"
            height="315"
             src="https://www.youtube.com/embed/85HJDyVHU1o?si=HP3go149es0YvcsO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      <div className='flex-container'>
      <Offer />
      </div>
    </div>
  );
};

export default Practice;
