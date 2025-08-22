import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import batana from '../../images copy/hepB.png';
import "../../App.css";
import { useTranslation } from "react-i18next";
const Blog8 = () => {
const {t} = useTranslation('common')
  return (
    <>
      <Helmet>
        <title>{t('Hepatitis B: Herbal Medicine On Hep B')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hepatitis B: Herbal Medicine On Hep B. Currently, there is no cure to Hepatitis B, let's explore some plants that help in fighting hep B." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}> {t('Hepatitis B: Herbal Medicine On Hep B')}</h1>
      <a href='/apoth'>
    <figure>
    <img className='gridimag' src={batana} alt="logo" />
          <figcaption>{t('Visit Apothecary')}</figcaption>
        </figure>
      </a>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
          <p>
          {t('Hepatitis B is a liver infection from HBV transmitted through another infected person’s blood, semen, or other fluids. Hepatitis B affects the liver and is more toxic in children than adults with the disease. The 5 major functions of the liver are supporting the body’s metabolism, immunity, digestion, detoxification, and vitamin storage. (Disclaimer not medical advice) There is currently no cure for hep B. This article will explore plants with potential benefits for fighting hepatitis B.')}
        </p>
        <p>
        <span style={{fontStyle:'italic'}}>{t('Portulaca grandiflora')}</span> {t('is a beautiful pink flower from South America (Brazil). Aside from its appearance, the flower has potential benefits for your health. Herbalists believe one must pair a diet shift and detox the body with natural plants before healing begins. Portulaca grandiflora (rose moss) is')}<a href="https://pfaf.org/USER/Plant.aspx?LatinName=Portulaca+grandiflora">{t('depurative')}</a>{t(', meaning the plant is a detoxifier. Dr. Max Gerson believed that fighting tumors started with a green diet and')}<a href="https://gerson.org/coffee-enema-8-things-you-need-to-know/?gad_source=1&gclid=Cj0KCQjwrKu2BhDkARIsAD7GBou-t43MHZkA6SM-wjvUkmRmEzwQmXIXOxDcZGRzQpRiFIJbC_TWLgYaAgZtEALw_wcB">{t('coffee enemas')}</a> {t('to detoxify the liver. A similar process is applied to hepatitis. The detoxifying properties in ross moss are putative immunostimulatory in fighting hepatitis B.')}<a href="https://www.sciencedirect.com/science/article/abs/pii/S0378874103004057#:~:text=Portulaca%20grandiflora%20was%20reported%20for,et%20al.%2C%201990).">{t('Studies')}</a> {t('from 1990, indicate the plant has an “Antimutagenic effect on the mutation induced by aflatoxin B1 and cyclophosphamide in mice”.')}</p>
        <p>
        <span style={{fontStyle:'italic'}}>{t('Cordydalis yanhusuo')}</span> {t('is a flower with a fuchsia appearance from Asia, specifically China. This plant has been regarded as a remedy to')}<a href="https://pfaf.org/USER/Plant.aspx?LatinName=Corydalis+yanhusuo">{t('‘invigorate the blood’')}</a> {t('for centuries throughout Asia. Blood passing through the stomach and intestines is processed by the liver, an infected liver cannot metabolize nutrients or break down vitamins efficiently. Moreover, Corydalis yanhusuo helps with abdominal pain due to its alkaloid properties. Generally, the plant has shown effects in helping with pain. Its major medicinal properties are: antitussive cardiotonic, hypotensive and anticancerous.')}</p>
        <p>
        <span style={{fontStyle:'italic'}}>{t('Blighia sapida')}</span> {t('is a plant stemming from West Africa, specifically Cote d’Ivoire, eaten when fully ripe. This plant is primarily used in treating')}<a href="https://pfaf.org/User/Plant.aspx?LatinName=Blighia+sapida">{t('yellow fever, epilepsy and edema.')}</a>  {t('A function of the liver is digestion. This plant is stomachic, meaning it is helpful in digestion. A side effect of hep B is nausea and vomiting, the “ground-up bark” has been used to assist with nausea. Regarding hep B, “the twigs of the plant help with hepatitis, cirrhosis and amygdalitis”. Generally, the plant has many benefits for health, the unripe fruit can cause certain diseases.')}</p>
           <p>
           {t('Herbalists operate on the principle that disease stems from deficiency and nutrition. The application of these plants correlates with the functionality of the infected organ. The liver is in charge of detoxification, if the body cannot detoxify toxins then toxins build up in the body — Portulaca grandiflora fights toxins and fights mutation of tumors. Cordydalis yanhusuo cleans the blood, a vital function of the liver is cleaning and filtering blood. Finally, Blighia sapida aids in digestion, another function of the liver. Holistic medicine looks at medicine as interconnected, integrating these plants (not medical advice) helps the liver.')}</p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog8; // Default export
