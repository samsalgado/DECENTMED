import React, {useEffect, useCallback} from 'react';
import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import Hoxseyfr from './hoxseyfr';
import Hoxseyhindi from './hoxseyhindi';
import Hoxseydutch from './hoxseydutch';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish from '../../images copy/IMG_6976.jpeg';
import spanish2 from '../../images copy/IMG_6977.jpeg';
import spanish3 from '../../images copy/IMG_6978.jpeg';
import spanish4 from '../../images copy/IMG_6979.jpeg';
import spanish5 from '../../images copy/IMG_6980.jpeg';
import spanish6 from '../../images copy/IMG_6981.jpeg';
import spanish7 from '../../images copy/IMG_6982.jpeg';
import spanish8 from '../../images copy/IMG_6983.jpeg';
import spanish9 from '../../images copy/IMG_6984.jpeg';
import spanish10 from '../../images copy/IMG_6985.jpeg';
import spanish11 from '../../images copy/IMG_6986.jpeg';
import spanish12 from '../../images copy/IMG_6987.jpeg';
import spanish13 from '../../images copy/IMG_6988.jpeg';
import spanish14 from '../../images copy/IMG_6989.jpeg';
import spanish15 from '../../images copy/IMG_6990.jpeg';
import spanish16 from '../../images copy/IMG_6991.jpeg';
import spanish17 from '../../images copy/IMG_6992.jpeg';
import spanish18 from '../../images copy/IMG_6993.jpeg';
import spanish19 from '../../images copy/IMG_6994.jpeg';
import spanish20 from '../../images copy/IMG_6995.jpeg';
import spanish21 from '../../images copy/IMG_6996.jpeg';
import spanish22 from '../../images copy/IMG_6997.jpeg';
import spanish23 from '../../images copy/IMG_6998.jpeg';
import spanish24 from '../../images copy/IMG_6999.jpeg';
import spanish25 from '../../images copy/IMG_7001.jpeg';
import spanish26 from '../../images copy/IMG_7002.jpeg';
import spanish27 from '../../images copy/IMG_7003.jpeg';
import spanish28 from '../../images copy/IMG_7004.jpeg';
import spanish29 from '../../images copy/IMG_7005.jpeg';
import spanish30 from '../../images copy/IMG_7006.jpeg';
import spanish31 from '../../images copy/IMG_7007.jpeg';
import spanish32 from '../../images copy/IMG_7008.jpeg';
import spanish33 from '../../images copy/IMG_7009.jpeg';
import spanish34 from '../../images copy/IMG_7010.jpeg';
import spanish35 from '../../images copy/IMG_7011.jpeg';
import spanish36 from '../../images copy/IMG_7012.jpeg';
import fenbenn from '../../images copy/Fenbendazole.png';
import Collapsible from 'react-collapsible';
import starvecancer from '../../images copy/starvecancer.webp';
import IVERMECTINCANCER from '../../images copy/IVERMECTINCANCER.jpeg';
import fenben from '../../images copy/IMG_6431.jpeg';
import fenben2 from '../../images copy/IMG_6433.jpeg';
import fenben3 from '../../images copy/IMG_6434.jpeg';
import fenben4 from '../../images copy/IMG_6435.jpeg';
import fenben5 from '../../images copy/IMG_6436.jpeg';
import fenben6 from '../../images copy/IMG_6437.jpeg';
import fenben7 from '../../images copy/IMG_6438.jpeg';
import fenben8 from '../../images copy/IMG_6439.jpeg';
import fenben9 from '../../images copy/themerlingroupworld.com.png';
import fenben10 from '../../images copy/IMG_6441.jpeg';
import fenben11 from '../../images copy/IMG_6442.jpeg';
import fenben12 from '../../images copy/IMG_6443.jpeg';
import fenben13 from '../../images copy/IMG_6445.jpeg';
import ivermectin14 from '../../images copy/IMG_6444.jpeg';
import ivermectin15 from '../../images copy/IMG_6446.jpeg';
import ivermectin16 from '../../images copy/IMG_6447.jpeg';
import ivermectin17 from '../../images copy/IMG_6448.jpeg';

import hoxsey18 from '../../images copy/IMG_6449.jpeg';

import hoxsey19 from '../../images copy/IMG_6450.jpeg';

import hoxsey20 from '../../images copy/IMG_6451.jpeg';

import hoxsey21 from '../../images copy/IMG_6452.jpeg';

import hoxsey22 from '../../images copy/IMG_6453.jpeg';

import hoxsey23 from '../../images copy/IMG_6454.jpeg';

import hoxsey24 from '../../images copy/IMG_6455.jpeg';

import hoxsey25 from '../../images copy/IMG_6456.png';
import hoxsey26 from '../../images copy/IMG_6457.jpeg';

import hoxsey27 from '../../images copy/IMG_6458.jpeg';

import hoxsey28 from '../../images copy/IMG_6459.jpeg';

import hoxsey29 from '../../images copy/IMG_6460.jpeg';

import hoxsey30 from '../../images copy/IMG_6461.jpeg';

import hoxsey31 from '../../images copy/IMG_6462.jpeg';

import hoxsey32 from '../../images copy/IMG_6462.jpeg';

import hoxsey33 from '../../images copy/IMG_6463.jpeg';

import hoxsey34 from '../../images copy/IMG_6464.jpeg';

import hoxsey35 from '../../images copy/IMG_6465.jpeg';

import hoxsey36 from '../../images copy/IMG_6466.jpeg';

import hoxsey37 from '../../images copy/IMG_6467.jpeg';

import hoxsey38 from '../../images copy/IMG_6468.jpeg';

import hoxsey39 from '../../images copy/IMG_6469.jpeg';

import hoxsey40 from '../../images copy/IMG_6470.jpeg';

import hoxsey41 from '../../images copy/IMG_6471.jpeg';

import hoxsey42 from '../../images copy/IMG_6472.jpeg'; //

import "../../App.css";
const Hoxsey = ({t}) => {
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
        Casestudy of Harry Hoxsey Cancer Treatment and its Benefits:
        https://themerlingroupworld.com/static/media/IMG_6431.acf7f40f702010cd5e28.jpeg
        https://themerlingroupworld.com/static/media/IMG_6433.44e128119a9d201a8d62.jpeg
        https://themerlingroupworld.com/static/media/IMG_6434.a4984aa8f6d6a8f88e66.jpeg
        https://themerlingroupworld.com/static/media/IMG_6435.39b006434c7bf0ad3ad8.jpeg
        https://themerlingroupworld.com/static/media/IMG_6436.d9af10853f9966f2c022.jpeg
        https://themerlingroupworld.com/static/media/IMG_6437.7fab1fd4f966d8f8f14f.jpeg
        https://themerlingroupworld.com/static/media/IMG_6439.658f58eb408fb6ecbc46.jpeg
        https://themerlingroupworld.com/static/media/IMG_6438.8ff78573d53d5e64043a.jpeg
        https://themerlingroupworld.com/static/media/themerlingroupworld.com.b34679884b73873fe783.png
        https://themerlingroupworld.com/static/media/IMG_6441.900adbf584a23d702d27.jpeg
        https://themerlingroupworld.com/static/media/IMG_6442.025a8668b11f6cc3b86c.jpeg
        https://themerlingroupworld.com/static/media/IMG_6443.189eed483edf5675f8c3.jpeg
        https://themerlingroupworld.com/static/media/IMG_6445.24df8b8482d9777ab0ab.jpeg
        https://themerlingroupworld.com/static/media/IMG_6444.fd3a111237b7b5b380fd.jpeg
        https://themerlingroupworld.com/static/media/IMG_6446.0e083c8d3ef73058c91a.jpeg
        https://themerlingroupworld.com/static/media/IMG_6447.b75983872bdad727a573.jpeg
        https://themerlingroupworld.com/static/media/IMG_6448.36a1acb563248d31a3f8.jpeg
        https://themerlingroupworld.com/static/media/IMG_6449.e7c59cbbfb54159482ba.jpeg
        https://themerlingroupworld.com/static/media/IMG_6451.debbbb791f0a3d72a286.jpeg
        https://themerlingroupworld.com/static/media/IMG_6452.1966f0fe8822627be161.jpeg
        https://themerlingroupworld.com/static/media/IMG_6453.9466e13a85ae149728b0.jpeg
        https://themerlingroupworld.com/static/media/IMG_6454.a18798c2c5de05c6818c.jpeg
        https://themerlingroupworld.com/static/media/IMG_6455.aea2a0e700879bf05eea.jpeg
        https://themerlingroupworld.com/static/media/IMG_6456.c52ce87ca7a90c0718ee.png
        https://themerlingroupworld.com/static/media/IMG_6457.32aa8604b63598acea37.jpeg
        https://themerlingroupworld.com/static/media/IMG_6458.147dd6f70477160d1dd9.jpeg
        https://themerlingroupworld.com/static/media/IMG_6459.79b45981292c1ec33cc7.jpeg
        https://themerlingroupworld.com/static/media/IMG_6460.21414926c18726efc039.jpeg
        https://themerlingroupworld.com/static/media/IMG_6460.21414926c18726efc039.jpeg
        https://themerlingroupworld.com/static/media/IMG_6461.26bea2f33cb6bf393c87.jpeg
        https://themerlingroupworld.com/static/media/IMG_6462.a85b0eaba4a7080b5138.jpeg
        https://themerlingroupworld.com/static/media/IMG_6462.a85b0eaba4a7080b5138.jpeg
        https://themerlingroupworld.com/static/media/IMG_6463.b088b404ebbbca723fdb.jpeg
        https://themerlingroupworld.com/static/media/IMG_6464.7a08c34ed05c0c271005.jpeg
        https://themerlingroupworld.com/static/media/IMG_6465.98abe499b886303df6f1.jpeg
        https://themerlingroupworld.com/static/media/IMG_6466.75fcaae11b142a1454c8.jpeg
        https://themerlingroupworld.com/static/media/IMG_6467.2691d55150e4bf3b3246.jpeg
        https://themerlingroupworld.com/static/media/IMG_6468.f50067714190d31c21ff.jpeg
        https://themerlingroupworld.com/static/media/IMG_6469.682163398ebfc916fb25.jpeg
        https://themerlingroupworld.com/static/media/IMG_6470.663b6f7b7f6ee10855f6.jpeg
        https://themerlingroupworld.com/static/media/IMG_6471.cc9eaacf3cd924333ff2.jpeg

  `;
          const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "cancer"]
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
        <title>{t("You Don’t Have to Die")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Documenting the efficacy of Cancer treatments. You Don’t Have to Die by Harry Hoxsey outlines history and proof of his cancer treatment and its efficacy.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}>{t("Harry Hoxsey: You Don’t Have to Die")}
      </h1>
      <div className='container'>
<iframe 
  className="rumble" 
  width="100%" 
  height="400px" 
  src="https://drive.google.com/file/d/1JsO6uRAF1QfqSH1mZweBb29IEeyLeyTG/preview" 
  frameBorder="0" 
  allowFullScreen 
  title="You Don’t Have to Die Video" 
/>
        </div>
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
                <img className='gridimag' src={hoxsey18} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey19} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey20} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey21} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey22} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey23} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey24} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey25} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey26} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey27} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey28} alt="pic" />
            </p>
     <p>
                <img className='gridimag' src={hoxsey29} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={hoxsey29} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey30} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey31} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey32} alt="pic" />
            </p>

            <p>
                <img className='gridimag' src={hoxsey33} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey34} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey35} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey36} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey37} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey38} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey39} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={hoxsey40} alt="pic" />
            </p>

  <p>
                <img className='gridimag' src={hoxsey41} alt="pic" />
            </p>
              <p>
                <img className='gridimag' src={hoxsey42} alt="pic" />
            </p>
           <p>
            <a href="https://www.dropbox.com/scl/fi/lips9wksb1voy7wwcvi01/YouDontHaveToDie_HarryHoxsey.pdf?rlkey=95a8mmfufb4vfei6os3249aq5&st=0o8e265b&dl=0">You Don’t Have to Die Full Book</a>   
           </p>
<p>
  <a href="https://youtu.be/0TGjm7wIyUk?si=bw0UwHeh2IPGJxGN">Krebiozen Full Movie</a>
</p>
          </div>
      </div>
        <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Hoxsey Tratamiento en Español</th>}>
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

 <p>
                <img className='gridimag' src={spanish18} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish19} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish20} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish21} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish22} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish23} alt="pic" />
            </p>

 <p>
                <img className='gridimag' src={spanish24} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish25} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish26} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish27} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish28} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish29} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish30} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish31} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish32} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish33} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish34} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish35} alt="pic" />
            </p>

<p>
                <img className='gridimag' src={spanish36} alt="pic" />
            </p>

</div>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Hoxsey en français</th>}>
          <Hoxseyfr />
          </Collapsible>
          </tbody>
        </table>
      </div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Hoxsey-kankerbehandeling in het Nederlands</th>}>
          <Hoxseydutch />
          </Collapsible>
          </tbody>
        </table>
      </div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">हॉक्ससी कैंसर उपचार हिंदी में</th>}>
          <Hoxseyhindi />
          </Collapsible>
          </tbody>
        </table>
      </div>
       <div>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-trigger">Cancer Cures</th>}>
               <a href="/fenbendazole"> <img src={fenbenn} alt='' /> </a>
               <a href="/ivermectin"> <img src={IVERMECTINCANCER} alt="img" /> </a>
               <a href="https://www.howtostarvecancer.com/"> <img src={starvecancer} alt="img" style={{ width: '200px', height: 'auto' }} /> </a>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <Footer />
    </>
  );
};

export default Hoxsey; // Default export
