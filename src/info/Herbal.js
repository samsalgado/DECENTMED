import React from 'react'
import "./homeo.css";
import './Info.css';
import { Button } from 'react-bootstrap';
import homeo from '../images copy/meme3.png';
import { useTranslation } from 'react-i18next';
const Herbal = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
            <h1 className='title'>{t('Herbal Medicine')}</h1>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '21px 0'
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
         <p className='pr'>{t("The body has an immense regenerative potential to heal itself. Herbal medicine is the real traditional medicine, every single pharmaceutical drug has a plant root. This page is my encyclopedia of herbal medicine, highlighting herbal plants from around the world. For the last few months, I traveled throughout North America, South America, and Central America to document these plants. Explore our encyclopedia of herbal medicine, and learn how these plants can help your body heal itself. Explore our medicinal herbal recipes​ from around the world below.")}</p>
         <Button variant="primary" href="https://themerlingroupworld.com/apoth" target="_blank">
          {t("Explore Apothecary")}
        </Button>
        </div>
        <iframe
  src="https://drive.google.com/file/d/1qbnYhsRJpEOCuK2L-MdyjV-wgMp8UAJe/preview"
  width="100%"
  title='Herbal Homepage'
  allow="autoplay"
  frameBorder="0"
  allowFullScreen
  style={{
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: 'none',
    overflow: 'hidden',
    maxWidth: '400px',
    width: '100%',
    height:"355px"
  }}
></iframe>
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
    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
  </div>
  )
}

export default Herbal
