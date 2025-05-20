import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
import obese from '../images copy/obese.png';
import labs from '../images copy/8.jpg';
import brain from '../images copy/9.jpg';
import './Info.css';
//import {useEffect, useCallback} from 'react';
//import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
//import { nip19 } from 'nostr-tools';
import drSebiES from '../images copy/IMG_9273.jpeg';
import NUTES from '../images copy/IMG_9306.jpeg';
import NUTFR from '../images copy/IMG_9307.jpeg';
import NUTNL from '../images copy/IMG_9308.jpeg';
import NUTHindi from '../images copy/IMG_9309.jpeg';
import case1 from '../images copy/nutritioncase1.png';
import case2 from '../images copy/nutritioncase2.png';
import case3 from '../images copy/nutritioncase3.png';
import case4 from '../images copy/nutritioncase4.png';
import case5 from '../images copy/nutritioncase5.png';
import case6 from '../images copy/nutritioncase6.png';
import case7 from '../images copy/nutritioncase7.png';
import case8 from '../images copy/nutritioncase8.png';
import case9 from '../images copy/nutritioncase9.png';
import case10 from '../images copy/nutritioncase10.png';
import drSebiHindi from '../images copy/IMG_9274.jpeg';
import drSebINT from '../images copy/IMG_9275.jpeg';
import drSebiFrench from '../images copy/IMG_9276.jpeg';
import cogES from '../images copy/IMG_9277.jpeg'; 
import cogFR from '../images copy/IMG_9278.jpeg'; 
import drsebi from '../images copy/drsebi.jpeg';
import { useTranslation } from 'react-i18next';
import cogDutch from '../images copy/IMG_9279.jpeg';
import cogHindi from '../images copy/IMG_9280.jpeg';
const Nutritionpage = () => {
  const { t } = useTranslation("common");
      /* const publishToNostr = useCallback(async () => {
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
Casestudy van Harry Hoxsey's kankerbehandeling en de voordelen ervan (Nederlands):  https://themerlingroupworld.com/static/media/IMG_7203.d4aa0b2132ac45dd6a9a.jpeg
  https://themerlingroupworld.com/static/media/IMG_7204.96e2c9b3d128857226d2.jpeg
  https://themerlingroupworld.com/static/media/IMG_7205.71b2b91bff05ba9595b0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7206.05dd696283037d7b6a11.jpeg
  https://themerlingroupworld.com/static/media/IMG_7207.49811d11985cb1c261a6.jpeg
  https://themerlingroupworld.com/static/media/IMG_7208.ec5234835316b82609e8.jpeg
  https://themerlingroupworld.com/static/media/IMG_7209.6d77b7e01a3cb4d5b4e2.jpeg
  https://themerlingroupworld.com/static/media/IMG_7210.c5db31af7d5a60c69ef7.jpeg
  https://themerlingroupworld.com/static/media/IMG_7211.6b033b6c91bb70c15ec0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7213.0e29671d096d26c976a5.jpeg
  https://themerlingroupworld.com/static/media/IMG_7214.d25b944770b07a151363.jpeg
  https://themerlingroupworld.com/static/media/IMG_7215.b8f4300b1c7548851d09.jpeg
  https://themerlingroupworld.com/static/media/IMG_7216.caa724f4a8cc00cbf1c9.jpeg
  https://themerlingroupworld.com/static/media/IMG_7217.3b90e85e69e6105e21e0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7220.8e4d1e606c38b57bf9aa.jpeg
  https://themerlingroupworld.com/static/media/IMG_7221.43b2c3ed88710bb82d60.jpeg
    `;
            const event = {
              kind: 1,
              created_at: Math.floor(Date.now() / 1000),
              tags: [
                ["t", "health"],
                ["t", "dutch"],
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
  */
  return (
    <div className='container'>
      <h1 className="title">{t('Nutrition')}</h1>
      <iframe width="100%" height="650px" src="https://www.youtube.com/embed/0k7Nm4Z8Z2Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Obesity Facts')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={obese} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Dr. Sebi Food List')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={drsebi} alt='' />
                <img className='gridimage' src={drSebiFrench} alt='' />
                <img className='gridimage' src={drSebINT} alt='' />
                <img className='gridimage' src={drSebiHindi} alt='' />
                <img className='gridimage' src={drSebiES} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Case Studies')}</th>}>
              <tr>
                <img alt='' />
                <img className='gridimage' src={case1} alt='' />
                <img className='gridimage' src={case2} alt='' />
                <img className='gridimage' src={case3} alt='' />
                <img className='gridimage' src={case4} alt='' />
                <img className='gridimage' src={case5} alt='' />
                <img className='gridimage' src={case6} alt='' />
                <img className='gridimage' src={case7} alt='' />
                <img className='gridimage' src={case8} alt='' />
                <img className='gridimage' src={case9} alt='' />
                <img className='gridimage' src={case10} alt='' />
                <img alt='' />
              </tr>
            </Collapsible>
                <Collapsible trigger={<th className="collapsible-trigger">{t('Functional Nutrition Resources')}</th>}>
              <div className="collapsible-content">
                <img className='griddimage' src={labs} alt="Functional Nutrition Resources"/>
                 <img className='griddimage' src={brain} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={cogHindi} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={cogDutch} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={cogFR} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={cogES} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={NUTHindi} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={NUTNL} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={NUTFR} alt="Functional Nutrition Resources"/>
                <img className='griddimage' src={NUTES} alt="Functional Nutrition Resources"/>
    <img alt='' />
              </div>
            </Collapsible>                   
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Nutritionpage;
