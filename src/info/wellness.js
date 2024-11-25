import React from 'react';
import './Info.css'; // Import the CSS file

const WellnessInro = () => {
  return (
    <div className='theecontainer'>
         <div className='video-container'>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/L7RzJp1WGlQ?si=PHKX-5AneSGAjswK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      <div className='flex-container'>
        <div className='paragraph-container'>
          <p className='paragraph'>
            Have you ever wondered how people used to live healthier and longer lives?
            Before traditional medicine, there was wellness. Our ancestors experienced vitality - living off the land.
            This decade has uncovered the hidden truth about traditional healthcare. Medicine is not about surviving; it is about wellness. Medicine should cure sometimes, relieve often, and comfort always. Our goal is to promote vitality. We are personally and professionally invested in the re-emergence of regenerative medicine and broadening access to revolutionary therapies. 
            Treatments like homeopathy operate on the belief that the body can heal via plants and minerals to stimulate the healing process.
          </p>
        </div>
       
       
      </div>
    </div>
  );
};

export default WellnessInro;
