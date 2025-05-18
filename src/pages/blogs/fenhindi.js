import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7105.jpeg';
import spanish2 from '../../images copy/IMG_7106.jpeg';
import spanish3 from '../../images copy/IMG_7107.jpeg';
import spanish4 from '../../images copy/IMG_7108.jpeg';
import spanish5 from '../../images copy/IMG_7109.jpeg';
import spanish6 from '../../images copy/IMG_7110.jpeg';
import spanish7 from '../../images copy/IMG_7111.jpeg';
import spanish8 from '../../images copy/IMG_7112.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish9 from '../../images copy/IMG_7113.jpeg';
import spanish10 from '../../images copy/IMG_7114.jpeg';
import spanish11 from '../../images copy/IMG_7115.jpeg';
import spanish12 from '../../images copy/IMG_7116.jpeg';
import spanish13 from '../../images copy/IMG_7117.jpeg';
import "../../App.css";
const Fenhindi= ({ t }) => {
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
         फेनबेंडाजोल केस स्टडीज:
         https://themerlingroupworld.com/static/media/IMG_7105.48d8399faeb643ae3dfc.jpeg
         https://themerlingroupworld.com/static/media/IMG_7106.0721c1d5dbf389471dd1.jpeg
         https://themerlingroupworld.com/static/media/IMG_7107.1332f6831f0d560295b1.jpeg
         https://themerlingroupworld.com/static/media/IMG_7108.12fab13663da2283b0b6.jpeg
         https://themerlingroupworld.com/static/media/IMG_7109.2a020741b13983098fe5.jpeg
         https://themerlingroupworld.com/static/media/IMG_7110.97b491688bbabb01a3e6.jpeg
         https://themerlingroupworld.com/static/media/IMG_7111.2b34ddbbe64b3f8ccd5c.jpeg
         https://themerlingroupworld.com/static/media/IMG_7112.f822e6e3a86e1dce250b.jpeg
         https://themerlingroupworld.com/static/media/IMG_7113.dc7edd646cb52f2451a3.jpeg
         https://themerlingroupworld.com/static/media/IMG_7114.a34a25c71fe388b49da9.jpeg
         https://themerlingroupworld.com/static/media/IMG_7116.5b74977122a7bc72a5b0.jpeg
         https://themerlingroupworld.com/static/media/IMG_7117.fbe6db17a74c0a3f8f1a.jpeg
    `;
            const event = {
              kind: 1,
              created_at: Math.floor(Date.now() / 1000),
              tags: [
                ["t", "health"],
                ["t", "hindi"],
                ["t", "cancer"],
                ["t", "fenbendazole"]
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
    spanish9, spanish10, spanish11, spanish12, spanish13
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Fenhindi;