import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { useTranslation } from "react-i18next";
import owl from "../../images copy/Screenshot 2026-08-29 at 6.34.56 PM.png";
import { Button } from "react-bootstrap";
const Owl2 = () => {
  const {t} = useTranslation('common')
  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('The (UN)Importance of Heredity, Bloodlines & DNA')}</title>
        <meta property="og:title" content={t("Psychic Protection")} />                
        <meta name="description" content={t("Psychic Protection")} />        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" 
        content={t("Psychic Protection: An Ounce Of Prevention By Samuel Abrams: Discover the ultimate guide to understanding psychic protection. The technique most commonly found in the literature is surrounding yourself with the white (or gold) light of divine protection.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
    <div className="container-blue">
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>{t('The (UN) Importance of Heredity, Bloodlines & DNA By Samuel Abrams')}</h1>

      </div>
      <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <a href="https://oldwiseowladvisor.com/#contactus"><img className='gridimag' src={owl} alt="Psychic Protection" /></a>
</div>
      <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
          <p>
    {t('I have seen a lot on Facebook and Reddit about this. First a true story. Back in the seventies, a question arose among Native Americans about who should be taught Native American ways. Many felt that only those of Native American blood should be taught such things and no outsiders should be taught them. A meeting of elders was called and many showed up and 4 medicine bundles of major tribes were also present, marking just how important this issue was.')}</p>
   <p>
  {t('A Hopi elder stood and said that many of those who were Indians by blood today were the reincarnations of the Calvary soldiers who had killed Indians in the past. This explains why so many have problems with drugs, drink and following native ways. Those outsiders, interested in native ways are often the reincarnations of Indians who had been slaughtered in the past and who need to be taught.')}
  </p>
   <p>
  {t('This was the defining moment at this meeting. It shows how unimportant such things as heredity and physical form are on a spiritual level. Even DNA is only a map of potentials. All is truly controlled by the mind and by Karma. Cultural influences and physical forms are the results of Karma and the Mind, not the cause. Are you born a Witch? It depends not on your heredity or family but on your Karma which controls where you are born and what abilities you are born with. Everyone has the potential to do magic, to be a witch (or something similar wizard, mage, sorcerer, enchantress) and many do without any kind of special heredity or family.')}
  </p>
  <p>
{t('A list of other posts written by me is available on request to Oldwiseowladvisor@gmail.com')}
</p>
</div>
               <Button 
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
        }}
        className="custom-btn"
        href="https://oldwiseowladvisor.com/#contactus" 
        target="_blank"
      >
        {t("Connect with Samuel")}
      </Button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Owl2; // Default export
