import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import Fenhindi from './fenhindi';
import Fenfrance from './fenfr';
import { useState } from "react";
import Fendutch from './fendutch';
import IVERMECTINCANCER from '../../images copy/IVERMECTINCANCER.jpeg';
import hhoxsey from '../../images copy/IMG_6431.jpeg';
import Collapsible from 'react-collapsible';
import essence from "../../images copy/essence.png";
import fenben from '../../images copy/Fenbendazole.png';
import fenben2 from '../../images copy/fenben2.png';
import fenben3 from '../../images copy/fenben3.png';
import fenben4 from '../../images copy/fenben4.png';
import fenben5 from '../../images copy/fenbenz5.png';
import fenben6 from '../../images copy/fenben6.png';
import fenben7 from '../../images copy/fenben7.png';
import fenben8 from '../../images copy/fenbenvb17.png';
import fenben9 from '../../images copy/fenben9.png';
import fenben10 from '../../images copy/fenchart1.png';
import fenben11 from '../../images copy/fenbenchart2.png';
import fenben12 from '../../images copy/fenben11.png';
import fenben13 from '../../images copy/fenben13.png';
import spanish from '../../images copy/IMG_6945.jpeg';
import spanish2 from '../../images copy/IMG_6946.jpeg';

import spanish3 from '../../images copy/IMG_6947.jpeg';

import spanish4 from '../../images copy/IMG_6948.jpeg';

import spanish5 from '../../images copy/IMG_6949.jpeg';

import spanish6 from '../../images copy/IMG_6950.jpeg';

import spanish7 from '../../images copy/IMG_6951.jpeg';

import spanish8 from '../../images copy/IMG_6952.jpeg';

import spanish9 from '../../images copy/IMG_6953.jpeg';

import spanish10 from '../../images copy/IMG_6954.jpeg';

import spanish11 from '../../images copy/IMG_6955.jpeg';

import spanish12 from '../../images copy/IMG_6956.jpeg';
import {Button, Modal} from 'react-bootstrap';
import spanish13 from '../../images copy/IMG_6957.jpeg';

import "../../App.css";
import { useTranslation } from "react-i18next";

const Fen = () => {
const {t} = useTranslation('common');
  const [showModal, setShowModal] = useState(false);

  return (
              <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t("Fenbendazole for Humans")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Documenting the efficacy of fenbendazole for humans. Take a journey into the world of cancer research, in the pursuit of a cure.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center',  fontFamily: 'sans-serif' }}>{t("Fenbendazole for Humans with Cancer")}
      </h1>
      <div className='container'>
    <iframe width='100%' height='700px'
 src="https://www.youtube.com/embed/NWIDl_FOexQ?si=aD9fp4XfGQtmlUoq"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

      </div>
                    <Button className="custom-btn" onClick={() => setShowModal(true)}>
                  {t("Transcript")}
                </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered className="custom-modal">
              <Modal.Header closeButton>
                <Modal.Title>{t("Transcript")}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{t("fenbendazole")}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  {t("Close")}
                </Button>
              </Modal.Footer>
            </Modal>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='container'>
          <p>
          <img className='gridimag' src={fenben} alt="logo" />
        </p>
        <p>
        <img className='gridimag' src={fenben2} alt="logo" />
           </p>
           <p>
           <img className='gridimag' src={fenben3} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={fenben4} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={fenben5} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben6} alt="pic" />
           </p>
           <p>
            <img className='gridimag' src={fenben8} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben7} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben9} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben10} alt="pic" />
           </p>
            <p>
                <img className='gridimag' src={fenben11} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={fenben12} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={fenben13} alt="pic" />
            </p>
           <p>
            <a href="https://ar.iiarjournals.org/content/44/9/3725#:~:text=Fenbendazole%20has%20been%20found%20to,primarily%20by%20disrupting%20energy%20metabolism.">{t('Source 1')}</a>   
           </p>
           <p>
           <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9437363/">{t('Source 2')}</a>
           </p>
          </div>
      </div>
      <div className="container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Fenbendazole in Spanish</th>}>
                      <div className='container'>
          <p>
          <img className='gridimag' src={spanish} alt="logo" />
        </p>
           <p>
           <img className='gridimag' src={spanish2} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={spanish3} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={spanish4} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={spanish5} alt="pic" />
           </p>
           <p>
            <img className='gridimag' src={spanish6} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={spanish7} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={spanish8} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={spanish9} alt="pic" />
           </p>
            <p>
                <img className='gridimag' src={spanish10} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={spanish11} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={spanish12} alt="pic" />
            </p>
  <p>       
          <img className='gridimag' src={spanish13} alt="pic" />
            </p>
            </div>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="container">
  <table className="collapsibles-table">
    <tbody>
               <Collapsible trigger={<div className="collapsible-trigger">फेनबेंडाज़ोल हिंदी में</div>}>
            <Fenhindi />
          </Collapsible>
    </tbody>
  </table>
</div>
 <div className="container">
  <table className="collapsibles-table">
    <tbody>
               <Collapsible trigger={<div className="collapsible-trigger">Fenbendazole en français</div>}>
            <Fenfrance />
          </Collapsible>
    </tbody>
  </table>
</div>
<div className="container">
  <table className="collapsibles-table">
    <tbody>
               <Collapsible trigger={<div className="collapsible-trigger">Fenbendazol in het Nederlands</div>}>
            <Fendutch />
          </Collapsible>
    </tbody>
  </table>
</div>
       <div className="container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">{t('Additional Reources')}</th>}>
               <a href="/fenbendazole"> <img className="gridimag" src={fenben} alt='' /> </a>
               <a href="/ivermectin"> <img className="gridimag" src={IVERMECTINCANCER} alt="img" /> </a>
              <a href="/hoxsey"> <img className="gridimag" src={hhoxsey} alt='' /> </a>
              <a href="/funcmed"> <img src={essence} alt="img" /> </a>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <Footer />
    </div>
  );
};

export default Fen; // Default export


