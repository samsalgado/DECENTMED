import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; // Adjusted path for CSS
import { FaChevronDown } from 'react-icons/fa'; // Importing icon
import ryantannehill from '../images copy/ryantannehillgraphic.png';
import jamaalcharles from '../images copy/JamaalCharles.png';
import whystemcell from '../images copy/whystemcell.png';
import whatisastemcell from '../images copy/what-is-a-stem-cell-illustration.jpg';
import stembenefits from '../images copy/stembenefits.png';
import './Info.css';
import whystemcellspanish from '../images copy/IMG_9256.jpeg';
import { Button } from 'react-bootstrap';
import whystemcelldutch from '../images copy/IMG_9257.jpeg';

import whystemcellfrench from '../images copy/IMG_9258.jpeg';

import whystemcellhindi from '../images copy/IMG_9259.jpeg';

import benefitsofstemcellhindi from '../images copy/IMG_9260.jpeg';

import benefitsofstemcellspanish from '../images copy/IMG_9261.jpeg';

import benefitsofstemcellfrench from '../images copy/IMG_9293.jpeg';
import benefitsofstemcelldutch from '../images copy/IMG_9294.jpeg';

import bonemarrowspanish from '../images copy/IMG_9262.png';

import bonemarrowfrench from '../images copy/IMG_9263.png';

import bonemarrowhindi from '../images copy/IMG_9264.jpeg';

import bonemarrowdutch from '../images copy/IMG_9265.jpeg';

import stemcelltranslated from '../images copy/IMG_9266.jpeg';
import stemtype from '../images copy/stem-type.jpg';
import graphic from '../images copy/Pink-Illustrative-Simple-Healthy-Habits-Infographic.jpeg';
import { useTranslation } from 'react-i18next';

const Stem = () => {
  const { t } = useTranslation('common')

  return (
    <div className='container mobile-optimized'>
      <h1 className='title'>{t('Stem Cell Therapy')}</h1>
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
           <p className='pr'>{t("Stem cell therapy is a form of regenerative medicine that uses stem cells to repair or replace damaged tissues and cells in the body. Stem cell therapy for knees is my first experience with using stem cells for regenerative medicine. Many athletes like Ryan Tannehill, Kobe Bryant, Jamaal Charles, LaRon Landry, David Njoku, Chris Johnson, Peyton Manning and more have used mesenchymal stem cells for their recovery. Peyton Manning had an NFL MVP season after using stem cells for his neck injury recovery. Ryan Tannehill extended his career after using stem cell therapy for knee (ACL) tears. Mesenchymal stem cells are multi-potent - stemming from various tissues in the body. MSCs are primarily found in Adipose tissue, Umbical chords, Bone Marrow and even the placenta.")}</p>
            <p className='pr'>{t("An interesting development in the stem cell therapy community is the use of stem cells for neurodegenerative diseases like Autism. Although the stem cell cost is expensive, the benefits of treating Autism and other neurodegenerative diseases are revolutionary. Our platform not only posts case studies to address limited long-term data concerns. Finally, we provide reimbursements from our apothecary to make the stem cell therapy cost less expensive.")}</p>
            <Button className="custom-btn" href="https://themerlingroupworld.com/stemcellproviders" target="_blank">
                          {t("Find Providers")}
            </Button>
      </div>
        <iframe
          src="https://drive.google.com/file/d/1ECrjiFNkxNs2RU1EtobXh3AbWFkrmAut/preview"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
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
      {/* Flex container for equal width collapsibles */}
      <div className="collapsible-section">
        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Stem Cell Therapy Explained")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img src={stembenefits} className="gridimag" alt="Stem cell benefits" />
                <img className='gridimag' src={whatisastemcell} alt='What is a stem cell' />
                <img className='gridimag' src={stemtype} alt='Stem cell types' />
                <img className='gridimag' src={whystemcell} alt='Why stem cell' />
                <img className='gridimag' src={stemcelltranslated} alt='Why stem cell' />
                <img className='gridimag' src={whystemcellspanish} alt='Why stem cell' />
                <img className='gridimag' src={benefitsofstemcellspanish} alt='Why stem cell' />
                <img className='gridimag' src={whystemcellhindi} alt='Why stem cell' />
                 <img className='gridimag' src={benefitsofstemcellhindi} alt='Why stem cell' />
                <img className='gridimag' src={whystemcelldutch} alt='Why stem cell' />
                <img className='gridimag' src={benefitsofstemcelldutch} alt='Why stem cell' />
                <img className='gridimag' src={whystemcellfrench} alt='Why stem cell' />
                <img className='gridimag' src={benefitsofstemcellfrench} alt='Why stem cell' />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>

        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Benefits of Bone Marrow Stem Cells")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img className="gridimag" src={bonemarrowspanish} alt="Bone Marrow Stem Cell Benefits" />
                <img className="gridimag" src={graphic} alt="Bone Marrow Stem Cell Benefits" />
                <img className="gridimag" src={bonemarrowfrench} alt="Bone Marrow Stem Cell Benefits" />
                <img className="gridimag" src={bonemarrowhindi} alt="Bone Marrow Stem Cell Benefits" />
                <img className="gridimag" src={bonemarrowdutch} alt="Bone Marrow Stem Cell Benefits" />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>

        <div className="title-container">
          <table className="collapsibles-table">
            <tbody>
              <Collapsible 
                trigger={
                  <th className="collapsible-trigger">
                    {t("Stem Cell Therapy NFL Case Studies")} <FaChevronDown className="icon" />
                  </th>
                }
              >
                <img alt='' />
                <img src={ryantannehill} className="gridimag" alt="Ryan Tannehill" />
                <img src={jamaalcharles} className="gridimag" alt="Jamaal Charles" />
                <img alt='' />
              </Collapsible>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stem;
