import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefitts from "./Ben";
import { useTranslation } from "react-i18next";
const Info11 = () => {
const {t} = useTranslation('common')
    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Functional Medicine')}</h1>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
         <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className='content-wrapper' style={{
          flex: '1'
        }}>
          <p className='pr'>{t("A thorough understanding of your lifestyle and habits is the cornerstone of better health. Our Holistic Evaluation offers clients in Florida an all-encompassing assessment. We meticulously review your diet and daily routines, forming a personalized nutrition and exercise strategy. Dr. Nadia Taylor believes in holistic medicine because it helped to heal her from disease and maladies. She has recently opened up her own holistic healing center, Essence of Life, in Boynton Beach, Florida in September 2025 so that she can help others heal through some of the same modalities that helped her. Dr. Taylor is excited to be back in South Florida after years living elsewhere and is continually looking to make positive changes in the community. She has dedicated her life to a life of service for the betterment of others.")}</p>
          <Button className="custom-btn" href="https://decentmed.org/funcmed" target="_blank">{t("Book Functional Medicine Session")}</Button>  {/* Added Bootstrap Button */}
        </div>
         <div>
            <iframe class="rumble" title="Alternative Cancer Treatment" width="640" height="360" src="https://rumble.com/embed/v6zhjpy/?pub=4hu51y" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .container-bbblue {
            flex-direction: column !important;
          }
          .content-wrapper {
            text-align: center !important;
          }
          .centered-video {
            max-width: 280px !important;
            margin-top: 20px !important;
            height: 200px !important;
          }
        }
      `}</style>
        <br></br>
        <Benefitts />       
        </div>
    )
}
export default Info11;
