import '../App.css';
import Providers from '../info/providrs';
import Footer from '../footer';
import { useEffect } from 'react';
import "../App.css";
import { Button } from 'react-bootstrap';
import LOGO from "../images copy/dmed.png";
import plants from "../images copy/plants.png";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
export function ProviderLandingPage() {
  const {t} = useTranslation('common');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleEmailClick = () => {
    window.location.href = 'https://cal.com/merlin-ayx5zg/30min'
  } 
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Provider Sign Up')}</title>
        <meta property="og:title" content={t("Provider Landing Page")} />                
        <meta name="description" content={t("Provider Landing Page")} />        
        <meta
          name="description"
          content={t("Discover how Mesenchymal Stem Cell therapy supports tissue repair, reduces inflammation, and promotes natural healing for a wide range of conditions.")}        
        />      
      </Helmet>
      <div 
        style={{ 
          backgroundImage: `url(${plants})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: "120px", 
          position: "relative"
        }}
      >
        {/* Logo top-left */}
       {/* Logo top-left */}
    <img 
      src={LOGO} 
      alt="logo" 
      className="Logo"
      style={{ 
        position: "absolute", 
        top: "12px", 
        left: "8px" 
      }} 
    />
         <Button style={{ 
            position: "absolute", 
            top: "10px", 
            right: "10px", 
            color: "white", 
            fontSize: "24px", 
            cursor: "pointer" 
          }} onClick={handleEmailClick} target='_blank' className="custom-btn">
          {t('Book Meeting')}
        </Button>    
      </div>
      <Providers />             

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
