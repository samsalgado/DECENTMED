import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7088.jpeg';
import spanish2 from '../../images copy/IMG_7089.jpeg';
import spanish3 from '../../images copy/IMG_7090.jpeg';
import spanish4 from '../../images copy/IMG_7091.jpeg';
import spanish5 from '../../images copy/IMG_7092.jpeg';
import spanish6 from '../../images copy/IMG_7093.jpeg';
import spanish7 from '../../images copy/IMG_7094.jpeg';
import spanish8 from '../../images copy/IMG_7095.jpeg';
import spanish9 from '../../images copy/IMG_7096.jpeg';
import spanish10 from '../../images copy/IMG_7097.jpeg';
import spanish11 from '../../images copy/IMG_7098.jpeg';
import spanish12 from '../../images copy/IMG_7099.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish13 from '../../images copy/IMG_7100.jpeg';
import spanish14 from '../../images copy/IMG_7101.jpeg';
import spanish15 from '../../images copy/IMG_7102.jpeg';
import spanish16 from '../../images copy/IMG_7103.jpeg';
import spanish17 from '../../images copy/IMG_7104.jpeg';
import "../../App.css";
const Ivermectinfrench= ({ t }) => {
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
        Études de cas sur l'ivermectine:
        https://themerlingroupworld.com/static/media/IMG_7088.877c33f28a922e4a7fe3.jpeg
        https://themerlingroupworld.com/static/media/IMG_7089.106002b9c1c0c7a22c33.jpeg
        https://themerlingroupworld.com/static/media/IMG_7090.368adb99fde9a218c2bb.jpeg
        https://themerlingroupworld.com/static/media/IMG_7091.8ebe88c1732e56aeaad6.jpeg
        https://themerlingroupworld.com/static/media/IMG_7092.700a1142b1a77a3014f2.jpeg
        https://themerlingroupworld.com/static/media/IMG_7093.02e2522f2bc7901bfd48.jpeg
        https://themerlingroupworld.com/static/media/IMG_7094.47645847ac0ba0cb2299.jpeg
        https://themerlingroupworld.com/static/media/IMG_7095.6f0a37d9010f35b2e252.jpeg
        https://themerlingroupworld.com/static/media/IMG_7096.82df2988ea5b99609b40.jpeg
        https://themerlingroupworld.com/static/media/IMG_7097.8f68455c0c94959c1828.jpeg
        https://themerlingroupworld.com/static/media/IMG_7098.db20d1c2f08a65f7b1a4.jpeg
        https://themerlingroupworld.com/static/media/IMG_7099.f52ad8a68e64b82c02c7.jpeg
        https://themerlingroupworld.com/static/media/IMG_7100.b6d0e2cfa825f461552e.jpeg
        https://themerlingroupworld.com/static/media/IMG_7101.6decc5aabe73d78264ba.jpeg
        https://themerlingroupworld.com/static/media/IMG_7102.ab4f502471be91d5c0d6.jpeg
        https://themerlingroupworld.com/static/media/IMG_7103.6c646056dddee8742a76.jpeg
        https://themerlingroupworld.com/static/media/IMG_7104.42266f5ff7b216bbc8f0.jpeg
        
  `;
          const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "french"],
              ["t", "cancer"],
              ["t", "ivermectine"]
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
    

  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15, 
    spanish16, spanish17
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Ivermectinfrench;