import React from 'react';
import {useEffect, useCallback} from 'react';
import caseA from '../images copy/caseA.png';
import caseB from '../images copy/caseB.png';
import caseC from '../images copy/caseC.png';
import caseD from '../images copy/caseD.png';
import caseE from '../images copy/caseE.png';
import caseF from '../images copy/caseF.png';
import caseH from '../images copy/caseH.png';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import caseG from '../images copy/caseG.png';
import "../App.css";
const Hypnostudies = ({ t }) => {
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
            const content = [
              "Hypnotherapy Casestudy:",
              "https://themerlingroupworld.com/static/media/caseA.2dc17c4d662e97cb71da.png",
              "https://themerlingroupworld.com/static/media/caseB.10618e5d4dce7e1b7664.png",
              "https://themerlingroupworld.com/static/media/caseC.69095241c42714d4b3d6.png",
              "https://themerlingroupworld.com/static/media/caseD.f5b6c555243c3fe13dc4.png",
              "https://themerlingroupworld.com/static/media/caseE.908b80c496726bcb1b5d.png",
              "https://themerlingroupworld.com/static/media/caseF.8062bc635529f3fa2690.png",
              "https://themerlingroupworld.com/static/media/caseG.a00dc6c84a83bb73da47.png",
              "https://themerlingroupworld.com/static/media/caseH.8e9d67ebe296858dc603.png"
            ].join("\n");
            const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "hypnotherapy"],
              ["t", "bitcoin"]
            ],
      content,
      pubkey,
    };
    
    const signedEvent = finalizeEvent(event, sk);
    const pool = new SimplePool();
    const relays = [
      'wss://relay.damus.io',
      'wss://nos.lol',
      'wss://relay.snort.social',
      'wss://nostr.wine',
      'wss://eden.nostr.land'
    ];
        
    await Promise.all(
      relays.map(async (relay) => {
        try {
          const r = await pool.ensureRelay(relay);
          const ok = await r.publish(signedEvent);
          if (ok) {
            console.log(`✅ Published to ${relay}`);
          } else {
            console.warn(`⚠️ Relay ${relay} rejected the event`);
          }
        } catch (err) {
          console.error(`❌ Failed to publish to ${relay}:`, err);
        }
      })
    );
    
    console.log('🎉 Published to Nostr!');
    pool.close(relays);          } catch (error) {
            console.error('Error publishing to Nostr:', error);
          }
        }, []);
        useEffect (() => {
          publishToNostr();
        }, [publishToNostr]);

  const images = [
    caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hypnostudies;


  