import React from 'react';
import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import cancerimg from "../../images copy/catcow.png";
import lying from "../../images copy/lying.png";
import seatedfold from "../../images copy/seatedforwardfold.png";
import needle from "../../images copy/needle.jpeg";
import standing from "../../images copy/standing.png";
import "../../App.css";
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
const Blog18 = () => {
  const { t } = useTranslation('common');
  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Top 5 Stretches for Back Pain in Scottsdale')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Discover five powerful stretches to ease back pain, recommended by Scottsdale health professionals. Improve mobility, reduce tension, and feel better naturally." />      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t('Top 5 Stretches for Back Pain in Scottsdale')}</h1>
      </div>
      <div style={{ padding: '0px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>
        <a href="https://decentmed.org/chiropractic">
        <img className='gridimag' src={cancerimg} alt="logo" />
        </a>
        <p> 
          {t("Tuesday, July 8, 2025, is expected to be under a severe weather advisory. Severe hot weather causes dehydration and intensifies existing back pain. Let's outline the top five stretches for back pain in Scottsdale.")}
          </p>
          <p>
            {t(`Merge stretching with your chiropractic adjustments to beat the heat. The Cat-Cow Stretch helps with spinal mobility by releasing tension from stiffness or sitting. The pose requires a combination of arching your back (cow) and tucking the chin and pelvis (cat).`)}</p>
            <img className='gridimag' src={seatedfold} alt="logo" />
         <p>
            {t(`The Seated Forward Fold help with the hamstrings and lower back. In heat, the hamstrings can tighten up during extensive walking or standing. The pose is like touching your toes while seated. The difference is that you are leaning forward with your stretch while touching the soles of your feet. Combining stretching with your adjustment loosens up your body that tightens in the heat.`)}
            <img className='gridimag' src={needle} alt="logo" />
          </p>
          <p>{t(`The Thread-the-Needle Stretch helps tight shoulders and upper back. This stretch helps to loosen tight traps and mid-back. The position requires you to slide your right arm under the left with shoulders/head rested on the floor.`)}</p>
          <p>
          <img className='gridimag' src={lying} alt="logo" />
            {t(`Next, the Lying Hip Flexor Stretch works to counteract sitting and heat stiffness. We live a sedentary lifestyle, an estimated 22.1% of workers in the United States work indoors (BLS). One negative, tighter hip flexors from extensive sitting. The severe temperatures of Scottsdale exascerbate the situation even more.`)}
          </p>
          <img className='gridimag' src={standing} alt="logo" />
          <p> {t('Finally, is the Standing Side Stretch for the ribs and cooling. This stretch opens the ribs via deep breathing to cool down the nervous system. This stretch requires you to stand and stretch to each side. This stretch works best in conjunction with slow and rhythmic breathing. In a world of sedentary, stretching is paramount to beat the heat. Yoga and stretching have a myriad of benefits for the body, especially during Arizona or Florida summers. Note, chiropractic adjustments aid the process of loosening the body. If you are in Scottsdale, Arizona visit a chiropractor that can assist you.')} 
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
  href="https://drkhayami.com/" 
  target="_blank"
>
  {t("Visit Better Health Solutions")}
</Button>
      </div>
      <Footer />
    </div>
  );
};
export default Blog18; 

