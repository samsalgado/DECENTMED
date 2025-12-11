import React, {useEffect, useCallback} from 'react';
import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import Ivermectinedutch from './dutch';
import Ivermectinhindi from './hindi';
import Ivermectinfrench from './french';
import spanish from '../../images copy/IMG_6958.jpeg';
import spanish2 from '../../images copy/IMG_6959.jpeg';
import spanish3 from '../../images copy/IMG_6960.jpeg';
import spanish4 from '../../images copy/IMG_6962.jpeg';
import spanish5 from '../../images copy/IMG_6963.jpeg';
import spanish6 from '../../images copy/IMG_6964.jpeg';
import spanish7 from '../../images copy/IMG_6965.jpeg';
import spanish8 from '../../images copy/IMG_6966.jpeg';
import spanish9 from '../../images copy/IMG_6967.jpeg';
import spanish10 from '../../images copy/IMG_6968.jpeg';
import spanish11 from '../../images copy/IMG_6969.jpeg';
import spanish12 from '../../images copy/IMG_6970.jpeg';
import spanish13 from '../../images copy/IMG_6971.jpeg';
import spanish14 from '../../images copy/IMG_6972.jpeg';
import spanish15 from '../../images copy/IMG_6973.jpeg';
import spanish16 from '../../images copy/IMG_6974.jpeg';
import spanish17 from '../../images copy/IMG_6975.jpeg';
import hhoxsey from '../../images copy/IMG_6431.jpeg';
import fenbenn from '../../images copy/Fenbendazole.png';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import { useState } from "react";
import {Button, Modal} from 'react-bootstrap';
import essence from "../../images copy/essence.png";
import Collapsible from 'react-collapsible';
import fenben from '../../images copy/ivermectin1.jpeg';
import fenben2 from '../../images copy/chemistry.jpeg';
import fenben3 from '../../images copy/ivermectin2.jpeg';
import fenben4 from '../../images copy/ivermectin3.jpeg';
import fenben5 from '../../images copy/ivermectin4.jpeg';
import fenben6 from '../../images copy/ivermectin5.jpeg';
import fenben7 from '../../images copy/ivermectin6.jpeg';
import fenben8 from '../../images copy/ivermectin7.jpeg';
import fenben9 from '../../images copy/ivermectin8.jpeg';
import fenben10 from '../../images copy/ivermectin9.jpeg';
import fenben11 from '../../images copy/ivermectin10.jpeg';
import fenben12 from '../../images copy/ivermectin11.jpeg';
import fenben13 from '../../images copy/ivermectin12.jpeg';
import ivermectin14 from '../../images copy/ivermectin13.jpeg';
import ivermectin15 from '../../images copy/ivermectin15.jpeg';
import ivermectin16 from '../../images copy/ivermectin16.jpeg';
import ivermectin17 from '../../images copy/ivermectin17.jpeg';
import "../../App.css";
import { useTranslation } from "react-i18next";
const Ivermectin = () => {
const {t} = useTranslation('common');
  const [showModal, setShowModal] = useState(false);

    const publishToNostr = useCallback(async () => {
      const nsec = process.env.REACT_APP_NSEC;
        if (!nsec) {
        console.error('Missing nsec key');
        return;
      }
  
      try {
        const { type, data: sk } = nip19.decode(nsec);
        if (type !== 'nsec') {
          console.error('Invalid nsec format');
          return;
        }
        const pubkey=getPublicKey(sk);
      const content = `  
      Estudios de caso de ivermectina:
        https://themerlingroupworld.com/static/media/IMG_6958.1b4b69b80399123fdf45.jpeg
        https://themerlingroupworld.com/static/media/IMG_6959.eeb86e4c9dcf5b7513ed.jpeg
        https://themerlingroupworld.com/static/media/IMG_6960.3cf0ef6404d60d98a6f1.jpeg
        https://themerlingroupworld.com/static/media/IMG_6962.01ae6da054d5cb62d3c8.jpeg
        https://themerlingroupworld.com/static/media/IMG_6963.41b9bc16852cfcf985d6.jpeg
        https://themerlingroupworld.com/static/media/IMG_6964.910441d7bcae6741a769.jpeg
        https://themerlingroupworld.com/static/media/IMG_6965.72a397eb35e89b3b0c5a.jpeg
        https://themerlingroupworld.com/static/media/IMG_6966.0fda165cae7aa188f191.jpeg
        https://themerlingroupworld.com/static/media/IMG_6967.170d7a61144a2108eae2.jpeg
        https://themerlingroupworld.com/static/media/IMG_6967.170d7a61144a2108eae2.jpeg
        https://themerlingroupworld.com/static/media/IMG_6968.dc35c1f078c94a423590.jpeg
        https://themerlingroupworld.com/static/media/IMG_6969.4dabe6955a8df094c65a.jpeg
        https://themerlingroupworld.com/static/media/IMG_6970.e012bbc4d427a676a25e.jpeg
        https://themerlingroupworld.com/static/media/IMG_6971.b0a703210acdec4c2250.jpeg
        https://themerlingroupworld.com/static/media/IMG_6972.fbc24ad601736c5d5ce5.jpeg
        https://themerlingroupworld.com/static/media/IMG_6973.f083f33fe51b64acefae.jpeg
        https://themerlingroupworld.com/static/media/IMG_6974.99220964f881f8809caf.jpeg
        https://themerlingroupworld.com/static/media/IMG_6975.b67271b5980bd67a61c5.jpeg
      `;
        const event = {
          kind: 1,
          created_at: Math.floor(Date.now() / 1000),
          tags: [
            ["t", "health"],
            ["t", "cancer"],
            ["t", "spanish"],
            ["t", "ivermectina"]
          ],              
            content,
          pubkey,
        };
        const signedEvent = finalizeEvent(event, sk);
        const pool = new SimplePool();
        const relays = ['wss://relay.damus.io','wss://nos.lol'];
        await Promise.all(
          relays.map(async (relay) => {
            try {
              let r = await pool.ensureRelay(relay);
              await r.publish(signedEvent);
              console.log(`Published to ${relay}`);
            } catch (err) {
              console.error(`Failed to publish to ${relay}:`, err);
            }
          })
        );
  
        console.log('Published to Nostr!');
        pool.close(relays); // Clean up connections
      } catch (error) {
        console.error('Error publishing to Nostr:', error);
      }
    }, []);
    useEffect (() => {
      publishToNostr();
    }, [publishToNostr]);
  
  return (
    <>
      <Helmet>
        <title>{t("Ivermectin for Cancer")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Documenting the efficacy of Ivermectin for Cancer in humans. Take a journey into the world of cancer research, in the pursuit of a cure.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t("Ivermectin for Cancer in Humans")}
      </h1>
      <div className='container'>
<iframe width="100%" height="600px" src="https://drive.google.com/file/d/1zg7C8tpSuu_wKKazM_77ko9ucn_OicAb/preview" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
      <Button className="custom-btn" onClick={() => setShowModal(true)}>
                  {t("Transcript")}
                </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered className="custom-modal">
              <Modal.Header closeButton>
                <Modal.Title>{t("Transcript")}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{t("ivermectin")}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  {t("Close")}
                </Button>
              </Modal.Footer>
            </Modal>
           
      </div>
      
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
                <img className='gridimag' src={ivermectin14} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin15} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin16} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin17} alt="pic" />
            </p>
           <p>
            <a href="https://go.drugbank.com/drugs/DB00602">{t('Source 1')}</a>   
           </p>
           <p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7505114/">{t('Source 2')}</a>   
           </p>
           <p>
            <a href="https://www.cancer.gov/research/participate/clinical-trials-search/v?id=NCI-2022-02421#:~:text=Ivermectin%20may%20help%20block%20the,with%20triple%20negative%20breast%20cancer.">{t('Source 3')}</a>   
           </p>
           <p>
           <a href="https://www.sciencedirect.com/science/article/pii/S1043661820315152">{t('Source 4')}</a>
           </p>
          </div>
      </div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Ivermectina en Español</th>}>
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

  <p>
                <img className='gridimag' src={spanish14} alt="pic" />
            </p>

  <p>
                <img className='gridimag' src={spanish15} alt="pic" />
            </p>

  <p>
                <img className='gridimag' src={spanish16} alt="pic" />
            </p>

  <p>
                <img className='gridimag' src={spanish17} alt="pic" />
            </p>
</div>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div>
       <table className="collapsibles-table">
          <tbody> 
      <Collapsible trigger={<div className="collapsible-trigger">Ivermectine in het Nederlands</div>}>
  <Ivermectinedutch />
</Collapsible>
</tbody>
</table>
</div>
<div>
  <table className="collapsibles-table">
          <tbody> 
      <Collapsible trigger={<div className="collapsible-trigger">आईवर्मेक्टिन हिंदी में</div>}>
  <Ivermectinhindi />
</Collapsible>
</tbody>
</table>
</div>
  <div>
       <table className="collapsibles-table">
          <tbody> 
      <Collapsible trigger={<div className="collapsible-trigger">Ivermectine en français</div>}>
  <Ivermectinfrench />
</Collapsible>
</tbody>
</table>
</div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">{t('Cancer Cures')}</th>}>
               <a href="/fenbendazole"> <img src={fenbenn} alt='' /> </a>
              <a href="/hoxsey"> <img src={hhoxsey} alt='' /> </a>
              <a href="/funcmed"> <img src={essence} alt="img" /> </a>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <Footer />
    </>
  );
};

export default Ivermectin; // Default export


