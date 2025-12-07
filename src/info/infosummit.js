import React from 'react';
import '../info/Info.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
//import x from "../images copy/1000.png" // Import the translation hook
const SummitInfo = () => {
  const { t } = useTranslation("common"); 
  return (
    <div className='theecontainer'>
      <div className='flex-container'>
        <div className='paragraph-container'>
          <p className='paragraph'>
            {t('Before traditional medicine, there was wellness. Our ancestors experienced vitality - living off the land. This first summit of many features providers eager to highlight their expertise and help you discover a new sense of wellness and experirence vitality.')}
          </p>
            <p className='paragraph'>
            {t('Are you a provider passionate about wellness? Sign up now to become part of a community that fosters collaboration, learning, and growth. Share your knowledge and connect with like-minded professionals in our recurring summits, where expertise and innovation come together to shape the future of holistic care.')}
          </p>
        <p className='paragraph'>
            {t('As a participant, register today to immerse yourself in a transformative experience that goes beyond traditional healthcare. Join us in these ongoing summits, where you can learn from the best, connect with top experts, and discover the tools to enhance your wellness journey. Together, we will redefine what it means to truly thrive.')}
        </p>
        </div>
      </div>
    </div>
  );
};

export default SummitInfo;
