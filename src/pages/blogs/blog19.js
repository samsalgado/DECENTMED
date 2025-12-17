import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import lifewave from "../../images copy/lifewave.png";
import Footer from "../../footer";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
const Blog19 = () => {
  const { t } = useTranslation('common')
  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t('Applied Kinesiology with Acupuncture and Chiropractic for Autism')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the key to addressing Autism disorder. Dr. Amy Wicks and team has been in the holistic health space for over a decade. This article explains the guide to addressing Autism using a multiplicity of modalities." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t('Applied Kinesiology with Acupuncture and Chiropractic for Autism')}
        </h1>
        <a href="https://www.lifewave.com/awicks">
        <img className='gridimag' src={lifewave} alt="logo" />
        </a>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>
          <p>
            {t(`Holistic Medicine is comprehensive; it makes sense that providers work with a variety of modalities. Dr. Sebi and other herbalists believe that about 80% of disease can be attributed to diet and lifestyle. The Center for Natural Health in St Louis, Missouri, utilizes a myriad of holistic modalities like homeopathy, acupuncture, chiropractic and neurology to identify various conditions that most doctors miss. Dr. Amy Wicks utilizes NAET to help with various ailments and complaints.`)}</p>
            <p>
            {t("Dr. Amy Wicks is a Board Certified Chiropractor with Acupuncture certification. On her website, she notes acupuncture as 'a type of alternative medicine that aids the body in healing'. Our bodies have an immense regenerative potential to heal ourselves. Treatments like acupuncture help the body heal itself. 'Traditional medicine' utlize pills that weaken the immune system and increases the reliance on the medication. She uses the analogy of a water hose with a kink in it, restricting its water flow. Stating: 'acupuncture is a way to undo the kink in the electrical flow of our body'. Theorizing that a blockage or imbalance to energy flow or meridians in the body cause disease.")}
          </p>
          <p>
            {t("Dr. Wicks works with challenging cases, utilizing holistic medicine for Autism. Utilizing NAET, 'a breakthrough treatment that uses chiropractic, kinesiology, and acupuncture to desensitize people to all kinds of intolerances and sensitivities' and other methodologies for Autism for over a decade. Despite the cause, children with Autism have shown decreased levels of good bacteria. Studies have shown that cranial and sacral bone adjustments via chiropractic care and Applied Kinesiology has shown significant impact in Autistic children. 'Applied Kinesiology uses the body's own information', addressing cranial faults and any subluxations (improper movement of a joint). Aiding the entire GI system to function optimally. Furthermore, she utilizes nutrition to ensure the body has what it needs.")}
          </p>
          <p>
            {t("The Center for Natural Health use chiropractic, acupuncture and Applied Kinesiology in tandem to address root causes to disease and address multisystem disorders like Autism. Using chiropractic helps with the cranial and sacral bones that do not function properly for ASD children. Finally, acupuncture can help with the nuerons improperly forming appropriate synapses. When working in conjunction, multisystem disorders can be addressed.")}
          </p>
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
  href="https://decentmed.org/ak" 
  target="_blank"
>
  {t("Learn More")}
</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog19; 
