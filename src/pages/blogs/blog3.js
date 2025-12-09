import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
const Blog3 = () => {
  const {t} = useTranslation('common')

  return (
    <>
      <Helmet>
        <title>{t('Detox Cleanse')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dry needling vs acupuncture: Acupuncture is a technique for balancing the flow of energy, or life force flowing through pathways in your body. Dry needling serves a purpose for musculoskeletal disorders and diseases." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginTop: '110px', fontFamily: 'sans-serif' }}>{t('Detox and Cleanse Kit')}</h1>
    <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
  <iframe
    className="rumble"
    width="640"
    height="360"
    src="https://rumble.com/embed/v6c31ja/?pub=4hu51y"
    frameBorder="0"
    allowFullScreen
    title="Dr. Sebi and Max Gerson Dietary Protocol Video"
    style={{ maxWidth: '100%', height: 'auto' }} // Maintain aspect ratio
  />
</div>

      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
          <p>
    {t('A detox cleanses the body. A water detox cleanse can flush out the bodys toxins. The 3 day cleanse detox will restore your cells to ketosis. When detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. Cancer treatments globally like the')} <a href='https://gerson.org/'>Gerson Therapy</a> and<a href="https://drsebiscellfood.com/">Dr. Sebi </a>{t('diet use forms of Detoxification to cleanse the body from toxins that cause cancer.')}
        </p>
            <p>
  {t('Most doctors and nurses have no clue that the Flexner Report outlines the medicine they practice. The Flexner Report is the blueprint for medicine. Throughout the 1900s, small groups of doctors used detoxifications and juice fasting to fight tumors in the body. Doctors like William Koch and Max Gerson are forgotten - two men who used practices from around the world and attacked in the US. Although the food and minerals are depleted and toxic, detoxes assist in restoring the body to its optimal state. Dr. Gerson prescribed coffee enemas to rid the body of the toxins trapped in the body. The green diet plan and coffee enemas prompt the liver to open the bile ducts and rid the body of tumors and toxins. Gersons diet protocol is not recommended in the US. Furthermore, a 1 to 3 day cleanse detox helps to fight tumors in the body.')}
  </p>
  <p>
{t('Dr. Sebi found that disease does not exist in a non-acidic environment. Due to the foods we consume, non-alkaline foods guide the body toward acidity. Dr. Sebi, using plants, vegetables, and detoxifications - cured over 500 cancer cases. Dr. Sebi, like other herbalists, was heavily maligned for his work with detoxification. Dr. Andrew Ivys medical practice focused on using herbs and detoxification to rid the body of tumors. "Optimal health requires the bodys biological systems must be in homeostasis with all environmental stressors". Detoxification is a "reset button" enabling the body to reset and begin the healing process.')}
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
        href="https://decentmed.org/detox" 
        target="_blank"
      >
        {t("Try Detox")}
      </Button>
      </div>
      <Footer />
    </>
  );
};

export default Blog3; // Default export
