import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7222.jpeg';
import spanish2 from '../../images copy/IMG_7223.jpeg';
import spanish3 from '../../images copy/IMG_7224.jpeg';
import spanish4 from '../../images copy/IMG_7225.jpeg';
import spanish5 from '../../images copy/IMG_7226.jpeg';
import spanish6 from '../../images copy/IMG_7227.jpeg';
import spanish7 from '../../images copy/IMG_7228.jpeg';
import spanish8 from '../../images copy/IMG_7229.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish9 from '../../images copy/IMG_7230.jpeg';
import spanish10 from '../../images copy/IMG_7231.jpeg';
import spanish11 from '../../images copy/IMG_7232.jpeg';
import spanish12 from '../../images copy/IMG_7233.jpeg';
import spanish13 from '../../images copy/IMG_7234.jpeg';
import spanish14 from '../../images copy/IMG_7235.jpeg';
import spanish15 from '../../images copy/IMG_7236.jpeg';
import spanish16 from '../../images copy/IMG_7237.jpeg';
import spanish17 from '../../images copy/IMG_7238.jpeg';
import spanish18 from '../../images copy/IMG_7239.jpeg';
import spanish19 from '../../images copy/IMG_7240.jpeg';
import spanish20 from '../../images copy/IMG_7241.jpeg';
import "../../App.css";
const Hoxseyhindi = ({ t }) => {
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
            हैरी होक्ससी कैंसर उपचार और इसके लाभों का केस अध्ययन (फ्रेंच):
            https://themerlingroupworld.com/static/media/IMG_7222.19b24fff9b74752d3e67.jpeg
            https://themerlingroupworld.com/static/media/IMG_7223.70c3bae4533da4bd37ad.jpeg
            https://themerlingroupworld.com/static/media/IMG_7224.fe8d0c36ca0e02f1d1bb.jpeg
            https://themerlingroupworld.com/static/media/IMG_7225.5230f5eb5dfdf25910de.jpeg
            https://themerlingroupworld.com/static/media/IMG_7226.a002c3312cdfe90aab5b.jpeg
            https://themerlingroupworld.com/static/media/IMG_7227.2d3aacfeccc6f894386a.jpeg
            https://themerlingroupworld.com/static/media/IMG_7228.b4fda3534e1c50bb88da.jpeg
            https://themerlingroupworld.com/static/media/IMG_7229.559ed5a7d5bcaabf5905.jpeg
            https://themerlingroupworld.com/static/media/IMG_7230.f806a5454d05d481e4f1.jpeg
            https://themerlingroupworld.com/static/media/IMG_7231.72e8c38ad02ec7b322cc.jpeg
            https://themerlingroupworld.com/static/media/IMG_7232.1d399c0cacea06d74470.jpeg
            https://themerlingroupworld.com/static/media/IMG_7233.98794bc3e98217413fec.jpeg
            https://themerlingroupworld.com/static/media/IMG_7234.3d2c27b6515411a248e0.jpeg
            https://themerlingroupworld.com/static/media/IMG_7235.eeef04bb00740427c52c.jpeg
            https://themerlingroupworld.com/static/media/IMG_7236.ae20ce50b6ae6a933861.jpeg
            https://themerlingroupworld.com/static/media/IMG_7237.09e69b7b4bd3e983e3a8.jpeg
            https://themerlingroupworld.com/static/media/IMG_7238.7a1ff018169a9d5afb07.jpeg
            https://themerlingroupworld.com/static/media/IMG_7239.847ca718d467120cfe8f.jpeg
            https://themerlingroupworld.com/static/media/IMG_7240.c192b112459e69c66629.jpeg
            https://themerlingroupworld.com/static/media/IMG_7241.51ce822cc88cb2341371.jpeg
    `;
            const event = {
              kind: 1,
              created_at: Math.floor(Date.now() / 1000),
              tags: [
                ["t", "health"],
                ["t", "cancer"],
                ["t", "hindi"],

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
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15,spanish16, spanish17, spanish18, spanish19, spanish20
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseyhindi;


  