import React from 'react';
import { useEffect } from 'react';
import '../info/Info.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import x from "../images copy/1000.png" // Import the translation hook
const SummitInfo = () => {
  const { t } = useTranslation("common"); 
  useEffect(() => {
                AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
              }, []);
  return (
    <div data-aos="slide-right" className='theecontainer'>
      <div data-aos="slide-right" className='flex-container'>
        <div  data-aos="slide-left"className='paragraph-container'>
          <p className='paragraph'>
            {t('Before traditional medicine, there was wellness. Our ancestors experienced vitality - living off the land. This first summit of many features providers eager to highlight their expertise and help you discover a new sense of wellness and experirence vitality.')}
          </p>
            <p className='paragraph'>
            {t('May is Mental Health Awareness month, learn about how holistic medicine helps with mental health.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummitInfo;
