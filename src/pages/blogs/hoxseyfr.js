import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7168.jpeg';
import spanish2 from '../../images copy/IMG_7169.jpeg';
import spanish3 from '../../images copy/IMG_7170.jpeg';
import spanish4 from '../../images copy/IMG_7171.jpeg';
import spanish5 from '../../images copy/IMG_7172.jpeg';
import spanish6 from '../../images copy/IMG_7173.jpeg';
import spanish7 from '../../images copy/IMG_7174.jpeg';
import spanish8 from '../../images copy/IMG_7175.jpeg';
import spanish9 from '../../images copy/IMG_7176.jpeg';
import spanish10 from '../../images copy/IMG_7177.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish11 from '../../images copy/IMG_7178.jpeg';
import spanish12 from '../../images copy/IMG_7179.jpeg';
import spanish13 from '../../images copy/IMG_7180.jpeg';
import spanish14 from '../../images copy/IMG_7181.jpeg';
import spanish15 from '../../images copy/IMG_7182.jpeg';
import spanish16 from '../../images copy/IMG_7183.jpeg';
import spanish17 from '../../images copy/IMG_7184.jpeg';

import "../../App.css";
const Hoxseyfr = ({ t }) => {
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
          Étude de cas sur le traitement du cancer de Harry Hoxsey et ses avantages (français) :            https://themerlingroupworld.com/static/media/IMG_7168.af4d553fc3893ec93cf6.jpeg
            https://themerlingroupworld.com/static/media/IMG_7169.67ba248ca110a21886d8.jpeg
            https://themerlingroupworld.com/static/media/IMG_7170.39ff830d0ef446b5c8b0.jpeg
            https://themerlingroupworld.com/static/media/IMG_7171.088bc7d2b8f110bec8a9.jpeg
            https://themerlingroupworld.com/static/media/IMG_7172.41b0a28a4046d7b8e035.jpeg
            https://themerlingroupworld.com/static/media/IMG_7173.a2fb1cd8cb293f726bd9.jpeg
            https://themerlingroupworld.com/static/media/IMG_7174.5075d1873bfdde4a2b17.jpeg
            https://themerlingroupworld.com/static/media/IMG_7175.dd0f055865b9ebcec738.jpeg
            https://themerlingroupworld.com/static/media/IMG_7176.34a28ac5b38881b6f3c5.jpeg
            https://themerlingroupworld.com/static/media/IMG_7177.018df5462e245c41aa96.jpeg
            https://themerlingroupworld.com/static/media/IMG_7178.043529af90362b2fe600.jpeg
            https://themerlingroupworld.com/static/media/IMG_7179.76395ff21888fa8cd80b.jpeg
            https://themerlingroupworld.com/static/media/IMG_7180.84ecd320add92e067bde.jpeg
            https://themerlingroupworld.com/static/media/IMG_7181.db572f2fbb56283bbad3.jpeg
            https://themerlingroupworld.com/static/media/IMG_7182.5bd3192fb9759e7b7a45.jpeg
            https://themerlingroupworld.com/static/media/IMG_7183.b5c6098a6239725e4754.jpeg
            https://themerlingroupworld.com/static/media/IMG_7184.bced8b878885a2e46f3a.jpeg
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
  
  
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15,spanish16, spanish17
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseyfr;


  