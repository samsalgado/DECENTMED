import React from 'react';
import Components from './components';
import './Info7.css';
import Services from './services';
import { useTranslation } from 'react-i18next';

const Info7 = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container'>
      
      <div className="title-container">
   
      </div>
      <div className="collapsible">
        <h1 className="text-center mb-4">{t('Components')}</h1>        
        <Components />
      </div>
      <br />
      <div className="collapsible">
        <h1 className="text-center mb-4">{t('Additional Services')}</h1>        
        <Services />
      </div>
      <div className='parc'>
        <h2 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif'}}>{t('Attention Holistic Practitioners')}</h2>
        <p>
          {t('Welcome to Decent Med: the showcase of Functional Medicine and its revolutionary impact on the lives of billions. Moreover, notice that some of the pages on the website are not robust with information - this is by design. This platform is your canvas. I want beneficial and relevant information from practitioners experienced in the field. This platform gives industry experts a voice to patients globally and grows their practice in a new manner.')}
        </p>
        <p>
          {t('This platform educates on wellness, providing you access to more patients worldwide. We use innovative tactics to bring more patients to your site. Decent Med is a global Telehealth Directory. Furthermore, this is the new standard in healthcare post-pandemic. Telehealth is an innovative way to connect patients with providers no matter where they are. Healthcare Finance says, “Telehealth expected to drive $29 billion in healthcare services in 2020”(Healthcare Finance). This platform is dynamic and evolves to grow the market share of alternative medicine worldwide.')}
        </p>
      </div>
    </div>
  );
}

export default Info7;
